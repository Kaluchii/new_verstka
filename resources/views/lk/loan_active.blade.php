@extends('layout')
@section('content')
    <div class="personal-area">
        <div class="personal-area__container">
            <div class="personal-area__menu menu">
                <ul class="menu__list">
                    <li class="menu__item is-active"><a href="#" class="menu__link link">Ваш займ</a></li>
                    <li class="menu__item"><a href="/" class="menu__link link">Личные данные</a></li>
                    <li class="menu__item"><a href="#" class="menu__link link">История займов</a></li>
                    <li class="menu__item"><a href="#" class="menu__link link">Смена пароля</a></li>
                </ul>
            </div>
            <div class="personal-area__small-title">Ваш займ <span class="">активен</span></div>
            <p class="personal-area__minor-text">Статус заявки обновлен в 10:40, 03.03.2018</p>
            <div class="personal-area__big-info big-info">
                <div class="big-info__item">
                    <div class="big-info__name">Задолженность</div>
                    <div class="big-info__value">15 200 тг</div>
                </div>
                <div class="big-info__item">
                    <div class="big-info__name">Дата возврата</div>
                    <div class="big-info__value">до 15 августа</div>
                </div>
            </div>
            <div class="personal-area__info-block info-block">
                <div class="info-block__top">
                    <p class="info-block__title">Документация</p>
                </div>
                <ul class="info-block__row-list">
                    <li class="info-block__row-item"><a href="#" class="info-block__link link">Договор займа</a></li>
                    <li class="info-block__row-item"><a href="#" class="info-block__link link">Дополнительное соглашение на продление займа от 01.01.2018</a></li>
                    <li class="info-block__row-item"><a href="#" class="info-block__link link">Дополнительное соглашение на продление займа от 05.01.2018</a></li>
                    <li class="info-block__row-item"><a href="#" class="info-block__link link">Дополнительное соглашение на реструктуризацию займа от 30.01.2018</a></li>
                </ul>
            </div>
            <div class="personal-area__info-block info-block">
                <div class="info-block__top">
                    <p class="info-block__title">Информация по займу</p>
                </div>
                <div class="info-block__data-list">
                    <div class="info-block__data-item">
                        <div class="info-block__data-item-name">Займ выдан</div>
                        <div class="info-block__data-item-value">11 июля 2017</div>
                    </div>
                    <div class="info-block__data-item">
                        <div class="info-block__data-item-name">Погашенная сумма</div>
                        <div class="info-block__data-item-value">18 570 тг</div>
                    </div>
                    <div class="info-block__data-item">
                        <div class="info-block__data-item-name">Сумма займа</div>
                        <div class="info-block__data-item-value">10 000 тг</div>
                    </div>
                    <div class="info-block__data-item">
                        <div class="info-block__data-item-name">Сумма к погашению сегодня</div>
                        <div class="info-block__data-item-value">15 200 тг</div>
                    </div>
                    <div class="info-block__data-item">
                        <div class="info-block__data-item-name">Срок займа</div>
                        <div class="info-block__data-item-value">16 дней</div>
                    </div>
                    <div class="info-block__data-item">
                        <div class="info-block__data-item-name">К погашению в конце срока</div>
                        <div class="info-block__data-item-value">25 860 тг</div>
                    </div>
                    <div class="info-block__data-item">
                        <div class="info-block__data-item-name">Дата возврата</div>
                        <div class="info-block__data-item-value">15 августа 2017</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection