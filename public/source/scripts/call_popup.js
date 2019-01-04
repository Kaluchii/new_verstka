$(function () {
  $('.js_open_history_popup').magnificPopup({
    type: 'inline',
    mainClass: 'mfp-move-from-top',
    removalDelay: 500,
    tClose: 'Закрыть (Esc)',
    tLoading: '<div class="preloader"></div>',
    midClick: true
  });
});