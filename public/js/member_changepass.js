$(document).ready(function(){
  $(".toggle-pass").click(function(){
    if ($("#new_pass").attr("type") == "password"){
      $("#new_pass").attr("type", "text");
      $("#repeat_new_pass").attr("type", "text");
      $(this).html("Скрыть пароль");
    }else{
      $("#new_pass").attr("type", "password");
      $("#repeat_new_pass").attr("type", "password");
      $(this).html("Показать пароль");
    }
  });

  $(".form-inline input").change(function(){
    $(this).parent().removeClass("success error");
    var id = $(this).attr("id");
    var val = $(this).val();
    var log = val;

    switch (id){
      case 'new_pass': { log = /^(?!^[0-9]*$)(?!^[a-zA-Z]*$)(?!^[a-z0-9]*$)(?!^[A-Z0-9]*$)^([a-zA-Z0-9]{8,})$/.test(val); } break;
      case 'repeat_new_pass': { log = val == $("#new_pass").val(); if (!log){ showAlert("Не совпадает с новым паролем"); } } break;
    }

    $(this).parent().addClass((log ? "success" : "error"));
  });

  $("#save").click(function(){
    $("#change-password .form-inline input").change();
    if (!$(".error").length){
      showLoad();
      $.post('/index.php?c=member&m=changepassword', $('#change-password').serialize(), function(data){
        hideLoad();
        if (data == "OK"){
          $("#change-password .controls").removeClass("success error");
          $("#change-password .form-inline input").val("");
          showAlert("Пароль успешно изменен");
          var fp = new Fingerprint2();
          fp.get(function(result, components){
            components = ModifyDataFP(components);
            $.post('/index.php?c=member&m=logsactions', {type: 'password_change', fp: {hash: result, components: components}}, function(data){});
          });
        }else if (data == "BAD_NEW_PASS"){
          showAlert("Пароль должен содержать не менее 8 символов, включать цифры и заглавные буквы.");
        }else if (data == "BAD_OLD_PASS"){
          showAlert("Не правильно введен текущий пароль");
        }else if (data == "NOT_EQUAL_PASS"){
          showAlert("Поле 'повторите пароль' не совпадает с новым паролем");
        }
      });
    }
  });
});