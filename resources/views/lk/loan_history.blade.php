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
                    <div class="history-loans__col"><a href="#" class="history-loans__link link js_open_history_popup">6 мая 2018</a></div>
                    <div class="history-loans__col">7 500</div>
                    <div class="history-loans__col">Отклонен</div>
                </div>
            </div>
        </div>
    </div>


    <div class="hide">
        <div class="popup js_history_popup">
            <div class="popup__container">
                <div class="popup__info-plate info-plate">
                    <div class="info-plate__loan-sum-date loan-sum-date">
                        <div class="loan-sum-date__item">
                            <div class="loan-sum-date__value">29 000 тг</div>
                            <div class="loan-sum-date__name">Сумма к возврату</div>
                        </div>
                        <div class="loan-sum-date__item">
                            <div class="loan-sum-date__value">16 декабря</div>
                            <div class="loan-sum-date__name">Дата возврата</div>
                        </div>
                    </div>
                </div>
                <div class="popup__loan-info loan-info">
                    <div class="loan-info__row">
                        <div class="loan-info__col">Статус</div>
                        <div class="loan-info__col">Отклонен</div>
                    </div>
                    <div class="loan-info__row">
                        <div class="loan-info__col">Заявка принята</div>
                        <div class="loan-info__col">16.11.2018</div>
                    </div>
                    <div class="loan-info__row">
                        <div class="loan-info__col">Сумма займа</div>
                        <div class="loan-info__col">20 000 тг</div>
                    </div>
                    <div class="loan-info__row">
                        <div class="loan-info__col">Сумма погашения</div>
                        <div class="loan-info__col">29 000 тг</div>
                    </div>
                    <div class="loan-info__row">
                        <div class="loan-info__col">Длительность</div>
                        <div class="loan-info__col">30 дней</div>
                    </div>
                </div>
            </div>
            <div class="popup__close js_close_popup">Закрыть окно</div>
            <div class="popup__close-x js_close_popup"></div>
        </div>


        <div class="popup js_forgot_popup_step_1">
            <div class="popup__container">
                <div class="popup__title title-l2">Забыли пароль?</div>
                <div class="popup__text">
                    Введите номер телефона или электронную почту,
                    указанную при регистрации.
                </div>
                <form class="popup__input-btn-row input-btn-row">
                    <div class="input-btn-row__input-wrap">
                        <div class="input-btn-row__field field js_field">
                            <div class="field__name">Телефон или эл. почта</div>
                            <label class="field__input-wrap js_field_wrapper">
                                <input type="text" class="field__input input js_field_input">
                            </label>
                        </div>
                    </div>
                    <div class="input-btn-row__btn-wrap">
                        <button class="input-btn-row__btn button button--t-yellow button--s-full"><span class="button__text">Восстановить</span></button>
                    </div>
                </form>
            </div>
            <div class="popup__close js_close_popup">Закрыть окно</div>
            <div class="popup__close-x js_close_popup"></div>
        </div>


        <div class="popup js_alert_popup">
            <div class="popup__container">
                <div class="popup__title title-l2">Внимание</div>
                <div class="popup__text">
                    Инструкции по смене пароля были отправлены
                    на ваш адрес электронной почты.
                </div>
                <hr class="popup__hr">
                <div class="popup__close-btn-wrap">
                    <a href="#" class="popup__close-btn button button--t-yellow button--s-medium button--s-full-on-small"><span class="button__text">Закрыть</span></a>
                </div>
            </div>
            <div class="popup__close js_close_popup">Закрыть окно</div>
            <div class="popup__close-x js_close_popup"></div>
        </div>
    </div>

@endsection