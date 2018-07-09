@extends('layout')
@section('content')
    <div class="personal-area">
        <div class="personal-area__container">
            <div class="personal-area__menu menu">
                <ul class="menu__list">
                    <li class="menu__item"><a href="#" class="menu__link link">Ваш займ</a></li>
                    <li class="menu__item is-active"><a href="#" class="menu__link link">Личные данные</a></li>
                    <li class="menu__item"><a href="#" class="menu__link link">История займов</a></li>
                    <li class="menu__item"><a href="#" class="menu__link link">Смена пароля</a></li>
                </ul>
            </div>
            <div class="personal-area__small-title">Ваша заявка на рассмотрении.<br>
                Менеджер свяжется с вами в ближайшее время.</div>
            <p class="personal-area__minor-text">Статус заявки обновлен в 10:40, 03.03.2018</p>
            <div class="personal-area__big-info big-info">
                <div class="big-info__item">
                    <div class="big-info__name">Сумма займа</div>
                    <div class="big-info__value">15 200 тг</div>
                </div>
                <div class="big-info__item">
                    <div class="big-info__name">Срок займа</div>
                    <div class="big-info__value">20 дней</div>
                </div>
            </div>
            <div class="personal-area__work-time">
                <img src="/img/personal-area_time.png" alt="" class="personal-area__work-time-img">
                <p class="personal-area__work-time-text">
                    Заявки рассматриваются в рабочее время с 9:00 до 18:00 в порядке очереди.
                </p>
            </div>
        </div>
    </div>
@endsection