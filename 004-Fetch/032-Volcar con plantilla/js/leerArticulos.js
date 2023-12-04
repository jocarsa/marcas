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
            seccion.innerHTML += `
                <article>
                    <h4>Título de una noticia</h4>
                    <time>2023-08-15</time>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </article>
            `;
        }
    })  