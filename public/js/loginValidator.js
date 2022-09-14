const form = document.querySelector("#form");
const usuario = document.querySelector('#usuario');
const password = document.querySelector('#password');
const error_user = document.querySelector('#error-user');
const error_pass = document.querySelector('#error-pass');
const btn_submit = document.querySelector("#btn-submit");

btn_submit.addEventListener("click", (e) => {
   e.preventDefault();
   if(usuario.value == '') {
      error_user.innerText = "Debes completar este campo"
   }
   if(password.value == '') {
      error_pass.innerText = "Debes completar este campo"
   }
   if(usuario.value != '' || password.value != ''){ 
      form.submit();
   }
})
