@section('header')
    <header class="header">
        <div class="header__desktop">
            <div class="header__top">
                <a href="/" class="header__home-link">
                    <img src="/img/logo.svg" title="займы алматы, в казахстане" alt="Займы онлайн - ДоПолучки" class="header__logo">
                </a>
                <div class="header__tag-wrap">
                    <span class="header__tag">Казахстанский сервис онлайн-займов</span>
                </div>
                <div class="header__phone-wrap">
                    <span class="header__phone">+7 (727) 350-50-33</span>
                </div>
            </div>
            <nav class="header__navigation">
                <ul class="header__menu-list">
                    <li class="header__menu-item"><a href="#" class="header__menu-link link-black">Взять займ</a></li>
                    <li class="header__menu-item"><a href="#" class="header__menu-link link-black">Как оформить займ</a></li>
                    <li class="header__menu-item"><a href="#" class="header__menu-link link-black">Как погасить займ</a></li>
                    <li class="header__menu-item"><a href="#" class="header__menu-link link-black">Как продлить займ</a></li>
                </ul>
                <div class="header__pa-link-wrap">
                    <a href="#" class="header__pa-link link-black-local">Личный кабинет</a>
                </div>
            </nav>
        </div>
        <div class="header__mobile header-mobile">
            <div class="header-mobile__hamburger-wrap">
                <div class="header-mobile__hamburger hamburger js-menu-button">
                    <span class="hamburger__item hamburger__item--top"></span>
                    <span class="hamburger__item hamburger__item--middle"></span>
                    <span class="hamburger__item hamburger__item--bottom"></span>
                </div>
            </div>
            <a href="/" class="header-mobile__logo-wrap">
                <img class="header-mobile__logo" src="/img/logo.svg" title="займы алматы, в казахстане" alt="Займы онлайн - ДоПолучки" />
            </a>
            <div class="header-mobile__login-wrap">
                <!--{if $logined}-->
                <!--{if $member.is_registered}-->
                {{--<a class="header-mobile__lk" href="/member/" rel="nofollow"></a>--}}
                <!--{/if}-->
                <!--{else}-->
                <a class="header-mobile__login-button" href="javascript:;" rel="nofollow" onclick="createLoginWindow();">ВОЙТИ</a>
                <!--{/if}-->
            </div>
            <div class="header-mobile__fade-block js-menu-fade"></div>
            <div class="header-mobile__menu-wrap mobile-menu js-mobile-menu">
                <div class="mobile-menu__header <!--{if !$logined}-->mobile-menu__header--no-money<!--{/if}--><!--{if $ban_credit.date || $is_open_credit}-->mobile-menu__header--empty<!--{/if}-->">
                    <div class="mobile-menu__hamburger-wrapper">
                        <div class="mobile-menu__hamburger hamburger js-menu-button">
                            <span class="hamburger__item hamburger__item--top"></span>
                            <span class="hamburger__item hamburger__item--middle"></span>
                            <span class="hamburger__item hamburger__item--bottom"></span>
                        </div>
                    </div>
                    <!--{if $logined}-->
                    <!--{* Если бан то не выводит ничего *}-->
                    <!--{if !$ban_credit.date && !$is_open_credit}-->
                    <div class="mobile-menu__available-amount">Вам доступна сумма <span class="mobile-menu__available-amount-bold">до <!--{$max_sum_loan|number_format:0:"":" "}--> тг</span></div>
                    <div class="mobile-menu__issue-wrap">
                        <a href="/member/getmoney/" class="mobile-menu__issue-btn button button--yellow"><span class="button__text">Оформить займ</span></a>
                    </div>
                    <!--{/if}-->
                    <!--{else}-->
                    {{--<div class="mobile-menu__issue-wrap">--}}
                        {{--<a href="/" class="mobile-menu__issue-btn button button--yellow"><span class="button__text">Оформить займ</span></a>--}}
                    {{--</div>--}}
                    <!--{/if}-->
                </div>
                <ul class="mobile-menu__menu-wrap ">
                    <!--{* Войти в кабинет | Фамилия И.   *}-->
                    <!--{* История займов | Смена пароля *}-->
                    <!--{if $logined}-->
                    <li class="mobile-menu__item mobile-menu__item--relative <!--{if $active == 3}--> mobile-menu__item--active<!--{/if}-->">
                        <a href="/member/" class="mobile-menu__link mobile-menu__link--icon mobile-menu__link--icon-face" title="<!--{$full_name}-->" >Василий Займович<!--{$short_name}--></a>
                        <a href="/index.php?c=member&m=logout" class="mobile-menu__logout-btn">Выйти</a>
                    </li>

                    <!--{* Если есть открытый кредит *}-->
                    <!--{if $is_open_credit}-->
                    <li class="mobile-menu__item  <!--{if  $active == 1}--> mobile-menu__item--active<!--{/if}-->">
                        <a href="/member/loanopen/" title="Ваш займ" class="mobile-menu__link">Ваш займ</a>
                    </li>
                    <!--{/if}-->

                    <li class="mobile-menu__item <!--{if $active == 2}--> mobile-menu__item--active<!--{/if}-->">
                        <a href="/member/loanshistory/" class="mobile-menu__link" title="История займов" >История займов</a>
                    </li>

                    <li class="mobile-menu__item <!--{if $active == 4}--> mobile-menu__item--active<!--{/if}-->">
                        <a href="/member/changepassword/" class="mobile-menu__link" title="Смена пароля" >Смена пароля</a>
                    </li>
                    <!--{else}-->
                    <li class="mobile-menu__item">
                        <a href="javascript:;" onclick="createLoginWindow();" class="mobile-menu__link mobile-menu__link--icon mobile-menu__link--icon-face" >Личный кабинет</a>
                    </li>
                    <!--{/if}-->

                    <li class="mobile-menu__item <!--{if $active_page == 'get-money'}--> mobile-menu__item--active<!--{/if}-->">
                        <a href="/get-money.html" class="mobile-menu__link">Как оформить займ</a>
                    </li>
                    <li class="mobile-menu__item <!--{if $active_page == 'return-money'}--> mobile-menu__item--active<!--{/if}-->">
                        <a href="/return-money.html" class="mobile-menu__link">Как погасить займ</a>
                    </li>

                    <!--{* Как продлить займ *}-->
                    <!--{if !$logined || ($logined && $service_link == 'prolongation')}-->
                    <li class="mobile-menu__item <!--{if $active_page == 'instruction-for-prolongation'}--> mobile-menu__item--active<!--{/if}-->">
                        <a href="/instruction-for-prolongation.html" class="mobile-menu__link">Как продлить займ</a>
                    </li>
                    <!--{/if}-->
                    <!--{* Как реструктуризировать займ *}-->
                    <!--{if $logined && $service_link == 'restruct'}-->
                    <li class="mobile-menu__item <!--{if $active_page == 'restruct'}--> mobile-menu__item--active<!--{/if}-->">
                        <a href="/instruction-for-prolongation.html" class="mobile-menu__link">Реструктуризация займа</a>
                    </li>
                    <!--{/if}-->
                </ul>
                <!--{if !$is_app}-->
                <div class="mobile-menu__sale-in-app">
                    <p class="mobile-menu__sale-text">Через приложение со <span class="text-highlight">скидкой <!--{$discount_percent}--></span></p>
                    <a href="https://play.google.com/store/apps/details?id=kz.mint.dopoandroidapp&referrer=utm_source%3Ddopokz%26utm_medium%3Dbanner%26utm_campaign%3Dapp-promo-20" rel="nofollow" class="mobile-menu__app-link">
                        <img src="/img/googleplay.png" class="mobile-menu__sale-img" alt="Google Play Dopo App link">
                    </a>
                </div>
                <!--{/if}-->
                <div class="mobile-menu__call-center-wrap">
                    <span class="mobile-menu__call-center-title">Круглосуточный кол-центр</span>
                    <a href="tel:+77273505033" class="mobile-menu__call-center-button">+7 (727) 350-50-33</a>
                </div>
                <div class="mobile-menu__right-protection">
                    <a href="/consumer-rights-protection.html" class="mobile-menu__right-protection-link link-on-dark <!--{if $active_page == 'consumer-rights-protection'}--> is-active <!--{/if}-->">Защита прав потребителей</a>
                </div>
            </div>
        </div>
    </header>
@endsection