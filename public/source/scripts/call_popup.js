$(function () {

    let requestErrorTemplate =
        `<div class="popup js_fail_popup">
            <div class="popup__container">
                <div class="popup__title title-l2">Произошла ошибка</div>
                <div class="popup__text">
                    При запросе на сервер произошла ошибка. Попробуйте повторить действия. В случае повторения ошибки пожалуйста свяжитесь с тех.поддержкой.
                </div>
                <hr class="popup__hr">
                <div class="popup__btn-wrap">
                    <a href="#close" class="popup__btn button button--t-yellow button--s-medium button--s-full-on-small js_close_popup"><span class="button__text">Закрыть</span></a>
                </div>
            </div>
            <a href="#close" class="popup__close js_close_popup">Закрыть окно</a>
            <a href="#close" class="popup__close-x js_close_popup"></a>
        </div>`;

    easyPopup.setDefaultConfig({
        animationClass: 'ep-move-from-top',
        removalDelay: 300,
        ajax: {
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            requestErrorTemplate: requestErrorTemplate,
            preloaderRemovalDelay: 300
        }
    });

    let popups = [
        {
            id: 'alert_popup',
            src: '.js_alert_popup'
        },
        {
            id: 'history_popup',
            src: '.js_history_popup',
            type: 'ajax',
            ajax: {
                url: '/ajax-test'
            }
        },
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
        },
    ];

    easyPopup.addPopups(popups);


    window.showAlert = function (text, title, btnText) {
        title = (title ? title : "Внимание");
        btnText = (btnText ? btnText : "Закрыть");

        let html =
            `<div class="popup js_alert_popup">
                <div class="popup__container">
                    <div class="popup__title title-l2">${title}</div>
                    <div class="popup__text">${text}</div>
                    <hr class="popup__hr">
                    <div class="popup__btn-wrap">
                        <a href="#close" class="popup__btn button button--t-yellow button--s-medium button--s-full-on-small js_close_popup"><span class="button__text">${btnText}</span></a>
                    </div>
                </div>
                <a href="#close" class="popup__close js_close_popup">Закрыть окно</a>
                <a href="#close" class="popup__close-x js_close_popup"></a>
            </div>`;

        easyPopup.open('alert_popup', {
            src: html
        });
    };


    $('.js_open_history_popup').on('click', function (e) {
        e.preventDefault();
        easyPopup.open('history_popup');
    });


    $('.js_open_authorization_popup').on('click', function (e) {
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
    });





    $('body').on('click', '.js_close_popup', function (e) {
        e.preventDefault();
        easyPopup.close();
    });


});