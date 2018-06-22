$(document).ready(function(){
  catFilling(knowledge);
  // var firstClick = true;
  var firstClick = false;
  $('.js_knowledge_toggle').on('click', function () {
    $('.js_knowledge_base').toggleClass('is-open is-close').removeClass('knowledge--open-cats is-open-questions');
    $('.js_knowledge_answer').removeClass('knowledge__answer--display');
    $('.js_knowledge_back').removeClass('_step2 knowledge__back-btn-wrap--display knowledge__back-btn-wrap--display-instantly');
    $('.js_knowledge_questions_pos').removeClass('knowledge__questions-list-wrap--display knowledge__questions-list-wrap--display-instantly');
    $('.js_knowledge_container').removeClass('knowledge__main-container--search');
    $('#knowledge-search').val('');
    if (firstClick) {
      catFilling(knowledge);
      firstClick = false;
    }
  });

  $('.js_knowledge_container').on('click', '.js_knowledge_cat', function () {
    $('.js_knowledge_back').addClass('knowledge__back-btn-wrap--display');
    $('.js_knowledge_questions_pos').addClass('knowledge__questions-list-wrap--display');
    $('.js_knowledge_base').addClass('is-open-questions');
    $('.js_knowledge_head').text($(this).children().text());

    var catId = $(this).attr('data-cat-id');
    $('.js_knowledge_questions').empty();
    knowledge[catId].questions.forEach(function (item, i) {
      $('.js_knowledge_questions').append(
        '<div class="knowledge__questions-item js_knowledge_get_answer" data-cat-id="' + catId +
        '" data-question-id="' + i + '">' + item.name + '</div>');
    });
  });

  $('.js_knowledge_container').on('click', '.js_knowledge_get_answer', function () {
    $('.js_knowledge_answer').addClass('knowledge__answer--display');
    $('.js_knowledge_back').addClass('_step2');

    var catId = $(this).attr('data-cat-id');
    var questionId = $(this).attr('data-question-id');
    $('.js_knowledge_answer_title').html(knowledge[catId].questions[questionId].name);
    $('.js_knowledge_answer_text').html(knowledge[catId].questions[questionId].text);
  });

  $('.js_knowledge_back').on('click', function () {
    if ($(this).hasClass('_step2')) {
      $('.js_knowledge_answer').removeClass('knowledge__answer--display');
      $('.js_knowledge_back').removeClass('_step2');
    } else {
      $(this).removeClass('knowledge__back-btn-wrap--display knowledge__back-btn-wrap--display-instantly');
      $('.js_knowledge_questions_pos').removeClass('knowledge__questions-list-wrap--display knowledge__questions-list-wrap--display-instantly');
      $('.js_knowledge_base').removeClass('is-open-questions').addClass('knowledge--open-cats');
      $('.js_knowledge_container').removeClass('knowledge__main-container--search');
      $('#knowledge-search').val('');
      $('.js_knowledge_head').text('База знаний');
    }
  });


  function catFilling(list) {
    list.forEach(function (item, i) {
      $('.js_knowledge_cat_list').append(
        '<div class="knowledge__cat-item js_knowledge_cat" data-cat-id="' + i + '">\n' +
            '<div class="knowledge__cat-item-text">' + item.name + '</div>\n' +
        '</div>');
    });
  }

  $('#knowledge-search').on('change keydown keyup paste', function () {
    var searchKey = $(this).val();
    if (searchKey.length > 2) {
      $('.js_knowledge_questions_pos').addClass('knowledge__questions-list-wrap--display-instantly');
      $('.js_knowledge_base').addClass('is-open-questions');
      $('.js_knowledge_container').addClass('knowledge__main-container--search');
      $('.js_knowledge_back').addClass('knowledge__back-btn-wrap--display-instantly');
      $('.js_knowledge_head').text('Поиск');
      $('.js_knowledge_questions').empty();
      searchAnswer(searchKey);
    } else {
      if ($('.js_knowledge_container').hasClass('knowledge__main-container--search')) {
        $('.js_knowledge_questions_pos').removeClass('knowledge__questions-list-wrap--display knowledge__questions-list-wrap--display-instantly');
        $('.js_knowledge_base').removeClass('is-open-questions').addClass('knowledge--open-cats');
        $('.js_knowledge_container').removeClass('knowledge__main-container--search');
        $('.js_knowledge_back').removeClass('knowledge__back-btn-wrap--display knowledge__back-btn-wrap--display-instantly');
        $('.js_knowledge_head').text('База знаний');
      }
    }
  });
  
  function searchAnswer(key) {
    var keyPos,
        questionText,
        selectText;
    knowledge.forEach(function (catItem, catIndex) {
      var catId = catIndex;
      catItem['questions'].forEach(function (item, i) {
        keyPos = item.name.toLowerCase().indexOf(key.toLowerCase());
        if (~keyPos) {
          selectText = '<span class="knowledge__search-text">' + key + '</span>';
          questionText = item.name.substring(0, keyPos) + selectText + item.name.slice(keyPos + key.length);
          $('.js_knowledge_questions').append(
            '<div class="knowledge__questions-item js_knowledge_get_answer" data-cat-id="' + catId +
            '" data-question-id="' + i + '">' + questionText + '</div>');
        }
      });
    });
  }
});