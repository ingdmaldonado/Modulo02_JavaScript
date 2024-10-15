
/* importando desde un modulo que nosotros hicimos la
lógica que me permite conectarme a la API de pokemon */

import {obtenerPokemones} from "./apiPokemon.js";
import {obtenerPaisesYCapitales} from "./apiCapitalesMundo.js";
import {obtenerPronosticoTiempo} from "./apiTiempo.js";
import {obtenerUniversidades} from "./apiUniversidades.js";

window.addEventListener("load",()=>
    {

        const idBtnRecuperarPokemones = document.querySelector("#idBtnRecuperarPokemones");

        console.log(idBtnRecuperarPokemones);

        idBtnRecuperarPokemones.addEventListener("click",async ()=>
            {

                /* Esta primera parte sirve para obtener los pokemons */

                    let resultado = await obtenerPokemones();

                //    console.log(resultado);

                //    console.log(resultado.results); // esto sería un vector 

                    /* COMPLETAR CON DOM DINAMICO */

                    //resultado.results.forEach(element => console.log(element.url));

                /* En esta parte vamos a conectarnos a las capitales del MUNdo */

                    let resultado2 = await obtenerPaisesYCapitales();

                //    console.log(resultado2);

                /* En esta parte vamos a consultar la api del Tiempo  */

                    let resultado3 = await obtenerPronosticoTiempo();

                  //  console.log(resultado3);

                    let resultado4 = await obtenerUniversidades();

                    console.log(resultado4);


                    const objeto1 = {apellido:"MESSI",nombre:"LIONEL ANDRES"};

                    console.log(objeto1.apellido);
                    console.log(objeto1.nombre);


                    /* DESTRUCURING */

                    const {apellido,nombre} = objeto1;

                    console.log(apellido);
                    console.log(nombre);

                    const vector1 = ["uno","dos"];

                    const vector2 = [...vector1];

                    


                    

            })
    })