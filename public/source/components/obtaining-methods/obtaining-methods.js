$(function () {

  var $btns = $('.js_method_selection_btn'),
      $tabs = $('.js_method_item');

  /* Переключение вкладок "Способы получения" */
  $btns.on('click', function () {
    if ($(this).hasClass('is-active')) return false;

    var btnIndex = $btns.index($(this));

    $btns.removeClass('is-active');
    $(this).addClass('is-active');

    $tabs.removeClass('is-active');
    $tabs.eq(btnIndex).addClass('is-active');
  });

});