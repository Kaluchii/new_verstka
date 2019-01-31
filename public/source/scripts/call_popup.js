$(function () {

  function showAlert (text, title, text_btn, width, callback) {
    callback = (callback ? callback : "");
    title = (title ? title : "Внимание");
    text_btn = (text_btn ? text_btn : "OK");
    width = (width ? width : 400);
    removePopup('inform');
    var html = '<div class="title">' + title + '</div>' +
      '<div class="content">' + text + '</div>' +
      '<div class="btns">' +
      '<a class="enter-btn square krayola" href="javascript:;" onclick="removePopup(\'inform\', \'' + callback + '\');">' + text_btn + '</a>' +
      '</div>';
    showPopup(html, width, 0, "inform", callback);
  }


  function showConfirm (text, title, callback) {
    title = (title ? title : "Внимание");
    removePopup('confirm');
    var html = '<div class="title">' + title + '</div>' +
      '<div class="content">' + text + '</div>' +
      '<div class="btns">' +
      '<a class="enter-btn square krayola" href="javascript:;" onclick="' + (callback ? callback : '') + '">Да</a>' +
      '<a class="enter-btn square krayola" href="javascript:;" onclick="removePopup();">Нет</a>' +
      '</div>';

    showPopup(html, 450, 0, "confirm");
  }


  let popups = [
    {
      id: 'history_popup',
      src: '.js_history_popup',
    },
    {
      'id': 'authorization_popup',
      'src': '.js_authorization_popup',
      // modal: true
    },
  ];

  let requestErrorTemplate = `
    <div class="popup js_test_popup_error">
        <div class="popup__container">
            Произошла ошибка.<br>Попробуйте повторить действия. В случае повторения ошибки пожалуйста свяжитесь с тех.поддержкой.
        </div>
        <div class="popup__close js_close_popup">Закрыть окно</div>
        <div class="popup__close-x js_close_popup"></div>
    </div>`;

  easyPopup.setDefaultConfig({
    animationClass: 'ep-move-from-top',
    removalDelay: 300,
    ajax: {
      headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
      requestErrorTemplate: requestErrorTemplate,
      preloaderRemovalDelay: 300
    }
  });

  easyPopup.addPopups(popups);


  $('.js_open_history_popup').on('click', function (e) {
    e.preventDefault();
    easyPopup.open('history_popup');
  });


  $('.js_open_authorization_popup').on('click', function (e) {
    e.preventDefault();
    easyPopup.open('authorization_popup');
  });


  $('body').on('click', '.js_close_popup', function () {
    easyPopup.close();
  });


});