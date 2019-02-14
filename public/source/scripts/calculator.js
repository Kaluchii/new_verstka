$(function () {
    const amountSlider = document.getElementsByClassName('.js_amount_slider'),
        termSlider = document.getElementsByClassName('.js_term_slider');

    noUiSlider.create(amountSlider, {
        start: [20, 80],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });

    noUiSlider.create(termSlider, {
        start: [20, 80],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });
});