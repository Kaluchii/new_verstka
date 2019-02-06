@section('popup_history')
    <div class="popup js_history_popup">
        <div class="popup__container">
            <div class="popup__info-plate info-plate">
                <div class="info-plate__loan-sum-date loan-sum-date">
                    <div class="loan-sum-date__item">
                        <div class="loan-sum-date__value">29 000 тг</div>
                        <div class="loan-sum-date__name">Сумма к возврату</div>
                    </div>
                    <div class="loan-sum-date__item">
                        <div class="loan-sum-date__value">16 декабря</div>
                        <div class="loan-sum-date__name">Дата возврата</div>
                    </div>
                </div>
            </div>
            <div class="popup__loan-info loan-info">
                <div class="loan-info__row">
                    <div class="loan-info__col">Статус</div>
                    <div class="loan-info__col">Отклонен</div>
                </div>
                <div class="loan-info__row">
                    <div class="loan-info__col">Заявка принята</div>
                    <div class="loan-info__col">16.11.2018</div>
                </div>
                <div class="loan-info__row">
                    <div class="loan-info__col">Сумма займа</div>
                    <div class="loan-info__col">20 000 тг</div>
                </div>
                <div class="loan-info__row">
                    <div class="loan-info__col">Сумма погашения</div>
                    <div class="loan-info__col">29 000 тг</div>
                </div>
                <div class="loan-info__row">
                    <div class="loan-info__col">Длительность</div>
                    <div class="loan-info__col">30 дней</div>
                </div>
            </div>
        </div>
        <a href="#close" class="popup__close js_close_popup">Закрыть окно</a>
        <a href="#close" class="popup__close-x js_close_popup"></a>
    </div>
@endsection