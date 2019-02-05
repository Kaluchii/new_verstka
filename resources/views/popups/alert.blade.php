@section('popup_alert')
    <div class="popup js_alert_popup">
        <div class="popup__container">
            <div class="popup__title title-l2">Внимание</div>
            <div class="popup__text">
                Инструкции по смене пароля были отправлены
                на ваш адрес электронной почты.
            </div>
            <hr class="popup__hr">
            <div class="popup__close-btn-wrap">
                <a href="#" class="popup__close-btn button button--t-yellow button--s-medium button--s-full-on-small js_close_popup"><span class="button__text">Закрыть</span></a>
            </div>
        </div>
        <div class="popup__close js_close_popup">Закрыть окно</div>
        <div class="popup__close-x js_close_popup"></div>
    </div>
@endsection