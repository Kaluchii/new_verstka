var dop = 500;

$(document).ready(function(){
  var loaded_count = 10;
  var loading = false;
  $(window).scroll(function(){
    if(($(window).height() + $(window).scrollTop() + dop) >= $(document).height() && !loading){
      loading = true;
      scrollShowLoad();
      $.post("/publications/"+category, {start: loaded_count, limit: 6, json: 1}, function(data){
        if (data['status'] == "OK" && data['publications'].length){
          var html = "";
          var items = data['publications'];
          for (var k in items){
            html += '<div class="publication-item'+((k+1)%3 == 0 ? " last-child" : "")+'">'+
            '<img src="'+items[k]['image'].replace(/\.([a-z]+)$/, "_a.jpg")+'" alt="'+items[k]['name']+'" title="'+items[k]['name']+'" />'+
            '<a href="/publications/'+items[k]['url_key']+'.html" class="link name">'+items[k]['name']+'</a>'+
            '<div class="category">'+items[k]['category_title']+'</div>'+
            '</div> ';
          }

          $(".other-publications:last").append(html);
          loaded_count = loaded_count + 6;
          loading = false;
        }
        scrollHideLoad();
      }, 'json');
    }
  });
});

function scrollShowLoad(){
  $('.other-publications:last').append('<div id="scroll_loading"><div id="scroll_loading_image"></div></div>');
};

function scrollHideLoad(){
  $('#scroll_loading').remove();
};

function subscribe(){
  var email = $("#email").val();
  $("#email").parent().removeClass("error");
  if (email && /^([\w\.\-]{1,})@([\w\-\.]{1,})([\.])([\a-z]{2,})$/i.test(email)){
    showLoad();
    $.post("/index.php?c=publications&m=subscribe", {email: email}, function(data){
      if (data == "OK"){
        $("#email").val('');
        showAlert('Подписка оформлена');
      }else if (data == "EXIST"){
        $("#email").val('');
        showAlert('Вы уже подписаны');
      }else{
        $("#email").parent().addClass("error");
      }
      hideLoad();
    }, 'json');
  }else{
    $("#email").parent().addClass("error");
  }
}