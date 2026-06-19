
import {fnRecuperarUniversidades} from './universidadModelo.js';
import {fnUniversidadToView, fnUniversidadesToView, fnRender} from './universidadVista.js';



window.onload = ()=>{

    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
    const idSelectorPais = document.querySelector("#idSelectorPais");
    const idCuerpoDeTabla = document.querySelector("#idCuerpoDeTabla");

    /* Click al boton recuperar universidades*/    
    idBtnRecuperar.onclick = async ()=>{

        let idPais = Number(idSelectorPais.value);

        //Esto me devuelve un listado de universidades
        const datos =  await fnRecuperarUniversidades(idPais);


        //Llamo a construir parte de la vista en el DOM, solo le paso una universidad    
        const fila = fnUniversidadToView(datos[0]);

        console.log(fila);

        //Aqui le paso todas las universidades y me las devielve en filas
        const filas = fnUniversidadesToView(datos);

        console.log(filas);

        //Invoco a la funcion que renderiza las vistas
        fnRender(filas, idCuerpoDeTabla );

        //fnRequestAPI("https://restcountries.com/v3.1/");
        
    };
};


/*
    Reglas

    modelo.js => Habla con el servidor
    vista.js => Habla con el DOM
    controlador.js => Habla con el modelo y con la vista, pero nunca con el servidor y con el DOM
*/