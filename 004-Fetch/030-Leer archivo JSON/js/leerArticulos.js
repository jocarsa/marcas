// Selecciono a a etiqueta de la sección
var seccion = document.querySelector("section")
// Vacío la sección para traer los artículos verdaderos
seccion.innerHTML = ""

fetch("json/entradas.json")
    .then(response => response.json())
    .then(function(response){
        console.log(response);
    })  