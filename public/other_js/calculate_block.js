var stepPrice = 1000;
var sliderNum = 2;
var promoInfo = false;
var block_html = '';
$(document).ready(function () {

    block_html = $('.calculate-block__sub-text--mobile').html();

    for (var k in settings) {
        if (!isNaN(settings[k])) {
            settings[k] = settings[k] - "";
        }
    }

    $('.slides-block').bxSlider({
        controls: false,
        auto    : false
    });

    // Подсказка про пролонгацию на мобильных
    $('.prolongation-info__link, .where-promocode__link').on('click', function (event) {
        if( $('.close-background-black').length === 0 ) {
            $('body').append('<div id="loading" class="close-background-black"></div>');
            $(this).closest('.prolongation-info, .where-promocode').addClass('open');
        }else{
            $('.prolongation-info, .where-promocode').removeClass('open');
            $('.close-background-black').remove();
        }
    });
    $('body').on('click', '.close-background-black', function () {
        $('.prolongation-info, .where-promocode').removeClass('open');
        $(this).remove();
    });

    $('#mobile-summ').on('click', function (event) {
        var min_sum = settings.min_sum;
        var max_sum  = settings.max_sum;
        var sum_html = '<li class="popup__list-item js-popup-sum" onclick="sumPopupClose(this);" data-value="'+min_sum+'">' + formatPrice(min_sum, 'f', false) + '</li>';
        var $i       = 10000;
        while ($i <= max_sum) {
            sum_html += '<li class="popup__list-item js-popup-sum" onclick="sumPopupClose(this);" data-value="'+$i+'" >' + formatPrice($i, 'f', false) + '</li>';
            $i += 5000;
        }
        if(max_sum < settings.max_sum_approved){
            sum_html += '<li class="popup__list-item--notify">'+(is_logined ? 'Доступна сумма до '+formatPrice(max_sum, "s", false) : 'Свыше '+formatPrice(max_sum, "s", false)+' со второго займа')+'</li>'
        }else{
            sum_html += '<li></li>'
        }
        var html = '<p class="popup__title">Сумма займа</p><ul class="popup__list">' +
            sum_html +
            '</ul>';
        showPopup(html, 840, 0, 'select_calc');
    });
    $('#mobile-days').on('click', function (event) {
        var min_days = settings.min_days;
        var max_days  = settings.max_days;
        var days_html = '';
        $i = min_days;
        while ($i <= max_days) {
            days_html += '<li class="popup__list-item js-popup-days" onclick="daysPopupClose(this);" data-value="'+$i+'">' + $i+' '+declension($i,['день','дня','дней'])+'</li>';
            $i++;
        }
        days_html += '<li></li>';
        var html = '<p class="popup__title">Срок займа</p><ul class="popup__list">' +
            days_html +
            '</ul>';
        showPopup(html, 840, 0, 'select_days');
    });

    var curDate = new Date();
    $("#term").html(new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate() + settings.min_days).getDate());
    var cur_slider_val_1 = settings.default_sum;
    cur_slider_val_1     = (cur_slider_val_1 < settings.min_sum ? settings.min_sum : cur_slider_val_1);

    var cur_slider_val_2 = settings.default_days;
    cur_slider_val_2     = (cur_slider_val_2 < settings.min_days ? settings.min_days : cur_slider_val_2);

    $("#slider_amount").slider({
        range  : "min",
        min    : settings.min_sum,
        max    : settings.max_sum_approved,
        value  : cur_slider_val_1,
        step   : stepPrice,
        animate: false,
        slide  : function (e, ui) {
            changeSliderAmount(ui.value);
        },
        change : function (e, ui) {
            changeSliderAmount(ui.value);
        },
        start  : function (e, ui) {
            $(e.target).closest('.row').addClass('active');
        },
        stop   : function (e, ui) {
            $(e.target).closest('.row').removeClass('active');
        }
    });


    $("#slider_days").slider({
        range  : "min",
        min    : settings.min_days,
        max    : settings.max_days,
        value  : cur_slider_val_2,
        step   : 1,
        animate: false,
        slide  : function (e, ui) {
            changeSliderDays(ui.value);
        },
        change : function (e, ui) {
            changeSliderDays(ui.value);
        },
        start  : function (e, ui) {
            $(e.target).closest('.row').addClass('active');
        },
        stop   : function (e, ui) {
            $(e.target).closest('.row').removeClass('active');
        }
    });

    $('#slider_amount').slider('value', cur_slider_val_1);
    $('#slider_days').slider('value', cur_slider_val_2);

    $('input[name="amount"]').keydown(function (e) {
        var key  = e.keyCode;
        var keys = [8, 9, 13, 35, 36, 37, 38, 39, 40, 46];
        if (jQuery.inArray(key, keys) > -1 || (key >= 48 && key <= 57) || (key >= 96 && key <= 105)) {
            if (e.keyCode == 13) {
                e.preventDefault();
                var val = $(this).val();
                changePriceInput(val);
            }
        } else {
            e.preventDefault();
        }
    }).focus(function () {
        $(this).val($(this).val().replace(" ", "")).select();
    }).blur(function () {
        var val = $(this).val();
        changePriceInput(val);
    });


    $('input[name="days"]').keydown(function (e) {
        var key  = e.keyCode;
        var keys = [8, 9, 13, 35, 36, 37, 38, 39, 40, 46];
        if (jQuery.inArray(key, keys) > -1 || (key >= 48 && key <= 57) || (key >= 96 && key <= 105)) {
            if (e.keyCode == 13) {
                e.preventDefault();
                var val = $(this).val();
                changeDayInput(val);
            }
        } else {
            e.preventDefault();
        }
    }).focus(function () {
        $(this).select();
    }).blur(function () {
        var val = $(this).val();
        changeDayInput(val);
    });

    $(".submit").click(function (e) {//class selector change
        if (!(typeof ban_credit != 'undefined' && ban_credit && parseInt(ban_credit.ban, 10))) {
            var price = $('input[name="amount"]').val().replace(" ", "");
            if (price > settings['max_sum']/* && block_point*/) {
                showAlert($(".attention").html());
            } else {
                showLoad();
                $('input[name="amount"]').val(price);
                $('#form_calculate').submit();
            }
        }
        e.preventDefault();
    });

    if ($("#promocode").length) {
        $("#promocode").keydown(function (e) {
            $("#promocode").removeClass('error');
            setTimeout(function ($elem) {
                if ($($elem).val().length >= 4) {
                    $(".block-promocode .enter-btn").removeClass('hide');
                } else {
                    $(".block-promocode .enter-btn").addClass('hide');
                }
            }, 0, $(this));

            if (e.keyCode == 13) {
                getPromoCode();
                e.preventDefault();
                return false;
            }
        });
    }
});

function daysPopupClose(elem) {
    changeDayInput($(elem).data('value'));
    removePopup('select_days')
}

function sumPopupClose(elem) {
    changePriceInput($(elem).data('value')+'');
    removePopup('select_calc')
}

function changeDayInput(val) {
    var day = parseInt(val, 10);

    if (day < settings.min_days || !val) {
        day = settings.min_days;
    }

    if (day > settings.max_days) {
        day = settings.max_days;
    }

    $("#slider_days").slider("value", day);
}

function changePriceInput(val) {
    val       = val.replace(" ", "");
    var price = parseInt(val, 10);

    if (price < settings.min_sum || !val) {
        price = settings.min_sum;
    }

    if (price > settings.max_sum_approved) {
        price = settings.max_sum_approved;
    }


    var r     = price / stepPrice;
    var _frac = r % 1;
    var _int  = r - _frac;
    if (_frac) {
        price = (_int + (_frac < 0.5 ? 0 : 1)) * stepPrice;
    }

    $('input[name="amount"]').val(formatPrice(price));
    $("#slider_amount").slider("value", price);
}

function changeSliderDays(days) {
    $('input[name="days"]').val(days);
    $('input[name="days"] + .adt-inf').html(declension(days, ['день', 'дня', 'дней']));
    // $(".mobile-days > div").html(days + " " + declension(days, ['день', 'дня', 'дней']));
    var amount      = parseInt($("#slider_amount").slider("value"), 10);
    var percent     = amount * credit_percent;
    var return_cash = Math.round(amount + percent * days);

    var curDate = new Date();
    var monthes = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    var dt      = new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate() + days);

    $("#term").html(dt.getDate() + " " + monthes[dt.getMonth()]);
    $("#return").html(formatPrice(return_cash, 's', true));
    // Подсказка над слайдером
    $('#slider_days .ui-slider-handle').attr('data-days', days + ' дней');
    $('.mobile__days').text(days + ' дней');

    //================
    $('.js-mobile-return').text(formatPrice(return_cash, 's', false));
    $('.js-mobile-date').text(dt.getDate() + " " + monthes[dt.getMonth()]);
    //=================

    $('.days-visible-block').text(days + ' ' + declension(days, ['день', 'дня', 'дней']));

    setPromoCode();
}

function changeSliderAmount(price) {
    var amount = parseInt(price, 10);
    $('input[name="amount"]').val(formatPrice(amount));
    var percent     = amount * credit_percent;
    var days        = parseInt($("#slider_days").slider("value"), 10);
    var return_cash = Math.round(amount + percent * days);


    // Убрал 's' параметр
    $("#take .inf").html(formatPrice(amount, 's', true));
    // $(".mobile-price > div").html(formatPrice(amount, 's', true));
    $("#return").html(formatPrice(return_cash, 's', true));
    //-------------------
    // Подсказка над слайдером
    $('#slider_amount .ui-slider-handle').attr('data-amount', amount.toLocaleString() + ' тг');
    $('.mobile__summ').text(formatPrice(amount,'s', false));


    //=========
    $('.js-mobile-take').text(formatPrice(amount,'s', false));
    $('.js-mobile-return').text(formatPrice(return_cash, 's', false));
    //=========

    $('.summ-visible-block').text(formatPrice(amount, 's', false));

    setPromoCode();


    if (price > settings['max_sum']/* && parseInt(block_point, 10)*/) {//Допилить
        $(".calculate-block").addClass("block-point");
        $('.calculate-block__sub-text--mobile').html( block_html );
    }else{
        $(".calculate-block").removeClass("block-point");
        $('.calculate-block__sub-text--mobile').html('<span class="calculate-block__highlight">Досрочное погашение без штрафа</span>');
    }

}

function getPromoCode() {
    var promo = $("#promocode").val();
    if (promo && !$(".block-promocode .enter-btn").hasClass('hide')) {
        $("#promocode").removeClass('error');
        $.post('/index.php?c=member&m=getpromocode', {promocode: promo}, function (data) {
            if (data.status == "OK") {
                promoInfo = data.promo;
                setPromoCode();
            } else if (data.status == "OLD") {
                $("#promocode").addClass('error');
                $(".js_promo_status").text('Код устарел');
            } else {
                $("#promocode").addClass('error');
                $(".js_promo_status").text('Неверный код');
            }
        }, 'json');
    } else {
        $(".block-promocode .enter-btn").addClass('hide');
    }
}


function setPromoCode() {
    if (promoInfo) {
        var amount = parseInt($('input[name="amount"]').val().replace(' ', ''), 10);
        var days   = parseInt($('input[name="days"]').val(), 10);

        var log = true;

        if (parseInt(promoInfo.max_days, 10)) {
            log = log && days <= parseInt(promoInfo.max_days, 10);
        }

        if (parseInt(promoInfo.min_days, 10)) {
            log = log && days >= parseInt(promoInfo.min_days, 10);
        }

        if (parseFloat(promoInfo.min_sum)) {
            log = log && amount >= parseFloat(promoInfo.min_sum);
        }

        if (parseFloat(promoInfo.max_sum)) {
            log = log && amount <= parseFloat(promoInfo.max_sum);
        }

        if (log) {
            $(".promocode-field").hide();
            $(".promocode-info").show();
            var percent     = amount * credit_percent * days;
            percent         = percent - percent * promoInfo.percent;
            var return_cash = Math.round(amount + percent);

            percent      = amount * credit_percent;
            var old_cash = Math.round(amount + percent * days);
            //Исправил две нижние строки
            $('.js_promo_answer').addClass('info-active');
            $('.js_promo_answer_text').html('Промо-код применен, <span class="no-wrap text-highlight">скидка '+(promoInfo.percent*100)+'%</span>');

            $('.js-mobile-return').addClass('mobile-info__text--promocode').text(formatPrice(return_cash, 's', false));
            $('.js-mobile-return-old').css('display','block').text(formatPrice(old_cash, 's', false));

            $("#return").html(formatPrice(return_cash, 's', true) + '<span>' + formatPrice(old_cash, 's', true) + '<span>');
        } else {
            $("#promocode").addClass('error');
            console.log('Не подходит по условиям');
        }
    }
}

function cancelPromoCode() {
    $(".promocode-field").show();
    $(".promocode-info").hide();
    $("#promocode").val('');
    promoInfo = false;
    $('#slider_amount').slider('value', $('#slider_amount').slider('value'));

    $('.js-mobile-return').removeClass('mobile-info__text--promocode');
    $('.js-mobile-return-old').css('display', 'none');

    $('.promocode-info-mobile').removeClass('info-active');
    $(".block-promocode .enter-btn").addClass('no-active');
}