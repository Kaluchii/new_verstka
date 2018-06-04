$(document).ready(function(){
  $('.js_knowledge_cat').on('click', function () {
    $('.js_knowledge_back').addClass('knowledge__back-btn-wrap--display');
    $('.js_knowledge_questions').addClass('knowledge__questions-list--display');
    $('.js_knowledge_container').addClass('knowledge__main-container--big');
    $('.js_knowledge_head').text($(this).children().text());
  });

  $('.js_knowledge_back').on('click', function () {
    if ($(this).hasClass('_step2')) {
      $('.js_knowledge_answer').removeClass('knowledge__answer--display');
      $('.js_knowledge_back').removeClass('_step2');
    } else {
      $(this).removeClass('knowledge__back-btn-wrap--display');
      $('.js_knowledge_questions').removeClass('knowledge__questions-list--display');
      $('.js_knowledge_container').removeClass('knowledge__main-container--big');
      $('.js_knowledge_head').text('База знаний');
    }
  });

  $('.js_knowledge_get_answer').on('click', function () {
    $('.js_knowledge_answer').addClass('knowledge__answer--display');
    $('.js_knowledge_back').addClass('_step2');
  });

  function catFilling(list) {
  }

  function catQuestionsFilling(list) {
  }

  function questionTextFilling(text) {
  }
});