@section('popup_authorization')
    <div class="popup js_authorization_popup">
        <div class="popup__container">
            <div class="popup__title title-l2">Войти в кабинет</div>
            <form class="popup__form col-form">
                <div class="col-form__row col-form__row--with-clarification field js_field">
                    <div class="field__name">Телефон или эл. почта</div>
                    <div class="field__input-wrap js_field_wrapper">
                        <input type="text" class="field__input input js_field_input">
                        <div class="field__alert js_field_alert"></div>
                    </div>
                </div>
                <div class="col-form__row col-form__row--with-clarification field js_field">
                    <div class="field__name">Пароль</div>
                    <label class="field__input-wrap js_field_wrapper">
                        <input type="password" class="field__input input input--pass js_field_input">
                        <span class="field__alert js_field_alert">Пароль должен быть не короче 8 символов, содержать заглавные буквы и цифры</span>
                        <span class="field__show-pass js_field_pass_switch"></span>
                    </label>
                </div>
                <div class="col-form__row">
                    <button class="col-form__btn button button--t-yellow button--s-full"><span class="button__text">Войти</span></button>
                </div>
            </form>
            <div class="popup__2-col">
                <div class="popup__link-wrap">
                    <a href="#" class="popup__link link js_open_forgot_popup_step_1">Я забыл пароль</a>
                </div>
                <div class="popup__link-wrap">
                    <a href="#" class="popup__link link">Регистрация</a>
                </div>
            </div>
        </div>
        <a href="#close" class="popup__close js_close_popup">Закрыть окно</a>
        <a href="#close" class="popup__close-x js_close_popup"></a>
    </div>
@endsection