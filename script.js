/*resetear version desktop si se agranda la pantalla
addEventListener("resize", (event) => {
    if (window.innerWidth > 590) {
        location.reload()
     }
});
*/

/*MENÚ COLAPSABLE DE FILTROS*/
let botonFiltros = document.getElementById("boton-slideUp");
botonFiltros.addEventListener(
    "click",function(){

        //seleccionamos los elementos que se modifican
        let body = document.querySelector("body");
        let header = document.querySelector("body > header");
        let busqueda = document.querySelector("#seccion-busqueda");
        let headerBusqueda = document.querySelector("#seccion-busqueda > header");
        let filtrosExtra = document.getElementById("filtros-extra");
        let filtros = document.getElementById("filtros-busqueda");
        let icon = document.querySelector("#boton-slideUp > img");
        let text = document.querySelector("#boton-slideUp > p");

        if (body.className==="body") {

            //body
            header.style.display="none";
            body.className = "body-colapsado";
            //sección busqueda
            headerBusqueda.style.display="none";
            busqueda.className = "seccion-busqueda-colapsada";
            //sección filtros
            filtrosExtra.className = "filtros-extra-visibles";
            filtros.className = "filtros-busqueda-expandidos";
            //botón
            icon.src = "img/down-arrow.jpg";
            //texto
            text.style.display = "none";

        } else {

            //body
            header.style.display="block";
            body.className = "body";
            //sección busqueda
            headerBusqueda.style.display="block";
            busqueda.className="seccion-busqueda";
            //sección filtros
            filtrosExtra.className = "filtros-extra";
            filtros.className = "filtros-busqueda";
            //botón
            icon.src = "img/up-arrow.jpg";
            //texto
            text.style.display = "block";
        }
    }
);

/*BOTON DE BUSQUEDA*/
let botonBusqueda = document.getElementById("boton-busqueda");
botonBusqueda.addEventListener(
    "click",function(){
        //si estamos en movil tenemos que cambiar la pantalla busqueda por la pantalla resultados
        let resultados = document.getElementById("seccion-resultados");
        resultados.style.display = "grid";

        //y ocultamos la seccion de busqueda
        let busqueda = document.getElementById("seccion-busqueda");
        busqueda.className = "seccion-busqueda-invisible";

    }
);