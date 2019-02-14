@section('popup_offer_confirmation')
    <div class="popup js_offer_confirmation_popup">
        <div class="popup__container">
            <div class="popup__title title-l2">Подтверждение согласия&nbsp;с&nbsp;офертой</div>
            <div class="popup__text">
                Код отправлен на указанный номер по WhatsApp. Если сообщение не пришло,
                код будет отправлен по SMS. Введя код, вы соглашаетесь с условиями договора&nbsp;оферты.
            </div>
            <form class="popup__input-btn-row input-btn-row">
                <div class="input-btn-row__input-wrap">
                    <div class="input-btn-row__field field js_field">
                        <div class="field__name">Код из SMS</div>
                        <label class="field__input-wrap js_field_wrapper">
                            <input type="text" class="field__input input input--code js_field_input" placeholder="00000" maxlength="5">
                        </label>
                        <div class="field__under-input">Отправить повторно через <span class="js_timer">159</span></div>
                    </div>
                </div>
                <div class="input-btn-row__btn-wrap">
                    <button class="input-btn-row__btn button button--t-yellow button--s-full"><span class="button__text">Подтвердить</span></button>
                </div>
            </form>
        </div>
        <button type="button" class="popup__close js_close_popup" aria-label="Закрыть окно">Закрыть окно</button>
        <button type="button" class="popup__close-x js_close_popup" aria-label="Закрыть окно"></button>
    </div>
@endsection