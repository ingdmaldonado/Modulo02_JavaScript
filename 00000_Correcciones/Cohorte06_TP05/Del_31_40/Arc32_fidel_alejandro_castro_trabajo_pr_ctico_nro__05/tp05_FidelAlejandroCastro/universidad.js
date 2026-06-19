
import { fnRecuperarUniversidades } from "./modelo.js";
import { fnUniversidadToView, fnUniversidadesToViews, fnRender } from "./vista.js";

window.onload = () => {
    const idBtnRecuperar = document.querySelector('#idBtnRecuperar');
    const idSelectorPais = document.querySelector('#idSelectorPais');
    const idCuerpoDeTabla = document.querySelector('#idCuerpoDeTabla');


    idBtnRecuperar.onclick = async () => {
        //Sacamos el valor del pais seleccionado
        const paisElegido = Number(idSelectorPais.value);

        const datos = await fnRecuperarUniversidades(paisElegido);

        console.log(datos);
        console.log(datos[0]);

        //Aca paso una sola univderisdad
        const fila = fnUniversidadToView(datos[0]);
        console.log(fila);
        
        //Aca paso todas las universidades y devolviendolas en filas
        const filas = fnUniversidadesToViews(datos);
        console.log(filas);

        //ahora lo unica que falta es invocar a la fn que renderiza las views
        fnRender(filas, idCuerpoDeTabla);
    }
}

/*
---------- REGLAS ----------
    - modelo.js -> habla con el servidor (api.js)

    - vista.js -> habla con el DOM ()

    - controlador.js -> habla con el modelo y con la vista, nunca directamente con el servidor
*/