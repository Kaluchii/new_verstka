const easyPopup = (function ($) {
    let defaults = {
            animationClass: '', // Используется для задания класса анимации
            type: 'inline', // Тип источника контента. Возможные варианты: "inline", "ajax"
            modal: false, // Может модальность вовсе не нужна???????!!!!!!!!!!!!!??!
            ajax: {
                url: '',
                dataToSend: {},
                templateInField: '',
                headers: {},
                requestErrorTemplate: '',
                preloaderRemovalDelay: 0,
                timeout: 10000
            },
            src: '', // Контент для вставки
            id: '', // Идентификатор попапа. Используется в том числе как хэш в адресной строке при открытии.
            hidePrevious: false, // Скрыть предыдущий попап.
            removalDelay: 0, // Отсрочка закрытия. Нужна при добавлении анимации закрытия.
            // callbacks
            // Заместо колбэков попробовать генерировать события на window с уникальными названиями состоящими из id эл-та и названия события
            beforeOpen: function () {},
            open: function () {}, // Полная отрисовка
            afterOverlay: function () {}, // Попап перекрыт новым попапом
            afterHidden: function () {}, // Попап скрыт открывшимся поверх попапом
            beforeClose: function () {}, // Инициация события закрытия
            close: function () {}, // Полное закрытие, DOM-элемент удален
            ajaxContentLoaded: function () {}, // Аякс контент загружен
            ajaxContentAdded: function () {} // Аякс контент вставлен в попап (Может быть реализуется колбэком "open")
        },
        hashBeforeOpening = '',
        staticPopupsConfig = {},
        dynPopupsConfig = {},
        popupStack = [],
        ajax;

    // Удалить
    // this.popupStack = popupStack;
    // this.dynPopupsConfig = dynPopupsConfig;
    // this.staticPopupsConfig = staticPopupsConfig;
    //


    this.setDefaultConfig = function (config) {
        $.extend(true, defaults, config);
    };


    this.addPopups = function (popupsList) {
        addPopupsList(popupsList);
    };


    this.updatePopupSettings = function (id, settings) {
        if (!id) {
            throw new Error('"ID" property is required');
        }
        if (!staticPopupsConfig[id]) {
            throw new Error('No item found with this "ID"');
        }
        staticPopupsConfig[id] = $.extend(true, staticPopupsConfig[id], settings);
    };


    this.removePopup = function (id) { // Может пригодится
        delete staticPopupsConfig[id];
    };


    this.open = function (id, options) {
        if (!isAlreadyOpen(id)) {
            openPopup(id, options);
        }
    };


    this.close = function () { // Закрыть последний открытый.
        closePopup();
    };


    this.closeAll = function () {
        closeAllPopups();
    };


    this.isOpen = function (id) {
        let isOpen;

        isOpen = popupStack.some(function (item) {
            return (id === item);
        });

        return isOpen;
    };


    this.openId = function () { // Идентификатор отображаемого попапа.
        return popupStack[popupStack.length - 1];
    };


    function addPopupsList (popupsList) {
        let item;

        for (let i = 0; i < popupsList.length; i++) {
            item = popupsList[i];

            if (!item.id) {
                throw new Error('"ID" property is required');
            }

            staticPopupsConfig[item.id] = $.extend(true, {}, defaults, item);
        }
    }


    function openPopup (popupId, options) {
        const stackLen = popupStack.length;

        popupStack.push(popupId);

        addToDynConfig(options);

        if (!stackLen) { // Хэш добавляется только первому попапу в стеке
            addHash(dynPopupsConfig[popupId].id);
        }

        createPopupDOM();

        hidePreviousPopup();
    }


    function closePopup (canRemoveHash) {
        if (canRemoveHash === undefined) {
            canRemoveHash = true;
        }

        const stackLen = popupStack.length;

        if (stackLen === 0) {
            return;
        }

        removePopupDOM();

        if (canRemoveHash && stackLen === 1) {
            removeHash();
        }

        showPreviousPopup();

        removeFromDynConfig();

        removeItemFromStack();
    }


    function closeAllPopups (canRemoveHash) {
        if (canRemoveHash === undefined) {
            canRemoveHash = true;
        }

        const stackLen = popupStack.length;

        removePreloader();

        for (let i = 0; i < stackLen; i++) {
            closePopup(canRemoveHash);
        }
    }


    function addToDynConfig (options) {
        if (options === undefined) {
            options = {};
        }

        const stackLen = popupStack.length,
            openPopupId = popupStack[stackLen - 1];

        dynPopupsConfig[openPopupId] = $.extend(true, {}, defaults, staticPopupsConfig[openPopupId], options);
    }


    function removeFromDynConfig () {
        const stackLen = popupStack.length,
            closePopupId = popupStack[stackLen - 1];

        delete dynPopupsConfig[closePopupId];
    }


    function createPopupDOM () {
        const popupId = popupStack[popupStack.length - 1],
            popupConfig = dynPopupsConfig[popupId];
        let $popupFrame;

        $popupFrame =
            $('<div class="easy-popup ' + popupConfig.animationClass + '" id="' + popupId + '">' +
                '<div class="easy-popup__bg"></div>' +
                '<div class="easy-popup__container"><div class="easy-popup__content"></div></div>' +
                '</div>');

        if (popupConfig.type === 'ajax') {
            getPopupFromAjax($popupFrame, popupConfig);
        } else {
            const $popupSource = popupSource(popupConfig.id);
            insertPopup($popupFrame, $popupSource);
            addCloseEvent($popupFrame, popupConfig);
        }
    }


    function insertPopup ($popupFrame, $popupSource) {
        $popupFrame.find('.easy-popup__content').append($popupSource);
        $('body').append($popupFrame);
        blockBodyScroll();
        $popupFrame.addClass('easy-popup--ready');
    }


    function addCloseEvent ($popup, popupConfig, ignoreModal) {
        if (!popupConfig.modal || ignoreModal) {
            $popup.on('click', function (e) {
                const $contentBlock = $popup.find('.easy-popup__content'),
                    $targetEl = $popup.find('.' + e.target.className);
                if ($contentBlock.is($targetEl)) {
                    closePopup();
                }
            });
        }
    }


    function removePopupDOM () {
        const stackLen = popupStack.length,
            closePopupId = popupStack[stackLen - 1],
            $popupPl = $('.ep-pl-' + closePopupId),
            removalDelay = dynPopupsConfig[closePopupId].removalDelay,
            $popup = $('body').find($(dynPopupsConfig[closePopupId].src)),
            $easyPopup = $('#' + closePopupId);

        $easyPopup.removeClass('easy-popup--ready');
        setTimeout(function () {
            if ($popupPl.length) {
                $popupPl.after($popup);
                $popupPl.remove();
                $easyPopup.remove();
            } else {
                $easyPopup.remove();
            }
            if (stackLen === 1) {
                unblockBodyScroll();
            }
        }, removalDelay);
    }


    function showPreviousPopup () {
        const popupId = popupStack[popupStack.length - 2],
            $popup = $('#' + popupId);

        if (popupId !== undefined) {
            $popup.addClass('easy-popup--ready');
        }
    }


    function hidePreviousPopup () {
        if (popupStack.length <= 1) {
            return;
        }

        const popupId = popupStack[popupStack.length - 1],
            previousPopupId = popupStack[popupStack.length - 2],
            popupConfig = dynPopupsConfig[popupId],
            $popup = $('#' + previousPopupId);

        if (popupConfig.hidePrevious) {
            $popup.removeClass('easy-popup--ready');
        }
    }


    function removeItemFromStack () {
        popupStack.pop();
    }


    function popupSource (popupId) {
        const source = $(dynPopupsConfig[popupId].src);
        let $popupSource;

        if (source.context === document) {
            source.after($(`<div class="ep-pl-${popupId}"></div>`));
            $popupSource = source.detach();
        } else {
            $popupSource = $(source);
        }

        return $popupSource;
    }


    function getPopupFromAjax ($popupFrame, popupConfig) {
        addPreloader();

        ajax = $.ajax({
            type: "GET",
            url: popupConfig.ajax.url,
            data: popupConfig.ajax.dataToSend,
            dataType: "json",
            headers: popupConfig.ajax.headers,
            timeout: popupConfig.ajax.timeout
        })
            .done(function (data) {
                if (!isAlreadyOpen(popupConfig.id)) {
                    return;
                }

                let $popupSource;

                if (popupConfig.ajax.templateInField) {
                    $popupSource = $(popupConfig.ajax.templateInField);
                } else {
                    $popupSource = $(data.responseText);
                }

                insertPopup($popupFrame, $popupSource);
                addCloseEvent($popupFrame, popupConfig);
            })
            .fail(function (data, textStatus) {
                if (textStatus === 'abort') {
                    return;
                }

                let $popupSource;

                $popupSource = popupConfig.ajax.requestErrorTemplate;
                insertPopup($popupFrame, $popupSource);
                addCloseEvent($popupFrame, popupConfig, true);
            })
            .always(function () {
                removePreloader();
            });
    }


    function addPreloader () {
        const $preloader = $('<div class="ep-preloader"></div>');

        $('body').append($preloader);
        setTimeout(function () {
            $preloader.addClass('ep-preloader--show');
        })
    }


    function removePreloader () {
        const $preloader = $('.ep-preloader');

        $preloader.removeClass('ep-preloader--show');
        setTimeout(function () {
            $preloader.remove();
        }, defaults.ajax.preloaderRemovalDelay);
    }


    function isAlreadyOpen (id) {
        return popupStack.some(function (item) {
            return (id === item);
        });
    }


    function addHash (hash) {
        if (document.location.hash === '#' + hash) {
            const previousPageHostname = extractHostname(document.referrer);

            if (document.location.hostname === previousPageHostname) {
                history.back();
            } else {
                history.replaceState("", document.title, document.location.pathname + document.location.search);
            }
        }
        setTimeout(function () {
            hashBeforeOpening = document.location.hash;
            document.location.hash = hash;
        })
    }


    function removeHash () {
        history.back();
    }


    $(window).on('hashchange', function () {
        const stackLen = popupStack.length;

        if (stackLen && (hashBeforeOpening === document.location.hash)) {
            closeAllPopups(false);
            if (ajax && ajax.state() === 'pending') {
                ajax.abort();
            }
        }
    });


    function extractHostname (url) {
        let hostname;
        //find & remove protocol (http, ftp, etc.) and get hostname

        if (url.indexOf("//") > -1) {
            hostname = url.split('/')[2];
        }
        else {
            hostname = url.split('/')[0];
        }

        //find & remove port number
        hostname = hostname.split(':')[0];
        //find & remove "?"
        hostname = hostname.split('?')[0];

        return hostname;
    }


    function blockBodyScroll () {
        unblockBodyScroll();

        $('body').addClass(function () {
            if (hasVerticalScroll()) {
                $(this).css('padding-right', (window.screen.width - $(window).width()) + 'px');
            }

            return 'ep-stop-body-scroll';
        });
    }


    function unblockBodyScroll () {
        $('body').removeClass('ep-stop-body-scroll').css('padding-right', '');
    }


    function hasVerticalScroll () {
        return (document.body.clientHeight - document.documentElement.clientHeight > 0);
    }


    return this;
})(jQuery);