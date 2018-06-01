$(document).ready(function(){
  $(".credit_type").change(function(){
    var val = $(this).val();
    var id = $(this).attr("id").replace("credit_type_", 'credit_type_other_');
    if (val == 'other'){
      $("#"+id).val('').parent().removeClass('success').parent().removeClass('hide');
    }else{
      $("#"+id).parent().parent().addClass('hide');
    }
  });

  if (is_touch_device()){
    $('select').parent().addClass('select-mobile');
  }else{
    $('select').selecter({mobile: true});
  }
  $('.date input').mask("99.99.9999");

  $('.count-credit a').click(function(){
    var val = $(this).attr('data-value');
    $('.credit-data').hide();
    for (var k=0; k<val; k++){
      $('#credit-data-'+(k+1)).show();
    }
  });

  $('input[type="text"]').change(function(){
    $(this).parent().removeClass("error success");

    var id = $(this).attr("id");
    var value = $(this).val();
    var log = value;
    switch (id){
      case "credit_date_1":
      case "credit_date_2": {
        log = isValidDate(value);
      }; break;
      case "credit_amount_1":
      case "credit_amount_2": {
        log = /^([0-9])+$/g.test(value);
      }; break;
      case "credit_type_other_1":
      case "credit_type_other_2": {
        id = id.replace("credit_type_other_", "credit_type_");
        log = true;
        if ($("#"+id).val() == "other"){
          log = value;
        }
      }; break;
    }

    $(this).parent().addClass((log ? "success" : "error"));
  });

  $('form').submit(function(e){
    e.preventDefault();

    if (checkData()){
      showLoad();
      $.post('/index.php?c=member&m=addcreditinfo', $(this).serialize(), function(data){
        if (data.status && data.status == "OK"){
          window.location.href = "/member/connectioncard/";
        }else if (data.errors){
          hideLoad();
          $('.controls').removeClass("error success");

          var text = 'Проверьте правильность введенных данных';
          $.each(data.errors, function(elem, val){
            $('#'+elem).parent().addClass('error');
          });

          showAlert(text);
        }
      }, 'json');
    }else{
      showAlert("Заполните все поля");
    }
  });

});

function checkData(){
  var count_credit = $("#count_credit").val();
  count_credit = parseInt(count_credit, 10);
  for (var k=1; k<=count_credit; k++){
    $('#credit-data-'+k+' input[type="text"]').change();
  }

  return !$(".error").length || !count_credit;
}