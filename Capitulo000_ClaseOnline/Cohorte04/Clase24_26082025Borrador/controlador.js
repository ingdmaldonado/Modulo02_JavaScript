
import {obtenerPokemones} from "./apiPokemon.js";

import {obtenerUniversidades} from "./apiUniversidades.js";

import {obtenerImagenAstronomia} from "./apiNasa.js";

import {obtenerImagenAleatoria,obtenerRazasDePerros} from "./apiDogs.js";

import {obtenerPronosticoTiempo} from "./apiTiempo.js";

import {obtenerPaisesYCapitales} from "./apiCapitalesMundo.js";


window.addEventListener("load",()=>
    {

        const idBtnRecuperarPokemones = document.querySelector("#idBtnRecuperarPokemones");
        const idBtnUniversidades = document.querySelector("#idBtnUniversidades");
        const idBtnNasa = document.querySelector("#idBtnNasa");
        const idBtnImagenPerritos = document.querySelector("#idBtnImagenPerritos");
        const idBtnRazas = document.querySelector("#idBtnRazas");
        const idBtnPronostico = document.querySelector("#idBtnPronostico");
        const idBtnCapitalesDelMundo = document.querySelector("#idBtnCapitalesDelMundo");

        idBtnRecuperarPokemones.addEventListener("click",async ()=>
            {

                let resultado = await obtenerPokemones();

                if (resultado !== null)
                {
                    console.log(resultado);

                    console.log(resultado.results);

                }

              
                
            })

        idBtnUniversidades.addEventListener("click",async()=>{

            let resultado = await obtenerUniversidades();

            console.log(resultado);

        })

        idBtnNasa.addEventListener("click",async ()=>{

            let resultado = await obtenerImagenAstronomia();

            console.log(resultado);

        })

        idBtnImagenPerritos.addEventListener("click",async()=>
            {

                let resultado = await obtenerImagenAleatoria();

                console.log(resultado);

            })

        idBtnRazas.addEventListener("click",async()=>{

            let resultado = await obtenerRazasDePerros();

            console.log(resultado.message.collie);

        })

        idBtnPronostico.addEventListener("click",async ()=>
            {
                let resultado = await obtenerPronosticoTiempo();

                console.log(resultado);

            })

        idBtnCapitalesDelMundo.addEventListener("click",async ()=>
            {
                let resultado = await obtenerPaisesYCapitales();

                console.log(resultado);

            })

        console.log("andando");

    })