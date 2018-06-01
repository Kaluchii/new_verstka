var fp = new Fingerprint2();
$(document).ready(function(){

  if (!is_touch_device() ){
      $('.js-iban-info-select').selecter();
  }
  $('.js-iban-info-select').on('change', function (event) {
      if( $(this).val() != -1) {
          $('.js-iban-info').html(iban_info[$(this).val()].info)
      }else{
          $('.js-iban-info').html('');
      }
  });

  $('.js-kazpost-popup').click(function (event) {
    event.preventDefault();
    var html = '<div class="title">Как открыть счет в «Казпочте»</div><div class="content">Обратитесь в ближайшее отделение «Казпочты», предъявите удостоверение или паспорт и оплатите 300 тг за операцию открытия счета. Операция занимает 10 минут.</div>';
      showPopup(html, 550, 0, "kazpost-info");
  });

  $(".js-pay-type").click(function(){
    var id = $(this).data("value");
    $(".types > div").hide();
    $("#"+id).show();
    $(".js-pay-type").removeClass("check-button--active");
    $(this).addClass("check-button--active");

    if (id == "card"){
      if (!cards.length){
        $(".btns").addClass('hide');
      }else{
        $("#reg_card_cancel").click();
      }
    }else{
      $(".btns").removeClass('hide');
    }
  });
    
  $("#reg_card").click(function(){
    $(this).hide();
    $(".btns").addClass('hide');
    $("#reg_card_cancel").show();
    //зареган должен быть
    fp.get(function(result, components){
      components = ModifyDataFP(components);
      $.post('/index.php?c=member&m=logsactions', {type: 'reg_card', sn: '_action_id_reg_card', fp: {hash: result, components: components}}, function(data){});
    });
    $(".block-iframe").html('<div class="sub-title title-card">Добавление новой карты</div><iframe src="/index.php?c=payments&m=cardregistration" onload="$(\'.preloader-iframe\').remove();"></iframe><div class="preloader-iframe"><div class="preload-image"></div></div>').show();
  });
    
  $("#reg_card_cancel").click(function(){
    defaultElems();
    getListCards();
  });
    
  setEventElems();
    
  $(".js-iban-field").change(function(){
    checkIbanCode();
  }).on('paste', function(e){
    e.preventDefault();
    var text = (e.originalEvent || e).clipboardData.getData('text/plain');
    $(this).val(text.replace(/\s/g, "")).change();
  });
    
  $("#continue").click(function(){
    var id = $(".types > div:visible").attr("id");
    var param = '';
    if (id == "card"){
      param = $('input[type="radio"][name="card_id"]:checked').data("id");
      if (!param){
        showAlert('Пожалуйста выберите активную карту');
      }
    }else{
      param = checkIbanCode();
    }

    if (id && param){
      showLoad();
      if (type_method == "member"){
        queryExec('/index.php?c=member&m=getmoney', {type: id, val: param, ajax: 1, type_method: type_method});
      }else{
        fp.get(function(result, components){
          components = ModifyDataFP(components);
          queryExec('/index.php?c=member&m=makecredit', {type: id, val: param, type_method: type_method, fp: {hash: result, components: components}});
        });
      }
    }
  });
    
  getGeoLocation();
});

function queryExec(url, params){
  $.post(url, params, function(data){
    if (data.status == "OK" || data.status == "NOT_DATA_REG_CI"){
      window.location.href = data.location;
    }else if (data.status == "INVOICE_VAL_ERROR"){
      hideLoad();
      showAlert("Ошибка IBAN кода");
    }else if (data.status == "INVOICE_BANK_ID_ERROR"){
      hideLoad();
      showAlert("Не выбран банк, в котором открыта карта");
    }else if (data.status == "CARD_VAL_ERROR"){
      hideLoad();
      showAlert("Не выбрана активная карта");
    }else if (data.status == "TYPE_ERROR"){
      hideLoad();
      showAlert("Не выбран способ получения денежных средств");
    }else if (data.status == "ERROR"){
      console.log("ERROR");
    }
  }, 'json');
}

function checkIbanCode(){
  var id = $(".types > div:visible").attr("id");
  $("#iban_"+id).parent().removeClass('error success');
  var iban = $("#iban_"+id).val().replace(/\s/g, "");

  var is_valid = /^[0-9A-z]{20}$/.test(iban);

  if (id == "kazpost"){
    if (is_valid){
      var code = iban.substr(4,3);
      if (code != "563"){
        is_valid = false;
        $("#iban_"+id+"+.error-msg").html("Указаный IBAN не принадлежит Казпочте");
      }
    }else{
      $("#iban_"+id+"+.error-msg").html("Не верно указан IBAN номер");
    }
  }

  $("#iban_"+id).parent().addClass((is_valid ? 'success' : 'error'));
  return iban;
}

function defaultElems(){
  $("#reg_card_cancel").hide();
  $(".btns").removeClass('hide');
  $("#reg_card").show();
  $(".block-iframe").hide().html('');
}

function cardRemove(id){
  showLoad();
  $.post('/index.php?c=payments&m=removecards', {card_id: id}, function(data){
    hideLoad();
    if (data == "OK"){
      getListCards();
    }else{
      console.log("ERROR");
    }
    removePopup();
  });
}

function getListCards(){
  var html = "";
  $.post('/index.php?c=member&m=getlistcards', function(data){
    if (data){
      var first_card = 0;
      for (var k in data){
        html = html + '<div class="row">'+
                '<div class="control-group">'+
                    '<div class="box-radio">'+
                        '<label for="card'+k+'" class="deselect-text'+(parseInt(data[k]['confirmed'], 10) && !first_card ? ' active' : '')+'">'+
                            '<input autocomplete="off" data-id="'+data[k]['id']+'" id="card'+k+'" name="card_id" type="radio"'+(parseInt(data[k]['confirmed'], 10) && !first_card ? ' checked="checked"' : '')+' />'+
                            '<span></span> '+
                            '<div class="line text">'+data[k]['number'].replace(/^([0-9]{4})([0-9]{2})(\*{6})([0-9]{4})$/, "$1&nbsp;&nbsp;XXXX&nbsp;&nbsp;XXXX&nbsp;&nbsp;$4")+'</div>'+
                        '</label>'+
                    '</div>'+
                '</div> '+
                '<div class="control-group">'+
                    '<div class="controls"><a href="javascript:;" data-id="'+data[k]['id']+'" class="card-remove gray-local">Удалить</a></div>'+
                '</div> ';
                if (!parseInt(data[k]['confirmed'], 10)){
                  html = html + '<div class="control-group last-child">'+
                      '<div class="controls"><a href="javascript:;" data-id="'+data[k]['id']+'" class="card_activate local">Завершить активацию</a></div>'+
                  '</div>';
                }
            html = html + '</div>';
            if (parseInt(data[k]['confirmed'], 10) && !first_card){
              var first_card = 1;
            }
      }
      $(".card-numbers").html(html);
      if (data.length < settings['limit_cards']){
          $(".reg-links").removeClass("hide");
      }else{
          $(".reg-links").addClass("hide");
      }
      defaultElems();
      setEventElems();
    }
  }, 'json');
}

function setEventElems(){
  $('.card-numbers input[type=radio]').change(function(){
    $('.card-numbers input[type=radio]').parent('label').removeClass('active');
    $(this).parent('label').addClass('active');
  });

  $('.card_activate').click(function(){
    if (!$(this).hasClass('cancel')){
      var id = $(this).data("id");
      $('.card_activate').html("Завершить активацию").removeClass('cancel');
      $(this).html("Отменить активацию").addClass('cancel');
      $(".block-iframe").html('<div class="sub-title title-card">Завершение активации карты</div><iframe src="/index.php?c=payments&m=cardconfirm&card_id='+id+'" onload="$(\'.preloader-iframe\').remove();"></iframe><div class="preloader-iframe"><div class="preload-image"></div></div>').show();
      $(".reg-links").addClass('hide');
      $(".btns").addClass('hide');
    }else{
      $(this).html("Завершить активацию").removeClass('cancel');
      $("#reg_card_cancel").click();
      $(".reg-links").removeClass('hide');
      $(".btns").removeClass('hide');
    }
  });

  $(".card-remove").click(function(){
    var id = $(this).data("id");
    var html = '<div class="title">Удаление карты</div>'+
                '<div class="content">Вы действительно хотите удалить карту?</div>'+
                '<div class="btns">'+
                    '<a id="yes" onclick="cardRemove('+id+');" class="enter-btn square krayola" href="javascript:;">Да</a>'+
                    '<a class="enter-btn white square" href="javascript:;" onclick="removePopup();">Нет</a>'+
                '</div>';

    showPopup(html, 450, 0, "inform");
  });
}
