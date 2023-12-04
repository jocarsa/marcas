fetch("json/entradas.json")
    .then(response => response.json())
    .then(function(response){
        // Selecciono a a etiqueta de la sección
        var seccion = document.querySelector("section")
        // Vacío la sección para traer los artículos verdaderos
        seccion.innerHTML = ""
        console.log(response);
        for(let i = 0;i<response.entradas.length;i++){
            console.log("hola")
            seccion.innerHTML += "Artículo<br>";
        }
    })  