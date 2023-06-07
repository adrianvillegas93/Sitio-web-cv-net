
let cerrar = document.querySelector(".buttonC");
let abrir = document.querySelector(".button_F");
let formulario = document.querySelector(".form2");
let formContainer = document.querySelector(".form_secundario");

abrir.addEventListener("click", (e)=>{
    formContainer.classList.add("formOpen");
    
    cerrar.classList.add("buttonC_aparecer");
});

cerrar.addEventListener("click", (e)=>{
    // console.log("Auch, diste clic en la tache");
    formContainer.classList.remove("formOpen");

    cerrar.classList.remove("buttonC_aparecer");
});
