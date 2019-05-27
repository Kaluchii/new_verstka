@section('popup_alert')
    <div class="popup js_alert_popup">
        <div class="popup__container" role="alert">
            <div class="popup__title title-l2">Внимание</div>
            <div class="popup__text">
                Инструкции по смене пароля были отправлены
                на ваш адрес электронной почты.
            </div>
            <hr class="popup__hr">
            <div class="popup__btn-wrap">
                <button type="button" class="popup__btn button button--t-yellow button--s-medium button--s-full-on-small js_close_popup"><span class="button__text">Закрыть</span></button>
            </div>
        </div>
        <button type="button" class="popup__close js_close_popup" aria-label="Закрыть окно">Закрыть окно</button>
        <button type="button" class="popup__close-x js_close_popup" aria-label="Закрыть окно"></button>
    </div>
@endsection