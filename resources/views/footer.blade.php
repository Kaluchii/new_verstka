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