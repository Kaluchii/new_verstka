<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="" type="image/gif">

    @include('styles')
    @yield('styles')
</head>
<body>

@yield('content')

@include('scripts')
@yield('scripts')


<div class="knowledge">
    <div class="knowledge__header">
        <div class="knowledge__header-text js_knowledge_head">База знаний</div>
    </div>
    <div class="knowledge__main-container js_knowledge_container">
        <div class="knowledge__search-wrap">
            <input type="text" id="knowledge-search" class="knowledge__search" placeholder="Что ищете?">
            <label for="knowledge-search" class="knowledge__search-icon"></label>
        </div>
        <div class="knowledge__list-wrap">
            <div class="knowledge__cat-list">
                <div class="knowledge__cat-item js_knowledge_cat">
                    <div class="knowledge__cat-item-text">Кто может получить займ</div>
                </div>
                <div class="knowledge__cat-item js_knowledge_cat">
                    <div class="knowledge__cat-item-text">Как оформить займ</div>
                </div>
                <div class="knowledge__cat-item js_knowledge_cat">
                    <div class="knowledge__cat-item-text">Как получить деньги</div>
                </div>
                <div class="knowledge__cat-item js_knowledge_cat">
                    <div class="knowledge__cat-item-text">Как погасить займ</div>
                </div>
                <div class="knowledge__cat-item js_knowledge_cat">
                    <div class="knowledge__cat-item-text">Как продлить займ</div>
                </div>
            </div>
            <div class="knowledge__questions-list js_knowledge_questions" data-simplebar data-simplebar-auto-hide="false">
                <div class="knowledge__questions-item js_knowledge_get_answer">На какую сумму можно оформить займ?</div>
                <div class="knowledge__questions-item js_knowledge_get_answer">На какой срок оформляется займ?</div>
                <div class="knowledge__questions-item js_knowledge_get_answer">Как оформляется договор займа?</div>
                <div class="knowledge__questions-item js_knowledge_get_answer">Можно ли получить займ на счет или карту другого человека?</div>
                <div class="knowledge__questions-item js_knowledge_get_answer">Почему могут отказать в займе?</div>
                <div class="knowledge__questions-item js_knowledge_get_answer">Почему не пришло SMS?</div>
                <div class="knowledge__questions-item js_knowledge_get_answer">Почему не приходят письма?</div>
                <div class="knowledge__questions-item js_knowledge_get_answer">Мой населенный пункт отсутствует в системе</div>
                <div class="knowledge__questions-item js_knowledge_get_answer">На какую сумму можно оформить займ?</div>
                <div class="knowledge__questions-item js_knowledge_get_answer">На какую сумму можно оформить займ?</div>
            </div>
        </div>
        <div class="knowledge__answer js_knowledge_answer">
            <div class="knowledge__answer-title js_knowledge_answer_title">На какую сумму можно оформить займ?</div>
            <div class="knowledge__answer-text-wrap" data-simplebar data-simplebar-auto-hide="false">
                <div class="knowledge__answer-text js_knowledge_answer_text">
                    <p>Многие люди не рискуют брать кредит из-за высоких процентов или сложных условий оформления. Но сегодня можно перестать бояться кредитов, ведь вы сможете найти любую информацию в интернете о том, как правильно оформить кредит и как избежать возможных проблем. Больше того, вы сможете получить <a title="моментальный займ на карту онлайн" href="https://dopo.kz/publications/mgnovennyj-mikrozajm-onlajn-na-kartu.html">моментальный займ на карту онлайн</a> — без предъявления документов и поручителей, без очереди и каких-либо справок.</p>
                    <p>Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>
                </div>
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
        <div class="knowledge__btn">
            <div class="knowledge__btn-text">?</div>
        </div>
    </div>
</div>

<script>
    knowledge = [
      {
        name: 'Кто может получить займ',
        questions: [
          {
            name: 'Вопрос 1',
            text: '<p>Ответ 1. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          },
          {
            name: 'Вопрос 2',
            text: '<p>Ответ 2. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          },
          {
            name: 'Вопрос 3',
            text: '<p>Ответ 3. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          },
          {
            name: 'Вопрос 4',
            text: '<p>Ответ 4. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          },
          {
            name: 'Вопрос 5',
            text: '<p>Ответ 5. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          },
          {
            name: 'Вопрос 6',
            text: '<p>Ответ 6. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          },
          {
            name: 'Вопрос 7',
            text: '<p>Ответ 7. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          },
          {
            name: 'Вопрос 8',
            text: '<p>Ответ 8. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          },
          {
            name: 'Вопрос 9',
            text: '<p>Ответ 9. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          },
          {
            name: 'Вопрос 10',
            text: '<p>Ответ 10. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          },
          {
            name: 'Вопрос 11',
            text: '<p>Ответ 11. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          },
          {
            name: 'Вопрос 12',
            text: '<p>Ответ 12. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          }
        ]
      },
      {
        name: 'Как оформить займ',
        questions: [
          {
            name: 'Вопрос 1',
            text: '<p>Ответ 1. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          },
          {
            name: 'Вопрос 2',
            text: '<p>Ответ 2. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          },
          {
            name: 'Вопрос 3',
            text: '<p>Ответ 3. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          },
          {
            name: 'Вопрос 4',
            text: '<p>Ответ 4. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          },
          {
            name: 'Вопрос 5',
            text: '<p>Ответ 5. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          }
        ]
      },
      {
        name: 'Как получить деньги',
        questions: [
          {
            name: 'Вопрос 1',
            text: '<p>Ответ 1. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          },
          {
            name: 'Вопрос 2',
            text: '<p>Ответ 2. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          },
          {
            name: 'Вопрос 3',
            text: '<p>Ответ 3. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          },
          {
            name: 'Вопрос 4',
            text: '<p>Ответ 4. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          },
          {
            name: 'Вопрос 5',
            text: '<p>Ответ 5. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          }
        ]
      },
      {
        name: 'Как погасить займ',
        questions: [
          {
            name: 'Вопрос 1',
            text: '<p>Ответ 1. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          },
          {
            name: 'Вопрос 2',
            text: '<p>Ответ 2. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          },
          {
            name: 'Вопрос 3',
            text: '<p>Ответ 3. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          },
          {
            name: 'Вопрос 4',
            text: '<p>Ответ 4. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          },
          {
            name: 'Вопрос 5',
            text: '<p>Ответ 5. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          }
        ]
      },
      {
        name: 'Как продлить займ',
        questions: [
          {
            name: 'Вопрос 1',
            text: '<p>Ответ 1. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          },
          {
            name: 'Вопрос 2',
            text: '<p>Ответ 2. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          },
          {
            name: 'Вопрос 3',
            text: '<p>Ответ 3. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          },
          {
            name: 'Вопрос 4',
            text: '<p>Ответ 4. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          },
          {
            name: 'Вопрос 5',
            text: '<p>Ответ 5. Сегодня кредитом пользуются почти все, и как это делать правильно и выгодно — нужно обязательно знать. Ведь вооружившись нужной информацией, вы будет готовы к любой ситуации и сможете легко решить ее в свою пользу.</p>'
          }
        ]
      }
    ]
</script>

</body>
</html>