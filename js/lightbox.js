
const imagenes = document.querySelectorAll(".img_galeria"); //tomamos todas las imagenes
const imagenesLight = document.querySelector(".agregar_imagen");
const contenedorLight = document.querySelector(".imagen_light"); //seleccionamos el contenedro del lighbox


imagenes.forEach(imagen =>{ //recorremos la lista de nodos, es decir cada una de las imagenes, estan se llamaran "imagen"
    imagen.addEventListener("click", ()=>{ //a cada imagen le agregamos un evento de click
        aparecerImagen(imagen.getAttribute('src')); //colocamos la funcion, con esto al dar click a una imagen, en el src se agregar la direccion de la imagen seleccionada
        // console.log(imagen.getAttribute('src')); //cada vez que demos click, se va a ejecutar una funcion, con getAttribute a cada imagen, podremos observar la direccion de la imagen
    })

})


//Esto es para cerra el Lightbox
contenedorLight.addEventListener("click", (e)=>{
    // console.log(e.target); //Al dar click afuera de la imagen, es decir en todo el contenedor de Lighbox, en consola se muestra la seccion en donde diste click
    if(e.target !== imagenesLight){ //si e.target es diferente a a imagenLight quiero que se ejecute los siguiente
        //ejecutamos otravez estas clases, recordando que toggle en este caso removeria las clases, provocando que todo el lighbox y la imagen se cierre dando click en cualquier parte que no sea la imagen
        contenedorLight.classList.toggle("show");
        imagenesLight.classList.toggle("showImage");
    }
})

//Esta es la funcion de tipo flecha, con el parametro imagen
const aparecerImagen = (imagen)=>{
    //ImagenLight es la imagen que vamos a poner en el Lightbox
    imagenesLight.src = imagen; //imagenesLight con su atributo src va a ser igual a imagen
    contenedorLight.classList.toggle("show"); //accedemos a las clases de contenedorLight, y vamos a quitarle o agregarle la clase show con toggle. de esta forma al dar click aparecera el contenedor de light
    imagenesLight.classList.toggle("showImage"); //Esto es para aparacer la imagen, de la misma forma accedemos a sus clases y se va a quitar o poner la clase "showImage", que va a mostrar la imagen al centro y grande
}