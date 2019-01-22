// ;(function ($) {
// "use strict";

let easyPopup = (function ($) {
  let _this = this,
    defaults = {
      animationClass: 'ep-move-from-top', // Используется для задания класса анимации
      type: 'inline', // Тип источника контента. Возможные варианты: "inline", "ajax", "from-dom"
      src: '', // Контент для вставки
      id: '', // Идентификатор попапа. Используется в том числе как хэш в адресной строке при открытии.
      hidePrevious: false, // Скрыть предыдущий попап.
      removalDelay: 300, // Отсрочка закрытия. Нужна при добавлении анимации закрытия.
      tLoading: '', // Прелоадер
      // callbacks
      beforeOpen: null,
      open: null, // Полная отрисовка
      afterOverlay: null, // Попап перекрыт новым попапом
      afterHidden: null, // Попап скрыт открывшимся поверх попапом
      beforeClose: null, // Инициация события закрытия
      close: null, // Полное закрытие, DOM-элемент удален
      ajaxContentLoaded: null, // Аякс контент загружен
      ajaxContentAdded: null // Аякс контент вставлен в попап (Может быть реализуется колбэком "open")
    },
    hashBeforeOpening = '',
    popupsConfig = {},
    popupStack = [];

  // Удалить
  this.popupStack = popupStack;
  this.popupsConfig = popupsConfig;
  //


  this.addPopups = function (popupsList) {
    addPopupsList(popupsList);
  };


  this.updatePopupSettings = function (id, settings) {
    if (!id) {
      throw new Error('"ID" property is required');
    }
    if (!popupsConfig[id]) {
      throw new Error('No item found with this "ID"');
    }
    popupsConfig[id] = $.extend(popupsConfig[id], settings);
  };


  this.removePopup = function (id) { // Может пригодится
    delete popupsConfig[id];
  };


  this.open = function (id, options) {
    if (!alreadyOpen(id)) {
      openPopup(id);
    }
  };


  this.close = function () { // Закрыть последний открытый.
    closePopup();
  };


  this.closeAll = function () {
    closeAll();
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

      popupsConfig[item.id] = $.extend({}, defaults, item);
    }
  }


  function openPopup (popupId) {
    let stackLen = popupStack.length;

    if (!stackLen) { // Хэш добавляется только первому попапу в стеке
      hashBeforeOpening = document.location.hash;
      addHash(popupsConfig[popupId].id);
    }

    popupStack.push(popupId);

    createPopupDOM();

    hidePreviousPopup();
  }


  function closePopup (canRemoveHash) {
    if (canRemoveHash === undefined) {
      canRemoveHash = true;
    }

    let stackLen = popupStack.length;

    if (stackLen === 0) {
      return;
    }

    removePopupDOM();

    if (canRemoveHash && stackLen === 1) {
      removeHash();
      hashBeforeOpening = '';
    }

    showPreviousPopup();

    removeItemFromStack();
  }


  function closeAll (canRemoveHash) {
    if (canRemoveHash === undefined) {
      canRemoveHash = true;
    }

    let stackLen = popupStack.length;

    for (let i = 0; i < stackLen; i++) {
      closePopup(canRemoveHash);
    }
  }


  function createPopupDOM () {
    let popupId = popupStack[popupStack.length - 1],
      popupConfig = popupsConfig[popupId],
      $popup,
      $popupSource = popupSource(popupConfig.id);

    $popup =
      $('<div class="easy-popup ' + popupConfig.animationClass + '" id="' + popupId + '">' +
        '<div class="easy-popup__bg"></div>' +
        '<div class="easy-popup__container"></div>' +
        '</div>');

    $popup.find('.easy-popup__bg').on('click', function () {
      closePopup();
    });

    $popup.find('.easy-popup__container').append($popupSource);
    $('body').append($popup);
    blockBodyScroll();
    $popup.addClass('easy-popup--ready');
  }


  function removePopupDOM () {
    let stackLen = popupStack.length,
      closePopupId = popupStack[stackLen - 1],
      $popupPl = $('.ep-pl-' + closePopupId),
      removalDelay = popupsConfig[closePopupId].removalDelay,
      $popup = $('body').find($(popupsConfig[closePopupId].src)),
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
    let popupId = popupStack[popupStack.length - 2],
      $popup = $('#' + popupId);

    if (popupId !== undefined) {
      $popup.addClass('easy-popup--ready');
    }
  }


  function hidePreviousPopup () {
    if (popupStack.length <= 1) {
      return;
    }

    let popupId = popupStack[popupStack.length - 1],
      previousPopupId = popupStack[popupStack.length - 2],
      popupConfig = popupsConfig[popupId],
      $popup = $('#' + previousPopupId);

    if (popupConfig.hidePrevious) {
      $popup.removeClass('easy-popup--ready');
    }
  }


  function removeItemFromStack () {
    popupStack.pop();
  }


  function popupSource (popupId) {
    let source = $(popupsConfig[popupId].src),
      $popupSource;

    if (source.context === document) {
      source.after($('<div class="ep-pl-' + popupId + '"></div>'));
      $popupSource = source.detach();
    } else {
      $popupSource = $(source);
    }

    return $popupSource;
  }


  function alreadyOpen (id) {
    return popupStack.some(function (item) {
      return (id === item);
    });
  }


  function addHash (hash) {
    window.location.hash = hash;
  }


  function removeHash () {
    let previousPageHostname = extractHostname(document.referrer);

    if (document.location.hostname === previousPageHostname) {
      window.history.back();
    } else {
      history.replaceState("", document.title, window.location.pathname + window.location.search);
    }
  }


  $(window).on('hashchange', function () {
    let stackLen = popupStack.length;

    if (stackLen && (hashBeforeOpening === document.location.hash)) {
      closeAll(false);
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


  return _this;
})(jQuery);


///////////////////////////////////


// Проверка хэша на соответствие какому нибудь попапу
// если хэш относится к попапу, то открыть соответствующий попап
function checkHash () {
}


// Показать предупреждение
// обертка над функцией open с предопределенными параметрами
function showAlert () {
}


// Показать уведомление
// обертка над функцией open с предопределенными параметрами
function showNotification () {
}


// Функция обработчик изменения хэша (нажата кнопка назад)
// Будет вызывать функции закрытия попапа и удаления хэша
// function() {...}

/*$.fn.easyPopup = function (settings) {

  return this;
};*/

// })(jQuery);