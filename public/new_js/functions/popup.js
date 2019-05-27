function setPopupTop(classname){
  var top = 0;
  if ($((classname ? "."+classname+" " : "")+'.modalbox').outerHeight() < $(window).height()){
    top = ($(window).height() - $((classname ? "."+classname+" " : "")+'.modalbox').outerHeight()) / 2;
  }
  $('.modalbox-block'+(classname ? "."+classname : "")).css("padding-top", top+'px').css("padding-bottom", top+'px');
}

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