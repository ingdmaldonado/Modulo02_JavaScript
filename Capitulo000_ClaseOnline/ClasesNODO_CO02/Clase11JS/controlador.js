
import {fnCaloriasBase,fnCaloriasPorActividadFisica,fnCaloriasAdicionales} from "./modelo.js"


window.addEventListener("load",()=>
    {
        console.log("running");

        const idEdad = document.querySelector("#idEdad");
        const idMujer = document.querySelector("#idMujer");
        const idVaron = document.querySelector("#idVaron");
        const idActividadFisica = document.querySelector("#idActividadFisica");

        const idVegetales = document.querySelector("#idVegetales");
        const idCarbohidratos = document.querySelector("#idCarbohidratos")
        const idProteinas = document.querySelector("#idProteinas");

        const idBtnCalcular = document.querySelector("#idBtnCalcular");
        const idResultado = document.querySelector("#idResultado");

        /* esto es auxiliar para saber si 
        capture bien los elementos u objetos
        del DOM */

        console.log(idEdad);
        console.log(idMujer);
        console.log(idVaron);
        console.log(idBtnCalcular);
        console.log(idResultado);
        console.log(idActividadFisica);
        console.log(idVegetales);
        console.log(idCarbohidratos);
        console.log(idProteinas);

        idBtnCalcular.addEventListener("click",()=>
            {
                let edad = 0;
                let esMujer = 0;
                let esVaron = 0;
                let actividadFisica = 0;

                let consumeVegetales = 0;
                let consumeCarbohidratos = 0;
                let consumeProteinas = 0;

                edad = Number(idEdad.value);
                esMujer = idMujer.checked;
                esVaron = idVaron.checked;
                actividadFisica = Number(idActividadFisica.value);

                consumeVegetales = idVegetales.checked;
                consumeCarbohidratos = idCarbohidratos.checked;
                consumeProteinas = idProteinas.checked;

                console.log(edad);
                console.log(esMujer);
                console.log(esVaron);
                console.log(actividadFisica);

                let caloriasBase = 0;
                caloriasBase = fnCaloriasBase(edad,esMujer,esVaron);

                console.log(`1ro. Las Calorias Base son ${caloriasBase}`);

                let caloriasAdicionales = 0;
                caloriasAdicionales = fnCaloriasPorActividadFisica(caloriasBase,actividadFisica);

                console.log(`2do. Las Calorias Adicionales son ${caloriasAdicionales}`);
               
                let caloriasAdicionalesPorTipoDeConsumo = 0;
                caloriasAdicionalesPorTipoDeConsumo = fnCaloriasAdicionales(consumeVegetales,consumeCarbohidratos,consumeProteinas);

                console.log(`3ro. Las Calorias Adicionales por Consumo son ${caloriasAdicionalesPorTipoDeConsumo}`);

                let caloriasTotales = 0;
                caloriasTotales = caloriasBase + caloriasAdicionales + caloriasAdicionalesPorTipoDeConsumo;

                console.log(`4to. Las calorias TOTALES son  ${caloriasTotales}`);


            })
    })