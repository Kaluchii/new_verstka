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
            <div class="personal-area__small-title">История займов</div>
            <div class="personal-area__history-loans history-loans">
                <div class="history-loans__row">
                    <div class="history-loans__col">Дата <span class="history-loans__hide-on-small">заявки</span></div>
                    <div class="history-loans__col">Сумма</div>
                    <div class="history-loans__col">Статус</div>
                </div>
                <div class="history-loans__row">
                    <div class="history-loans__col"><a href="#" class="history-loans__link link-local">11 июня 2017</a></div>
                    <div class="history-loans__col">10 500</div>
                    <div class="history-loans__col">Выплачен</div>
                </div>
                <div class="history-loans__row">
                    <div class="history-loans__col"><a href="#" class="history-loans__link link-local">10 июля 2017</a></div>
                    <div class="history-loans__col">38 000</div>
                    <div class="history-loans__col">Отклонен</div>
                </div>
                <div class="history-loans__row">
                    <div class="history-loans__col"><a href="#" class="history-loans__link link-local">31 августа 2017</a></div>
                    <div class="history-loans__col">14 500</div>
                    <div class="history-loans__col">Отклонен</div>
                </div>
                <div class="history-loans__row">
                    <div class="history-loans__col"><a href="#" class="history-loans__link link-local">12 февраля 2018</a></div>
                    <div class="history-loans__col">22 000</div>
                    <div class="history-loans__col">Отклонен</div>
                </div>
                <div class="history-loans__row">
                    <div class="history-loans__col"><a href="#" class="history-loans__link link-local">6 мая 2018</a></div>
                    <div class="history-loans__col">7 500</div>
                    <div class="history-loans__col">Отклонен</div>
                </div>
            </div>
        </div>
    </div>
@endsection