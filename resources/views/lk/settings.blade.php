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
                <li class="menu__item"><a href="/under_consideration" class="menu__link link">Ваш займ</a></li>
                <li class="menu__item is-active"><a href="/" class="menu__link link">Личные данные</a></li>
                <li class="menu__item"><a href="#" class="menu__link link">История займов</a></li>
                <li class="menu__item"><a href="#" class="menu__link link">Смена пароля</a></li>
            </ul>
        </div>
        <div class="personal-area__title">Личные данные</div>
        <div class="personal-area__info-block info-block">
            <div class="info-block__top">
                <p class="info-block__title">Паспортные данные</p>
                <div class="info-block__btn-wrap">
                    <a href="#" class="info-block__btn button button--grey"><span class="button__text">Изменить</span></a>
                </div>
            </div>
            <div class="info-block__data-list data-list">
                <div class="data-list__item">
                    <div class="data-list__item-name">Фамилия</div>
                    <div class="data-list__item-value">Длиннофамилиев</div>
                </div>
                <div class="data-list__item">
                    <div class="data-list__item-name">Имя</div>
                    <div class="data-list__item-value">Иннокентий</div>
                </div>
                <div class="data-list__item">
                    <div class="data-list__item-name">Отчество</div>
                    <div class="data-list__item-value">Сергеевич</div>
                </div>
                <div class="data-list__item">
                    <div class="data-list__item-name">Семейное положение</div>
                    <div class="data-list__item-value">Мужской</div>
                </div>
                <div class="data-list__item">
                    <div class="data-list__item-name">Количество детей</div>
                    <div class="data-list__item-value">3</div>
                </div>
                <div class="data-list__item">
                    <div class="data-list__item-name">ИИН</div>
                    <div class="data-list__item-value">000 000 000 000</div>
                </div>
                <div class="data-list__item">
                    <div class="data-list__item-name">№ удостоверения личности</div>
                    <div class="data-list__item-value">000 000 000</div>
                </div>
                <div class="data-list__item">
                    <div class="data-list__item-name">Кем выдано</div>
                    <div class="data-list__item-value">МВД РК</div>
                </div>
                <div class="data-list__item data-list__item--small">
                    <div class="data-list__item-name">Дата выдачи</div>
                    <div class="data-list__item-value">20.08.1984</div>
                </div>
                <div class="data-list__item data-list__item--small">
                    <div class="data-list__item-name">Срок действия</div>
                    <div class="data-list__item-value">20.08.1984</div>
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
            <div class="info-block__data-list data-list">
                <div class="data-list__item">
                    <div class="data-list__item-name">Эл. почта</div>
                    <div class="data-list__item-value">vitrety@yandex.ru</div>
                </div>
                <div class="data-list__item">
                    <div class="data-list__item-name">Мобильный телефон</div>
                    <div class="data-list__item-value">+7 707 3**-**-18</div>
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
            <div class="info-block__data-list data-list">
                <div class="data-list__item data-list__item--full">
                    <div class="data-list__item-value">г.Алматы, ул. Ауэзова, д. 48, кв.8</div>
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
            <div class="info-block__data-list data-list">
                <div class="data-list__item data-list__item--full">
                    <div class="data-list__item-value">г.Алматы, ул. Ауэзова, д. 48, кв.8</div>
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
            <div class="info-block__data-list data-list">
                <div class="data-list__item">
                    <div class="data-list__item-name">Друг</div>
                    <div class="data-list__item-value">Носов Олег</div>
                    <div class="data-list__item-value">+7 777 123-45-67</div>
                </div>
                <div class="data-list__item">
                    <div class="data-list__item-name">Родственник</div>
                    <div class="data-list__item-value">Родственник</div>
                    <div class="data-list__item-value">+7 777 123-45-67</div>
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
            <div class="info-block__data-list data-list">
                <div class="data-list__item">
                    <div class="data-list__item-name">Занятость</div>
                    <div class="data-list__item-value">Работник сферы услуг (продавец)</div>
                </div>
                <div class="data-list__item">
                    <div class="data-list__item-name">Место работы</div>
                    <div class="data-list__item-value">Рога и копыта</div>
                </div>
                <div class="data-list__item">
                    <div class="data-list__item-name">Должность</div>
                    <div class="data-list__item-value">Менеджер по ППЦ СКА</div>
                </div>
                <div class="data-list__item">
                    <div class="data-list__item-name">Ежемесячный доход в тенге</div>
                    <div class="data-list__item-value">150000</div>
                </div>
                <div class="data-list__item">
                    <div class="data-list__item-name">Рабочий телефон</div>
                    <div class="data-list__item-value">150000</div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection