var Usuario = document.getElementById('Usuario');
var password = document.getElementById('password');
var error = document.getElementById('error');
error.style.color ='black';


function enviarFormulario(){
   console.log("enviando el formulario");

   var mensajesError=[];
   if(Usuario.value === null || Usuario.value === '') {
      mensajesError.push('Ingresa tu Usuario');
   }
   
   if(password.value === null || password.value === ''){
      mensajesError.push('Ingresa tu Contraseña');
   }
   error.innerHTML=mensajesError.join(',');
   return false;
    
}



