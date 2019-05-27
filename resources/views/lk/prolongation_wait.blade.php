@extends('layout')
@section('content')
    <main class="personal-area">
        <div class="personal-area__container">
            <div class="personal-area__menu menu">
                <ul class="menu__list">
                    <li class="menu__item"><a href="/" class="menu__link link">Личные данные</a></li>
                    <li class="menu__item"><a href="/loan_history" class="menu__link link">История займов</a></li>
                    <li class="menu__item"><a href="/change_pass" class="menu__link link">Смена пароля</a></li>
                </ul>
            </div>
            <div class="personal-area__small-title title-l2">Ваш займ <span class="personal-area__title-select personal-area__title-select--active">активен</span></div>
            <div class="personal-area__info-plate info-plate">
                <div class="info-plate__big-info big-info">
                    <div class="big-info__item">
                        <div class="big-info__name">Задолженность</div>
                        <div class="big-info__value">15 200 тг</div>
                    </div>
                    <div class="big-info__item">
                        <div class="big-info__name">Дата возврата</div>
                        <div class="big-info__value">до 15 августа</div>
                    </div>
                </div>
            </div>
            <div class="personal-area__common-block common-block">
                <div class="common-block__title title-l3">Услуга продления займа ожидает оплаты</div>
                <div class="common-block__info-plate info-plate">
                    <p class="info-plate__text">Вы заказали продление займа до 1 августа, услуга будет активированна после оплаты 5000 тг.
                        <br>Платеж необходимо внести до 23:55, 31.07.18.
                    </p>
                    <div class="info-plate__btns-wrap">
                        <div class="info-plate__btn-wrap">
                            <a href="#" class="info-plate__btn button button--t-yellow button--s-full-on-small"><span class="button__text">Оплатить продление</span></a>
                        </div>
                        <div class="info-plate__btn-wrap">
                            <a href="#" class="info-plate__btn button button--t-grey button--s-full-on-small"><span class="button__text">Отказаться от продления</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="personal-area__common-block common-block">
                <div class="common-block__title title-l3">Выберите способ оплаты</div>
                <div class="common-block__tabs tabs">
                    <ul class="tabs__name-list">
                        <li class="tabs__name-item"><a href="#" class="tabs__name-link">Банковской картой</a></li>
                        <li class="tabs__name-item is-active"><a href="#" class="tabs__name-link">QIWI-терминал</a></li>
                        <li class="tabs__name-item"><a href="#" class="tabs__name-link">QIWI-кошелек</a></li>
                        <li class="tabs__name-item"><a href="#" class="tabs__name-link">Выставить QIWI-счет</a></li>
                        <li class="tabs__name-item"><a href="#" class="tabs__name-link">Касса 24</a></li>
                    </ul>
                    <div class="tabs__list-wrap">
                        <ul class="tabs__list">
                            <li class="tabs__item"></li>
                        </ul>
                    </div>
                </div>
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
                        <div class="data-list__item-name">Комиссия за организацию и обслуживание Займа</div>
                        <div class="data-list__item-value">570 тг</div>
                    </div>
                    <div class="data-list__item data-list__item--first-elements">
                        <div class="data-list__item-name">Сумма займа</div>
                        <div class="data-list__item-value">10 000 тг</div>
                    </div>
                    <div class="data-list__item data-list__item--big">
                        <div class="data-list__item-name">Погашенная сумма</div>
                        <div class="data-list__item-value">18 570 тг</div>
                    </div>
                    <div class="data-list__item data-list__item--first-elements">
                        <div class="data-list__item-name">Срок займа</div>
                        <div class="data-list__item-value">16 дней</div>
                    </div>
                    <div class="data-list__item data-list__item--big">
                        <div class="data-list__item-name">Сумма к погашению сегодня</div>
                        <div class="data-list__item-value">15 200 тг</div>
                    </div>
                    <div class="data-list__item data-list__item--first-elements">
                        <div class="data-list__item-name">Дата возврата</div>
                        <div class="data-list__item-value">15 августа 2017</div>
                    </div>
                    <div class="data-list__item data-list__item--big">
                        <div class="data-list__item-name">К погашению в конце срока</div>
                        <div class="data-list__item-value">25 860 тг</div>
                    </div>
                </div>
            </div>
        </div>
    </main>
@endsection