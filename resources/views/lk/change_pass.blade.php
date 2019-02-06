@extends('layout')
@section('content')
    <main class="personal-area">
        <div class="personal-area__container">
            <div class="personal-area__menu menu">
                <ul class="menu__list">
                    <li class="menu__item"><a href="/" class="menu__link link">Личные данные</a></li>
                    <li class="menu__item"><a href="/loan_history" class="menu__link link">История займов</a></li>
                    <li class="menu__item is-active"><a href="/change_pass" class="menu__link link">Смена пароля</a></li>
                </ul>
            </div>
            <div class="personal-area__small-title title-l2">Смена пароля</div>
            <div class="personal-area__form-with-info form-with-info">
                <div class="form-with-info__form col-form">
                    <div class="col-form__row field js_field">
                        <div class="field__name">Текущий пароль</div>
                        <label class="field__input-wrap js_field_wrapper">
                            <input type="text" class="field__input input js_field_input" placeholder="Введите текущий пароль" tabindex="1">
                            <span class="field__alert js_field_alert">Пароль неверный</span>
                        </label>
                    </div>
                    <div class="col-form__row field js_field">
                        <div class="field__name">Новый пароль</div>
                        <label class="field__input-wrap js_field_wrapper">
                            <input type="text" class="field__input input input--pass js_field_input" tabindex="2">
                            <span class="field__alert js_field_alert">Пароль должен быть не короче 8 символов, содержать заглавные буквы и цифры</span>
                            <span class="field__show-pass js_field_pass_switch"></span>
                        </label>
                    </div>
                    <div class="col-form__row field js_field">
                        <div class="field__name">Новый пароль еще раз</div>
                        <label class="field__input-wrap js_field_wrapper">
                            <input type="password" placeholder="Повторите пароль" class="field__input input input--pass js_field_input" tabindex="3">
                            <span class="field__alert js_field_alert">Пароли не совпадают</span>
                            <span class="field__show-pass js_field_pass_switch"></span>
                        </label>
                    </div>
                    <div class="col-form__row">
                        <button class="col-form__btn button button--t-yellow button--s-full-on-small" tabindex="4"><span class="button__text">Сменить пароль</span></button>
                    </div>
                </div>
                <div class="form-with-info__info alarm-info">
                    <p class="alarm-info__text">
                        <span class="bold">Важно!</span> <br>
                        Надежный пароль убережет вас от мошенников и займов, оформленных на вас без вашего согласия.
                    </p>
                    <p class="alarm-info__text">
                        Пароль должен содержать не менее 8 символов, включать цифры и заглавные буквы.
                    </p>
                </div>
            </div>
        </div>
    </main>
@endsection