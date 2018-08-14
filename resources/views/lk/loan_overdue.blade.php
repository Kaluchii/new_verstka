@extends('layout')
@section('content')
    <div class="personal-area">
        <div class="personal-area__container">
            <div class="personal-area__menu menu">
                <ul class="menu__list">
                    <li class="menu__item"><a href="/" class="menu__link link">Личные данные</a></li>
                    <li class="menu__item"><a href="/loan_history" class="menu__link link">История займов</a></li>
                    <li class="menu__item"><a href="/change_pass" class="menu__link link">Смена пароля</a></li>
                </ul>
            </div>
            <div class="personal-area__small-title title-l2">Ваш займ <span class="personal-area__title-select personal-area__title-select--overdue">просрочен</span>, начисляется пеня</div>
            <div class="personal-area__info-plate info-plate">
                <div class="info-plate__big-info big-info">
                    <div class="big-info__item">
                        <div class="big-info__name">Задолженность</div>
                        <div class="big-info__value">150 200 тг</div>
                    </div>
                    <div class="big-info__item">
                        <div class="big-info__name">Срок просрочки</div>
                        <div class="big-info__value">23 дня</div>
                    </div>
                </div>
            </div>
            <div class="personal-area__btn-with-descr btn-with-descr">
                <div class="btn-with-descr__btn-wrap">
                    <a href="#" class="btn-with-descr__btn button button--yellow button--big-in-small"><span class="button__text">Погасить займ</span></a>
                </div>
                <p class="btn-with-descr__text">Оплата банковской картой или через терминалы оплат</p>
            </div>
            <div class="personal-area__info-block info-block">
                <div class="info-block__top">
                    <p class="info-block__title title-l2">Информация по займу</p>
                </div>
                <div class="info-block__data-list data-list">
                    <div class="data-list__item data-list__item--first-elements">
                        <div class="data-list__item-name">Займ выдан</div>
                        <div class="data-list__item-value">11 июля 2017</div>
                    </div>
                    <div class="data-list__item data-list__item--big">
                        <div class="data-list__item-name">Погашенная сумма</div>
                        <div class="data-list__item-value">18 570 тг</div>
                    </div>
                    <div class="data-list__item data-list__item--first-elements">
                        <div class="data-list__item-name">Сумма займа</div>
                        <div class="data-list__item-value">10 000 тг</div>
                    </div>
                    <div class="data-list__item data-list__item--big">
                        <div class="data-list__item-name">Сумма к погашению сегодня</div>
                        <div class="data-list__item-value">15 200 тг</div>
                    </div>
                    <div class="data-list__item data-list__item--first-elements">
                        <div class="data-list__item-name">Срок займа</div>
                        <div class="data-list__item-value">16 дней</div>
                    </div>
                    <div class="data-list__item data-list__item--big">
                        <div class="data-list__item-name">К погашению в конце срока</div>
                        <div class="data-list__item-value">25 860 тг</div>
                    </div>
                    <div class="data-list__item data-list__item--first-elements">
                        <div class="data-list__item-name">Дата возврата</div>
                        <div class="data-list__item-value">15 августа 2017</div>
                    </div>
                </div>
            </div>
            <div class="personal-area__info-block info-block">
                <div class="info-block__top">
                    <p class="info-block__title title-l2">Документация</p>
                </div>
                <ul class="info-block__row-list row-list">
                    <li class="row-list__item"><a href="#" class="row-list__link link">Договор займа</a></li>
                    <li class="row-list__item"><a href="#" class="row-list__link link">Дополнительное соглашение на продление займа от 01.01.2018</a></li>
                    <li class="row-list__item"><a href="#" class="row-list__link link">Дополнительное соглашение на продление займа от 05.01.2018</a></li>
                    <li class="row-list__item"><a href="#" class="row-list__link link">Дополнительное соглашение на реструктуризацию займа от 30.01.2018</a></li>
                </ul>
            </div>
        </div>
    </div>
@endsection