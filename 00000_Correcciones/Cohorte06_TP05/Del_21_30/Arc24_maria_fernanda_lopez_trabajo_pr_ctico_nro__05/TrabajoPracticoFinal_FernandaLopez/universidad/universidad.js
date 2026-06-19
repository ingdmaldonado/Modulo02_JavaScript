import {fnRecuperarUniversidades} from "./universidadmodelo.js";
import {fnUniversidadToView,fnUniversidadesToViews,fnRender} from "./universidadVista.js";


//trabajamos con las funciones de la vista//


window.onload = () =>{

    const IdBtnRecuperar = document.querySelector ("#IdBtnRecuperar");
    const IdSelectorPais = document.querySelector ("#IdSelectorPais");
    const IdCuerpoDeTabla = document.querySelector ("#IdCuerpoDeTabla");
    

    //aqui hago click en el boton recuperar//
    IdBtnRecuperar.onclick = async () => {

        const paisElegido = Number (IdSelectorPais.value);

        console.log (paisElegido);
        //esto devuelve un listado de Universidades//
        const datos = await fnRecuperarUniversidades (paisElegido);
        //estoy mostrando todas las universidades//
        console.log (datos);

        console.log (datos[0]);
        //aqui paso solo una Universidad//
        const fila = fnUniversidadToView(datos[0]);
        console.log (fila);
        //aqui estoy pasando todas las universidades//
        const filas = fnUniversidadesToViews(datos);
        console.log(filas);

        //ahora lo unico que me falta es invocar a la funcion que renderiza las vistas (views)

        fnRender (filas,IdCuerpoDeTabla);


};
};
