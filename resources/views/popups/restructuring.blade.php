@section('popup_restructuring')
    <div class="popup popup--long js_restructuring_popup">
        <div class="popup__container">
            <div class="popup__title title-l2">Реструктуризация займа</div>
            <div class="popup__text">
                Начисление процентов и пени по займу останавливается. Задолженость оплачивается по частям.
            </div>
            <div class="popup__info-plate popup__info-plate--loan-action info-plate">
                <div class="info-plate__select-wth-label select-wth-label">
                    <div class="select-wth-label__text">Срок реструктуризации</div>
                    <div class="select-wth-label__select-wrap">
                        <div class="select-wth-label__select select">
                            <select name="" id="">
                                <option value="">2 месяца • 2 платежа</option>
                                <option value="">3 месяца • 3 платежа</option>
                                <option value="">4 месяца • 4 платежа</option>
                                <option value="">5 месяца • 5 платежа</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="popup__restruct-3-col restruct-3-col">
                <div class="restruct-3-col__item">
                    <div class="restruct-3-col__item-title">Задолженность</div>
                    <div class="restruct-3-col__item-text">99 999 тг</div>
                </div>
                <div class="restruct-3-col__item">
                    <div class="restruct-3-col__item-title">Первый платеж</div>
                    <div class="restruct-3-col__item-text">99 999 тг</div>
                </div>
                <div class="restruct-3-col__item">
                    <div class="restruct-3-col__item-title">Остаток</div>
                    <div class="restruct-3-col__item-text">99 999 тг</div>
                </div>
            </div>
            <hr class="popup__hr">
            <div class="popup__middle-title title-l3">Первый платеж <span class="js_sum">99 999 тг</span></div>
            <div class="popup__checkbox-wrap">
                <label class="popup__checkbox checkbox">
                    <input type="checkbox" class="checkbox__input">
                    <span class="checkbox__visual-square"></span>
                    <span class="checkbox__text">Я согласен с <a href="#" class="link">Офертой на продление Договора займа</a></span>
                </label>
            </div>
            <div class="popup__btn-wrap">
                <a href="#" class="popup__btn button button--t-yellow button--s-full-on-small"><span class="button__text">Реструктуризовать займ</span></a>
            </div>
        </div>
        <a href="#close" class="popup__close js_close_popup">Закрыть окно</a>
        <a href="#close" class="popup__close-x js_close_popup"></a>
    </div>
@endsection