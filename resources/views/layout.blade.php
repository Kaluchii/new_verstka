<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="" type="image/gif">

    @include('styles')
    @yield('styles')
</head>
<body>

@yield('content')

@include('scripts')
@yield('scripts')


<div class="knowledge">
    <div class="knowledge__header">
        <div class="knowledge__header-text">База знаний</div>
    </div>
    <div class="knowledge__main-container">
        <div class="knowledge__search-wrap">
            <input type="text" id="knowledge-search" class="knowledge__search" placeholder="Что ищете?">
            <label for="knowledge-search" class="knowledge__search-icon"></label>
        </div>
        <div class="knowledge__list-wrap">
            <div class="knowledge__cat-list">
                <div class="knowledge__cat-item">
                    <div class="knowledge__cat-item-text">Кто может получить займ</div>
                </div>
                <div class="knowledge__cat-item">
                    <div class="knowledge__cat-item-text">Как оформить займ</div>
                </div>
                <div class="knowledge__cat-item">
                    <div class="knowledge__cat-item-text">Как получить деньги</div>
                </div>
                <div class="knowledge__cat-item">
                    <div class="knowledge__cat-item-text">Как погасить займ</div>
                </div>
                <div class="knowledge__cat-item">
                    <div class="knowledge__cat-item-text">Как продлить займ</div>
                </div>
            </div>
            <div class="knowledge__questions-list">
                <div class="knowledge__questions-item">На какую сумму можно оформить займ?</div>
                <div class="knowledge__questions-item">На какой срок оформляется займ?</div>
                <div class="knowledge__questions-item">Как оформляется договор займа?</div>
                <div class="knowledge__questions-item">Можно ли получить займ на счет или карту другого человека?</div>
                <div class="knowledge__questions-item">Почему могут отказать в займе?</div>
                <div class="knowledge__questions-item">Почему не пришло SMS?</div>
                <div class="knowledge__questions-item">Почему не приходят письма?</div>
                <div class="knowledge__questions-item">Мой населенный пункт отсутствует в системе</div>
                <div class="knowledge__questions-item">На какую сумму можно оформить займ?</div>
                <div class="knowledge__questions-item">На какую сумму можно оформить займ?</div>
            </div>
        </div>
        <div class="knowledge__back-btn-wrap">
            <div class="knowledge__back-btn">Вернуться назад</div>
        </div>
    </div>
    <div class="knowledge__footer">
        <div class="knowledge__footer-text-wrap">
            <div class="knowledge__footer-question">Задать вопрос</div>
            <div class="knowledge__footer-work-time">с 9 до 18:00</div>
        </div>
        <div class="knowledge__footer-soc-wrap">
            <a href="#" class="knowledge__soc"></a>
            <a href="#" class="knowledge__soc"></a>
            <a href="#" class="knowledge__soc"></a>
        </div>
        <div class="knowledge__btn">
            <div class="knowledge__btn-text">?</div>
        </div>
    </div>
</div>


</body>
</html>