var interval = "";
var query_exec = false;
var start_time = 0;

var logs = {
    "paste": [],
    "filling_time": 0,
    "keystrokes": 0,
    "submit": 0,
    "error_submit": 0,
};
var fp = new Fingerprint2();

$(document).ready(function(){
    /*$("#reg_regions, #act_regions").each(function(){
        $(this).append(createOptionForSelect(regions));
    });*/

    setEventsFields();

    $('#profile_form').submit(function(e){
        e.preventDefault();
        if (!$('.approved-block').length){
            setOnBeforeUnload("destroy");
            logs['submit']++;
            if (checkData()){
                showLoad();
                var fp = new Fingerprint2();
                fp.get(function(result, components){
                    components = ModifyDataFP(components);
                    var fp = {"hash": result, "components": components};
                    var params = "&fp="+JSON.stringify(fp);
                    $.post('/index.php?c=member&m=sendsmsmemberinfo', $("#profile_form").serialize()+params, function(data){
                        if (data == "OK"){
                            hideLoad();
                            createFormApprove();
                        }else if (data.errors){
                            hideLoad();
                            displayErrors(data.errors);
                            bodyScrollTop(-35);
                        }else{
                            console.log("ERROR");
                        }
                        setOnBeforeUnload();
                    }, 'json');
                });
            }else{
              setOnBeforeUnload();
            }
        }
    });

    $(".not-phone a").mouseover(function(e){
        $(".not-phone .hint").show();
    }).mouseout(function(){
        $(".not-phone .hint").hide();
    });

    $('input[type="text"]').on('paste', function(e){
        var text = (e.originalEvent || e).clipboardData.getData('text/plain');
        logs['paste'].push({key: $(this).attr('id'), val: text});
    }).keypress(function(){
        logs['keystrokes']++;
    });

    start_time = new Date();

    setOnBeforeUnload();
    checkNotEmptyField();
});

function setOnBeforeUnload(p){
    if (p && p == "destroy"){
      window.onbeforeunload = null;
      delete window.onbeforeunload;
    }else{
      window.onbeforeunload = function(e){
        var text = "Вы действительно хотите покинуть страницу?";
        e = e || window.event;
        if (e) {
          e.returnValue = text;
        }
        return text;
      };
    }
}

function createFormApprove(){
    var html = '<div class="box rules approved-block">'+
                '<div class="box-inside">'+
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
                    '<div class="control-group inform-middle " id="code_sent">'+
                        '<div class="controls">Код отправлен (<span>60</span>)</div>'+
                    '</div>'+
                    '<div class="control-group inform-middle last-child" id="code_repeat">'+
                        '<div class="controls"><a href="javascript:;" class="local link-bold">Получить код повторно</a></div>'+
                    '</div>'+
                '</div>'+
                '<div class="btns pull-right last-child">'+
                    '<div class="btn-block">'+
                        '<a id="approve" class="enter-btn" href="javascript:;">Подтвердить</a>'+
                    '</div>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>';
    $(".rules .enter-btn").remove();
    $(".rules").hide();
    $("#profile_form").append(html);
    setTimeout(function(){ $(".approved-block").css("background", "white"); }, 500 );
    setTimer();
    $("#code_repeat a").click(function(){
        $('#sms_code').removeClass('disabled').removeAttr('readonly');
        showLoad();
        var fp = new Fingerprint2();
        fp.get(function(result, components){
            components = ModifyDataFP(components);
            var fp = {"hash": result, "components": components};
            var params = "&fp="+JSON.stringify(fp);
            $.post('/member/sendsmsmemberinfo/', $('#profile_form').serialize()+params, function(data){
                hideLoad();
                if (data == "OK"){
                    setTimer();
                }
            }, 'json');
        });
    });

    $("#approve").click(function(){
        setOnBeforeUnload("destroy");
        logs['submit']++;
        $("#sms_code").parent().removeClass('error');
        $("#code_repeat .controls > div").remove();
        if ($("#sms_code").val()){
            showLoad();
            var end_time = new Date();
            logs['filling_time'] = Math.round((end_time - start_time) / 1000);
            var fp = new Fingerprint2();
            fp.get(function(result, components){
                components = ModifyDataFP(components);
                var fp = {"hash": result, "components": components};
                var params = "&logs="+JSON.stringify(logs)+"&fp="+JSON.stringify(fp);
                $.post('/member/addmemberinfo/', $('#profile_form').serialize()+params, function(data){
                    if (data == "SMS_SUCCESS"){
                        window.location = "/member/connectioncard/";
                    }else if (data == "SMS_FAILED"){
                        hideLoad();
                        logs['error_submit']++;
                        $("#sms_code").parent().addClass('error');
                    }else if (data == "SMS_LIMIT"){
                        hideLoad();
                        myClearInterval();
                        $("#code_repeat .local").before("<div>Превышен лимит ввода смс кода.</div>");
                        $('#sms_code').addClass('disabled').attr('readonly');
                        $("#code_repeat").show();
                        $("#code_sent").hide();

                    }else if (data.errors){
                        hideLoad();
                        logs['error_submit']++;
                        displayErrors(data.errors);
                    }else{
                        console.log("ERROR");
                    }
                    setOnBeforeUnload();
                }, 'json');
            });
        }else{
            $("#sms_code").parent().addClass('error');
            setOnBeforeUnload();
        }
    });

    $("#sms_code").keyup(function(e){
        $(this).parent().removeClass('error');
        if (e.keyCode == 13){
            $("#approve").click();
        }
    }).focus();
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

function displayErrors(errors, hide_alert){
    hide_alert = (hide_alert ? hide_alert : 0);
    var text = 'Проверьте правильность введенных данных';
    $.each(errors, function(elem, val){
        if (elem == "rules"){
            text = (Object.keys(errors).length > 1 ? "Проверьте правильность введенных данных и ознакомтесь с условиями сервиса" : "Ознакомтесь с условиями сервиса");
        }else if (elem == "b_date") {
            text = "Займ выдается лицам старше 18 лет";
        }else{
            if (/confidant_type/.test(elem)){
                $('.'+elem).parents('.radiogroup').removeClass("success");
                $('.'+elem).parents('.radiogroup').addClass('error');
            }else{
                $('#'+elem).parent().removeClass("success");
                $('#'+elem).parent().addClass('error');
            }

            getErrorMessage(elem, val);
        }
    });

    if (!hide_alert){
      showAlert(text);
    }
}

function checkData(){
    $('#profile_form .controls input[type="text"], #profile_form .controls input[type="tel"]').change();
    $('#profile_form select').change();
    isCheckedRadioButtons();

    if ($(".error").length){
        logs['error_submit']++;
        bodyScrollTop(-35);
        showAlert("Заполните все поля");
    }else if (!$("#rules").is(":checked")){
        logs['error_submit']++;
        showAlert("Ознакомтесь с условиями сервиса");
    }

    return $("#rules").is(":checked") && !$(".error").length;
}

function showAgreement(type){
  fp.get(function(result, components){
      components = ModifyDataFP(components);
    $.post('/index.php?c=member&m=logsactions', {type: type, fp: {hash: result, components: components}}, function(data){});
  });

  showLoad();
  $.post('/index.php?c=member&m=getagreement', {type: type}, function(data){
    hideLoad();
    showPopup(data, 1000);
  });
}

function Social(social) {
  $(".social__item--"+social).attr("href", "javascript:;").addClass("social__item--active");
}

function bodyScrollTop(offset){
    offset = (offset ? offset : 0);
    var target_top = $('.error:first').offset().top+offset;
    $('html, body').animate({ scrollTop: target_top }, 0);
}
