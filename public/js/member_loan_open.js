var interval = "";
var _dt = false;
var debt = 0;

function daysPopupClose(elem) {
  var declension_days = ['день', 'дня', 'дней'];
  $('.js-prolongation-popup').text(elem + ' '+ declension(elem, declension_days));
  $("#days").val(elem);
  setProlongationInfo();
  removePopup('select_days', 'prolongation-modal')
}
function monthPopupClose(elem, owed, first_payment) {
  var declension_months = ['месяц', 'месяца', 'месяцев'];
  $('.js-select-restruct').text(elem + ' '+ declension(elem, declension_months));
  setMonthlyPayment(elem, owed, first_payment, declension_months);
  removePopup('select_month', 'restruct-modal')
}


function showPaymentList(){
  $('.js-payment-list').slideDown();
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

var iframeCloseInterval = "";
function checkCloseWindowLoan(service_type){
  iframeCloseInterval = setInterval(function(){
    $.post('/payments/checkcallback/', {credit_id: open_credit.id, service_type: service_type}, function(data){
      if (data.status){
        clearIntervalCI();
        window.location.reload();
      }
    }, 'json');
  }, 10000);
}

function clearIntervalCI(){
  if (iframeCloseInterval){
    clearInterval(iframeCloseInterval);
  }
}

function createPayBox(pay_type, service_type, credit_id){
  if ($(".box-payment").length && !($(".box-payment").data('pay-type') == pay_type && $(".box-payment").data('service-type') == service_type)){
    $('.box-payment').prev('.dashed-line').remove();
    $(".box-payment").remove();
    $(".payment-block__item--active").removeClass('payment-block__item--active');
  }

  if (!$(".box-payment").length){
    $('.payment-block__link[data-pay-type="'+pay_type+'"][data-service-type="'+service_type+'"]').parent().addClass('payment-block__item--active');
    var title = {
      "pay_credit": "Погашение займа",
      "prolongation": "Оплата пролонгации",
      "restruct": "Оплата реструктуризации"
    };

    var html = '<div class="dashed-line"></div>' +
    '<div class="box-payment" data-type="'+pay_type+'_'+service_type+'">'+
    '<div class="sub-title sub-title__no-line">'+title[service_type]+'</div>'+
    '<div class="block-payment">';
    clearIntervalCI();
    if ($('.cancel_service').length){ $('.cancel_service').show(); }

    if (!(restruct && restruct.payments)){
      checkCloseWindowLoan(service_type);
    }
    service_type = service_type.replace("pay_credit", "");
    switch (pay_type){
      case "card": {
        html = html + '<iframe src="/index.php?c=payments&m='+service_type+'payment&id='+credit_id+'" onload="$(\'.preloader-iframe\').remove();"></iframe><div class="preloader-iframe"><div class="preload-image"></div></div>';
      } break;
      case "qiwi_bill": {
        html = html + '<iframe src="/index.php?c=payments&m='+service_type+'paymentqiwi&id='+credit_id+'" onload="$(\'.preloader-iframe\').remove();"></iframe><div class="preloader-iframe"><div class="preload-image"></div></div>';
      } break;
      case "kassa24": {
        html = html + '<p><span class="bold">Терминалы Касса24</span></p>'+
        '<ul class="block-payment-steps">'+
        '<li>Выберите «Финансовые организации», найдите сервис «Дополучки.кз».</li>'+
        '<li>Введите номер телефона, указанный при оформлении займа.</li>'+
        '<li>Внесите в терминал сумму, необходимую для задолженности по займу или оплаты услуги.</li>'+
        '</ul>';
      } break;
      case "qiwi_wallet": {
        html = html + '<p><span class="bold">Оплата QIWI-кошельком</span></p>'+
        '<ul class="block-payment-steps">'+
          '<li>Войдите в личный кабинет на сайте QIWI.</li>'+
          '<li>Введите в поле поиска название сервиса Dopo.kz. После выбора сервиса, система перенесет вас к форме оплаты.</li>'+
          '<li>Введите номер телефона, который вы указали при подаче заявки на займ.</li>'+
          '<li>Укажите сумму, которую вы желаете внести в счет погашения или продления займа, нажмите кнопку «Оплатить»</li>'+
          '<li>Следуйте дальнейшим инструкциям QIWI, которые зависят от способа оплаты (карта или QIWI-счет).</li>'+
        '</ul>'+
        '<p><img class="block-payment-img" src="/images/qiwi_wallet.jpg" /></p>';
      } break;
      default: {
        html = html + '<p><span class="bold">Через терминал QIWI</span></p>'+
        '<ul class="block-payment-steps">'+
            '<li>Чтобы оплатить займ, выберите в главном меню терминала пункт «Оплата услуг»</li>'+
            '<li>Выберите раздел «Погашение кредитов/Финансовые услуги»</li>'+
            '<li>В разделе «Погашение кредитов» выберите «Онлайн кредитование»</li>'+
            '<li>Найти кнопку Dopo.kz</li>'+
            '<li>Введите номер телефона (который указан на Dopo.kz) и внесите сумму.</li>'+
        '</ul>'+
        '<p><span class="bold">Внимание!</span><br>В разделе оплаты указана максимальная сумма для оплаты через данного провайдера. Если сумма к погашению займа превышает указанный лимит, потребуется внести несколько платежей, не превышающих максимальную сумму.</p>'+
        '<p><a class="link" href="https://w.qiwi.com/replenish/map.action" target="_blank" rel="nofollow">Карта терминалов QIWI</a></p>';
      } break;
    }

    html = html + '</div>'+
    '</div>';
    $('.js-payment-list').after(html);
  }
    var target_top = $('.box-payment').offset().top;
}

function cancelService(credit_id, cancelMethod) {
  console.log(cancelMethod);
  showLoad();
  var fp = new Fingerprint2();
  fp.get(function (result, components) {
    $.post('/index.php?c=member&m=' + cancelMethod, {
      fp: {"hash": result, "components": components},
      credit_id: credit_id
    }, function (data) {
      if (data == "OK" || data == "NOT_ACTIVE_RESTRUCT") {
        window.location.reload()
      } else {
        console.log("ERROR");
      }
    });
  });
}

function showAgreement(type, popup_type){
  popup_type = (popup_type ? popup_type : "prolongation-modal");
  var fp = new Fingerprint2();
  fp.get(function(result, components){
    components = ModifyDataFP(components);
    $.post('/index.php?c=member&m=logsactions', {type: type, fp: {hash: result, components: components}}, function(data){});
  });

  var info = {
    "credit_id": open_credit.id,
    "info": {
      "prlng_days": $('#days').val(),
    }
  };

  if (type == "restruct-offer"){
    var count_month = parseInt($('#months').val(), 10);
    var date_end = new Date();
    date_end = new Date(date_end.setMonth(date_end.getMonth()+count_month));
    date_end = date_end.getFullYear()+"-"+(date_end.getMonth()+1)+"-"+date_end.getDate();

    info['info'] = {
      "restructuring_monthly_payment": $('#monthly_payment').val(),
      "restructuring_count_month": count_month,
      "restructuring_amount": $('#first_payment').val(),
      "restructuring_date_end": date_end,
    };
  }
  showLoad();
  $.post('/index.php?c=member&m=getagreement', {type: type, info: info}, function(data){
    hideLoad();
    showPopup(data, 1000, false, type, popup_type);
  });
}

// -------------------------------------------------------------------------------------------------------------------
// Реструктуризация
// -------------------------------------------------------------------------------------------------------------------

function createWinRestruct(){
  var declension_months = ['месяц', 'месяца', 'месяцев'];
  myClearInterval();
  var typeAgreement = "'restruct-offer'";
  var rest = parseInt(open_credit.rest, 10);
  var first_payment = Math.ceil(rest*rate_restruct);
  var owed = rest-first_payment;

  var client_max_month = Math.ceil(owed / (Math.round(open_credit.amount / 2)));
  client_max_month = (client_max_month < restruct_min_month ? restruct_min_month : client_max_month);
  client_max_month = (client_max_month > restruct_max_month ? restruct_max_month : client_max_month);

    var html = '<form id="restruct_form">' +
        '<input type="hidden" name="credit_id" value="'+open_credit.id+'" />' +
        '<input type="hidden" id="months" name="months" value="'+restruct_min_month+'" />'+
        '<input type="hidden" id="monthly_payment" name="monthly_payment" value="0" />'+
        '<input type="hidden" id="first_payment" name="first_payment" value="'+first_payment+'" />'+
        '<div class="box box--loan-service">' +
        '        <div class="box-inside loan-service">' +
        '            <h4 class="loan-service__title">Реструктуризация займа на <span></span></h4>' +
        '            <p class="loan-service__description">Начисление процентов и пени по займу останавливается. Задолженость оплачивается по частям. Для активации услуги, первый платеж необходимо внести в течение суток после оформления заявки на услугу. Он вычитается из суммы задолженности.</p>' +
        '            <div class="loan-service__wrap">' +
        '                <div class="loan-service__dropdown-wrap">' +
        '                   <label for="" class="loan-service__info-title">Реструктуризировать на срок</label>'+
        '                   <span class="loan-service__select mobile_only js-select-restruct">3 месяца</span>'+
        '                   <select class="loan-service__select-wrap" id="restruct_month">';
        for (var month = restruct_min_month; month <= client_max_month; month++){
          html = html + '     <option value="'+month+'">'+month+' '+declension(month, declension_months)+'</option>';
        }
        html = html + '     </select>'+
        '                </div>'+
        '                <div class="loan-service__info-wrap">' +
        '                    <div class="loan-service__info-1-4">' +
        '                        <span class="loan-service__info-title">Задолженость</span>' +
        '                        <span class="loan-service__info-data">'+formatPrice(open_credit.rest, 's')+'</span>' +
        '                    </div>' +
        '                    <div class="loan-service__info-1-4">' +
        '                        <span class="loan-service__info-title">Первый платеж</span>' +
        '                        <span class="loan-service__info-data">'+formatPrice(first_payment, 's')+'</span>' +
        '                    </div>' +
        '                    <div class="loan-service__info-1-4">' +
        '                        <span class="loan-service__info-title">Остаток</span>' +
        '                        <span class="loan-service__info-data">'+formatPrice(owed, 's')+'</span>' +
        '                    </div>' +
        '                    <div class="loan-service__info-1-4">' +
        '                        <span class="loan-service__info-title loan-service__info-title_payment"></span>' +
        '                        <span class="loan-service__info-data"><span class="loan-service__info-monthly--payment"></span> тг</span>' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '            <div class="loan-service__card-list">' +
        '             <ul class="credit-info__payment-card-list">' +
        '               <li class="credit-info__payment-card credit-info__payment-card--current">'+
        '                 <p class="payment-card__title">Сегодня</p>'+
        '                 <p class="payment-card__payment-info">'+
        '                   Первый платеж <br><span class="payment-card__bold no-wrap">'+formatPrice(first_payment, 's')+' тг</span>'+
        '                 </p>'+
        '                 <p class="payment-card__payment-info"></p>'+
        '               </li>'+
        '             </ul>' +
        '            </div>'+
        '            <div class="loan-service__payment">' +
        '                <div class="loan-service__cost-wrap">' +
        '                    <span class="loan-service__cost">Первый платеж: <span class="js-cost">'+formatPrice(first_payment, 's')+'</span></span>' +
        '                </div>' +
        '                <div class="loan-service__right-wrap">' +
        '                    <div class="loan-service__term-of-service no-space">' +
        '                        <div class="box-check">' +
        '                            <label for="restruct_rules" class="deselect-text">' +
        '                                <input autocomplete="off" id="restruct_rules" name="info[rules]" type="checkbox">' +
        '                                <span></span>' +
        '                                <div class="line text">Я принимаю <a href="javascript:;" onclick="showAgreement('+typeAgreement+', \'restruct-modal\')" class="local bold">условия оказания услуги</a></div>' +
        '                            </label>' +
        '                        </div>' +
        '                    </div>' +
        '                    <div class="loan-service__accept"><input type="submit" id="restruct_next" class="enter-btn square krayola" value="Продолжить" /></div>' +
        '                </div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</form>';

  showPopup(html, 1000, false, 'restruct-modal');


  if (is_touch_device()){
    $('.js-select-restruct').on('click', function () {
      var min_month = restruct_min_month;
      var days_html = '';
      $i = min_month;
      while ($i <= client_max_month) {
          days_html += '<li class="popup__list-item js-popup-month" onclick="monthPopupClose('+$i+', '+owed+', '+first_payment+');" data-value="'+$i+'">' + $i+' '+declension($i,['месяц','месяца','месяцев'])+'</li>';
          $i++;
      }
      days_html += '<li></li>';
      var html = '<p class="popup__title">Срок реструктуризации</p><ul class="popup__list">' +
          days_html +
          '</ul>';
      showPopup(html, 840, 0, 'select_month', 'restruct-modal');
    });
  }else{
    $('.loan-service__dropdown-wrap select').change(function () {
      setMonthlyPayment($(this).val(), owed, first_payment, declension_months);
    });
    $('.loan-service__dropdown-wrap select').selecter();
  }

  setMonthlyPayment(restruct_min_month, owed, first_payment, declension_months);

  $('#restruct_form').submit(function(e){
    e.preventDefault();
    if ($("#restruct_rules").length){
      if ($("#restruct_rules").is(":checked")){
        if (!$(".sms-confirm").length){
          showLoad();
          var fp = new Fingerprint2();
          fp.get(function(result, components){
            components = ModifyDataFP(components);
            $.post('/index.php?c=member&m=requestrestruct', {fp: {"hash": result, "components": components}, "credit_id": open_credit.id}, function(data){
              if (data == "OK"){
                hideLoad();
                createRestructFormApprove();
              }else{
                hideLoad();
                showAlert("Возникла ошибка, пожалуйста,  перезагрузите страницу и попробуйте еще раз.", false, false, false, 'restruct-modal');
              }
            }, 'json');
          });
        }
      }else{
        showAlert("Ознакомтесь с условиями сервиса", false, false, false, 'restruct-modal');
      }
    }
  });
}

function createRestructFormApprove(){
  var html = '<div class="sms-confirm">Мы отправили вам SMS с кодом-подтверждением. Введите его, чтобы реструктуризировать займ.'+
    '<div class="form-inline">'+
    '<div class="control-group">'+
    '<div class="controls small">'+
    '<input id="sms_code" placeholder="Код из SMS" autocomplete="off" type="text" name="sms_code" maxlength="5" />'+
    '<div class="error-msg min">Неверный код подтверждения</div>'+
    '</div>'+
    '</div>'+
    '<div class="control-group pull-right last-child">'+
    '<div class="controls small">'+
    '<a id="approve" class="enter-btn square krayola no-active" href="javascript:;">Подтвердить</a>'+
    '</div>'+
    '</div>'+
    '<div class="control-group inform-middle one-line last-child" id="code_sent">'+
    '<div class="controls">Код отправлен (<span>60</span>)</div>'+
    '</div>'+
    '<div class="control-group inform-middle one-line last-child" id="code_repeat">'+
    '<div class="controls"><a href="javascript:;" class="local link-bold">Получить код повторно</a></div>'+
    '</div>'+
    '</div>';


  $(".restruct-modal .loan-service__payment").html(html);
  setTimer();
  $("#code_repeat a").click(function(){
    showLoad();
    var fp = new Fingerprint2();
    fp.get(function(result, components){
      components = ModifyDataFP(components);
      $.post('/index.php?c=member&m=requestrestruct', {fp: {"hash": result, "components": components}, "credit_id": open_credit.id}, function(data){
        hideLoad();
        if (data == "OK"){
          setTimer();
        }
      }, 'json');
    });
  });

  $("#approve").click(function(){
    if (!$(this).hasClass('no-active')){
      $("#sms_code").parent().removeClass('error');
      $("#code_repeat .controls > div").remove();
      if ($("#sms_code").val()){
        showLoad();
        var fp = new Fingerprint2();
        fp.get(function(result, components){
          components = ModifyDataFP(components);
          var fp = {"hash": result, "components": components};
          var params = "&fp="+JSON.stringify(fp);
          $.post('/member/addrestruct/', $('#restruct_form').serialize()+params, function(data){
            if (data.status == "SMS_SUCCESS"){
              hideLoad();
              var next_date = new Date();
              next_date.setDate(next_date.getDate() + 1);
                var end_pay_dt = dateFormat(next_date, 1)+' '+addZero(next_date.getHours())+':'+addZero(next_date.getMinutes());
              $('.js-loan-open__service-info').html('<div class="restruct loan-open__payment-wait js-loan-open__payment-wait">Услуга реструктуризации займа ожидает оплаты <span class="no-wrap bold">до '+ end_pay_dt +'</span></div>');

              var cancelservicetype = "\\'cancelrestruct\\'";
              var btns = '<div class="loan-open__button"><a href="javascript:;" class="js-payment-button enter-btn krayola square" onclick="showPaymentList();">Оплатить реструктуризацию</a></div><div class="loan-open__button">'+
                '<a class="enter-btn square krayola  cancel_service" href="javascript:;" onclick="showConfirm(\'Вы действительно хотите отменить реструктуризацию?\', \'Отмена\', \'cancelService('+open_credit.id+', '+cancelservicetype+')\');">Отказаться от реструктуризации</a>'+
              '</div>';
              $(".js-loan-open__buttons-block").html(btns);

              var payment_block_html = '<div class="payment-block__title">Способ оплаты</div>'+
                '<ul class="payment-block__list">'+
                  '<li class="payment-block__item">'+
                    '<a href="javascript:;" data-pay-type="card" data-service-type="restruct" class="payment-block__link local" onclick="createPayBox(\'card\', \'restruct\', '+open_credit.id+');">Банковской картой</a>'+
                  '</li>'+
                  '<li class="payment-block__item">'+
                    '<a href="javascript:;" data-pay-type="qiwi_bill" data-service-type="" class="payment-block__link local" onclick="createPayBox(\'qiwi_bill\', \'restruct\', '+open_credit.id+');">Выставить счёт QIWI</a>'+
                  '</li>'+
                  '<li class="payment-block__item">'+
                    '<a href="javascript:;" data-pay-type="qiwi" data-service-type="prolongation" class="payment-block__link local" onclick="createPayBox(\'qiwi\', \'restruct\', '+open_credit.id+');">QIWI-терминал</a>'+
                  '</li>'+
                  '<li class="payment-block__item">'+
                    '<a href="javascript:;" data-pay-type="qiwi_wallet" data-service-type="prolongation" class="payment-block__link local" onclick="createPayBox(\'qiwi_wallet\', \'restruct\', '+open_credit.id+');">QIWI-кошелек</a>'+
                  '</li>'+
                  '<li class="payment-block__item">'+
                    '<a href="javascript:;" data-pay-type="kassa24" data-service-type="prolongation" class="payment-block__link local" onclick="createPayBox(\'kassa24\', \'restruct\', '+open_credit.id+');">Терминал Касса24</a>'+
                  '</li>'+
                '</ul>';


              $('.js-payment-list').html(payment_block_html).slideToggle();
              removePopup();
              createPayBox('card', 'restruct', open_credit.id);
            }else if (data.status == "SMS_LIMIT"){
              hideLoad();
              myClearInterval();
              $("#code_repeat .local").before("<div>Превышен лимит ввода смс кода.</div>");
              $("#code_repeat").show();
              $("#code_sent").hide();
            }else if (data.status == "SMS_FAILED"){
              hideLoad();
              $("#sms_code").parent().addClass('error');
            }else{
              console.log("ERROR");
            }
          }, 'json');
        });
      }else{
        $("#sms_code").parent().addClass('error');
      }
    }
  });

  $("#sms_code").keyup(function(e){
    if ($("#sms_code").val()){
      $("#approve").removeClass("no-active");
    }else{
      $("#approve").addClass("no-active");
    }
    if (e.keyCode == 13){
      $("#approve").click();
    }
  }).focus();
}

function updatePaymentBlock(type, credit_id){
  shielding_type = "'"+type+"'";
  var payment_block_html = '<div class="payment-block__title">Способ оплаты</div>' +
  '<ul class="payment-block__list">' +
    '<li class="payment-block__item">' +
      '<a href="javascript:;" data-pay-type="card" data-service-type="'+type+'" class="payment-block__link local" onclick="createPayBox(\'card\', '+shielding_type+', '+credit_id+');">Банковской картой</a>' +
    '</li>' +
    '<li class="payment-block__item">' +
      '<a href="javascript:;" data-pay-type="qiwi_bill" data-service-type="'+type+'" class="payment-block__link local" onclick="createPayBox(\'qiwi_bill\', '+shielding_type+', '+credit_id+');">Выставить счёт QIWI</a>' +
    '</li>' +
    '<li class="payment-block__item">' +
      '<a href="javascript:;" data-pay-type="qiwi" data-service-type="'+type+'" class="payment-block__link local" onclick="createPayBox(\'qiwi\', '+shielding_type+', '+credit_id+');">QIWI-терминал</a>' +
    '</li>' +
    '<li class="payment-block__item">' +
      '<a href="javascript:;" data-pay-type="qiwi_wallet" data-service-type="'+type+'" class="payment-block__link local" onclick="createPayBox(\'qiwi_wallet\', '+shielding_type+', '+credit_id+');">QIWI-кошелек</a>' +
    '</li>' +
    '<li class="payment-block__item">' +
      '<a href="javascript:;" data-pay-type="kassa24" data-service-type="'+type+'" class="payment-block__link local" onclick="createPayBox(\'kassa24\', '+shielding_type+', '+credit_id+');">Терминал Касса24</a>' +
    '</li>' +
  '</ul>';

  if (type == "prolongation"){
    var cancel_service_link = $('<a>').addClass('enter-btn square krayola payment-block__button payment-block__button--margin').attr("href", "javascript:;").attr("onclick", "showConfirm('Вы действительно хотите отменить продление?', 'Отмена', 'cancelService("+credit_id+", \\'cancelprolongation\\');');").html('Отказаться от продления');
  }

  if (type == "restruct"){
    var cancel_service_link = $('<a>').addClass('enter-btn square krayola payment-block__button payment-block__button--margin').attr("href", "javascript:;").attr("onclick", "showConfirm('Вы действительно хотите отменить реструктуризацию?', 'Отмена', 'cancelService("+credit_id+", \\'cancelrestruct\\');')").html('Отказаться от реструктуризации');
  }

  $('.payment-block').html(payment_block_html);
  if (cancel_service_link){
    $('.payment-block').append('<div class="payment-block__button-wrap"></div>');
    $('.payment-block__button-wrap').append(cancel_service_link);
  }
}

function setMonthlyPayment(value, owed, first_payment, declension_months){
  var decl = ['платеж', 'платежа', 'платежей'];
  $('.loan-service-slider .ui-slider-handle').attr('data-tooltip', value+' '+declension(value, declension_months));
  $('.loan-service__title span').html(value+' '+declension(value, declension_months));
  var monthly_payment = Math.ceil(owed / value);
  $('.loan-service__info-monthly--payment').html(formatPrice(monthly_payment));
  $('.loan-service__info-title_payment').html(value+' '+declension(value, decl)+" по");
  $('#monthly_payment').val(monthly_payment);
  $('#months').val(value);

  var schedule = '<ul class="credit-info__payment-card-list">';
  var is_current_payment = true;
  var cur_date = new Date();
  cur_date.setMonth(cur_date.getMonth());
  for (var month = 0; month <= value; month++){
    schedule = schedule + '<li class="credit-info__payment-card credit-info__payment-card--'+(is_current_payment ? "current" : "feature")+'">'+
                              '<p class="payment-card__title">'+(is_current_payment ? "Сегодня" : dateFormat(cur_date, 1))+'</p>'+
                              '<p class="payment-card__payment-info">'+
                                (is_current_payment ? "Первый платеж " : "Платеж ")+'<br><span class="payment-card__bold no-wrap">'+formatPrice((is_current_payment ? first_payment : monthly_payment))+' тг</span>'+
                              '</p>'+
                              '<p class="payment-card__payment-info"></p>'+
                            '</li>';
    is_current_payment = false;
    cur_date.setMonth(cur_date.getMonth()+1);
  }
  schedule = schedule + '</ul>';

  $('.loan-service__card-list').html(schedule);
}

// Конец реструктуризации

//Новая форма пролонгации
function createWinProlongation(){
  var declension_days = ['день', 'дня', 'дней'];
  myClearInterval();
  var next_date = new Date();
  next_date.setDate(next_date.getDate() + 1);
    var end_pay_dt = dateFormat(next_date, 1)+' '+addZero(next_date.getHours())+':'+addZero(next_date.getMinutes());

  if (parseInt(open_credit.approved, 10) == 1 && open_credit.prolongation_date && parseInt(open_credit.prolongation_active, 10)){
      _dt = new Date(open_credit.prolongation_date);
  }else if (parseInt(open_credit.approved, 10) == 1 && !parseInt(open_credit.overdue_credit, 10)){
      _dt = new Date(open_credit.date_to);
  }else{
      _dt = new Date(now_date);
  }

  debt = (parseFloat(open_credit.amount) + parseFloat(open_credit.amount)*parseFloat(open_credit.rate)*parseInt(open_credit.duration, 10))-parseInt(open_credit.returned, 10);

  var fine = Math.floor(parseFloat(open_credit.base_rest)*parseFloat(open_credit.rate_late))*prlng_min_days;
  var rate_overdue = Math.floor(parseFloat(open_credit.base_rest)*parseFloat(open_credit.rate_overdue))*prlng_min_days;
  var delay = debt + fine + rate_overdue + parseFloat(open_credit.penalty_val);

  var html = '<form id="prolongation_form">'+
    '<input type="hidden" name="credit_id" value="'+open_credit.id+'" />'+
    '<input type="hidden" id="days" name="days" value="'+prlng_min_days+'" />'+
    '<div class="popup-box">'+
      '<div class="prolongation-popup">'+
          '<div class="prolongation-popup__title">Продлить займ</div>'+
          '<p class="prolongation-popup__description">Если хотите погасить часть займа, укажите желаемую сумму в поле «Частичное погашение». Это сократит выплаты по займу.</p>'+
          '<div class="prolongation-popup__payment-row">'+

              '<div class="prolongation-popup__day-select">'+
                  '<label class="prolongation-popup__info-label">Продлить займ на </label>'+

                  '<span class="prolongation-popup__select-wrap-button js-prolongation-popup mobile-only">'+prlng_min_days+' '+declension(prlng_min_days, declension_days)+'</span>'+

                  '<div class="prolongation-popup__select-wrap ">'+
                      '<select name="" id="prolongation-days" autocomplete="off">';
                      for (var day = prlng_min_days; day <= prlng_max_days; day++){
                        html = html + '<option value="'+day+'">'+day+' '+declension(day, declension_days)+'</option>';
                      }
                      html = html + '</select>'+
                  '</div>'+
              '</div>'+
              '<div class="prolongation-popup__partial-redemption">'+
                  '<label class="prolongation-popup__info-label">Частичное погашение</label>'+
                  '<button class="enter-btn krayola square prolongation-button js-partial-payment">Хочу оплатить часть долга</button>'+
              '</div>'+

          '</div>'+
          '<div class="prolongation-popup__cost-block">'+
              '<div class="prolongation-popup__total-cost">'+
                  'Стоимость услуги: <span class="no-wrap js-service-cost"></span></div>'+
              '</div>'+
              '<div class="prolongation-popup__info-block">'+
                  '<p class="prolongation-popup__info-text">'+
                      'Займ продлевается до <span class="js-extend-to"></span><span class="js-rest"></span>'+
                  '</p>'+
                  '<p class="prolongation-popup__info-label mobile-only">Оплатите до '+ end_pay_dt +'</p>'+
              '</div>'+
          '</div>'+
          '<div class="prolongation-popup__payment js-prolongation-popup__payment">'+
              '<div class="prolongation-popup__left-wrap">'+
                  '<div class="box-check">'+
                      '<label class="deselect-text">'+
                          '<input autocomplete="off" id="rules" type="checkbox">'+
                          '<span></span>'+
                          '<div class="line text ">Я согласен с <a href="javascript:;"  class="local bold" onclick="showAgreement(\'prolongation-offer\')">офертой на продление Договора займа</a></div>'+
                      '</label>'+
                  '</div>'+
              '</div>'+
              '<div class="prolongation-popup__right-wrap">'+
                  '<div class="prolongation-popup__accept">'+
                      '<label class="prolongation-popup__info-label" for="#">Оплатите до '+ end_pay_dt +'</label>'+
                      '<input type="submit" id="next" class="enter-btn krayola square prolongation-button" value="Продолжить" />'+
                  '</div>'+
              '</div>'+
          '</div>'+
      '</div>'+
  '</div>'+
  '</form>';
  showPopup(html, 1200, false, 'prolongation-modal');

  if (is_touch_device()){
      $('.js-prolongation-popup').on('click', function () {
          var min_days = prlng_min_days;
          var max_days  = prlng_max_days;
          var days_html = '';
          $i = min_days;
          while ($i <= max_days) {
              days_html += '<li class="popup__list-item js-popup-days" onclick="daysPopupClose('+$i+');" data-value="'+$i+'">' + $i+' '+declension($i, declension_days)+'</li>';
              $i++;
          }
          days_html += '<li></li>';
          var html = '<p class="popup__title">Срок пролонгации</p><ul class="popup__list">' +
              days_html +
              '</ul>';
          showPopup(html, 840, 0, 'select_days');
      });
  }else{
      $('.prolongation-popup__day-select select').change(function(){
        $("#days").val($(this).val());
        setProlongationInfo();
      });
      $('.prolongation-popup__day-select select').selecter();
  }

  $(".js-partial-payment").click(function (){
    var parent = $(this).parent();
    $(this).remove();
    parent.append('<input placeholder="Введите сумму" type="text" class="prolongation-popup__partial-payment js-partial-payment-input" autocomplete="off" name="additional_amount" />');
    setEventPartialPayment();
  });

  setProlongationInfo();

  $('#prolongation_form').submit(function(e){
    e.preventDefault();
    if ($("#rules").length){
      if ($("#rules").is(":checked")){
        if (!$(".sms-confirm").length){
          showLoad();
          var fp = new Fingerprint2();
          fp.get(function(result, components){
            components = ModifyDataFP(components);
            $.post('/index.php?c=member&m=sendsmsprolongation', {fp: {"hash": result, "components": components}, "credit_id": open_credit.id}, function(data){
              if (data == "OK"){
                hideLoad();
                createFormApprove();
              }else if (data == "OVERDUE_CREDIT"){
                hideLoad();
                showAlert("Не возможно продлить просроченный займ", false, false, false, 'prolongation-modal');
              }else{
                console.log("ERROR");
              }
            }, 'json');
          });
        }
      }else{
        showAlert("Ознакомтесь с условиями сервиса", false, false, false, 'prolongation-modal');
      }
    }
  });
}

function setEventPartialPayment(){
  $(".js-partial-payment-input").change(function (){
    var adt_amount = $(this).val();
    $(this).removeClass("prolongation-popup__partial-payment--error prolongation-popup__partial-payment--success");
    var _class = "prolongation-popup__partial-payment--error";
    if (adt_amount){
      if (/^[0-9]{1,}$/.test(adt_amount)){
        _class = "prolongation-popup__partial-payment--success";
      }
      $(this).addClass(_class);
    }
    setProlongationInfo();
  }).keydown(function (e){
    if (e.keyCode == 13){
      e.preventDefault();
      e.stopPropagation();
    }
  });
}

function setProlongationInfo(){
  days = parseInt($("#days").val(), 10);
  var dt = new Date(_dt.getFullYear(), _dt.getMonth(), _dt.getDate()+days);
  $(".js-extend-to").html(dateFormat(dt, 1));
  var rest_info = "";

  $('#days').val(days);

  var adt_amount = $(".js-partial-payment-input").val();
  var is_adt_amount_success = /^[0-9]{1,}$/.test(adt_amount);
  adt_amount = (is_adt_amount_success ? parseInt(adt_amount, 10) : 0);
  var s = open_credit.base_rest*open_credit.rate*days + adt_amount;
  $(".js-service-cost").html(formatPrice(s, "s"));


  if (is_adt_amount_success){
    rest_info = open_credit.rest - adt_amount;
    rest_info = (rest_info > 0 ? rest_info : 0);
    rest_info = ", остаток задолженности "+formatPrice(rest_info, "s");
  }
  $('.js-rest').html(rest_info);
}

function createFormApprove(){
  var html = '<div class="sms-confirm">Мы отправили вам SMS с кодом-подтверждением. Введите его, чтобы продлить займ.'+
              '<div class="form-inline">'+
                  '<div class="control-group">'+
                      '<div class="controls small">'+
                          '<input id="sms_code" placeholder="Код из SMS" autocomplete="off" type="text" name="sms_code" maxlength="5" />'+
                          '<div class="error-msg min">Неверный код подтверждения</div>'+
                      '</div>'+
                  '</div>'+
                  '<div class="control-group pull-right last-child">'+
                      '<div class="controls small">'+
                          '<a id="approve" class="enter-btn square krayola no-active" href="javascript:;">Подтвердить</a>'+
                      '</div>'+
                  '</div>'+
                  '<div class="control-group inform-middle one-line last-child" id="code_sent">'+
                      '<div class="controls">Код отправлен (<span>60</span>)</div>'+
                  '</div>'+
                  '<div class="control-group inform-middle one-line last-child" id="code_repeat">'+
                      '<div class="controls"><a href="javascript:;" class="local link-bold">Получить код повторно</a></div>'+
                  '</div>'+
              '</div>';


  $(".prolongation-popup").append(html);
  $(".js-prolongation-popup__payment").remove();
  setTimer();
  $("#code_repeat a").click(function(){
    showLoad();
    var fp = new Fingerprint2();
    fp.get(function(result, components){
      components = ModifyDataFP(components);
      $.post('/member/sendsmsprolongation/', {fp: {"hash": result, "components": components}, "credit_id": open_credit.id}, function(data){
        hideLoad();
        if (data == "OK"){
          setTimer();
        }
      }, 'json');
    });
  });

  $("#approve").click(function(){
      if (!$(this).hasClass('no-active')){
          $("#sms_code").parent().removeClass('error');
          $("#code_repeat .controls > div").remove();
          if ($("#sms_code").val()){
              showLoad();
              var fp = new Fingerprint2();
              fp.get(function(result, components){
                components = ModifyDataFP(components);
                  var fp = {"hash": result, "components": components};
                  var params = "&fp="+JSON.stringify(fp);
                  $.post('/member/addprolongation/', $('#prolongation_form').serialize()+params, function(data){
                      if (data.status == "SMS_SUCCESS"){
                          hideLoad();
                          $(".block").remove();
                          $(".payment-block .enter-btn").remove();
                          var next_date = new Date();
                          next_date.setDate(next_date.getDate() + 1);
                          var end_pay_dt = dateFormat(next_date, 1)+' '+addZero(next_date.getHours())+':'+addZero(next_date.getMinutes());
                          $('.js-loan-open__service-info').html('<div class="restruct loan-open__payment-wait js-loan-open__payment-wait">Услуга продления займа ожидает оплаты <span class="no-wrap bold">до '+ end_pay_dt +'</span></div>');


                          var cancelservicetype = "\\'cancelprolongation\\'";
                          var btns = '<div class="loan-open__button"><a href="javascript:;" class="js-payment-button enter-btn krayola square" onclick="showPaymentList();">Оплатить продление</a></div><div class="loan-open__button">'+
                            '<a class="enter-btn square krayola  cancel_service" href="javascript:;" onclick="showConfirm(\'Вы действительно хотите отменить продление?\', \'Отмена\', \'cancelService('+open_credit.id+', '+cancelservicetype+')\');">Отказаться от продления</a>'+
                          '</div>';
                          $(".js-loan-open__buttons-block").html(btns);

                          var payment_block_html = '<div class="payment-block__title">Способ оплаты</div>'+
                            '<ul class="payment-block__list">'+
                              '<li class="payment-block__item">'+
                                '<a href="javascript:;" data-pay-type="card" data-service-type="prolongation" class="payment-block__link local" onclick="createPayBox(\'card\', \'prolongation\', '+open_credit.id+');">Банковской картой</a>'+
                              '</li>'+
                              '<li class="payment-block__item">'+
                                '<a href="javascript:;" data-pay-type="qiwi_bill" data-service-type="" class="payment-block__link local" onclick="createPayBox(\'qiwi_bill\', \'prolongation\', '+open_credit.id+');">Выставить счёт QIWI</a>'+
                              '</li>'+
                              '<li class="payment-block__item">'+
                                '<a href="javascript:;" data-pay-type="qiwi" data-service-type="prolongation" class="payment-block__link local" onclick="createPayBox(\'qiwi\', \'prolongation\', '+open_credit.id+');">QIWI-терминал</a>'+
                              '</li>'+
                              '<li class="payment-block__item">'+
                                '<a href="javascript:;" data-pay-type="qiwi_wallet" data-service-type="prolongation" class="payment-block__link local" onclick="createPayBox(\'qiwi_wallet\', \'prolongation\', '+open_credit.id+');">QIWI-кошелек</a>'+
                              '</li>'+
                              '<li class="payment-block__item">'+
                                '<a href="javascript:;" data-pay-type="kassa24" data-service-type="prolongation" class="payment-block__link local" onclick="createPayBox(\'kassa24\', \'prolongation\', '+open_credit.id+');">Терминал Касса24</a>'+
                              '</li>'+
                            '</ul>';


                          $('.js-payment-list').html(payment_block_html).slideToggle();
                          removePopup();
                          createPayBox('card', 'prolongation', open_credit.id);
                      }else if (data.status == "SMS_LIMIT"){
                        hideLoad();
                        myClearInterval();
                        $("#code_repeat .local").before("<div>Превышен лимит ввода смс кода.</div>");
                        $("#code_repeat").show();
                        $("#code_sent").hide();
                      }else if (data.status == "SMS_FAILED"){
                          hideLoad();
                          $("#sms_code").parent().addClass('error');
                      }else if (data.status == "EXIST_PROLONGATION"){
                        window.location.reload();
                      }else{
                          console.log("ERROR");
                      }
                  }, 'json');
              });
          }else{
              $("#sms_code").parent().addClass('error');
          }
      }
  });

  $("#sms_code").keyup(function(e){
    if ($("#sms_code").val()){
      $("#approve").removeClass("no-active");
    }else{
      $("#approve").addClass("no-active");
    }
    if (e.keyCode == 13){
      $("#approve").click();
    }
  }).focus();
}
//Конец пролонгации