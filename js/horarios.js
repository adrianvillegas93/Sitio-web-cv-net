
const verHorarios = document.querySelector(".show_horarios");
const Horarios = document.querySelector(".horarios_container");

verHorarios.addEventListener("click", ()=>{
    Horarios.classList.toggle("horarios_container_show");
})