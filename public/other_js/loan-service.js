$(document).ready(function () {

    $('.loan-service-slider').slider({
        max: 6,
        min: 3,
        value: 3,
        range: 'min',
        animate: "fast",
        step: 1,
        slide: function (e, ui) {
            // Месяца\ Месяцев\ дописать.
            $('.loan-service-slider .ui-slider-handle').attr('data-tooltip', ui.value+' '+declension(ui.value,['месяц','месяца','месяцев']));
            $('.js-restruct-date').text(ui.value+' '+declension(ui.value,['месяц','месяца','месяцев']));
        },
        change: function (e, ui) {
            // Месяца\ Месяцев\ дописать.
            $('.loan-service-slider .ui-slider-handle').attr('data-tooltip', ui.value+' '+declension(ui.value,['месяц','месяца','месяцев']));
            $('.js-restruct-date').text(ui.value+' '+declension(ui.value,['месяц','месяца','месяцев']));

        },
        create: function (e, ui) {
            $('.loan-service-slider .ui-slider-handle').attr('data-tooltip', 3+' '+declension(3,['месяц','месяца','месяцев']));
            $('.js-restruct-date').text(3+' '+declension(3,['месяц','месяца','месяцев']))
        }
    });
    $('#loan-service-slider-prolong').slider({
        max: 30,
        min: 5,
        value: 5,
        range: 'min',
        animate: "fast",
        step: 1,
        slide: function (e, ui) {
            // Месяца\ Месяцев\ дописать.
            $('#loan-service-slider-prolong .ui-slider-handle').attr('data-tooltip', ui.value+' '+declension(ui.value,['день','дней','дней']));
            var curDate = new Date();
            var monthes = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
            var dt = new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate()+ui.value);

            $('.js-prolong-date').text(dt.getDate() + " " + monthes[dt.getMonth()]);
        },
        change: function (e, ui) {
            // Месяца\ Месяцев\ дописать.
            $('#loan-service-slider-prolong .ui-slider-handle').attr('data-tooltip', ui.value+' '+declension(ui.value,['день','дня','дней']));
            var curDate = new Date();
            var monthes = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
            var dt = new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate()+ui.value);

            $('.js-prolong-date').text(dt.getDate() + " " + monthes[dt.getMonth()]);
        },
        create: function (e, ui) {
            $('#loan-service-slider-prolong .ui-slider-handle').attr('data-tooltip', 5+' '+declension(5,['день','дней','дней']));
            var curDate = new Date();
            var monthes = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
            var dt = new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate()+ui.value);

            $('.js-prolong-date').text(dt.getDate() + " " + monthes[dt.getMonth()]);
        }
    });
});