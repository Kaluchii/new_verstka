$(function () {
  /*
  * При открытии попапа должен меняться хэш в адресной строке.
  * При закрытии хэш должен удаляться.
  * При переходе по цепочке попапов хэш не должен меняться.
  * При закрытии попапа в цепочке открывается предыдущий попап, хэш не меняется.
  * При перезагрузке попап не должен открываться.
  * Предусмотреть систему открытия попапа при переходе по ссылке. (ЕСЛИ ПРИ ПЕРЕЗАГРУЗКЕ "ДОЛЖЕН", ТО ЭТО НЕ ТРЕБУЕТСЯ)
  * В случае нажатия кнопки "назад" закрывать цепочку попапов (предотвращая
  *   переход на предыдущую страницу).
  *
  * Если при открытии попапа уже открыт другой, то попробовать производить смену плавно.
  */



  function showPopup(text, width, height, classname, callback, not_close){
    classname = (classname ? classname : 'absolute');
    if ($(".modalbox-block:visible").length){
      $('.modalbox-block:visible').hide();
    }

    $('body').append('<div class="modalbox-block'+(classname ? ' '+classname : '')+'"><div id="loading_popup"></div></div>');
    if (!not_close){
      $('.'+classname+' #loading_popup').click(function(){ removePopup(classname, callback); });
    }
    $('.modalbox-block.'+classname).append('<div class="modalbox"></div>');
    $('.'+classname+' .modalbox').html((!not_close ? '<span class="close-fixed"><a class="close" href="javascript:;" onclick="removePopup(\''+classname+'\', \''+callback+'\');"></a></span>' : '')+text).click(function(event){event.stopPropagation();});

    if(width){
      $('.'+classname+' .modalbox').css("max-width", width+"px");
    }

    setPopupTop(classname);
    if (classname != 'absolute'){
      setEventsInputDefaults();
    }

    $('body').addClass("modalbox-open");
  }

  function removePopup(classname, callback, redirect){
    $('.modalbox-block'+(classname ? "."+classname : "")).remove();

    if (callback){
      if (callback == "all-modalbox"){
        $('.modalbox-block').remove();
      }else{
        $(".modalbox-block."+callback).show();
      }
    }

    if (!$(".modalbox-block").length){
      $('body').removeClass("modalbox-open");
    }

    if(redirect){
      window.location = redirect;
    }
  }

  function showAlert(text, title, text_btn, width, callback){
    callback = (callback ? callback : "");
    title = (title ? title : "Внимание");
    text_btn = (text_btn ? text_btn : "OK");
    width = (width ? width : 400);
    removePopup('inform');
    var html = '<div class="title">'+title+'</div>'+
      '<div class="content">'+text+'</div>'+
      '<div class="btns">'+
      '<a class="enter-btn square krayola" href="javascript:;" onclick="removePopup(\'inform\', \''+callback+'\');">'+text_btn+'</a>'+
      '</div>';
    showPopup(html, width, 0, "inform", callback);
  }

  function showConfirm(text, title, callback){
    title = (title ? title : "Внимание");
    removePopup('confirm');
    var html = '<div class="title">'+title+'</div>'+
      '<div class="content">'+text+'</div>'+
      '<div class="btns">'+
      '<a class="enter-btn square krayola" href="javascript:;" onclick="'+(callback ? callback : '')+'">Да</a>'+
      '<a class="enter-btn square krayola" href="javascript:;" onclick="removePopup();">Нет</a>'+
      '</div>';

    showPopup(html, 450, 0, "confirm");
  }

  // $.magnificPopup.open({
  /*$('.js_open_history_popup').magnificPopup({
    type: 'inline',
    src: '', // can be a HTML string, jQuery object, or CSS selector
    mainClass: 'mfp-move-from-top',
    removalDelay: 300,
    tClose: 'Закрыть (Esc)',
    closeMarkup: '<button title="%title%" type="button" class="popup__close mfp-close">&#215;</button>',
    tLoading: '<div class="preloader"></div>',
    midClick: true
  });*/







  /////////////////////////////////////



  let popups = [
    {
      id: 'test_popup',
      src: '.js_test_popup',
    },
    {
      'id': 'test_popup2',
      'src': '.js_test_popup2',
      modal: true
    },
    {
      'id': 'test_popup3',
      'src': '.js_test_popup3'
    },
    {
      'id': 'test_ajax',
      type: 'ajax',
      ajax: {
        url: '/ajax-test',
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
      }
    },
    {
      'id': 'test_popup4',
      'hidePrevious': true,
      'src': '<div class="tat">ffffffffffffffffgggggggggggg gggggggggh hhhhhhhhhhhhh</div>'
    },
  ];

  easyPopup.addPopups(popups);

  $('.js_open_history_popup').on('click', function (e) {
    e.preventDefault();
    easyPopup.open('test_ajax');
  });










});