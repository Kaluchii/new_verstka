@extends('layout')
@section('content')
    <main class="personal-area">
        <div class="personal-area__container">
            <div class="personal-area__title personal-area__title--loan-steps title-l2">Займ <span class="nowrap">35 000 тг</span> <span class="text-highlight nowrap">со скидкой 25%</span><br><span class="nowrap">до 12 августа</span></div>
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
                <div class="obtaining-methods__title title-l2">Способ получения</div>
                <ul class="obtaining-methods__list">
                    <li class="obtaining-methods__item">
                        <button class="obtaining-methods__check-button check-button is-active js_method_selection_btn"><span class="check-button__text">На банковскую карту</span></button>
                        <div class="obtaining-methods__clarification">БЕЗ ВЫХОДНЫХ</div>
                    </li>
                    <li class="obtaining-methods__item">
                        <button class="obtaining-methods__check-button check-button js_method_selection_btn"><span class="check-button__text">На счет в банке</span></button>
                        <div class="obtaining-methods__clarification">В РАБОЧЕЕ ВРЕМЯ</div>
                    </li>
                    <li class="obtaining-methods__item">
                        <button class="obtaining-methods__check-button check-button js_method_selection_btn"><span class="check-button__text">В отделении «Казпочты»</span></button>
                        <div class="obtaining-methods__clarification">В РАБОЧЕЕ ВРЕМЯ</div>
                    </li>
                </ul>
            </div>
            <div class="personal-area__tabs obtaining-method-tabs">
                <div class="obtaining-method-tabs__tab is-active js_method_item">
                    <div class="obtaining-method-tabs__title">На банковскую карту</div>
                    <p class="obtaining-method-tabs__list-title">Обратите внимание</p>
                    <ol class="obtaining-method-tabs__card-requirements row-list row-list--text row-list--ordered">
                        <li class="row-list__item">Карта не должна быть для получения пенсий, стипендий или пособий;</li>
                        <li class="row-list__item">На карте нужно не менее 100 тг. Они временно блокируются при подключении карты;</li>
                        <li class="row-list__item">Карта должна быть открыта для интернет-оплат (можно активировать позвонив в банк); </li>
                        <li class="row-list__item">Карта должна принадлежать вам, на ней должно быть ваше имя.</li>
                    </ol>

                    <div class="obtaining-method-tabs__iframe iframe">
                        <iframe class="iframe__area" src="/iframe"></iframe>
                    </div>
                </div>

                <div class="obtaining-method-tabs__tab js_method_item">
                    <div class="obtaining-method-tabs__title">На счет в банке</div>
                    <p class="obtaining-method-tabs__clarification">Указанный счет должен быть открыт на имя заявителя. В случае одобрения, мы отправим деньги в течение 15 минут и сообщим по SMS.</p>
                    <div class="obtaining-method-tabs__2-cols">
                        <div class="obtaining-method-tabs__col">
                            <div class="obtaining-method-tabs__field obtaining-method-tabs__field--iban field">
                                <div class="field__name">Ваш 20-ти значный IBAN <span class="normal tablet-hide">(номер счета)</span></div>
                                <div class="field__input-wrap">
                                    <input type="text" class="field__input input" placeholder="KZ00 0000 0000 0000 0000" tabindex="">
                                    <div class="field__alert"></div>
                                </div>
                            </div>
                        </div>
                        <div class="obtaining-method-tabs__col">
                            <div class="obtaining-method-tabs__field field">
                                <div class="field__name">Как узнать IBAN-номер счета</div>
                                <div class="field__input-wrap">
                                    <input type="text" class="field__input input" placeholder="KZ00 0000 0000 0000 0000" tabindex="">
                                    <div class="field__alert"></div>
                                </div>
                            </div>
                            <div class="obtaining-method-tabs__iban-info text-block text-block--big-lh">
                                <ol>
                                    <li>Через отделение банка, предоставив уд. личности;</li>
                                    <li>Через колл центр;</li>
                                    <li>В договоре. Номер договора и есть IBAN-счет;</li>
                                    <li>В конверте с PIN-кодом карты.</li>
                                </ol>
                                <p><span class="bold">Телефоны КаспиБанка</span></p>
                                <p>Колл центр 8-800-080-18-00</p>
                                <p>С мобильного 9999</p>
                                <p>С городского +7 (727) 258-59-65</p>
                            </div>
                        </div>
                    </div>
                    <div class="obtaining-method-tabs__btn-wrap">
                        <button class="obtaining-method-tabs__btn button button--t-yellow button--s-full-on-small"><span class="button__text">Завершить оформление</span></button>
                    </div>
                </div>

                <div class="obtaining-method-tabs__tab js_method_item">
                    <div class="obtaining-method-tabs__title">В отделении «Казпочты»</div>
                    <p class="obtaining-method-tabs__clarification">Указанный счет должен быть открыт на имя заявителя. В случае одобрения, мы отправим деньги в течение 15 минут и сообщим по SMS. Получить займ можно в любом отделении «Казпочты» по всему Казахстану.</p>
                    <div class="obtaining-method-tabs__2-cols">
                        <div class="obtaining-method-tabs__col">
                            <div class="obtaining-method-tabs__field obtaining-method-tabs__field--iban field">
                                <div class="field__name">Ваш 20-ти значный IBAN <span class="normal tablet-hide">(номер счета)</span></div>
                                <div class="field__input-wrap">
                                    <input type="text" class="field__input input" placeholder="KZ00 0000 0000 0000 0000" tabindex="">
                                    <div class="field__alert"></div>
                                </div>
                            </div>
                            <div class="obtaining-method-tabs__popup-link-wrap">
                                <a href="#" class="obtaining-method-tabs__popup-link link">КАК ОТКРЫТЬ СЧЕТ В «КАЗПОЧТЕ»</a>
                            </div>
                        </div>
                        <div class="obtaining-method-tabs__col">
                            <p class="obtaining-method-tabs__info-title">IBAN-номер счета в Казпочте можно узнать:</p>
                            <div class="obtaining-method-tabs__iban-info text-block text-block--big-lh">
                                <ol>
                                    <li>В контакт-центре по номеру 1499;</li>
                                    <li>Номер счета указан в договоре;</li>
                                    <li>В отделении «Казпочты».</li>
                                </ol>
                                <p><span class="bold">Телефоны</span></p>
                                <p>С городского +7 (727) 259-07-77</p>
                            </div>
                        </div>
                    </div>
                    <div class="obtaining-method-tabs__btn-wrap">
                        <button class="obtaining-method-tabs__btn button button--t-yellow button--s-full-on-small"><span class="button__text">Завершить оформление</span></button>
                    </div>
                </div>
            </div>
        </div>
    </main>
@endsection