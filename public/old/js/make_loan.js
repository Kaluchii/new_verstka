var interval = "";
var fp = new Fingerprint2();
$(document).ready(function(){
  if (!gl){
    getGeoLocation();
  }
  
  $(".makeloan-submit").click(function(e){
    var price = $('input[name="amount"]').val().replace(" ", "");
    if (price > max_sum_loan){
      showAlert($(".attention").html());
    }else if ($('#rules').is(":checked")){
      showLoad();
      fp.get(function(result, components){
        components = ModifyDataFP(components);
        $.post('/index.php?c=member&m=sendsmsmakeloan', {rules: $('#rules').val(), fp: {hash: result, components: components}}, function(data){
          if (data == "OK"){
            createFormApprove();
          }else if (data.errors){
            hideLoad();
            displayErrors(data.errors);
          }else{
            console.log("ERROR");
          }
        }, 'json');
      });
    }else{
      showAlert("Ознакомтесь с условиями сервиса");
    }
    e.preventDefault();
  });

  $("#rules").change(function(){
    $('#rules_inp').val(($(this).is(":checked") ? 1 : 0));
  });
});

function showAgreement(type){
  fp.get(function(result, components){
    components = ModifyDataFP(components);
    $.post('/index.php?c=member&m=logsactions', {type: type, fp: {hash: result, components: components}}, function(data){});
  });

  showLoad();
  $.post('/index.php?c=member&m=getagreement', {type: type, ci: {amount: $('input[name="amount"]').val().replace(/\s/g, ""), days: $('input[name="days"]').val()}}, function(data){
    hideLoad();
    showPopup(data, 1000);
  });
}

function createFormApprove(){
  var html = '<div class="sms-confirm">'+
    '<div class="sub-title">Подтверждение</div>'+
    '<div class="sms-offer"><p>На номер Вашего мобильного телефона отправлен одноразовый код.<br />Введя одноразовый код, Вы соглашаетесь с условиями договора оферты.</p>'+
    '<div class="form-inline line">'+
    '<div class="control-group">'+
    '<label>Код из SMS</label>'+
    '<div class="controls small">'+
    '<input id="sms_code" autocomplete="off" type="tel" name="sms_code" maxlength="5" />'+
    '<div class="error-msg min">Неверный код подтверждения</div>'+
    '</div>'+
    '</div>'+                                        
    '<div class="control-group inform-middle last-child" id="code_sent">'+
    '<div class="controls">Код отправлен (<span>60</span>)</div>'+
    '</div>'+
    '<div class="control-group inform-middle last-child" id="code_repeat">'+
    '<div class="controls"><a href="javascript:;" class="local link-bold">Получить код повторно</a></div>'+
    '</div>'+
    '</div>'+
    '<div class="btns pull-right">'+
    '<div class="btn-block">'+
    '<a id="approve" class="enter-btn" href="javascript:;">Подтвердить</a>'+
    '</div>'+
    '</div>'+
    '</div>'+
  '</div>';
  $(".rules-block .submit").remove();
  $(".rules-block").hide();
  $(".makeloan > .box > .box-inside").append(html);
  setTimeout(function(){ $(".sms-confirm").css("background", "white"); }, 500 );
  setTimer();
  $("#code_repeat a").click(function(){
    showLoad();
    $.post('/member/sendsmsmakeloan/', {rules: $('#rules').val()}, function(data){
      hideLoad();
      if (data == "OK"){
        setTimer();
      }
    }, 'json');
  });

  $("#approve").click(function(){
    $("#sms_code").parent().removeClass('error');
    $("#code_repeat .controls > div").remove();
    if ($("#sms_code").val()){
      showLoad();
      var fp = new Fingerprint2();
      fp.get(function(result, components){
        components = ModifyDataFP(components);
        var fp = {"hash": result, "components": components};
        var params = "&fp="+JSON.stringify(fp)+"&sms_code="+$("#sms_code").val();
        $.post('/member/checksmsmakeloan/', $('#form_calculate').serialize()+params, function(data){
          if (data.status == "SMS_SUCCESS"){
            window.location = "/member/loanopen/";
          }else if (data.status == "SMS_LIMIT"){
            hideLoad();
            myClearInterval();
            $("#code_repeat .local").before("<div>Превышен лимит ввода смс кода.</div>");
            $("#code_repeat").show();
            $("#code_sent").hide();
          }else if (data.status == "SMS_FAILED"){
            hideLoad();
            $("#sms_code").parent().addClass('error');
          }else if (data.errors){
            hideLoad();
            displayErrors(data.errors);
          }else{
            console.log("ERROR");
          }
        }, 'json');
      });
    }else{
      $("#sms_code").parent().addClass('error');
    }
  });

  $("#sms_code").keyup(function(e){
    $(this).parent().removeClass('error');
    if (e.keyCode == 13){
      $("#approve").click();
    }
  }).focus();

  hideLoad();
}

function setTimer(){
  if (!interval){
    $("#code_repeat").hide();
    $("#code_sent").show();
    $("#sms_code").val('').focus();
    var timer = 60;
    $("#code_sent span").html(timer);
    interval = setInterval(function(){ timer--; $("#code_sent span").html(timer); if (timer <= 0){ myClearInterval(); $("#code_sent").hide(); $("#code_repeat").show(); } }, 1000);
  }
}

function myClearInterval(){
  clearInterval(interval);
  interval = "";
}

function displayErrors(errors){
  $('.error, .success').removeClass("error success");
  var text = 'Проверьте правильность введенных данных';
  $.each(errors, function(elem, val){
    if (elem == "rules"){
      text = (Object.keys(errors).length > 1 ? "Проверьте правильность введенных данных и ознакомтесь с условиями сервиса" : "Ознакомтесь с условиями сервиса");
    }else{
      $('#'+elem).parent().addClass('error');
    }
  });

  showAlert(text);
}