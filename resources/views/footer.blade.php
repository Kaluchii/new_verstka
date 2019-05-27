@include('popups.agreement')
@include('popups.authorization')
@include('popups.alert')
@include('popups.forgot_step_1')
@include('popups.forgot_step_2')
@include('popups.history')
@include('popups.prolongation')
@include('popups.restructuring')
@include('popups.offer_confirmation')

<footer class="page-wrapper__footer footer">
    <div class="footer__wrapper">
        <div class="footer__info">
            <div class="footer__contacts">
                <div class="footer__copyright"><p>© Сервис онлайн-займов «ДоПолучки»,&#160;2019</p></div>
                <p class="footer__call">Кол-центр  <a class="footer__call-link" href="tel:+7(727)350-50-33">+7 (727) 350-50-33</a></p>
                <div class="footer__social-list">
                    <div class="footer__social-wrap">
                        <a class="footer__social-link footer__social-link--inst" href="#">Instagram</a>
                    </div>
                    <div class="footer__social-wrap">
                        <a class="footer__social-link footer__social-link--vk" href="#">VK</a>
                    </div>
                    <div class="footer__social-wrap">
                        <a class="footer__social-link footer__social-link--fb" href="#">Facebook</a>
                    </div>
                </div>
                <div class="footer__contacts-img-list">
                    <div class="footer__contacts-img-wrap">
                        <a href="https://play.google.com/store/apps/details?id=kz.mint.dopoandroidapp&referrer=utm_source%3Ddopo.kz%26utm_medium%3Dbanner%26utm_campaign%3Dapp-promo-footer&hl=ru">
                            <img class="footer__contacts-img" src="images_new/googleplay.png" alt="googleplay">
                        </a>
                    </div>
                    <div class="footer__contacts-img-wrap footer__contacts-img-wrap--pad">
                        <a href="http://kazfintech.kz/">
                            <img class="footer__contacts-img footer__contacts-img--kft" src="images_new/kft.svg" alt="Kazfintech">
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer__links-wrap">
                <ul class="footer__links-list-left">
                    <li class="footer__links-item"><a class="footer__link link-green" href="#">Получить займ</a></li>
                    <li class="footer__links-item"><a class="footer__link link-green" href="#">Как мы работаем</a></li>
                    <li class="footer__links-item"><a class="footer__link link-green" href="#">Как оформить займ</a></li>
                    <li class="footer__links-item"><a class="footer__link link-green" href="#">Как погасить займ</a></li>
                    <li class="footer__links-item"><a class="footer__link link-green" href="#">Личный кабинет</a></li>
                </ul>
                <ul class="footer__links-list-right">
                    <li class="footer__links-item"><a class="footer__link link-green" href="#">Вопрос-Ответ</a></li>
                    <li class="footer__links-item"><a class="footer__link link-green" href="#">Правила займов</a></li>
                    <li class="footer__links-item"><a class="footer__link link-green" href="#">Конфиденциальность</a></li>
                    <li class="footer__links-item"><a class="footer__link link-green" href="#">Публикации</a></li>
                    <li class="footer__links-item"><a class="footer__link link-green" href="#">Потребителю</a></li>
                </ul>
            </div>
        </div>
        <div class="footer__partners-list">
            <div class="footer__partners-img-wrap">
                <img class="footer__partners-img" src="images_new/k24.svg" alt="">
            </div>
            <div class="footer__partners-img-wrap">
                <img class="footer__partners-img" src="images_new/pr.svg" alt="">
            </div>
            <div class="footer__partners-img-wrap">
                <img class="footer__partners-img" src="images_new/q.svg" alt="">
            </div>
            <div class="footer__partners-img-wrap">
                <img class="footer__partners-img" src="images_new/visa.svg" alt="">
            </div>
            <div class="footer__partners-img-wrap">
                <img class="footer__partners-img" src="images_new/mc.svg" alt="">
            </div>
        </div>
    </div>
</footer>

<div class="hide">
    @yield('popup_agreement')
    @yield('popup_authorization')
    @yield('popup_alert')
    @yield('popup_forgot_step_1')
    @yield('popup_forgot_step_2')
    @yield('popup_history')
    @yield('popup_prolongation')
    @yield('popup_restructuring')
    @yield('popup_offer_confirmation')
</div>