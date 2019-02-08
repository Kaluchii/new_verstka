@section('popup_forgot_step_2')
    <div class="popup js_forgot_popup_step_2">
        <div class="popup__container">
            <div class="popup__title title-l2">Восстановление пароля</div>
            <div class="popup__text">
                Код подтверждения отправлен по WhatsApp на номер <span class="nowrap">+7 777 248-48-10</span>.
                Если сообщение не пришло, код будет отправлен по SMS.
            </div>
            <form class="popup__form col-form">
                <div class="col-form__row field js_field">
                    <div class="field__name">Код из SMS</div>
                    <label class="field__input-wrap js_field_wrapper">
                        <input type="text" class="field__input input input--code js_field_input" placeholder="00000" maxlength="5">
                    </label>
                    <div class="field__under-input">Отправить повторно через <span class="js_timer">159</span></div>
                </div>
                <div class="col-form__row field js_field">
                    <div class="field__name">Новый пароль</div>
                    <label class="field__input-wrap js_field_wrapper">
                        <input type="text" class="field__input input input--pass js_field_input">
                        <span class="field__alert js_field_alert">Пароль должен быть не короче 8 символов, содержать заглавные буквы и цифры</span>
                        <a href="#display-pass" class="field__show-pass js_field_pass_switch"></a>
                    </label>
                </div>
                <div class="col-form__row field js_field">
                    <div class="field__name">Новый пароль еще раз</div>
                    <label class="field__input-wrap js_field_wrapper">
                        <input type="password" placeholder="Повторите пароль" class="field__input input input--pass js_field_input">
                        <span class="field__alert js_field_alert">Пароли не совпадают</span>
                        <a href="#display-pass" class="field__show-pass js_field_pass_switch"></a>
                    </label>
                </div>
                <div class="col-form__row">
                    <button class="col-form__btn button button--t-yellow button--s-full-on-small"><span class="button__text">Подтвердить</span></button>
                </div>
            </form>
        </div>
        <a href="#close" class="popup__close js_close_popup">Закрыть окно</a>
        <a href="#close" class="popup__close-x js_close_popup"></a>
    </div>
@endsection