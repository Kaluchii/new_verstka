$(document).ready(function(){
  $(".category-name").click(function(e){
    e.preventDefault();
    var  parent = $(this).parent();
    if (!parent.hasClass("selected")){
      if (!parent.find(".answers_block").length){
        var category_id = $(this).parent().data("categoryid");
        $.get("/faq/answers/"+category_id+"/", function(data){
          parent.append(data);
          $(".question_block").removeClass("selected");
          parent.addClass("selected");
          setEventAnswer('div[data-categoryid="'+category_id+'"] .answers_block a');
        });
      }else{
        $(".question_block").removeClass("selected");
        parent.addClass("selected");
      }
      var t = $(this).html().replace(/^([0-9]+. )([\d\D]+)/, "$2");
      document.title = t+" - ДоПолучки.кз";
      setBreadcrumb(t);
      setLocation($(this).attr("href"));
    }
  });

  setEventAnswer(".answers_block a");
});

function setLocation(curLoc){
  try{
    history.pushState(null, null, curLoc);
    return;
  }catch(e){}
  location.hash = '#' + curLoc;
}

function setEventAnswer(selector){
  $(selector).click(function(){
    if (!$(this).parent().hasClass("selected")){
      $(this).parents("ul").find("li").removeClass("selected");
      $(this).parent().addClass("selected");
    }else{
      $(this).parent().removeClass("selected");
    }
  });
}

function setBreadcrumb(t){
  var html = '<span itemscope="" itemprop="itemListElement" itemtype="http://schema.org/ListItem">'+
  '<a itemprop="item" title="Микрозаймы онлайн №❶" class="link arr" href="/">'+
  '<span itemprop="name">Микрозаймы онлайн №❶</span>'+
  '<meta itemprop="position" content="1">'+
  '</a>'+
  '</span> '+
  '<span itemscope="" itemprop="itemListElement" itemtype="http://schema.org/ListItem">'+
  '<a rel="nofollow" itemprop="item" title="Вопрос-ответ" class="link arr" href="/faq/">'+
  '<span itemprop="name">Вопрос-ответ</span>'+
  '<meta itemprop="position" content="2">'+
  '</a>'+
  '</span> '+
  '<span itemscope="" itemprop="itemListElement" itemtype="http://schema.org/ListItem">'+
  '<span class="current" itemprop="name">'+t+'</span>'+
  '<meta itemprop="position" content="3">'+
  '</span>';
  $(".breadcrumb").html(html);
}