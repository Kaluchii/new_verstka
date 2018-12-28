$(document).ready(function(){
  setEventsInputDefaults();
  if ( !isMobile.iOS()){
      $('.google-play__button-wrap').addClass('android-show');
  }

  $('.js-menu-button').on('click', function (event) {
    toggleMenu();
  });
  $('.js-menu-fade').on('click', function (event) {
    toggleMenu();
  });

  if ($('.block-rating').length){
    $('.rating-count').html(strToInt(votes)+" "+declension(votes));
    $('meta[itemprop="ratingCount"]').attr('content', votes);
    $('.rating-value').html(average);
    $('meta[itemprop="ratingValue"]').attr('content', average);
    $('a[data-rating="'+average+'"]').addClass('active');

    $('.rating a').click(function(){
      if(getCookie('d_rating_'+id) != '1'){
        pCount = parseInt($('meta[itemprop="ratingCount"]').attr('content'), 10) + 1;
        $('.rating-count').html(strToInt(pCount)+" "+declension(pCount));
        $('meta[itemprop="ratingCount"]').attr('content', pCount);
        setCookie('d_rating_'+id, 1, 1, '', '', '');
        $('.voted').html('Спасибо, Ваш голос учтен').css('display', 'inline-block');
      }else{
        $('.voted').html('Вы уже проголосовали').css('display', 'inline-block');
      }
    });
  }

  checkPageHeight();

  var action = (member_id === null ? "show" : "login");
  var hours = 24;
  var cookie_val = 1;
  if (typeof ban_credit !== 'undefined' && ban_credit){
    $('.block_credit').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      showAlert("Вы уже подавали заявку.<br />Новую заявку вы сможете подать не раньше "+dateFormat(ban_credit.date, 2), false, false, 580);
    });
    action = "ban";
    hours = dateFormat(ban_credit.date, 10);
    cookie_val = ban_credit.date;
  }
  $.ajax({ url:"https://cookid.net/set_cookie.php?site=dopo&action="+action+"&hours="+hours+"&value="+cookie_val, dataType: 'jsonp' });
}).click(function(e){
  if ($(window).width() <= 770){
    $('.open-menu').removeClass("open");
    $('.header .menu').removeClass('open');
  }
});

function createPopupForgotPass(msg){
  $(".forgot-pass").remove();
  var text = (!msg ? '<div class="title">Забыли пароль?</div>' : '')+
  '<div class="content"><form id="forgot_pass_form" method="POST">'+
  '<p class="meta">'+(!msg ? 'Введите номер телефона (в формате 8XXXХХХХХХХ) или электронную почту, указанную при регистрации.' : msg)+'</p>'+
  '<input type="hidden" name="proceed" value="1">'+
  '<div class="form-inline">'+
  '<div class="control-group">'+
  '<label>Телефон или эл. почта</label>'+
  '<div class="controls forgot-email">'+
  '<input type="text" class="input-forgot-pass" placeholder="" name="email" autocomplete="off" />'+
  '</div>'+
  '</div>'+
  '<div class="control-group last-child text-right">'+
  '<a class="enter-btn square krayola" onclick="forgotChangePassword();" href="javascript:;">Восстановить</a>'+
  '</div>'+
  '</div>'+
  '</form></div>';
  showPopup(text, 455, 0, 'forgot-pass', 'login');
  $("#forgot_pass_form").submit(function(e){
    e.preventDefault();
    forgotChangePassword();
  });
  $("#forgot_pass_form .controls input").focus();
}

function toggleMenu(){
  $('.js-menu-button').toggleClass('hamburger--open');
  $('.js-mobile-menu').toggleClass('mobile-menu--show');
  $('.js-menu-fade').fadeToggle(300);
  $('body, html').toggleClass('stop-body-scroll')
}

function forgotChangePassword(){
  showLoad();
  $('.forgot-email').removeClass('error');
  $.post('/index.php?c=member&m=forgotpass', $('#forgot_pass_form').serialize(), function(data){
    if (data == "EMAIL_OK"){
      showAlert("Инструкции по смене пароля были отправлены на Ваш адрес электронной почты.", false, false, false, 'login');
      var fp = new Fingerprint2();
      fp.get(function(result, components){
        components = ModifyDataFP(components);
        $.post('/index.php?c=member&m=logsactions', {type: 'email_forgot', fp: {hash: result, components: components}}, function(data){});
      });
    }
    if (data == "SMS_OK"){
      showAlert("Новый пароль был отправлен на указанный Вами номер телефона.", false, false, false, 'login');
      var fp = new Fingerprint2();
      fp.get(function(result, components){
        components = ModifyDataFP(components);
        $.post('/index.php?c=member&m=logsactions', {type: 'sms_forgot', fp: {hash: result, components: components}}, function(data){});
      });
    }
    if (data == "NOT_VALID"){
      $('.forgot-email').addClass('error');
      showAlert('Не правильно указан номер телефона или адрес электронной почты.', false, false, false, 'forgot-pass');
    }
    if (data == "EMAIL_NO_SUCH"){
      $('.forgot-email').addClass('error');
      showAlert('Данный адрес электронной почты не зарегестрирован у нас на сайте.', false, false, false, 'forgot-pass');
    }
    if (data == "SMS_NO_SUCH"){
      $('.forgot-email').addClass('error');
      showAlert('Данный номер телефона не зарегестрирован у нас на сайте.', false, false, false, 'forgot-pass');
    }
    hideLoad();
  });
}

function createLoginWindow(){
  var html = '<form id="auth_member" onsubmit="authMember(this); return false;">'+
  '<input type="hidden" value="1" name="proceed">'+
  '<div class="title">Войти в кабинет</div>'+
  '<div class="form-inline">'+
  '<div class="control-group last-child">'+
  '<label>Телефон или эл. почта</label>'+
  '<div class="controls">'+
  '<input type="text" name="login" autocomplete="off" />'+
  '</div>'+
  '</div>'+
  '</div>'+
  '<div class="form-inline">'+
  '<div class="control-group last-child">'+
  '<label>Пароль</label>'+
  '<div class="controls relative">'+
  '<input type="password" name="password" autocomplete="off" class="password-show" />'+
  '<label class="pass-show">'+
  '<input type="checkbox"  class="pass-show__check" onclick="showPassword(this)">'+
  '<span class="pass-show__eye" ></span>'+
  '</label>'+
  '</div>'+
  '</div>'+
  '</div>'+
  '<div class="btns clearfix">'+
  '<a class="pull-left local" id="forgot_pass" href="javascript:;" onclick="createPopupForgotPass();">Я забыл пароль</a>'+
  '<input type="submit" class="enter-btn pull-right" value="Войти" />'+
  '</div>'+
  '<div class="error-text text v-hide">Неверный логин или пароль.</div>'+
  '<div class="text">Пароль создавался автоматически и был выслан на почту, указанную при регистрации.</div>'+
  '</form>';

  showPopup(html, 402, 490, 'login');
}
function showPassword( item ){
  if( $(item).is(':checked') ){
    $(item).closest('.controls.relative').find('.password-show').attr('type','text');
  }else{
    $(item).closest('.controls.relative').find('.password-show').attr('type','password');
  }
}

function ModifyDataFP(components){
  var k = 0;
  while (k < components.length){
    if (components[k]['key'] == 'canvas' || components[k]['key'] == 'webgl'){
      components.splice(k, 1);
    }else{
      k++;
    }
  }
  return components;
}

function authMember(elem){
  showLoad();
  $("#auth_member .error").removeClass("error");
  $("#auth_member .error-text").addClass("v-hide");
  $.post('/index.php?c=member&m=login', $(elem).serialize(), function(data){
    if (data.logined){
      var fp = new Fingerprint2();
      fp.get(function(result, components){
        components = ModifyDataFP(components);
        $.post('/index.php?c=member&m=logsactions', {type: 'login_success', fp: {hash: result, components: components}}, function(data){});
      });
      window.location.href = (data.active_loan ? '/member/loanopen/' : '/member/');
    }else if (data.blocking && data.blocking == 1){
      hideLoad();
      $(".error-text").html("Аккаунт заблокирован").removeClass("v-hide");
    }else if (data.blocking && data.blocking == 2){
      hideLoad();
      $(".error-text").html("Вы три раза ввели неправильный пароль, ваш аккаунт заблокирован на 10 минут").removeClass("v-hide");
    }else{
      hideLoad();
      var fp = new Fingerprint2();
      fp.get(function(result, components){
        components = ModifyDataFP(components);
        $.post('/index.php?c=member&m=logsactions', {type: 'login_failed', login: data.login, fp: {hash: result, components: components}}, function(data){});
      });
      $("#auth_member .controls input").blur();
      $("#auth_member .controls").addClass("error");
      $(".error-text").html("Неверный логин или пароль").removeClass("v-hide");
    }
  }, 'json');
}

function setEventsInputDefaults(){
  if ($('input[type="text"]').length){
    $('input[type="text"]').focus(function(){
      $(this).parent().addClass("active");
    }).blur(function(){
      $(this).parent().removeClass("active");
    });
  }

  if ($('input[type="password"]').length){
    $('input[type="password"]').focus(function(){
      $(this).parent().addClass("active");
    }).blur(function(){
      $(this).parent().removeClass("active");
    });
  }

  if ($('.controls .btn-group a').length){
    $('.controls .btn-group a').click(function(){
      $(this).parent().find('a').removeClass('active');
      $(this).addClass('active');

      var name = $(this).attr('id');
      name = name.substring(0, name.length-2);
      var val = $(this).attr('data-value');
      $('#'+name).val(val);
    });
  }
}

function formatPrice(price, letter_type, letter_class){
  var currency = {'s': ' тг', 'f': ' тенге'};
  price = parseInt(price, 10);
  var millions = Math.floor(price / 1000000);
  price = price % 1000000;
  var thouthands = Math.floor(price / 1000);
  price = price % 1000;
  if (millions && thouthands < 100){
    if (thouthands < 10){
      thouthands = "0"+thouthands;
    }
    thouthands = "0"+thouthands;
  }

  if (thouthands && price < 100){
    if (price < 10){
      price = "0"+price;
    }
    price = "0"+price;
  }

  var letter = "";
  if (currency[letter_type]){
    letter = currency[letter_type];
  }

  if (letter_class){
    letter = ' <span class="currency">'+letter+'</span>';
  }

  return (millions ? millions + ' ' : '') + (thouthands ? thouthands + ' ' : '') + price + letter;
}

function showLoad(){
  $('body').append('<div id="loading"><div id="loading_image"></div></div>');
}
function hideLoad(){
  $('#loading').remove();
}

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

function isValidDate(date, type, compare_date){
  if (date){
    var bool = false;
    var d = parseInt(date.substring(0,2), 10);
    var m = parseInt(date.substring(3,5), 10)-1;
    var y = parseInt(date.substring(6,10), 10);
    var dt = new Date(y, m, d);
    bool = ((y == dt.getFullYear()) && (m == dt.getMonth()) && (d == dt.getDate()) && y > 1900);
    return (!type ? bool && dt < new Date() : bool && dt > (compare_date ? compare_date : new Date()));
  }else{
    return false;
  }
}

function addZero(n) {
    n = String(n);
    return n.length > 1 ? n : "0" + n;
}

function dateFormat(date, type){
  type = (type ? type : 0);
  var dat;
  if (date){
    if (typeof(date) === "string"){
      date = date.replace(/^([0-9]{2})\.([0-9]{2})\.([0-9]{4})$/, "$3-$2-$1");
      date = parseDate(date);
    }
    var monthes = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

    if (type === 1){
      dat = date.getDate() + " " + monthes[date.getMonth()];
    }else if (type === 2){
      dat = date.getDate() + " " + monthes[date.getMonth()]+" "+date.getFullYear();
    }else if (type === 10){
      dat = Math.round(Math.abs(date - new Date()) / 365);
    }else{
      var month = date.getMonth()+1;
      dat = (date.getDate()<10 ? '0' : '')+date.getDate()+"."+(month<10 ? '0' : '')+month+"."+date.getFullYear();
    }
  }else{
    dat = '-';
  }

  return dat;
}

function parseDate(input, format) {
  format = format || 'yyyy-mm-dd';
  var parts = input.match(/(\d+)/g), i = 0, fmt = {};
  format.replace(/(yyyy|dd|mm)/g, function(part) { fmt[part] = i++; });
  return new Date(parts[fmt['yyyy']], parts[fmt['mm']]-1, parts[fmt['dd']]);
}

function checkPageHeight(){
  var total = window.innerHeight;

  if ($('.wrapper > .container .box:last').css('min-height')){
    $('.wrapper > .container .box:last').css('min-height', 'auto');
  }

  if ($('body').height() < total){
    var height = total - $('.header').outerHeight() - $('.footer').outerHeight() - ($('.wrapper > .container').outerHeight(true) - $('.wrapper > .container').height()) - ($('.wrapper > .container .box:last').outerHeight() - $('.wrapper > .container .box:last').height());
    $('.wrapper > .container .box:last').css('min-height', height+'px');
  }
}

$(window).resize(function(){
  checkPageHeight();
});

function strToInt(str){
  str = str + "";
  return str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}

function declension(num, expressions) {
  expressions = (expressions ? expressions : ['человек','человека','человек']);
  var result;
  count = num % 100;
  if (count >= 5 && count <= 20) {
    result = expressions['2'];
  } else {
    count = count % 10;
    if (count == 1) {
      result = expressions['0'];
    } else if (count >= 2 && count <= 4) {
      result = expressions['1'];
    } else {
      result = expressions['2'];
    }
  }
  return result;
}

function clone(o) {
  if(!o || 'object' !== typeof o)  {
    return o;
  }
  var c = 'function' === typeof o.pop ? [] : {};
  var p, v;
  for(p in o) {
    if(o.hasOwnProperty(p)) {
      v = o[p];
      if(v && 'object' === typeof v) {
        c[p] = clone(v);
      }else {
        c[p] = v;
      }
    }
  }
  return c;
}

function createHash(){
  return btoa(new Date().toString()+(Math.random()*1000)+"dopo.kz");
}


function getGeoLocation(){
  if ('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationFailure, { enableHighAccuracy: true });
  }else{
    console.log("Ваш браузер не поддерживает геолокацию");
  }
}

function geolocationSuccess(position){
  $.post('/index.php?c=member&m=addsessiongeoloc', {coords: position.coords}, function(data){}, 'json');
}

function geolocationFailure(positionError){
  $.post('/index.php?c=member&m=addsessiongeoloc', {failure: 1}, function(data){}, 'json');
}

var isMobile = {
    getUserAgent: function () {
        return navigator.userAgent;
    },
    Android: function () {
        return /Android/i.test(isMobile.getUserAgent()) && !isMobile.Windows();
    },
    BlackBerry: function () {
        return /BlackBerry|BB10|PlayBook/i.test(isMobile.getUserAgent());
    },
    iPhone: function () {
        return /iPhone/i.test(isMobile.getUserAgent()) && !isMobile.iPad() && !isMobile.Windows();
    },
    iPod: function () {
        return /iPod/i.test(isMobile.getUserAgent());
    },
    iPad: function () {
        return /iPad/i.test(isMobile.getUserAgent());
    },
    iOS: function () {
        return (isMobile.iPad() || isMobile.iPod() || isMobile.iPhone());
    },
    Opera: function () {
        return /Opera Mini/i.test(isMobile.getUserAgent());
    },
    Windows: function () {
        return /Windows Phone|IEMobile|WPDesktop/i.test(isMobile.getUserAgent());
    },
    KindleFire: function () {
        return /Kindle Fire|Silk|KFAPWA|KFSOWI|KFJWA|KFJWI|KFAPWI|KFAPWI|KFOT|KFTT|KFTHWI|KFTHWA|KFASWI|KFTBWI|KFMEWI|KFFOWI|KFSAWA|KFSAWI|KFARWI/i.test(isMobile.getUserAgent());
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function is_touch_device(){
  return typeof(window.ontouchstart) != 'undefined';
}

