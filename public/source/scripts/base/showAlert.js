$(function () {

    initializePopup({id: 'alert_popup', src: '.js_alert_popup'});

    window.showAlert = function (text, title, btnText) {
        title = (title ? title : 'Внимание');
        btnText = (btnText ? btnText : 'Закрыть');

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

});