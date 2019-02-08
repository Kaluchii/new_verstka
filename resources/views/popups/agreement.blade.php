@section('popup_agreement')
    <div class="popup js_agreement_popup">
        <div class="popup__container">
            <div class="popup__title title-l2">Согласия и обязательства</div>
            <ul class="popup__row-list row-list">
                <li class="row-list__item">Я согласен с <a href="#" class="link">условиями</a> использования аналогов собственноручной подписи.</li>
                <li class="row-list__item">Я согласен с <a href="#" class="link">условиями</a> предоставления информации обо мне в кредитные бюро.</li>
                <li class="row-list__item">Я согласен с <a href="#" class="link">условиями</a> сбора и обработки персональных данных.</li>
                <li class="row-list__item">Я согласен с <a href="#" class="link">поручением на перевод</a> денежных средств в пользу третьего лица.</li>
                <li class="row-list__item">Я согласен с <a href="#" class="link">Офертой</a> на предоставление срочного денежного займа.</li>
                <li class="row-list__item">Я согласен с <a href="#" class="link">договором</a> на обслуживание займа.</li>
            </ul>
            <hr class="popup__hr">
            <div class="popup__checkbox-wrap">
                <label class="popup__checkbox checkbox">
                    <input type="checkbox" class="checkbox__input">
                    <span class="checkbox__visual-square"></span>
                    <span class="checkbox__text">Я ознакомлен(а) с документами и&nbsp;принимаю&nbsp;условия</span>
                </label>
            </div>
            <div class="popup__btn-wrap">
                <a href="#" class="popup__btn button button--t-yellow button--s-medium button--s-full-on-small js_open_offer_confirmation_popup"><span class="button__text">Продолжить</span></a>
            </div>
        </div>
        <a href="#close" class="popup__close js_close_popup">Закрыть окно</a>
        <a href="#close" class="popup__close-x js_close_popup"></a>
    </div>
@endsection