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
      id: 'test_popup',
      src: '.js_test_popup',
    },
    {
      'id': 'test_popup2',
      'src': '.js_test_popup2',
      // modal: true
    },
    {
      'id': 'test_popup3',
      'src': '.js_test_popup3'
    },
    {
      'id': 'test_ajax',
      type: 'ajax',
      modal: true,
      ajax: {
        url: '/ajax-test'
      }
    },
    {
      'id': 'test_popup4',
      'hidePrevious': true,
      'src': '<div class="tat">ffffffffffffffffgggggggggggg gggggggggh hhhhhhhhhhhhh</div>'
    },
  ];

  let requestErrorTemplate = `
    <div class="popup js_test_popup_error">
        <div class="popup__container">
            Произошла ошибка.<br>Попробуйте повторить действия. В случае повторения ошибки пожалуйста свяжитесь с тех.поддержкой.
        </div>
        <div class="popup__close">Закрыть окно</div>
        <div class="popup__close-x"></div>
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
    easyPopup.open('test_ajax');
  });

  $('.js_open_history_popup2').on('click', function (e) {
    e.preventDefault();
    easyPopup.open('test_popup2');
  });


});