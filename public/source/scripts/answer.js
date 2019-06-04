$(function () {

    var questionTitle = $('.answer__question-list-title'),
        questionSubTitle = $('.answer__question-list-subtitle');

    questionTitle.on('click', function () {

        var ol = $(this).siblings('.answer__question-list'),
            allOl = questionTitle.siblings('.answer__question-list');

        allOl.not(ol).slideUp();
        $(this).addClass('is-active').removeClass('link');
        questionTitle.not(this).removeClass('is-active').addClass('link');

        ol.slideToggle();

    });

    questionSubTitle.on('click', function () {

        var textBlock = $(this).siblings('.answer__question-item-text'),
            allTextBlocks = questionSubTitle.siblings('.answer__question-item-text');

        allTextBlocks.not(textBlock).slideUp();
        $(this).addClass('is-active').removeClass('link');
        questionSubTitle.not(this).removeClass('is-active').addClass('link');

        textBlock.slideToggle();

    })

});