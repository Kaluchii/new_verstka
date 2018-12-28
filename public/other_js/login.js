$(document).ready(function(){
  $('#auth_member').submit(function(e){
    e.preventDefault();
    authMember(this);
  });
  if (parseInt(is_old_link, 10)){
    createPopupForgotPass('Ссылка для восстановления пароля устарела. Попробуйте еще раз.');
  }
});