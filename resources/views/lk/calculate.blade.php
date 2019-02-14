@extends('layout')
@section('content')
    <main class="personal-area">
        <div class="personal-area__container">
            <div class="personal-area__calculator calculator">
                <div class="calculator__advantages-wrap">
                    <ul class="calculator__advantages">
                        <li class="calculator__advantages-item">Без справок и залога</li>
                        <li class="calculator__advantages-item">Досрочное погашение без штрафа</li>
                        <li class="calculator__advantages-item">Перевод денег за 10 минут</li>
                    </ul>
                </div>
                <div class="calculator__container">
                    <div class="calculator__title title-l2">
                        Первый займ до 20&nbsp;000&nbsp;тг <span class="text-highlight nowrap">со скидкой 50%</span>
                    </div>
                    <div class="calculator__sliders-list">
                        <div class="calculator__sliders-list-item row-slider">
                            <div class="row-slider__title">СУММА</div>
                            <div class="row-slider__slider-wrap">
                                <div class="row-slider__slider js_amount_slider"></div>
                                <div class="row-slider__lower-value">7000&nbsp;тг</div>
                                <div class="row-slider__upper-value">50&nbsp;000&nbsp;тг</div>
                            </div>
                            <div class="row-slider__value-wrap">
                                <input type="text" class="row-slider__input input" value="20 000">
                                <span class="row-slider__value-unit">тг</span>
                            </div>
                        </div>
                        <div class="calculator__sliders-list-item row-slider">
                            <div class="row-slider__title">СРОК</div>
                            <div class="row-slider__slider-wrap">
                                <div class="row-slider__slider js_term_slider"></div>
                                <div class="row-slider__lower-value">5&nbsp;дней</div>
                                <div class="row-slider__upper-value">30&nbsp;дней</div>
                            </div>
                            <div class="row-slider__value-wrap">
                                <input type="text" class="row-slider__input input" value="15">
                                <span class="row-slider__value-unit">дней</span>
                            </div>
                        </div>
                    </div>
                    <div class="calculator__btns-list">
                        <div class="calculator__btns-list-item">
                            <span class="calculator__btn-name">СУММА</span>
                            <span class="calculator__btn-value">20&nbsp;000&nbsp;тг</span>
                        </div>
                        <div class="calculator__btns-list-item">
                            <span class="calculator__btn-name">СРОК</span>
                            <span class="calculator__btn-value">15&nbsp;дней</span>
                        </div>
                    </div>
                    <div class="calculator__result-row">
                        <div class="calculator__info">
                            <div class="calculator__info-col">
                                <div class="calculator__info-col-title">Берете</div>
                                <div class="calculator__info-col-value">20&nbsp;000&nbsp;тг</div>
                            </div>
                            <div class="calculator__info-col">
                                <div class="calculator__info-col-title">Вернете</div>
                                <div class="calculator__info-col-value">22&nbsp;000&nbsp;тг</div>
                                <div class="calculator__info-col-old-value">23&nbsp;000&nbsp;тг</div>
                            </div>
                            <div class="calculator__info-col">
                                <div class="calculator__info-col-title">Возврат&nbsp;до</div>
                                <div class="calculator__info-col-value">20&nbsp;декабря</div>
                            </div>
                        </div>
                        <div class="calculator__give-btn-wrap">
                            <a href="#" class="calculator__give-btn button button--t-yellow button--s-full-on-small">
                                <span class="button__text">Получить деньги</span>
                            </a>
                        </div>
                    </div>
                    <div class="calculator__promocode promocode">
                        <div class="promocode__field-wrap">
                            <div class="promocode__where-get"></div>
                            <div class="promocode__input-wrap">
                                <input type="text" class="promocode__input input" placeholder="Есть промо-код?">
                                <span class="promocode__status">Код устарел</span>
                            </div>
                            <div class="promocode__activate-btn-wrap">
                                <button type="button" class="promocode__activate-btn button button--t-yellow">Применить</button>
                            </div>
                        </div>
                        <div class="promocode__activated">
                            <div class="promocode__info">Промо-код применен, скидка 21%</div>
                            <div class="promocode__cancel-wrap">
                                <span class="promocode__cancel link">Отменить промокод</span>
                            </div>
                        </div>
                    </div>
                    <div class="calculator__stock">
                        <div class="calculator__stock-img-wrap">
                            <img src="/img/stock.jpg" alt="Акция на Dopo.kz" class="calculator__stock-img">
                        </div>
                        <a href="#" class="calculator__stock-link"></a>
                    </div>
                    <div class="calculator__loan-detail">
                        <p class="calculator__loan-detail-text">
                            Сумма переплаты включает в&nbsp;себя вознагражение
                            по&nbsp;займу <span class="nowrap">570 тг</span> и&nbsp;комиссию
                            за организацию и&nbsp;обслуживание займа <span class="nowrap">2 430 тг</span>.
                            Изучите <a href="#" class="link">условия выдачи</a> займов.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
@endsection