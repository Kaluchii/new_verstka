@extends('layout')
@section('content')
    <div class="personal-area">
        <div class="personal-area__container">
            <div class="personal-area__menu menu">
                <ul class="menu__list">
                    <li class="menu__item"><a href="/loan_overdue" class="menu__link link">Ваш займ</a></li>
                    <li class="menu__item"><a href="/" class="menu__link link">Личные данные</a></li>
                    <li class="menu__item"><a href="/loan_history" class="menu__link link">История займов</a></li>
                    <li class="menu__item is-active"><a href="/change_pass" class="menu__link link">Смена пароля</a></li>
                </ul>
            </div>
            <div class="personal-area__small-title">Смена пароля</div>
            <div class="personal-area__form-with-info form-with-info">
                <div class="form-with-info__form col-form">
                    <div class="col-form__row field">
                        <div class="field__name">Текущий пароль</div>
                        <div class="field__input-wrap">
                            <input type="text" class="field__input input" placeholder="текущий пароль" tabindex="1">
                            <div class="field__alert">Пароль неверный</div>
                        </div>
                    </div>
                    <div class="col-form__row field">
                        <div class="field__name">Новый пароль</div>
                        <div class="field__input-wrap">
                            <input type="text" class="field__input input" tabindex="2">
                            <div class="field__alert">Пароль должен быть не короче 8 символов, содержать заглавные буквы и цифры</div>
                            <div class="field__show-pass"></div>
                        </div>
                    </div>
                    <div class="col-form__row field">
                        <div class="field__name">Новый пароль еще раз</div>
                        <div class="field__input-wrap">
                            <input type="text" disabled placeholder="Повторите пароль" class="field__input input" tabindex="3">
                            <div class="field__alert">Пароли не совпадают</div>
                            <div class="field__show-pass"></div>
                        </div>
                    </div>
                    <div class="col-form__row">
                        <button class="col-form__btn button button--yellow button--big-in-small" tabindex="4"><span class="button__text">Сменить пароль</span></button>
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
    </div>
@endsection