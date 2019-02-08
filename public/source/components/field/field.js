$(function () {

    let field = '.js_field',
        wrapper = '.js_field_wrapper',
        input = '.js_field_input',
        alert = '.js_field_alert',
        passSwitch = '.js_field_pass_switch';

    /* Отображение/скрытие пароля */
    $('body').on('click', passSwitch, function (e) {
        e.preventDefault();

        let _this = $(e.target),
            $field = $(field),
            $input = $(input),
            $rootElement = _this.closest($field),
            $currentInput = $rootElement.find($input);

        if ($currentInput.attr('type') === 'password') {
            $currentInput.attr('type', 'text');
            _this.addClass('password-displayed');
        } else {
            $currentInput.attr('type', 'password');
            _this.removeClass('password-displayed');
        }
    });

});