@extends('layout')
@section('content')
    <div class="personal-area">
        <div class="personal-area__container">
            <div class="personal-area__title personal-area__title--loan-steps">Получить 35 000 тг до 12 августа</div>
            <div class="personal-area__loan-steps loan-steps">
                <div class="loan-steps__item">
                    <div class="loan-steps__item-name">Телефон и почта</div>
                </div>
                <div class="loan-steps__item loan-steps__item--current">
                    <div class="loan-steps__item-name">Личные данные</div>
                </div>
                <div class="loan-steps__item">
                    <div class="loan-steps__item-name">Способ получения</div>
                </div>
            </div>
            <div class="personal-area__info-block info-block">
                <div class="info-block__top">
                    <p class="info-block__title">1. Паспортные данные</p>
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
                                <input type="text" class="field__input input" tabindex="3">
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
                                        <input type="radio" class="radio-switchers__input" name="radio1" value="1" tabindex="5">
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
                        <div class="fields-list__item field">
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
                    <p class="info-block__title">2. Адрес прописки (регистрации)</p>
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
                    <p class="info-block__title">3. Адрес проживания</p>
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
                    <p class="info-block__title">4. Доверенные лица</p>
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
                        <div class="fields-list__item field">
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
                        <div class="fields-list__item field">
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
                    <p class="info-block__title">5. Занятость и доходы</p>
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
        </div>
    </div>
@endsection