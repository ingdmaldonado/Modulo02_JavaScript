import { fnRecuperarUniversidades } from "./universidadModelo.js";
import { fnUniversidadToView,fnUniversidadesToView,fnRender } from "./universidadVista.js";

window.onload = () => {

    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
    const idSelectorPais = document.querySelector("#idSelectorPais");
    const idCuperpoDeTabla = document.querySelector("#idCuerpoDeTabla");

    idBtnRecuperar.onclick = async () => {

        const paisElegido = Number(idSelectorPais.value);


        /*esto devuelve un listado de universidades */
        const datos = await fnRecuperarUniversidades(paisElegido);

        /*esto muestra todas las universidades */
        console.log(datos);

        /*aqui le estoy pasando solo una universidad */
        const fila = fnUniversidadToView(datos[0]);
        console.log(fila);

        /*aqui le paso todas las universidades y devolviendolas en filas */
        const filas = fnUniversidadesToView(datos);
        console.log(filas);

        /*invoco a la funcion que renderiza las vistas */
        fnRender(filas,idCuperpoDeTabla);

    };


};

/*
- https://restcountries.com/v3.1/region/africa
- https://restcountries.com/v3.1/region/americas
- https://restcountries.com/v3.1/region/asia
- https://restcountries.com/v3.1/region/europe
- https://restcountries.com/v3.1/region/oceania

*/