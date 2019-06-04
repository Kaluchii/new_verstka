$(function (){

    var scale = $('.info-block__scale');


    $(window).on('scroll', function () {
            var scrollTop = $(document).scrollTop();
            console.log(scale.offset().top);

        if (scrollTop > $('.js_personal-area__info-block').offset().top) {
                $(scale).addClass('fixed');
            } else {
                $(scale).removeClass('fixed');
            }
        });

});