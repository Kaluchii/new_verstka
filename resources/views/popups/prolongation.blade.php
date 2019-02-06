@section('popup_prolongation')
    <div class="popup popup--long js_prolongation_popup">
        <div class="popup__container">
            <div class="popup__title title-l2">Продлить займ</div>
            <div class="popup__text">На продление займа отводится не более 40 дней.</div>
            <div class="popup__info-plate popup__info-plate--loan-action info-plate">
                <div class="info-plate__select-wth-label select-wth-label">
                    <div class="select-wth-label__text">Продлить займ на</div>
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
            <div class="popup__middle-title title-l3">К оплате: <span class="js_sum">11 250 тг</span></div>
            <div class="popup__text">Чтобы продлить займ, внесите платеж до&nbsp;25&nbsp;декабря&nbsp;16:08</div>
            <hr class="popup__hr">
            <div class="popup__checkbox-wrap">
                <label class="popup__checkbox checkbox">
                    <input type="checkbox" class="checkbox__input">
                    <span class="checkbox__visual-square"></span>
                    <span class="checkbox__text">Я согласен с <a href="#" class="link">Офертой на продление Договора займа</a></span>
                </label>
            </div>
            <div class="popup__btn-wrap">
                <a href="#" class="popup__btn button button--t-yellow button--s-full-on-small"><span class="button__text">Продлить займ</span></a>
            </div>
            <div class="popup__text">
                По окончанию 5&nbsp;дней, продление будет доступно
                не&nbsp;более&nbsp;чем&nbsp;на&nbsp;35&nbsp;дней.
            </div>
        </div>
        <a href="#close" class="popup__close js_close_popup">Закрыть окно</a>
        <a href="#close" class="popup__close-x js_close_popup"></a>
    </div>
@endsection