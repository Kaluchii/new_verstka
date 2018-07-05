@extends('layout')
@section('content')
    <div class="personal-area">
        <div class="personal-area__container">
            <div class="personal-area__available-loan available-loan">
                <div class="available-loan__text-wrap">
                    <div class="available-loan__welcome">Здравствуйте, Виктор!</div>
                    <div class="available-loan__sum">Вам доступен займ до 150 000 тг</div>
                </div>
                <div class="available-loan__btn-wrap">
                    <a href="#" class="available-loan__btn button button--yellow"><span class="button__text">Получить деньги</span></a>
                </div>
            </div>
            <div class="personal-area__menu menu">
                <ul class="menu__list">
                    <li class="menu__item is-active"><a href="#" class="menu__link link">Личные данные</a></li>
                    <li class="menu__item"><a href="#" class="menu__link link">История займов</a></li>
                    <li class="menu__item"><a href="#" class="menu__link link">Смена пароля</a></li>
                </ul>
            </div>
            <h1 class="personal-area__title">Личные данные</h1>
            <div class="personal-area__info-block info-block">
                <div class="info-block__top">
                    <p class="info-block__title">Паспортные данные</p>
                    <div class="info-block__btn-wrap">
                        <a href="#" class="info-block__btn button button--grey"><span class="button__text">Изменить</span></a>
                    </div>
                </div>
                <div class="info-block__data-list">
                    <div class="info-block__data-item">
                        <div class="info-block__data-item-name">Фамилия</div>
                        <div class="info-block__data-item-value">Длиннофамилиев</div>
                    </div>
                    <div class="info-block__data-item">
                        <div class="info-block__data-item-name">Имя</div>
                        <div class="info-block__data-item-value">Иннокентий</div>
                    </div>
                    <div class="info-block__data-item">
                        <div class="info-block__data-item-name">Отчество</div>
                        <div class="info-block__data-item-value">Сергеевич</div>
                    </div>
                    <div class="info-block__data-item">
                        <div class="info-block__data-item-name">Семейное положение</div>
                        <div class="info-block__data-item-value">Мужской</div>
                    </div>
                    <div class="info-block__data-item">
                        <div class="info-block__data-item-name">Количество детей</div>
                        <div class="info-block__data-item-value">3</div>
                    </div>
                    <div class="info-block__data-item">
                        <div class="info-block__data-item-name">ИИН</div>
                        <div class="info-block__data-item-value">000 000 000 000</div>
                    </div>
                    <div class="info-block__data-item">
                        <div class="info-block__data-item-name">№ удостоверения личности</div>
                        <div class="info-block__data-item-value">000 000 000</div>
                    </div>
                    <div class="info-block__data-item">
                        <div class="info-block__data-item-name">Кем выдано</div>
                        <div class="info-block__data-item-value">МВД РК</div>
                    </div>
                    <div class="info-block__data-item info-block__data-item--small">
                        <div class="info-block__data-item-name">Дата выдачи</div>
                        <div class="info-block__data-item-value">20.08.1984</div>
                    </div>
                    <div class="info-block__data-item info-block__data-item--small">
                        <div class="info-block__data-item-name">Срок действия</div>
                        <div class="info-block__data-item-value">20.08.1984</div>
                    </div>
                </div>
            </div>
            <div class="personal-area__info-block info-block">
                <div class="info-block__top">
                    <p class="info-block__title">Контактные данные</p>
                    <div class="info-block__btn-wrap">
                        <a href="#" class="info-block__btn button button--grey"><span class="button__text">Изменить</span></a>
                    </div>
                </div>
                <div class="info-block__data-list">
                    <div class="info-block__data-item">
                        <div class="info-block__data-item-name">Эл. почта</div>
                        <div class="info-block__data-item-value">vitrety@yandex.ru</div>
                    </div>
                    <div class="info-block__data-item">
                        <div class="info-block__data-item-name">Мобильный телефон</div>
                        <div class="info-block__data-item-value">+7 707 3**-**-18</div>
                    </div>
                </div>
            </div>
            <div class="personal-area__info-block info-block">
                <div class="info-block__top">
                    <p class="info-block__title">Адрес прописки</p>
                    <div class="info-block__btn-wrap">
                        <a href="#" class="info-block__btn button button--grey"><span class="button__text">Изменить</span></a>
                    </div>
                </div>
                <div class="info-block__data-list">
                    <div class="info-block__data-item info-block__data-item--full">
                        <div class="info-block__data-item-value">г.Алматы, ул. Ауэзова, д. 48, кв.8</div>
                    </div>
                </div>
            </div>
            <div class="personal-area__info-block info-block">
                <div class="info-block__top">
                    <p class="info-block__title">Адрес проживания</p>
                    <div class="info-block__btn-wrap">
                        <a href="#" class="info-block__btn button button--grey"><span class="button__text">Изменить</span></a>
                    </div>
                </div>
                <div class="info-block__data-list">
                    <div class="info-block__data-item info-block__data-item--full">
                        <div class="info-block__data-item-value">г.Алматы, ул. Ауэзова, д. 48, кв.8</div>
                    </div>
                </div>
            </div>
            <div class="personal-area__info-block info-block">
                <div class="info-block__top">
                    <p class="info-block__title">Доверенные лица</p>
                    <div class="info-block__btn-wrap">
                        <a href="#" class="info-block__btn button button--grey"><span class="button__text">Изменить</span></a>
                    </div>
                </div>
                <div class="info-block__data-list">
                    <div class="info-block__data-item">
                        <div class="info-block__data-item-name">Друг</div>
                        <div class="info-block__data-item-value">Носов Олег</div>
                        <div class="info-block__data-item-value">+7 777 123-45-67</div>
                    </div>
                    <div class="info-block__data-item">
                        <div class="info-block__data-item-name">Родственник</div>
                        <div class="info-block__data-item-value">Родственник</div>
                        <div class="info-block__data-item-value">+7 777 123-45-67</div>
                    </div>
                </div>
            </div>
            <div class="personal-area__info-block info-block">
                <div class="info-block__top">
                    <p class="info-block__title">Занятость и доходы</p>
                    <div class="info-block__btn-wrap">
                        <a href="#" class="info-block__btn button button--grey"><span class="button__text">Изменить</span></a>
                    </div>
                </div>
                <div class="info-block__data-list">
                    <div class="info-block__data-item">
                        <div class="info-block__data-item-name">Занятость</div>
                        <div class="info-block__data-item-value">Работник сферы услуг (продавец)</div>
                    </div>
                    <div class="info-block__data-item">
                        <div class="info-block__data-item-name">Место работы</div>
                        <div class="info-block__data-item-value">Рога и копыта</div>
                    </div>
                    <div class="info-block__data-item">
                        <div class="info-block__data-item-name">Должность</div>
                        <div class="info-block__data-item-value">Менеджер по ППЦ СКА</div>
                    </div>
                    <div class="info-block__data-item">
                        <div class="info-block__data-item-name">Ежемесячный доход в тенге</div>
                        <div class="info-block__data-item-value">150000</div>
                    </div>
                    <div class="info-block__data-item">
                        <div class="info-block__data-item-name">Рабочий телефон</div>
                        <div class="info-block__data-item-value">150000</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection