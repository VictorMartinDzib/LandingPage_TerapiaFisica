/*
  Programacion de ventana emergente para mostrar imagenes

*/

//En esta variable se guarda la plantilla o modelo donde se proyectara la imagen
var modal = document.getElementById("mimodelo");

//Esta funcion asigna el id del elemento al tener el cursor sobre la imagen
//y al hacer click genera
function asignar(text){
  var img = document.getElementById(text);
  img.onclick = function(){
    modal.style.display = "block";
    modeloImg.src = this.src;
    captionTexto.innerHTML = this.alt;
  }
}

var modeloImg = document.getElementById("img01");
var captionTexto = document.getElementById("caption");

// guarda el elemento para cerrar la ventana emerjente
var span = document.getElementsByClassName("cerrar")[0];

// Desactiva la ventana emergente
span.onclick = function() { 
  modal.style.display = "none";
}