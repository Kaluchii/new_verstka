@section('popup_forgot_step_1')
    <div class="popup js_forgot_popup_step_1">
        <div class="popup__container">
            <div class="popup__title title-l2">Забыли пароль?</div>
            <div class="popup__text">
                Введите номер телефона или электронную почту,
                указанную при регистрации.
            </div>
            <form class="popup__input-btn-row input-btn-row">
                <div class="input-btn-row__input-wrap">
                    <div class="input-btn-row__field field js_field">
                        <div class="field__name">Телефон или эл. почта</div>
                        <label class="field__input-wrap js_field_wrapper">
                            <input type="text" class="field__input input js_field_input">
                        </label>
                    </div>
                </div>
                <div class="input-btn-row__btn-wrap">
                    <button class="input-btn-row__btn button button--t-yellow button--s-full js_open_forgot_popup_step_2"><span class="button__text">Восстановить</span></button>
                </div>
            </form>
        </div>
        <a href="#close" class="popup__close js_close_popup">Закрыть окно</a>
        <a href="#close" class="popup__close-x js_close_popup"></a>
    </div>
@endsection