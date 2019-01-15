;(function ($) {
  "use strict";

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


    this.addPopups = function (popupsList) {
      addPopups(popupsList);
    };


    this.updatePopupSettings = function (id, settings) {
      popupsConfig[id] = $.extend(popupsConfig[id], settings);
    };


    this.removePopup = function (id) { // Может пригодится
      delete popupsConfig[id];
    };


    this.open = function (id) {
      popupStack.push(id);

      showPopup();

      addHash(popupsConfig[id].id);
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

      removeAllFromStack();
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


    function addPopups (popupsList) {
      let item;

      for (let i = 0; i < popupsList.length; i++) {
        item = popupsList[i];

        if (!item.id) {
          throw new Error('"id" property is required');
        }

        popupsConfig[item.id] = $.extend(defaults, item);
      }
    }


    function showPopup () { // Отобразить последний в стеке попап
      let popup = popupStack[popupStack.length-1]; // Попап для отображения
    }


    function hidePopup () {}


    function closePopup () {}


    function removeItemFromStack () {
      popupStack.pop();
    }


    function removeAllFromStack () {
      popupStack = [];
    }


    // Добавить хэш
    function addHash(hash) {
    }


    // Удалить хэш
    // Хэш удаляется только при закрытии попапа и при нажатии кнопки "назад" (удаляется автоматически)
    function removeHash() {
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