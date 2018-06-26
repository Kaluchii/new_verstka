@section('knowledge')
<div class="knowledge js_knowledge_base is-close">
    <div class="knowledge__container">
        <div class="knowledge__header">
            <div class="knowledge__header-text js_knowledge_head">База знаний</div>
        </div>
        <div class="knowledge__main-container js_knowledge_container">
            <div class="knowledge__search-wrap">
                <input type="text" id="knowledge-search" class="knowledge__search" placeholder="Что ищете?">
                <label for="knowledge-search" class="knowledge__search-icon"></label>
            </div>
            <div class="knowledge__list-wrap">
                <div class="knowledge__cat-list js_knowledge_cat_list"></div>
                <div class="knowledge__questions-list-wrap js_knowledge_questions_pos" data-simplebar data-simplebar-auto-hide="false">
                    <div class="knowledge__questions-list js_knowledge_questions"></div>
                </div>
            </div>
            <div class="knowledge__answer js_knowledge_answer">
                <div class="knowledge__answer-title js_knowledge_answer_title">На какую сумму можно оформить займ?</div>
                <div class="knowledge__answer-text-wrap" data-simplebar data-simplebar-auto-hide="false">
                    <div class="knowledge__answer-text js_knowledge_answer_text"></div>
                </div>
            </div>
            <div class="knowledge__back-btn-wrap js_knowledge_back">
                <div class="knowledge__back-btn">Вернуться назад</div>
            </div>
        </div>
        <div class="knowledge__footer">
            <div class="knowledge__footer-text-wrap">
                <div class="knowledge__footer-question">Задать вопрос</div>
                <div class="knowledge__footer-work-time">с 9 до 18:00</div>
            </div>
            <div class="knowledge__footer-soc-wrap">
                <a href="#" class="knowledge__soc"></a>
                <a href="#" class="knowledge__soc"></a>
                <a href="#" class="knowledge__soc"></a>
            </div>
            <div class="knowledge__btn js_knowledge_toggle">
                <div class="knowledge__btn-text">?</div>
            </div>
        </div>
    </div>
</div>

<script>
  knowledge = [
    {
      name: 'Кто может получить займ',
      questions: [
        {
          name: 'Кат1 Вопрос 1',
          text: '<p>Ответ 1. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p><p>Ответ 1. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p><p>Ответ 1. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        },
        {
          name: 'Кат1 Вопрос 2',
          text: '<p>Ответ 2. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        },
        {
          name: 'Кат1 Вопрос 3',
          text: '<p>Ответ 3. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        },
        {
          name: 'Кат1 Вопрос 4',
          text: '<p>Ответ 4. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        },
        {
          name: 'Кат1 Вопрос 5',
          text: '<p>Ответ 5. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        },
        {
          name: 'Кат1 Вопрос 6',
          text: '<p>Ответ 6. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        },
        {
          name: 'Кат1 Вопрос 7',
          text: '<p>Ответ 7. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        },
        {
          name: 'Кат1 Вопрос 8',
          text: '<p>Ответ 8. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        },
        {
          name: 'Кат1 Вопрос 9',
          text: '<p>Ответ 9. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        },
        {
          name: 'Кат1 Вопрос 10',
          text: '<p>Ответ 10. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        },
        {
          name: 'Кат1 Вопрос 11',
          text: '<p>Ответ 11. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        },
        {
          name: 'Кат1 Вопрос 12',
          text: '<p>Ответ 12. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        }
      ]
    },
    {
      name: 'Как оформить займ',
      questions: [
        {
          name: 'Кат2 Вопрос 1',
          text: '<p>Ответ 1. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        },
        {
          name: 'Кат2 Вопрос 2',
          text: '<p>Ответ 2. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        },
        {
          name: 'Кат2 Вопрос 3',
          text: '<p>Ответ 3. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        },
        {
          name: 'Кат2 Вопрос 4',
          text: '<p>Ответ 4. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        },
        {
          name: 'Кат2 Вопрос 5',
          text: '<p>Ответ 5. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        }
      ]
    },
    {
      name: 'Как получить деньги',
      questions: [
        {
          name: 'Кат3 Вопрос 1',
          text: '<p>Ответ 1. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        },
        {
          name: 'Кат3 Вопрос 2',
          text: '<p>Ответ 2. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        },
        {
          name: 'Кат3 Вопрос 3',
          text: '<p>Ответ 3. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        },
        {
          name: 'Кат3 Вопрос 4',
          text: '<p>Ответ 4. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        },
        {
          name: 'Кат3 Вопрос 5',
          text: '<p>Ответ 5. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        }
      ]
    },
    {
      name: 'Как погасить займ',
      questions: [
        {
          name: 'Кат4 Вопрос 1',
          text: '<p>Ответ 1. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        },
        {
          name: 'Кат4 Вопрос 2',
          text: '<p>Ответ 2. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        },
        {
          name: 'Кат4 Вопрос 3',
          text: '<p>Ответ 3. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        },
        {
          name: 'Кат4 Вопрос 4',
          text: '<p>Ответ 4. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        },
        {
          name: 'Кат4 Вопрос 5',
          text: '<p>Ответ 5. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        }
      ]
    },
    {
      name: 'Как продлить займ',
      questions: [
        {
          name: 'Кат5 Вопрос 1',
          text: '<p>Ответ 1. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        },
        {
          name: 'Кат5 Вопрос 2',
          text: '<p>Ответ 2. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        },
        {
          name: 'Кат5 Вопрос 3',
          text: '<p>Ответ 3. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        },
        {
          name: 'Кат5 Вопрос 4',
          text: '<p>Ответ 4. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        },
        {
          name: 'Кат5 Вопрос 5',
          text: '<p>Ответ 5. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
        }
      ]
    }
  ]
</script>
@endsection