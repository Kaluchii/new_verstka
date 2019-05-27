$(function () {

    $('.js_menu_button').on('click', function (e) {
        toggleMenu();
    });

    $('.js_menu_fade').on('click', function (e) {
        toggleMenu();
    });

    $(window).on('resize', function (e) {
        if ($(window).width() > 1024) {
            closeMenu();
        }
    });


    function toggleMenu () {
        if ($('.js_mobile_menu').hasClass('mobile-menu--show')) {
            closeMenu();
        } else {
            openMenu();
        }
    }


    function closeMenu () {
        $('.js_menu_button').removeClass('hamburger--open');
        $('.js_mobile_menu').removeClass('mobile-menu--show');
        $('.js_menu_fade').stop().fadeOut(300);
        $('html, body').removeClass('stop-body-scroll');
    }


    function openMenu () {
        $('.js_menu_button').addClass('hamburger--open');
        $('.js_mobile_menu').addClass('mobile-menu--show');
        $('.js_menu_fade').stop().fadeIn(300);
        $('html, body').addClass('stop-body-scroll');
    }

});