@include('popups.agreement')
@include('popups.authorization')
@include('popups.alert')
@include('popups.forgot_step_1')
@include('popups.forgot_step_2')
@include('popups.history')
<div class="hide">
    @yield('popup_agreement')
    @yield('popup_authorization')
    @yield('popup_alert')
    @yield('popup_forgot_step_1')
    @yield('popup_forgot_step_2')
    @yield('popup_history')
</div>