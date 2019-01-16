;(function ($) {
  // "use strict";

  window.easyPopup = function () {
    let _this = this,
        defaults = {
          animationClass: '', // Используется для задания класса анимации
          type: 'inline', // Тип источника контента. Возможные варианты: "inline", "ajax"
          id: '', // Идентификатор попапа. Используется в том числе как хэш в адресной строке при открытии.
          openByHash: false, // Открывать попап при наличиии хэша в момент загрузки страницы.
          closePrevious: false, // Закрыть предыдущий попап.
          hidePrevious: false, // Скрыть предыдущий попап.
          removalDelay: 0, // Отсрочка закрытия. Нужна при добавлении анимации закрытия.
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
        popupsConfig = {},
        popupStack = [];


     // COMPLETE
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


    this.open = function (id) {
      if (!popupStack.length) { // Хэш добавляется только первому попапу в стеке
        addHash(popupsConfig[id].id);
      }

      popupStack.push(id);

      showPopup();
    };


    this.close = function () { // Закрыть последний открытый.
      let len = popupStack.length;

      if (len === 0) {
        return;
      }

      closePopup(); // Закрыть

      if (len === 1) {
        removeHash();
      }

      removeItemFromStack();
    };


    this.closeAll = function () { // Подумать как правильно закрывать сразу все (по сути очищать стэк,
      let len = popupStack.length; //  а анимированно скрывать только открытый)

      removeHash();

      closeAll();
    };


    this.isOpen = function (id) { // Открыт ли указанный попап. (Необходимо потому что попап может быть открыт но скрыт)
      let isOpen;

      isOpen = popupStack.some(function (item) {
        return (id === item);
      });

      return isOpen;
    }; // По сути проверка наличия попапа в стеке.


    this.openId = function () { // Идентификатор отображаемого попапа.
      return popupStack[popupStack.length-1].id;
    };


    // COMPLETE
    function addPopupsList (popupsList) {
      let item;

      for (let i = 0; i < popupsList.length; i++) {
        item = popupsList[i];

        if (!item.id) {
          throw new Error('"ID" property is required');
        }

        popupsConfig[item.id] = $.extend(defaults, item);
      }
    }


    function showPopup () { // Отобразить последний в стеке попап
      let popup = popupStack[popupStack.length-1]; // Попап для отображения
    }


    function hidePopup () {}


    function closePopup () {}


    function closeAll () {
      removeAllFromStack();
    }


    function removeItemFromStack () {
      popupStack.pop();
    }


    function removeAllFromStack () {
      popupStack = [];
    }


    // Добавить хэш
    function addHash(hash) {
      window.location.hash = hash;
    }


    // Удалить хэш
    // Функция вызывается только при закрытии попапа на крестик, а при нажатии кнопку "назад" удаляется автоматически
    function removeHash() {
      let previousPageHostname = extractHostname(document.referrer);

      if (document.location.hostname === previousPageHostname) {
        window.history.back();
      } else {
        history.replaceState("", document.title, window.location.pathname + window.location.search);
      }
    }


    $(window).on('hashchange', function () {
      alert('change');
      closeAll();
      // Надо закрыть попапы. Надо
    });


    function extractHostname(url) {
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


    return _this;
  }();


  ///////////////////////////////////


// Проверка хэша на соответствие какому нибудь попапу
// если хэш относится к попапу, то открыть соответствующий попап
  function checkHash() {
  }


// Показать предупреждение
// обертка над функцией open с предопределенными параметрами
  function showAlert() {
  }


// Показать уведомление
// обертка над функцией open с предопределенными параметрами
  function showNotification() {
  }


// Функция обработчик изменения хэша (нажата кнопка назад)
// Будет вызывать функции закрытия попапа и удаления хэша
// function() {...}

  /*$.fn.easyPopup = function (settings) {

    return this;
  };*/

})(jQuery);