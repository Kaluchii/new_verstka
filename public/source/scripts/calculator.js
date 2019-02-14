$(function () {
    const amountSlider = document.getElementsByClassName('js_amount_slider')[0],
        termSlider = document.getElementsByClassName('js_term_slider')[0];

    noUiSlider.create(amountSlider, {
        start: 20000,
        step: 1000,
        connect: true,
        tooltips: true,
        range: {
            'min': 7000,
            'max': 150000
        }
    });

    noUiSlider.create(termSlider, {
        start: 10,
        step: 1,
        connect: true,
        tooltips: true,
        range: {
            'min': 5,
            'max': 30
        }
    });
});