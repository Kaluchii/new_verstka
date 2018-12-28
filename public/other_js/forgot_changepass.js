$(document).ready(function(){
    $(".toggle-pass").click(function(){
        if( !$('.pass-show__check').is(':checked') ){
            $("#new_pass").attr("type", "text");
            $("#repeat_new_pass").attr("type", "text");
        }else{
            $("#new_pass").attr("type", "password");
            $("#repeat_new_pass").attr("type", "password");
        }
    });
    
    $(".form-inline input").change(function(){
        $(this).parent().removeClass("success error");
        var id = $(this).attr("id");
        var val = $(this).val();
        var log = val;
        
        switch (id){
            case 'new_pass': { log = /^(?!^[0-9]*$)(?!^[a-zA-Z]*$)(?!^[a-z0-9]*$)(?!^[A-Z0-9]*$)^([a-zA-Z0-9!@#$%^&*]{8,})$/.test(val); } break;
                                                // Если пароль совпадает с повторным паролем и первый пароль проходит проверку
            case 'repeat_new_pass': { log = ( (val == $("#new_pass").val()) && ($("#new_pass").parent().hasClass('success')) ); if (!(val == $("#new_pass").val())){ alert("Не совпадает с новым паролем"); } } break;
        }
        
        $(this).parent().addClass((log ? "success" : "error"));
    });
    
    $("#save").click(function(){
        $("#change-password .form-inline input").change();
        if (!$(".error").length){
            showLoad();
            $.post('/index.php?c=member&m=forgotchangepassword', $('#change-password').serialize(), function(data){
                if (data == "OK"){
                    window.location.href = "/member/";
                }else if (data == "BAD_NEW_PASS"){
                    hideLoad();
                    alert("Пароль должен содержать не менее 8 символов, включать цифры и заглавные буквы.");
                }else if (data == "NOT_EQUAL_PASS"){
                    hideLoad();
                    alert("Поле 'повторите пароль' не совпадает с новым паролем");
                }
            });
        }
    });
});