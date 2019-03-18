$(function () {

    const requestErrorTemplate =
        `<div class="popup js_fail_popup">
            <div class="popup__container">
                <div class="popup__title title-l2">Произошла ошибка</div>
                <div class="popup__text">
                    При запросе на сервер произошла ошибка. Попробуйте повторить действия. В случае повторения ошибки пожалуйста свяжитесь с тех.поддержкой.
                </div>
                <hr class="popup__hr">
                <div class="popup__btn-wrap">
                    <button type="button" class="popup__btn button button--t-yellow button--s-medium button--s-full-on-small js_close_popup"><span class="button__text">Закрыть</span></button>
                </div>
            </div>
            <button type="button" class="popup__close js_close_popup" aria-label="Закрыть окно">Закрыть окно</button>
            <button type="button" class="popup__close-x js_close_popup" aria-label="Закрыть окно"></button>
        </div>`;

    easyPopup.setDefaultConfig({
        animationClass: 'ep-move-from-top',
        removalDelay: 300,
        ajax: {
            requestErrorTemplate: requestErrorTemplate,
            preloaderRemovalDelay: 300
        }
    });


    $('body').on('click', '.js_close_popup', function (e) {
        e.preventDefault();
        easyPopup.close();
    });

    /*const popups = [
        {
            id: 'authorization_popup',
            src: '.js_authorization_popup'
        },
        {
            id: 'forgot_popup',
            src: '.js_forgot_popup_step_1'
        },
        {
            id: 'forgot_popup_step_2',
            src: '.js_forgot_popup_step_2'
        },
        {
            id: 'agreement_popup',
            src: '.js_agreement_popup'
        },
        {
            id: 'prolongation_popup',
            src: '.js_prolongation_popup'
        },
        {
            id: 'restructuring_popup',
            src: '.js_restructuring_popup'
        },
        {
            id: 'offer_confirmation_popup',
            src: '.js_offer_confirmation_popup',
            hidePrevious: true
        }
    ];

    easyPopup.addPopups(popups);*/


    /*$('.js_open_authorization_popup').on('click', function (e) {
        e.preventDefault();
        easyPopup.open('authorization_popup');
    });


    $('.js_open_forgot_popup_step_1').on('click', function (e) {
        e.preventDefault();
        easyPopup.open('forgot_popup');
    });


    $('.js_open_forgot_popup_step_2').on('click', function (e) {
        e.preventDefault();
        easyPopup.open('forgot_popup_step_2');
    });


    $('.js_open_alert_popup').on('click', function (e) {
        e.preventDefault();
        easyPopup.open('alert_popup');
    });


    $('.js_open_agreement_popup').on('click', function (e) {
        e.preventDefault();
        easyPopup.open('agreement_popup');
    });


    $('.js_open_prolongation_popup').on('click', function (e) {
        e.preventDefault();
        easyPopup.open('prolongation_popup');
    });


    $('.js_open_restructuring_popup').on('click', function (e) {
        e.preventDefault();
        easyPopup.open('restructuring_popup');
    });


    $('.js_open_offer_confirmation_popup').on('click', function (e) {
        e.preventDefault();
        easyPopup.open('offer_confirmation_popup');
    });*/


});