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
            <div class="personal-area__small-title title-l2">Ваш займ реструктуризирован</div>
            <p class="personal-area__text">Возникла просрочка, начисляется пеня. Сначала оплачивается пеня, затем задолженность.</p>
            <div class="personal-area__btn-wrap">
                <a href="#" class="personal-area__btn button button--yellow button--big-in-small"><span class="button__text">Оплатить ежемесячный платеж</span></a>
            </div>
            <div class="personal-area__info-block info-block">
                <div class="info-block__top">
                    <p class="info-block__title title-l2">График платежей</p>
                </div>
                <div class="info-block__payment-status payment-status">
                    <ul class="payment-status__list">
                        <li class="payment-status__item payment-status__item--paid">
                            <p class="payment-status__text">До 9 февраля <br> Оплачено <br> <span class="bold">24 000 тг</span></p>
                        </li>
                        <li class="payment-status__item payment-status__item--paid">
                            <p class="payment-status__text">Пеня за просрочку <br> <span class="bold">2 000 тг</span></p>
                        </li>
                        <li class="payment-status__item payment-status__item--overdue">
                            <p class="payment-status__text">Пеня за просрочку <br> <span class="bold">2 000 тг</span></p>
                        </li>
                        <li class="payment-status__item">
                            <p class="payment-status__text">До 9 марта <br> <span class="bold">24 000 тг</span></p>
                        </li>
                        <li class="payment-status__item">
                            <p class="payment-status__text">До 9 апреля <br> <span class="bold">24 000 тг</span></p>
                        </li>
                        <li class="payment-status__item">
                            <p class="payment-status__text">До 9 мая <br> <span class="bold">24 000 тг</span></p>
                        </li>
                        <li class="payment-status__item">
                            <p class="payment-status__text">До 9 июня <br> <span class="bold">24 000 тг</span></p>
                        </li>
                    </ul>
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
        </div>
    </div>
@endsection