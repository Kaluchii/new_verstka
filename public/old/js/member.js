var interval = "";
function createWindowEdit(type){
    showLoad();
    $.post('/member/changepopupsmember/', {block: type}, function(data){
        if (data){
            var popupWidth = {"1": 880, "2": 925, "3": 825, "4": 820, "5": 845};
            hideLoad();
            showPopup(data, popupWidth[type], 0, "absolute");
            setEventsInputDefaults();
            setEventsFields();
            $('.member-info-block .controls input[type="text"]:visible').change();
        }
    });
}

function saveData(){
    $('.controls input[type="text"]:visible').change();
    $("#repeat_sms_code .controls > div").remove();
    if (!$(".error").length){
        showLoad();
        var fp = new Fingerprint2();
        fp.get(function(result, components){
            components = ModifyDataFP(components);
            var fp = {"hash": result, "components": components};
            var params = "&fp="+JSON.stringify(fp);
            $.post('/index.php?c=member&m=edit', $('#form_edit').serialize()+params, function(data){
                hideLoad();
                if (data.status && data.status == "OK"){
                    $("#block"+data.block).html(data.html);
                    if (data.member_info){
                        member_info = data.member_info;
                    }
                    if (data.member){
                        member = data.member;
                    }
                    
                    removePopup();
                }else if (data.errors){
                    $.each(data.errors, function(elem, val){
                      if (elem == "sms_code"){
                        if (val == "SMS_FAILED"){
                          $('#'+elem).parent().removeClass("error success").addClass('error');
                        }else if (val == "SMS_LIMIT"){
                          hideLoad();
                          myClearInterval();
                          $("#repeat_sms_code .controls > div").remove();
                          $("#repeat_sms_code .local").before("<div>Превышен лимит<br>ввода смс кода.</div>");
                          $("#repeat_sms_code").removeClass('hide');
                          $("#new_code_sent").addClass('hide');
                        }
                      }else{
                        $('#'+elem).parent().removeClass("error success").addClass('error');
                      }
                    });
                }
            }, 'json');
        });
    }else{
        alert("Заполните все поля");
    }
}

function myClearInterval(){
    clearInterval(interval);
    interval = "";
  }
