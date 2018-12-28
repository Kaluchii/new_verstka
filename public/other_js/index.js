$(document).ready(function(){
    /*if ($('#__chat').length){
      $('#__chat').on('click', function(){
          Chatra('openChat', true);
      });
    }*/

    if ($("#all_reviews").length){
      $("#all_reviews").click(function(){
        showLoad();
        $.post('/index.php?c=main&m=getreviews', {start: 6, limit: 12}, function(data){
          hideLoad();
          var half = Math.ceil(data.length/2);
          for (var k in data){
            var html = '<div class="reviews__item'+(k % 2 == 0 ? ' reviews__item--green' : '')+'">' +
              '<p class="reviews__item-text">'+data[k]['review']+'</p>'+
              '<div class="reviews__author">';
              if (data[k]['photo']){
                html = html + '<div class="reviews__img-wrap">' +
                '<img src="/images/r1.png" alt="" />' +
                '</div>';
              }
              html = html + '<div class="reviews__info">' +
              '<p class="reviews__name">'+data[k]['name']+'</p>' +
              '<p class="reviews__date">'+dateFormat(data[k]['date'], 2)+'</p>' +
              '</div>' +
              '</div>' +
              '</div>';

              $('.reviews__column:'+(k < half ? 'first' : 'last')).append(html);
          }
          $("#all_reviews").hide();
        }, 'json');
      });
    }


});