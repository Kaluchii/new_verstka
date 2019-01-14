;(function ($) {

  window.easyPopup = function () {
    var _this = this,
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


    this.addPopup = function (settings) {
      if (!settings.id) {
        throw new Error('"id" property is required');
      }

      popupsConfig[settings.id] = $.extend(defaults, settings);
    };


    this.updatePopupSettings = function (id, settings) {
      popupsConfig[id] = $.extend(popupsConfig[id], settings);
    };


    this.removePopup = function (id) { // Может пригодится
      delete popupsConfig[id];
    };


    this.open = function () {
    };


    this.close = function (id) { // Закрыть указанный попап. Либо закрыть последний открытый (Если параметр не передан).
      var len = popupStack.length;

      if (len <= 0) {
        return;
      }

      var closePopupId = id || popupStack[popupStack.length - 1];

      // if (id === undefined) {}

      close(id); // Закрыть
      removeFromStack(id);
    };


    this.closeAll = function () { // Подумать как правильно закрывать сразу все (по сути очищать стэк,
      var len = popupStack.length; //  а анимированно скрывать только последний)

      for (var i = 0; i <= len-1; i++) {
        removeFromStack(i);
      }
    };


    this.hide = function (id) { // Скрыть указанный попап.
    };


    this.show = function (id) { // Отобразить открытый указанный попап.
    };


    this.isOpen = function (id) { // Открыт ли указанный попап. (Необходимо потому что попап может быть открыт но скрыт)
    }; // По сути проверка наличия попапа в стеке.


    this.openId = function () { // Идентификатор отображаемого попапа.
    };


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


// Открыть новый попап в цепочке
// Параметры
// src - контент попапа
  function open() {
  }


// Закрыть последний открытый попап
  function close() {
  }


// Добавить хэш
  function addHash() {
  }


// Удалить хэш
// Хэш удаляется только при закрытии попапа и при нажатии кнопки "назад" (удаляется автоматически)
  function removeHash() {
  }


// Функция обработчик изменения хэша (нажата кнопка назад)
// Будет вызывать функции закрытия попапа и удаления хэша
// function() {...}

  /*$.fn.easyPopup = function (settings) {

    return this;
  };*/

})(jQuery);