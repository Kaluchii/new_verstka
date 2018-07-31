var submitted = false;
$( document ).ready(function() {
  $("#sec_cvv2").keydown(function(event) {
    var key = event.keyCode;
    if ( key == 46 || key == 8 || key == 9 || key == 27 || (key == 65 && event.ctrlKey === true) || (key >= 35 && key <= 39)){
      return;
    }else{
      if ((key < 48 || key > 57) && (key < 96 || key > 105 )) {
        event.preventDefault(); 
      }
    }
  }).keyup(function(){
    checkValid();
  });
  $("#card_name").blur(function(){
    if(!checkName()){
      $('.name-block').addClass("error");
    }else{
      $('.name-block').removeClass("error");
    }
    checkValid();
  }).keyup(function(){
    checkValid();
  });
  $("#sec_cvv2").blur(function(){
    if(!checkCVV()){
      $(this).addClass("error");
    }else{
      $(this).removeClass("error");
    }
    checkValid();
  });
  $(".number-card").blur(function(){
    if(!checkNumber($(this).attr("id"))){
      $(this).addClass("error");
    }else{
      $(this).removeClass("error");
    }
    checkValid();
  }).keydown(function(event) {
    var key = event.keyCode;
    if ( key == 46 || key == 9 || key == 27 || (key == 65 && event.ctrlKey === true) || (key >= 35 && key <= 39)){
      return;
    }else if(key == 8){
      if($(this).val().length==0){
        var id = parseInt($(this).attr('id').charAt(7),10)-1;
        if(id>0){
          $(this).blur();
          $('#number_'+id).focus();
        }
      }
    }else{
      if ((key < 48 || key > 57) && (key < 96 || key > 105 )) {
        event.preventDefault(); 
      }
    }
  }).keyup(function(e){
    var id = parseInt($(this).attr('id').charAt(7),10)
    if(e.which == 37){
      if(getRange($('#number_'+id))<1){
        id--;
        if(id>0){
          $(this).blur();
          $('#number_'+id).focus();
          setRange($('#number_'+id),4);
        }
      }
    }else if(e.which == 39){
      if(getRange($('#number_'+id))==4){
        id++;
        if(id<5){
          $(this).blur();
          $('#number_'+id).focus();
        }
      }
    }else if($(this).val().length==4){
      id++;
      if(id<5){
        $(this).blur();
        $('#number_'+id).focus().select();
      }
    }
    checkValid();
  });
});

function getRange(elem){
  elem = elem[0];
  console.log(elem.selectionStart);
  return elem.selectionStart;
}

function setRange(elm,pos){
  elm = elm[0];
  if (elm.setSelectionRange){
    elm.focus();
    elm.setSelectionRange(pos,pos);
  } else if (elm.createTextRange){
    range = elm.createTextRange();
    range.collapse(true);
    range.moveEnd('character',pos);
    range.moveStart('character',pos);
    range.select();
  }
}

function checkForm(){
  if(!submitted){
    submitted = true;
    $('.error').removeClass("error");
    var valid = true;
    for(var i=1;i<5;i++){
      if(!checkNumber('number_'+i)){
        $('#number_'+i).addClass("error");
        valid = false;
      }
    }
    if(!checkCVV()){
      $('#sec_cvv2').addClass("error");
      valid = false;
    }
    if(!checkName()){
      $('.name-block').addClass("error");
      valid = false;
    }

    $('#card_no_bin').val($('#number_1').val()+$('#number_2').val()+$('#number_3').val()+$('#number_4').val());

    var cur_date = new Date();
    var thru_date = new Date($('#exp_year').val()+'-'+$('#exp_month').val()+'-01');
    if (thru_date < cur_date){
      $('.valid-block').addClass("error");
      valid = false;
    }

    if(valid){
      $('#mainForm').submit();
    }else{
      submitted = false;
    }
  }
}
function checkValid(){
  if(checkCVV() && checkName() && checkNumber('number_1') && checkNumber('number_2') && checkNumber('number_3') && checkNumber('number_4')){

  }else{

  }
}
function checkNumber(id){
  return ($('#'+id).val() && $('#'+id).val().match(/^[0-9]{4}$/));
}
function checkCVV(){
  var bank = $('#number_1').val().charAt(0);
  var cvv = $('#sec_cvv2').val();
  return (((bank=='6')&& (!cvv || cvv.match(/^[0-9]{3}$/)))||(((bank=='4')||(bank=='5'))&&cvv.match(/^[0-9]{3}$/)));
}
function checkName(){
  return ($('#card_name').val() && $('#card_name').val().match(/^[a-zA-Z\s]+$/));
}

function showPopup(url){
  $.get(url,function(text){
    $('body').append('<div id="loading"></div>');
    $('#loading').click(function(){removePopup();});
    $('body').append('<div class="modalbox"></div>');
    $('.modalbox').html('<a class="close" href="javascript:;" onclick="removePopup();"></a>'+text).click(function(event){event.stopPropagation();});
    $('.modalbox').css("height","auto");
    $('.modalbox').css("margin-top",'-'+Math.ceil($('.modalbox').outerHeight()/2)+'px');
    $('.modalbox').css("width","556px").css("margin-left",'-278px');
  });
}
function removePopup(){ $('#loading_bkgr').remove(); $('.modalbox').remove(); }