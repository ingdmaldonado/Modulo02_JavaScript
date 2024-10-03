
import {obtenerPokemones} from "./apiPokemon.js";
import {obtenerUniversidades} from "./apiUniversidades.js";
import {obtenerImagenAstronomia} from "./apiNasa.js";
import {obtenerImagenAleatoria,obtenerRazasDePerros} from "./apiDogs.js";


window.addEventListener("load",()=>
    {

        const idBtnRecuperarPokemones = document.querySelector("#idBtnRecuperarPokemones");
        const idBtnUniversidades = document.querySelector("#idBtnUniversidades");
        const idBtnNasa = document.querySelector("#idBtnNasa");
        const idBtnImagenPerritos = document.querySelector("#idBtnImagenPerritos");
        const idBtnRazas = document.querySelector("#idBtnRazas");

        idBtnRecuperarPokemones.addEventListener("click",async ()=>
            {

                let resultado = await obtenerPokemones();

                console.log(resultado);

                console.log(resultado.results);
                
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

        console.log("andando");

    })