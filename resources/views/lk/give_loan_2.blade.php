@extends('layout')
@section('content')
    <div class="personal-area">
        <div class="personal-area__container">
            <div class="personal-area__title personal-area__title--loan-steps title-l2">Займ <span class="nowrap">35 000 тг</span> <span class="text-highlight nowrap">со скидкой 25%</span><br><span class="nowrap">до 12 августа</span></div>
            <div class="personal-area__loan-steps loan-steps">
                <div class="loan-steps__item">
                    <span class="loan-steps__item-num">1</span>
                    <span class="loan-steps__item-name">Телефон и почта</span>
                </div>
                <div class="loan-steps__item loan-steps__item--current">
                    <span class="loan-steps__item-num">2</span>
                    <span class="loan-steps__item-name">Личные данные</span>
                </div>
                <div class="loan-steps__item">
                    <span class="loan-steps__item-num">3</span>
                    <span class="loan-steps__item-name">Способ получения</span>
                </div>
            </div>
            <div class="personal-area__info-block info-block">
                <div class="info-block__top">
                    <p class="info-block__title title-l2">1. Паспортные данные</p>
                </div>
                <div class="info-block__fields-list fields-list">
                    <div class="fields-list__item-wrap">
                        <div class="fields-list__item field">
                            <div class="field__name">Фамилия</div>
                            <div class="field__input-wrap">
                                <input type="text" class="field__input input" tabindex="1">
                                <div class="field__alert">Укажите фамилию</div>
                            </div>
                        </div>
                    </div>
                    <div class="fields-list__item-wrap">
                        <div class="fields-list__item field">
                            <div class="field__name">Имя</div>
                            <div class="field__input-wrap">
                                <input type="text" class="field__input input" tabindex="2">
                                <div class="field__alert">Укажите имя</div>
                            </div>
                        </div>
                    </div>
                    <div class="fields-list__item-wrap">
                        <div class="fields-list__item field">
                            <div class="field__name">Отчество</div>
                            <div class="field__input-wrap">
                                <input type="text" class="field__input input" tabindex="3" disabled>
                                <div class="field__alert">Укажите отчество</div>
                                <div class="field__action"><a href="#" class="link-local">Нет отчества</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="fields-list__item-wrap">
                        <div class="fields-list__item field">
                            <div class="field__name">Семейное положение</div>
                            <div class="field__input-wrap">
                                <div class="field__radio-switchers radio-switchers">
                                    <label class="radio-switchers__item">
                                        <input type="radio" class="radio-switchers__input" name="radio" value="0" tabindex="4">
                                        <span class="radio-switchers__button">В браке</span>
                                    </label>
                                    <label class="radio-switchers__item">
                                        <input type="radio" class="radio-switchers__input" name="radio" value="1" tabindex="4">
                                        <span class="radio-switchers__button">Не в браке</span>
                                    </label>
                                </div>
                                <div class="field__alert"></div>
                            </div>
                        </div>
                    </div>
                    <div class="fields-list__item-wrap">
                        <div class="fields-list__item field">
                            <div class="field__name">Количество детей</div>
                            <div class="field__input-wrap">
                                <div class="field__radio-switchers radio-switchers">
                                    <label class="radio-switchers__item">
                                        <input type="radio" class="radio-switchers__input" name="radio1" value="0" tabindex="5">
                                        <span class="radio-switchers__button">Нет</span>
                                    </label>
                                    <label class="radio-switchers__item">
                                        <input type="radio" class="radio-switchers__input" name="radio1" value="1" tabindex="5" checked>
                                        <span class="radio-switchers__button">1</span>
                                    </label>
                                    <label class="radio-switchers__item">
                                        <input type="radio" class="radio-switchers__input" name="radio1" value="2" tabindex="5">
                                        <span class="radio-switchers__button">2</span>
                                    </label>
                                    <label class="radio-switchers__item">
                                        <input type="radio" class="radio-switchers__input" name="radio1" value="3" tabindex="5">
                                        <span class="radio-switchers__button">3+</span>
                                    </label>
                                </div>
                                <div class="field__alert"></div>
                            </div>
                        </div>
                    </div>
                    <div class="fields-list__item-wrap">
                        <div class="fields-list__item field is-right">
                            <div class="field__name">ИИН</div>
                            <div class="field__input-wrap">
                                <input type="text" class="field__input input" tabindex="6" placeholder="000 000 000 000">
                                <div class="field__alert"></div>
                            </div>
                        </div>
                    </div>
                    <div class="fields-list__item-wrap">
                        <div class="fields-list__item field">
                            <div class="field__name">№ удостоверение личности</div>
                            <div class="field__input-wrap">
                                <input type="text" class="field__input input" tabindex="7" placeholder="000 000 000">
                                <div class="field__alert"></div>
                            </div>
                        </div>
                    </div>
                    <div class="fields-list__item-wrap">
                        <div class="fields-list__item field">
                            <div class="field__name">Кем выдано</div>
                            <div class="field__input-wrap">
                                <div class="field__radio-switchers radio-switchers">
                                    <label class="radio-switchers__item">
                                        <input type="radio" class="radio-switchers__input" name="radio3" value="0" tabindex="8">
                                        <span class="radio-switchers__button">МВД РК</span>
                                    </label>
                                    <label class="radio-switchers__item">
                                        <input type="radio" class="radio-switchers__input" name="radio3" value="1" tabindex="8">
                                        <span class="radio-switchers__button">МЮ РК</span>
                                    </label>
                                </div>
                                <div class="field__alert"></div>
                            </div>
                        </div>
                    </div>
                    <div class="fields-list__item-wrap">
                        <div class="fields-list__item fields-list__item--small field">
                            <div class="field__name">Дата выдачи</div>
                            <div class="field__input-wrap">
                                <input type="text" class="field__input input" tabindex="9">
                                <div class="field__alert"></div>
                            </div>
                        </div>
                        <div class="fields-list__item fields-list__item--small field">
                            <div class="field__name">Срок действия</div>
                            <div class="field__input-wrap">
                                <input type="text" class="field__input input" tabindex="10">
                                <div class="field__alert"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="personal-area__info-block info-block">
                <div class="info-block__top">
                    <p class="info-block__title title-l2">2. Адрес прописки (регистрации)</p>
                </div>
                <div class="info-block__fields-list fields-list">
                    <div class="fields-list__item-wrap">
                        <div class="fields-list__item field has-error">
                            <div class="field__name">Город или населенный пункт</div>
                            <div class="field__input-wrap">
                                <input type="text" class="field__input input" tabindex="1">
                                <div class="field__alert"></div>
                            </div>
                        </div>
                    </div>
                    <div class="fields-list__item-wrap">
                        <div class="fields-list__item field">
                            <div class="field__name">Улица</div>
                            <div class="field__input-wrap">
                                <input type="text" class="field__input input" tabindex="2">
                                <div class="field__alert">Укажите имя</div>
                            </div>
                        </div>
                    </div>
                    <div class="fields-list__item-wrap">
                        <div class="fields-list__item fields-list__item--small field">
                            <div class="field__name">Дом</div>
                            <div class="field__input-wrap">
                                <input type="text" class="field__input input" tabindex="9">
                                <div class="field__alert"></div>
                            </div>
                        </div>
                        <div class="fields-list__item fields-list__item--small field">
                            <div class="field__name">Квартира</div>
                            <div class="field__input-wrap">
                                <input type="text" class="field__input input" tabindex="10">
                                <div class="field__alert"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="personal-area__info-block info-block">
                <div class="info-block__top">
                    <p class="info-block__title title-l2">3. Адрес проживания</p>
                </div>
                <div class="info-block__fields-list fields-list">
                    <div class="fields-list__item-wrap">
                        <div class="fields-list__item field">
                            <div class="field__name">Город или населенный пункт</div>
                            <div class="field__input-wrap">
                                <input type="text" class="field__input input" tabindex="1">
                                <div class="field__alert"></div>
                            </div>
                        </div>
                    </div>
                    <div class="fields-list__item-wrap">
                        <div class="fields-list__item field">
                            <div class="field__name">Улица</div>
                            <div class="field__input-wrap">
                                <input type="text" class="field__input input" tabindex="2">
                                <div class="field__alert">Укажите имя</div>
                            </div>
                        </div>
                    </div>
                    <div class="fields-list__item-wrap">
                        <div class="fields-list__item fields-list__item--small field">
                            <div class="field__name">Дом</div>
                            <div class="field__input-wrap">
                                <input type="text" class="field__input input" tabindex="9">
                                <div class="field__alert"></div>
                            </div>
                        </div>
                        <div class="fields-list__item fields-list__item--small field">
                            <div class="field__name">Квартира</div>
                            <div class="field__input-wrap">
                                <input type="text" class="field__input input" tabindex="10">
                                <div class="field__alert"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="personal-area__info-block info-block">
                <div class="info-block__top">
                    <p class="info-block__title title-l2">4. Доверенные лица</p>
                </div>
                <div class="info-block__fields-list fields-list">
                    <div class="fields-list__item-wrap">
                        <div class="fields-list__item field">
                            <div class="field__name">Контактное лицо №1, имя</div>
                            <div class="field__input-wrap">
                                <input type="text" class="field__input input" tabindex="1">
                                <div class="field__alert"></div>
                            </div>
                        </div>
                    </div>
                    <div class="fields-list__item-wrap">
                        <div class="fields-list__item field">
                            <div class="field__name">Мобильный телефон</div>
                            <div class="field__input-wrap">
                                <input type="text" class="field__input input" tabindex="2">
                                <div class="field__alert"></div>
                            </div>
                        </div>
                    </div>
                    <div class="fields-list__item-wrap">
                        <div class="fields-list__item fields-list__item--full field">
                            <div class="field__name">Кем приходится</div>
                            <div class="field__input-wrap">
                                <div class="field__radio-switchers radio-switchers">
                                    <label class="radio-switchers__item">
                                        <input type="radio" class="radio-switchers__input" name="radio6" value="0" tabindex="8">
                                        <span class="radio-switchers__button">Родственник</span>
                                    </label>
                                    <label class="radio-switchers__item">
                                        <input type="radio" class="radio-switchers__input" name="radio6" value="1" tabindex="8">
                                        <span class="radio-switchers__button">Друг</span>
                                    </label>
                                    <label class="radio-switchers__item">
                                        <input type="radio" class="radio-switchers__input" name="radio6" value="2" tabindex="8">
                                        <span class="radio-switchers__button">Коллега</span>
                                    </label>
                                </div>
                                <div class="field__alert"></div>
                            </div>
                        </div>
                    </div>
                    <div class="fields-list__item-wrap">
                        <div class="fields-list__item field">
                            <div class="field__name">Контактное лицо №2, имя</div>
                            <div class="field__input-wrap">
                                <input type="text" class="field__input input" tabindex="1">
                                <div class="field__alert"></div>
                            </div>
                        </div>
                    </div>
                    <div class="fields-list__item-wrap">
                        <div class="fields-list__item field">
                            <div class="field__name">Мобильный телефон</div>
                            <div class="field__input-wrap">
                                <input type="text" class="field__input input" tabindex="2">
                                <div class="field__alert"></div>
                            </div>
                        </div>
                    </div>
                    <div class="fields-list__item-wrap">
                        <div class="fields-list__item fields-list__item--full field">
                            <div class="field__name">Кем приходится</div>
                            <div class="field__input-wrap">
                                <div class="field__radio-switchers radio-switchers">
                                    <label class="radio-switchers__item">
                                        <input type="radio" class="radio-switchers__input" name="radio7" value="0" tabindex="8">
                                        <span class="radio-switchers__button">Родственник</span>
                                    </label>
                                    <label class="radio-switchers__item">
                                        <input type="radio" class="radio-switchers__input" name="radio7" value="1" tabindex="8">
                                        <span class="radio-switchers__button">Друг</span>
                                    </label>
                                    <label class="radio-switchers__item">
                                        <input type="radio" class="radio-switchers__input" name="radio7" value="2" tabindex="8">
                                        <span class="radio-switchers__button">Коллега</span>
                                    </label>
                                </div>
                                <div class="field__alert"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="personal-area__info-block info-block">
                <div class="info-block__top">
                    <p class="info-block__title title-l2">5. Занятость и доходы</p>
                </div>
                <div class="info-block__fields-list fields-list">
                    <div class="fields-list__item-wrap">
                        <div class="fields-list__item field">
                            <div class="field__name">Занятость</div>
                            <div class="field__input-wrap">
                                <input type="text" class="field__input input" tabindex="1">
                                <div class="field__alert"></div>
                            </div>
                        </div>
                    </div>
                    <div class="fields-list__item-wrap">
                        <div class="fields-list__item field">
                            <div class="field__name">Место работы</div>
                            <div class="field__input-wrap">
                                <input type="text" class="field__input input" tabindex="2">
                                <div class="field__alert"></div>
                            </div>
                        </div>
                    </div>
                    <div class="fields-list__item-wrap">
                        <div class="fields-list__item field">
                            <div class="field__name">Должность</div>
                            <div class="field__input-wrap">
                                <input type="text" class="field__input input" tabindex="2">
                                <div class="field__alert"></div>
                            </div>
                        </div>
                    </div>
                    <div class="fields-list__item-wrap">
                        <div class="fields-list__item field">
                            <div class="field__name">Ежемесячный доход, тенге</div>
                            <div class="field__input-wrap">
                                <input type="text" class="field__input input" tabindex="2">
                                <div class="field__alert"></div>
                            </div>
                        </div>
                    </div>
                    <div class="fields-list__item-wrap">
                        <div class="fields-list__item field">
                            <div class="field__name">Рабочий телефон</div>
                            <div class="field__input-wrap">
                                <input type="text" class="field__input input" tabindex="2">
                                <div class="field__alert"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="personal-area__info-block info-block">
                <div class="info-block__top">
                    <p class="info-block__title title-l2">7. Согласия и обязательства</p>
                </div>
                <ul class="info-block__row-list row-list">
                    <li class="row-list__item">Я согласен с <a href="#" class="row-list__link link">Офертой на предоставление срочного денежного займа</a></li>
                    <li class="row-list__item">Я согласен с <a href="#" class="row-list__link link">условиями использования аналогов собственноручной подписи</a></li>
                    <li class="row-list__item">Я согласен с <a href="#" class="row-list__link link">условиями сбора и обработки персональных данных</a></li>
                    <li class="row-list__item">Я согласен с <a href="#" class="row-list__link link">условиями предоставления информации обо мне в кредитные бюро</a></li>
                </ul>
            </div>
        </div>
    </div>
@endsection