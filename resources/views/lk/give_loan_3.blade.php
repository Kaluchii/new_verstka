@extends('layout')
@section('content')
    <div class="personal-area">
        <div class="personal-area__container">
            <div class="personal-area__title personal-area__title--loan-steps">Получить <span class="nowrap">35 000 тг</span> <span class="nowrap">до 12 августа</span></div>
            <div class="personal-area__loan-steps loan-steps">
                <div class="loan-steps__item">
                    <span class="loan-steps__item-num">1</span>
                    <span class="loan-steps__item-name">Телефон и почта</span>
                </div>
                <div class="loan-steps__item">
                    <span class="loan-steps__item-num">2</span>
                    <span class="loan-steps__item-name">Личные данные</span>
                </div>
                <div class="loan-steps__item loan-steps__item--current">
                    <span class="loan-steps__item-num">3</span>
                    <span class="loan-steps__item-name">Способ получения</span>
                </div>
            </div>
            <div class="personal-area__obtaining-methods obtaining-methods">
                <div class="obtaining-methods__title">Способ получения</div>
                <ul class="obtaining-methods__list">
                    <li class="obtaining-methods__item">
                        <button class="obtaining-methods__check-button check-button is-active"><span class="check-button__text">На банковскую карту</span></button>
                        <div class="obtaining-methods__clarification">БЕЗ ВЫХОДНЫХ</div>
                    </li>
                    <li class="obtaining-methods__item">
                        <button class="obtaining-methods__check-button check-button"><span class="check-button__text">На счет в банке</span></button>
                        <div class="obtaining-methods__clarification">В РАБОЧЕЕ ВРЕМЯ</div>
                    </li>
                    <li class="obtaining-methods__item">
                        <button class="obtaining-methods__check-button check-button"><span class="check-button__text">В отделении Казпочты</span></button>
                        <div class="obtaining-methods__clarification">В РАБОЧЕЕ ВРЕМЯ</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
@endsection