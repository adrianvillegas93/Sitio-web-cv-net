
const nombre2 = document.getElementById("nombre2");
const email2 = document.getElementById("correo2");
const mensaje2 = document.getElementById("mensaje2");
const form2 = document.getElementById("form2");
const parrafo2 = document.getElementById("warnings2");

form2.addEventListener("submit", e=>{
    e.preventDefault(); //Esto es para que el formulario no se envie por default
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; //Esta es una expresión regular, para la validación de caracteres en el email
    parrafo2.innerHTML = "";
    if (nombre2.value.length < 6){
        warnings += `El nombre no es valido <br>`;
        entrar = true;
    }
    if (!regexEmail.test(email2.value)) {
        warnings += `El email no es valido <br>`;
        entrar = true;
    }
    if (mensaje2.value.length < 20){
        warnings += `El mensaje es muy corto <br>`;
        entrar = true;
    }

    if (entrar){
        parrafo2.innerHTML = warnings;
    } else {
        form2.submit();
    }
})