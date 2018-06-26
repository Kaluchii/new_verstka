var doc_expire_log = "";

function setEventsFields(){
    if ($('#iin').length){ $('#iin').mask("999 999 999 999"); }
    if ($('#doc_num').length){ $('#doc_num').mask("999 999 999"); }
    if ($('.date input').length){ $('.date input').mask("99.99.9999"); }
    if ($('.mask-mobile-phone').length){ $('.mask-mobile-phone').mask("+7 999 999-99-99"); }
    if ($('.mask-phone').length){ $('.mask-phone').mask("8 999 999-99-99"); }

    $("#reg_city, #act_city").each(function (elem){
        $(this).keyup(function (event){
            autoComplete($(this), event);
        }).click(function (){
            $(this).focus().select();
        });

        if (!is_touch_device()){
            $(this).keydown(function (event) {
                if(event.keyCode === 13) {
                    event.preventDefault();
                    var i = parseInt($('.sld-preferred').attr('number'), 10);
                    cSApplyResult(i, $(this).attr('id'));
                }
            });
        }
    });

    if ($("#secondname_check").length){
        $("#secondname_check").change(function(){
            if ($(this).is(':checked')){
                $("#secondname").parent().removeClass('error success');
                $("#secondname").val('').attr('disabled', 'disabled');
                addFieldMemberInfo({"secondname": ''});
            }else{
                $("#secondname").attr('disabled', false);
            }
        });
    }

    if ($('.radiogroup input[type="radio"]').length){
        $('.radiogroup input[type="radio"]').change(function (){
            isCheckedRadioButtons($(this).parents('.radiogroup'));
        })
    }

    if ($('#act_same').length){
        $("#act_same").change(function(){
            if ($(this).is(":checked")){
                var data = {"act_same": 1, "reg_city": $("#reg_city_hidden").val(), "reg_street": $("#reg_street").val(), "reg_house": $("#reg_house").val(), "reg_flat": $("#reg_flat").val() };
                addFieldMemberInfo(data);
                $('[id^="reg_"]').each(function(){
                    if (!/hidden/.test($(this).attr("id"))){
                        actSameFieldUpdate($(this));
                    }
                });
            }else{
              addFieldMemberInfo({"act_same": 0, "act_city": "0_0_0", "act_street": "", "act_house": "", "act_flat": ""});
              actSameFieldClear();
            }
        });
    }

    if ($(".capitalize").length){
        $(".capitalize").change(function(e){
            $(this).val($(this).val().toLowerCase());
        });
    }

    $('.radiogroup input').change(function(){
      var field = $(this).attr('id');
      var value = $(this).val();
      field = field.replace(/^([\d\D]+)\_([0-9]+)$/g, "$1");

      var data = {};
      data[field] = value;
      addFieldMemberInfo(data);
    });

    $('.controls input[type="text"], .controls input[type="tel"]').change(function(){
        $(this).parent().removeClass("error success");
        $(this).parent().find(".error-msg").remove();
        var blankFields = ['reg_flat', 'act_flat'/*, 'work_phone_ext'*/];
        var id = $(this).attr('id');
        var value = $(this).val().trim();
        var log = value;

        switch (id){
            case "lastname":
            case "firstname": { log = /^([А-Яа-яёЁ\s\-әңғүұқһіө])+$/g.test(value.trim()); } break;
            case "secondname": {
                if ($("#secondname_check").is(':checked')){
                    blankFields.push(id);
                }else{
                    log = /^([А-Яа-я\s\-әңғүұқһіө])+$/g.test(value.trim());
                }
            } break;
            case "iin": {
                value = value.replace(/\s/g, "");
                log = /^([0-9]+)$/g.test(value) && value.length == 12 && checkIinDigit(value);
            } break;
            case "doc_date": {
                log = isValidDate(value);
            } break;
            case "doc_expire": {
                doc_expire_log = isValidDate(value, 1, (window.date_to ? date_to : false));
                var future_date = new Date(new Date().setFullYear(new Date().getFullYear()+80));

                var d = parseInt(value.substring(0,2), 10);
                var m = parseInt(value.substring(3,5), 10)-1;
                var y = parseInt(value.substring(6,10), 10);
                var dt = new Date(y, m, d);

                doc_expire_log = doc_expire_log && dt < future_date;
                log = doc_expire_log;
            } break;
            case "doc_num": { value = value.replace(/\s/g, ""); log = /^([0-9])+$/g.test(value) && value.length == 9; } break;
            case "act_city":
            case "reg_city": {
                if (!value){
                    $("#"+id+"_hidden").val('');
                }
                log = $("#"+id+"_hidden").length && /^([0-9]+|[0-9]+_[0-9]+|[0-9]+_[0-9]+_[0-9]+)$/g.test($("#"+id+"_hidden").val());
            } break;
            case "act_street":
            case "reg_street": {
                log = /^([0-9А-Яа-я\s\-\\\/])+$/g.test(value);
            } break;
            case "act_house":
            case "reg_house": {
              log = /^([0-9]+([\s\-\/]*[0-9а-и]+)*)$/g.test(value);
            } break;
            case "act_flat":
            case "reg_flat": {
                if (!value){
                    blankFields.push(id);
                }else{
                  log = /^([0-9]+([\s\-\/]*[0-9а-и]+)*)$/g.test(value);
                }
            } break;
            case "income": {
                value = value.replace(/\s/g, "");
                $("#income").val(value);
                var sv = parseInt($("#work_employment").val(), 10);
                if (sv == 17 && !value){
                    blankFields.push(id);
                }else{
                    log = /^([0-9]+)$/g.test(value);
                }
            } break;
            case "work_phone":
            case "work_place":
            case "work_position": {
                var sv = parseInt($("#work_employment").val(), 10);
                if (sv == 17 || sv == 13 || sv == 14){
                    blankFields.push(id);
                }
            } break;
        }

        if (/reg_/.test(id)){
            if ($("#act_same").is(":checked")){
                actSameFieldUpdate($(this));
            }
        }

        if (!(!value && blankFields.indexOf(id) > -1)){
            $(this).parent().addClass((log ? "success" : "error"));
            if (!log){
                getErrorMessage(id);
            }
        }

        if ((log || (!value && !log) )&& id != "reg_city" && id != "act_city" && !(/act_/.test(id) && $("#act_same").is(":checked"))){
          var addField = {};
          addField[id] = value;
          addFieldMemberInfo(addField);
        }
    });

    if ($('select').length){
        $('select').change(function(){
            $(this).parent().removeClass("error success");
            var id = $(this).attr('id');
            var selects = ["work_position", "work_employment"];

            if (selects.indexOf(id) != -1){
              var value = $(this).val();
              if (id == "work_employment"){
                $("#work_place, #work_phone, #work_position, #income").attr('disabled', false).parent().removeClass('disabled');
                if (value == 17){
                  $("#work_place, #work_phone, #work_position, #income").val('').attr('disabled', 'disabled').parent().removeClass('success error').addClass('disabled');
                  addFieldMemberInfo({"work_place": '', "work_phone": '', "work_position": '', "income": ''});
                }
              }

              $(this).parent().find(".error-msg").remove();
              $(this).parent().addClass((value == -1 ? "error" : "success"));
            }
        });
        
        if (is_touch_device()){
          $('select').parent().addClass('select-mobile');
        }else{
          $('select').selecter({mobile: true});
        }

        if ($(".modalbox").length && $(".selecter-selected").length){
            $(".modalbox:not(.selecter-selected)").click(function(){
                $(".open .selecter-selected").click();
            });
        }
    }
}

function checkNotEmptyField(){
  $('.controls input[type="text"], .controls input[type="tel"]').each(function(item){
    if ($(this).val()){
      $(this).parent().addClass('success');
    }
  });
}

function addFieldMemberInfo(data){
  var act_same = ($("#act_same").is(":checked") ? 1 : 0);
  for (var field in data){
    if (/confidant/.test(field)){
      var id = parseInt(field.replace(/^([\d\D]+)\_([0-9]+)$/g, "$2"), 10);
      var new_field = field.replace(/^confidant\_([\d\D]+)\_([0-9]+)$/g, "$1");
      data['confidant'] = [];
      data['confidant'][0] = { 'id': ($('#confidant_id_'+id).val() ? $('#confidant_id_'+id).val() : 0)};
      data['confidant'][0][new_field] = data[field];
      delete(data[field]);
    }else if (/reg_/.test(field) && act_same){
      data[field.replace("reg_", "act_")] = data[field];
    }
  }
  if (!data["act_same"]){
      data['act_same'] = act_same;
  }
  $.post('/index.php?c=member&m=addfieldmemberinfo', {data: data}, function(data){
    if (data.status == "CONFIDANT_ID"){
      $('#confidant_id_'+id).val(data.id);
    }else if (data.errors){
      displayErrors(data.errors, 1);
    }
  }, 'json');
}

function actSameFieldUpdate(elem){
    var original_id = $(elem).attr("id");
    var id = $(elem).attr("id").replace("reg_", "act_");
    $('#'+id).parent().removeClass('error');
    if (original_id == "reg_city"){
        $("#"+id+"_hidden").val($("#"+original_id+"_hidden").val());
    }
    $("#"+id).val($(elem).val());
    $("#"+id).change();
}

function actSameFieldClear(){
    $('.act-block input').val('').parent().removeClass('error success');
}

function checkIinDigit(iin){
    var sum = 0;
    for (var i = 0; i < 11; i++){
        sum += (i+1) * parseInt(iin[i], 10);
    }
    
    var digit = sum % 11;
    if (digit == 10){
        sum = 0;
        for (var i = 0; i < 11; i++){
            var t = (i+3) % 11;
            t = (t == 0 ? 11 : t);
            sum += t * parseInt(iin[i], 10);
        }
        digit = sum % 11;
        if (digit == 10){
            return false;
        }
        return (digit == parseInt(iin.substr(-1), 10));
    }
    return (digit == parseInt(iin.substr(-1), 10));
}

function isCheckedRadioButtons(elem){
    elem = (elem ? elem : ".radiogroup");
    $(elem).removeClass('error');
    $(elem).each(function(){
        if (!$(this).find('input[type="radio"]:checked').length){
            $(this).addClass('error');
        }
    });
}

function getErrorMessage(id, error_val){
    $("#"+id).parent().find(".error-msg").remove();
    var errorMsg = "";
    switch (id){
        case "lastname": { errorMsg = "Фамилия на кириллице" } break;
        case "firstname": { errorMsg = "Имя на кириллице" } break;
        case "secondname": { errorMsg = "Отчество на кириллице" } break;
        case "doc_date": { errorMsg = "Неверно указана дата" } break;
        case "doc_expire": { errorMsg = (doc_expire_log ? "Неверно указан срок действия" : "Срок недействителен") } break;
        case "iin": { errorMsg = (error_val && error_val['type'] == 2 ? "Указанный ИИН зарегестрирован на номер "+error_val['iin_info']['mobile_phone']+" и почту "+error_val['iin_info']['email']+". Восстановите доступ или обратитесь в поддержку +7&nbsp;771&nbsp;395-90-07" : "Данный ИИН не действителен"); } break;
        case "doc_num": { errorMsg = "Неверно указан номер" } break;
        case "act_house": { errorMsg = "Не указан номер дома" } break;
        case "reg_house": { errorMsg = "Не указан номер дома" } break;
        case "act_street": { errorMsg = "Неверно указана улица" } break;
        case "reg_street": { errorMsg = "Неверно указана улица" } break;
        case "reg_flat": { errorMsg = "Неверно указан номер" } break;
        case "act_flat": { errorMsg = "Неверно указан номер" } break;
        case "act_home_phone": { errorMsg = "Неверно указан номер" } break;
        case "income": { errorMsg = "Неверно указан доход" } break;
        case "work_place": { errorMsg = "Неверно указан работодатель" } break;
        case "work_phone": { errorMsg = "Неверно указан номер" } break;
        case "reg_city": { errorMsg = "Не указан город" } break;
        case "act_city": { errorMsg = "Не указан город" } break;
        case "confidant_name_1":
        case "confidant_name_2": { errorMsg = "Не указано имя" } break;
        case "confidant_phone_1":
        case "confidant_phone_2": { errorMsg = "Неверно указан номер" } break;
        case "work_employment": { errorMsg = "Не выбран тип занятости" } break;
        case "work_position": { errorMsg = "Не указана должность" } break;
    }
    if (errorMsg){
      $("#"+id).parent().append('<div class="error-msg">'+errorMsg+'</div>');
    }
}
