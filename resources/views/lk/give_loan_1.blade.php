@extends('layout')
@section('content')
    <div class="personal-area">
        <div class="personal-area__container">
            <div class="personal-area__title personal-area__title--loan-steps title-l2">Займ <span class="nowrap">35 000 тг</span> <span class="text-highlight nowrap">со скидкой 25%</span><br><span class="nowrap">до 12 августа</span></div>
            <div class="personal-area__loan-steps loan-steps">
                <div class="loan-steps__item loan-steps__item--current">
                    <span class="loan-steps__item-num">1</span>
                    <span class="loan-steps__item-name">Телефон и почта</span>
                </div>
                <div class="loan-steps__item">
                    <span class="loan-steps__item-num">2</span>
                    <span class="loan-steps__item-name">Личные данные</span>
                </div>
                <div class="loan-steps__item">
                    <span class="loan-steps__item-num">3</span>
                    <span class="loan-steps__item-name">Способ получения</span>
                </div>
            </div>
            <div class="personal-area__small-title personal-area__small-title--border-top personal-area__small-title--center title-l2">Регистрация</div>
            <form class="personal-area__form col-form">
                <div class="col-form__row col-form__row--with-clarification field">
                    <div class="field__name">Эл. почта</div>
                    <div class="field__input-wrap">
                        <input type="email" class="field__input input">
                        <div class="field__clarification">Впишите адрес внимательно. На почту вы получите документы по оформлению займа.</div>
                        <div class="field__alert"></div>
                    </div>
                </div>
                <div class="col-form__row col-form__row--with-clarification field">
                    <div class="field__name">Номер мобильного</div>
                    <div class="field__input-wrap">
                        <input type="text" class="field__input input">
                        <div class="field__clarification">Только личный номер. На него вы получите SMS-подтверждение.</div>
                        <div class="field__alert"></div>
                    </div>
                </div>
                <div class="col-form__row col-form__row--btn-text">
                    <p class="col-form__text">Уже зарегистрированы? <br> <a href="#" class="link">Войдите в кабинет</a></p>
                    <button class="col-form__btn button button--yellow"><span class="button__text">Дальше</span></button>
                </div>
            </form>
            <div class="personal-area__clarification clarification">
                <p class="clarification__text">Пароль от личного кабинета будет выслан на почту, а так же уведомления о зачислении денег, напоминания и скидки.</p>
            </div>
        </div>
    </div>
@endsection