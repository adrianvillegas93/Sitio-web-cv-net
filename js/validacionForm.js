const nombre = document.getElementById("nombre");
const email = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault(); //Esto es para que el formulario no se envie por default
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; //Esta es una expresión regular, para la validación de caracteres en el email
    parrafo.innerHTML = "";
    if (nombre.value.length < 6){
        warnings += `El nombre no es valido <br>`;
        entrar = true;
    }
    if (!regexEmail.test(email.value)) {
        warnings += `El email no es valido <br>`;
        entrar = true;
    }
    if (mensaje.value.length < 20){
        warnings += `El mensaje es muy corto <br>`;
        entrar = true;
    }

    if (entrar){
        parrafo.innerHTML = warnings;
    } else {
        form.submit();
    }
})