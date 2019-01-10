$(function () {

  var $field = $('.js_field'),
      $wrapper = $('.js_field_wrapper'),
      $input = $('.js_field_input'),
      $alert = $('.js_field_alert'),
      $passSwitch = $('.js_field_pass_switch');

  /* Отображение/скрытие пароля */
  $passSwitch.on('click', function () {
    var $rootElement = $(this).closest($field),
        $currentInput = $rootElement.find($input);

    if ($currentInput.attr('type') === 'password') {
      $currentInput.attr('type', 'text');
      $(this).addClass('password-displayed');
    } else {
      $currentInput.attr('type', 'password');
      $(this).removeClass('password-displayed');
    }
  });

});