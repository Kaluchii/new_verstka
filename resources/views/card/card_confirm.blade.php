<!DOCTYPE HTML SYSTEM "about:legacy-compat">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="/css/processing.css"/>
    <script type='text/javascript' src='/card/dopokz/jquery-1.11.0.min.js'></script>
    <script type='text/javascript' src='/card/dopokz/dopo.js'></script>
</head>
<body>
<div class="processing">
    <div class="processing__card-sides">
        <div class="processing__front-side card">
            <div class="card__side-name">Лицевая сторона</div>
            <div class="card__surface">
                <div class="card__row">
                    <div class="card__row-name">Номер карты</div>
                    <div class="card__fields-wrap">
                        <input type="text" autocomplete="off" class="card__field" maxlength="4" id="number_1" placeholder="0000">
                        <input type="text" autocomplete="off" class="card__field" maxlength="4" id="number_2" placeholder="0000">
                        <input type="text" autocomplete="off" class="card__field" maxlength="4" id="number_3" placeholder="0000">
                        <input type="text" autocomplete="off" class="card__field" maxlength="4" id="number_4" placeholder="0000">
                    </div>
                </div>
                <div class="card__row">
                    <div class="card__row-name">Срок действия карты <span class="card__row-thru">VALID THRU</span></div>
                    <div class="card__fields-wrap card__fields-wrap--term">
                        <select autocomplete="off" class="card__select" id="exp_month" name="exp_month">
                            <option>01</option><option>02</option><option>03</option><option>04</option><option>05</option><option>06</option>
                            <option>07</option><option>08</option><option>09</option><option>10</option><option>11</option><option>12</option>
                        </select>
                        <select autocomplete="off" class="card__select" id="exp_year" name="exp_year">
                            <option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option>
                        </select>
                    </div>
                </div>
                <div class="card__row">
                    <div class="card__row-name">Имя на карте</div>
                    <div class="card__fields-wrap">
                        <input autocomplete="off" type="text" class="card__field card__field--big" id="card_name" placeholder="CARDHOLDER NAME" />
                        <div class="card__field-error-hint">Имя держателя латинскими буквами</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="processing__back-side card">
            <div class="card__side-name card__side-name--back">Задняя сторона</div>
            <div class="card__surface card__surface--back">
                <div class="card__row">
                    <div class="card__row-name card__row-name--cvv">Код на задней стороне <span class="card__row-cvv">CVV2<span class="card__row-cvv-delimiter">/</span><span class="card__row-cvv-space"> </span>CVC2</span></div>
                    <div class="card__fields-wrap card__fields-wrap--cvv">
                        <input autocomplete="off" type="password" class="card__field" id="sec_cvv2" maxlength="3" placeholder="000" />
                        <div class="card__field-error-hint">Номер указан неверно</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="processing__btn-wrap">
        <button class="processing__btn button button--big-in-small"><span
                    class="button__text">Завершить оформление</span></button>
    </div>
    <div class="processing__logo-wrap">
        <img src="/img/card/processing.png" alt="" class="processing__logo">
    </div>
    <p class="processing__data-protect"> Реквизиты Вашей карты используются только во время операции и передаются в
        Visa/MasterCard по защищенному каналу. Данные Вашей карты хранятся в зашифрованном виде и не могут быть переданы
        третьему лицу.</p>
    <ul class="processing__protects-list">
        <li class="processing__protects-item">
            <img src="/img/card/logo-pci.png" alt="" class="processing__protect-logo">
        </li>
        <li class="processing__protects-item">
            <img src="/img/card/logo-mastercard.png" alt="" class="processing__protect-logo">
        </li>
        <li class="processing__protects-item">
            <img src="/img/card/logo-visa.png" alt="" class="processing__protect-logo">
        </li>
        <li class="processing__protects-item">
            <img src="/img/card/logo-trustwave.png" alt="" class="processing__protect-logo">
        </li>
    </ul>
</div>
</body>
</html>