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
                                <span class="row-slider__value-unit">ТГ</span>
                            </div>
                            <div class="row-slider__select-wrap">
                                <div class="row-slider__select">20&nbsp;000&nbsp;тг</div>
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
                                <span class="row-slider__value-unit">ДНЕЙ</span>
                            </div>
                            <div class="row-slider__select-wrap">
                                <div class="row-slider__select">30&nbsp;дней</div>
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
                        <div class="calculator__result-row-container">
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
                    </div>
                    <div class="calculator__promocode promocode">
                        <div class="promocode__field-wrap">
                            <div class="promocode__input-wrap field js_field">
                                <label class="field__input-wrap js_field_wrapper">
                                    <input type="text" class="field__input input js_field_input" placeholder="Есть промо-код?">
                                    <span class="field__alert field__alert--in-field js_field_alert">Код устарел</span>
                                </label>
                            </div>
                            <div class="promocode__activate-btn-wrap">
                                <button type="button" class="promocode__activate-btn button button--t-yellow">Применить</button>
                            </div>
                            <div class="promocode__where-get where-promocode">
                                <div class="where-promocode__container">
                                    <div class="where-promocode__text-wrap">
                                        <p class="where-promocode__text">Промо-код на скидки мы отправляем по почте и размещаем в соцсетях</p>
                                        <div class="where-promocode__socials">
                                            <a href="https://www.instagram.com/dopo.kz/" target="_blank" class="where-promocode__social-item where-promocode__social-item--inst"></a>
                                            <a href="https://www.facebook.com/dopoluchki/" target="_blank" class="where-promocode__social-item where-promocode__social-item--fb"></a>
                                            <a href="https://vk.com/dopo_kz" target="_blank" class="where-promocode__social-item where-promocode__social-item--vk"></a>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" class="where-promocode__link link">Где узнать промо-код?</a>
                            </div>
                        </div>
                        <div class="promocode__activated">
                            <div class="promocode__info">Промо-код применен, скидка 21%</div>
                            <div class="promocode__cancel-wrap">
                                <span class="promocode__cancel link">Отменить промокод</span>
                            </div>
                        </div>
                    </div>
                    <div class="calculator__discounts discounts">
                        <div class="discounts__container">
                            <p class="discounts__title">Постоянные скидки <span class="no-wrap">для займа <span class="js_loan_sum">20&nbsp;000&nbsp;тг</span></span></p>
                            <ul class="discounts__list">
                                <li class="discounts__item js_discount_item" data-discount-index="DISC1">
                                    <div class="discounts__item-container">
                                        <div class="discounts__item-percent"><span class="mobile-show">Скидка </span>10%</div>
                                        <div class="discounts__term"><span class="mobile-hide">Займ </span>на 21 день</div>
                                    </div>
                                </li>
                                <li class="discounts__item js_discount_item" data-discount-index="DISC2">
                                    <div class="discounts__item-container">
                                        <div class="discounts__item-percent"><span class="mobile-show">Скидка </span>20%</div>
                                        <div class="discounts__term"><span class="mobile-hide">Займ </span>на 25 дней</div>
                                    </div>
                                </li>
                                <li class="discounts__item js_discount_item" data-discount-index="DISC3">
                                    <div class="discounts__item-container">
                                        <div class="discounts__item-percent"><span class="mobile-show">Скидка </span>25%</div>
                                        <div class="discounts__term"><span class="mobile-hide">Займ </span>на 30 дней</div>
                                    </div>
                                </li>
                            </ul>
                            <div class="discounts__discount-cancel-wrap hide">
                                <span class="discounts__discount-cancel link js_discount_cancel">Отключить скидку</span>
                            </div>
                            <div class="discounts__info-wrap js_discount_about" style="display: none;">
                                <div class="discounts__info">
                                    <p class="discounts__info-title">Займ <span class="js_loan_sum">20&nbsp;000&nbsp;тг</span>
                                        на <span class="js_loan_term">25 дней</span> <span class="no-wrap">со скидкой <span class="js_loan_discount">15</span>%</span>
                                    </p>
                                    <ul class="discounts__info-list row-list row-list--check">
                                        <li class="row-list__item">Скидка действует только для повторных клиентов;</li>
                                        <li class="row-list__item">Скидка доступна только для займа сроком на <span class="js_loan_term">25 дней</span>;</li>
                                        <li class="row-list__item">Сумма переплаты <span class="js_overpayment"></span> рассчитывается единовременно и не снижается при досрочном погашении.</li>
                                    </ul>
                                </div>
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