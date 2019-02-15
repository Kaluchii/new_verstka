$(function () {
    const amountSlider = $('.js_amount_slider'),
        termSlider = $('.js_term_slider');

    amountSlider.slider({
        range  : "min",
        min    : 7000,
        max    : 150000,
        value  : 20000,
        step   : 1000,
        animate: false,
        /*slide  : function (e, ui) {
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
        }*/
        slide  : function (e, ui) {
            amountSlider.find('.ui-slider-handle').attr('data-amount', `${ui.value} тг`)
        },
        change : function (e, ui) {
            amountSlider.find('.ui-slider-handle').attr('data-amount', `${ui.value} тг`)
        },
        start  : function (e, ui) {
        },
        stop   : function (e, ui) {
        }
    });

    termSlider.slider({
        range  : "min",
        min    : 5,
        max    : 30,
        value  : 10,
        step   : 1,
        animate: false,
        /*slide  : function (e, ui) {
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
        }*/
    });


    $('.js_discount_item').on('click', function () {
        // var currentDiscount = regular_discounts[$(this).data('discountIndex')],
        //     term = currentDiscount.max_days,
        //     amount = parseInt($('input[name="amount"]').val().replace(' ', ''), 10);

        // cancelPromoCode();

        // $("#promocode").val(currentDiscount.promocode);
        // promoInfo = currentDiscount;
        // $('#slider_days').slider('value', term);

        $(this).siblings().removeClass('is-active');
        $(this).addClass('is-active');
        $('.js_discount_cancel').parent().removeClass('hide');
        // $('.js_loan_discount').text(currentDiscount.percent * 100);
        // $('.js_loan_term').text(term + ' ' + declension(term, ['день', 'дня', 'дней']));
        // $('.js_loan_sum').html(formatPrice(amount, 's', true));
        $('.js_discount_about').slideDown(300);
    });

});