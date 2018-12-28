var interval = "";
var query = false;

$(document).ready(function(){
  $('#mobile_phone').mask("+7 (999) 999-99-99");
  $('#mobile_phone').change(function(e){
    var phone = $(this).val().replace(/\s|\(|\)|\-/g, "");
    $(this).parent().removeClass('error error-border success');
    $("#mobile_phone").parent().addClass((/^\+7[0-9]{10}$/.test(phone) ? 'success' : 'error'));
  }).keyup(function(e){
    if (e.keyCode == 13){
      $('#email').focus();
    }
  });

  $('#email').change(function(e){
    var email = RusToLatin($(this).val().trim());
    $(this).val(email);
    $(this).parent().removeClass('error error-border success');
    emailCheck("#email", email);
  }).keyup(function(e){
    if (e.keyCode == 13){
      sendSmsCode();
    }
  });
  
  $(".enter-btn").click(function(){
    sendSmsCode();
  });
});

function RusToLatin(str){
  replacer = {
    "А": "A", "В": "B", "Е": "E", "К": "K", "М": "M", "Н": "H", "О": "O", "Р": "P", "С": "C", "Т": "T", "У": "Y", "Х": "X", "а": "a", "в": "b", "е": "e", "к": "k", "м": "m", "н": "h", "о": "o", "р": "p", "с": "c", "т": "t", "у": "y", "х": "x", "и": "u"
  };

  return str.replace(/[А-яа-я/,.;\'\]\[]/g, function (x){
    return (replacer[x] ? x == x.toLowerCase() ? replacer[x] : replacer[x.toLowerCase()].toUpperCase() : x);
  });
}

function emailCheck(elem, email){
  console.log("emailCheck");
  $(elem).parent().removeClass("suggestion error success error-border");
  if (/^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,}[0-9A-Za-z]{1}))@[0-9A-Za-z]{1}([-0-9A-Za-z]{1,}\.){1,2}[A-Za-z]{2,})$/.test(email)){
    $(elem).mailcheck({
      suggested: function(element, suggestion) {
        console.log(suggestion);
        $('.suggestion-msg').html('Возможно вы имели ввиду<br><b><a href="javascript:;" onclick="selectCorrectEmail(\''+email+'\', \''+suggestion.full+'\');">'+suggestion.full+'</a></b>?');
        $("#email").parent().addClass('suggestion');
      },
      empty: function(element) {
        $('.suggestion-msg').html('');
        $("#email").parent().addClass('success');
      }
    });
  }else{
    $("#email").parent().addClass('error');
  }
}

function selectCorrectEmail(old_email, new_email){
  $("#email").val(new_email).change();
  $.post('/index.php?c=member&m=logsautocorrect', {old_email: old_email, new_email: new_email}, function(data){});
}

function sendSmsCode(){
  var phone = $("#mobile_phone").val();
  var email = $("#email").val();

  if (phone && email && !query){
    showLoad();
    myClearInterval();
    var fp = new Fingerprint2();
    fp.get(function(result, components){
      components = ModifyDataFP(components);
      query = true;
      $('.controls').removeClass('error error-border success');
      $.post('/member/sendsmscode/', {phone: phone, email: email, fp: {hash: result, components: components}}, function(data){
        hideLoad();
        query = false;
        if (data == "OK"){
          createWindowConfirmPhone();
        }else if (data == "EXIST"){
          showAlert('Пользователь с такими данными уже зарегистрирован. Попробуйте <a class="link bold" href="/member/login/">войти в личный кабинет.</a>', "Профиль существует", "Ввести еще раз", 475);
          $("#mobile_phone").parent().addClass('error-border');
          $("#email").parent().addClass('error-border');
        }else if (data == "ERROR"){
          showAlert("Неверно указан номер телефона или адрес эл. почты");
          $("#mobile_phone").parent().addClass('error-border');
          $("#email").parent().addClass('error-border');
        }
      });
    });
  }else{
    if (!phone){
      $("#mobile_phone").parent().addClass('error');
    }
    emailCheck("#email", email);
  }
}

function setTimer(){
  if (!interval){
    $("#code_repeat").hide();
    $("#code_sent").show();
    var timer = 60;
    $("#sms_code").val('').focus();
    $("#code_sent span").html(timer);
    interval = setInterval(function(){ timer--; $("#code_sent span").html(timer); if (timer <= 0){ myClearInterval(); $("#code_sent").hide(); $("#code_repeat").show(); } }, 1000);
  }
}

function myClearInterval(){
  clearInterval(interval);
  interval = "";
}


function createWindowConfirmPhone(){
  var html = '<div class="title">Подтверждение номера телефона</div>'+
    '<div class="content">'+
    '<p>На указанный номер отправлено SMS c кодом. Введите код, чтобы продолжить оформление. Если за 60 секунд SMS не пришло, проверьте номер и получите код повторно.</p>'+
    '<form id="form_sms_codes">'+
    '<input type="hidden" value="'+$("#email").val()+'" name="email" />'+
    '<div class="form-inline">'+
    '<div class="control-group">'+
    '<label>Код из SMS</label>'+
    '<div class="controls small">'+
    '<input id="sms_code" autocomplete="off" type="tel" name="sms_code" maxlength="5" />'+
    '<div class="error-msg min">Неверный код подтверждения</div>'+
    '</div>'+
    '</div>'+

    '<div class="control-group">'+
    '<label>Мобильный телефон</label>'+
    '<div class="controls"><input autocomplete="off" id="mobile_phone_new" class="disabled" readonly type="tel" name="phone" readonly="readonly" value="'+$("#mobile_phone").val()+'" /></div>'+
    '</div>'+

    '<div class="control-group inform-middle last-child" id="code_sent">'+
    '<div class="controls">Код отправлен (<span>60</span>)</div>'+
    '</div>'+
    '<div class="control-group inform-middle last-child" id="code_repeat">'+
    '<div class="controls"><a href="javascript:;" class="local link-bold">Получить код повторно</a></div>'+
    '</div>'+
    '</div>'+
    '<div class="btns">'+
    '<div class="btn-block">'+
    '<a id="next" class="enter-btn square krayola" href="javascript:;">Далее</a>'+
    '</div>'+
    '</div>'+
  '</form>';
  showPopup(html, 710, false, 'reg-sms-modal', '', true);
  setTimer();
  $("#code_repeat a").click(function(){
    $('#sms_code').removeClass('disabled').removeAttr('readonly');
    $('#mobile_phone_new').addClass('disabled').attr('readonly', 'readonly');

    var phone = $("#mobile_phone").val().replace(/\s|\(|\)|\-/g, "");
    showLoad();
    var fp = new Fingerprint2();
    fp.get(function(result, components){
      components = ModifyDataFP(components);
      $.post('/member/sendsmscode/', {phone: phone, fp: {hash: result, components: components}}, function(data){
        hideLoad();
        if (data == "OK"){
          setTimer();
        }
      });
    });
  });

  $("#next").click(function(){
    $("#sms_code").parent().removeClass('error');
    $("#code_repeat .controls > div").remove();
    if ($("#sms_code").val()){
      showLoad();
      var fp = new Fingerprint2();
      fp.get(function(result, components){
        components = ModifyDataFP(components);
        $.post('/member/checksmscode/', {sms_code: $('#form_sms_codes input[name="sms_code"]').val(), phone: $('#form_sms_codes input[name="phone"]').val(), email: $('#form_sms_codes input[name="email"]').val(), fp: {hash: result, components: components}}, function(data){
          if (data == "SMS_SUCCESS"){
            window.location = "/member/regmemberinfo/";
          }else if (data == "SMS_FAILED"){
            hideLoad();
            $("#sms_code").parent().addClass('error');
          }else if (data == "SMS_LIMIT"){
            hideLoad();
            myClearInterval();
            $("#code_repeat .local").before("<div>Превышен лимит ввода смс кода.</div>");
            $("#code_repeat").show();

            $('#sms_code').addClass('disabled').attr('readonly', 'readonly');
            $('#mobile_phone_new').removeClass('disabled').removeAttr('readonly');

            $("#code_sent").hide();
          }else{
            $("#sms_code").parent().addClass('error');
            console.log("ERROR");
          }
        });
      });
    }else{
      $("#sms_code").parent().addClass('error');
    }
  });

  $("#sms_code").keyup(function(e){
    $(this).parent().removeClass('error');
    if (e.keyCode == 13){
      $("#next").click();
    }
  }).focus();
}