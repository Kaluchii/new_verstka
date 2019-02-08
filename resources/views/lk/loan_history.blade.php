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
            <div class="personal-area__small-title title-l2">История займов</div>
            <div class="personal-area__btn-wrap">
                <a href="#" class="personal-area__btn button button--t-yellow button--s-full-on-small"><span class="button__text">Скачать справку</span></a>
            </div>
            <div class="personal-area__history-loans history-loans">
                <div class="history-loans__row">
                    <div class="history-loans__col">Дата <span class="history-loans__hide-on-small">заявки</span></div>
                    <div class="history-loans__col">Сумма</div>
                    <div class="history-loans__col">Статус</div>
                </div>
                <div class="history-loans__row">
                    <div class="history-loans__col"><a href="#" class="history-loans__link link js_open_history_popup">11 июня 2017</a></div>
                    <div class="history-loans__col">10 500</div>
                    <div class="history-loans__col">Выплачен</div>
                </div>
                <div class="history-loans__row">
                    <div class="history-loans__col"><a href="#" class="history-loans__link link js_open_forgot_popup_step_1">10 июля 2017</a></div>
                    <div class="history-loans__col">38 000</div>
                    <div class="history-loans__col">Отклонен</div>
                </div>
                <div class="history-loans__row">
                    <div class="history-loans__col"><a href="#" class="history-loans__link link js_open_forgot_popup_step_2">31 августа 2017</a></div>
                    <div class="history-loans__col">14 500</div>
                    <div class="history-loans__col">Отклонен</div>
                </div>
                <div class="history-loans__row">
                    <div class="history-loans__col"><a href="#" class="history-loans__link link js_open_alert_popup">12 февраля 2018</a></div>
                    <div class="history-loans__col">22 000</div>
                    <div class="history-loans__col">Отклонен</div>
                </div>
                <div class="history-loans__row">
                    <div class="history-loans__col"><a href="#" class="history-loans__link link js_open_agreement_popup">6 мая 2018</a></div>
                    <div class="history-loans__col">7 500</div>
                    <div class="history-loans__col">Отклонен</div>
                </div>
                <div class="history-loans__row">
                    <div class="history-loans__col"><a href="#" class="history-loans__link link js_open_prolongation_popup">6 мая 2018</a></div>
                    <div class="history-loans__col">7 500</div>
                    <div class="history-loans__col">Отклонен</div>
                </div>
                <div class="history-loans__row">
                    <div class="history-loans__col"><a href="#" class="history-loans__link link js_open_restructuring_popup">6 мая 2018</a></div>
                    <div class="history-loans__col">7 500</div>
                    <div class="history-loans__col">Отклонен</div>
                </div>
                <div class="history-loans__row">
                    <div class="history-loans__col"><a href="#" class="history-loans__link link js_open_offer_confirmation_popup">6 мая 2018</a></div>
                    <div class="history-loans__col">7 500</div>
                    <div class="history-loans__col">Отклонен</div>
                </div>
            </div>
        </div>
    </main>
@endsection