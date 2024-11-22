
import {fnValidarEdad} from "./validaciones.js";
import {fnCaloriasBase,fnCaloriasPorActividadFisica,fnCaloriasAdicionales} from "./modelo.js";


window.addEventListener("load",()=>
    {
        const idEdad = document.querySelector("#idEdad");
        const idVaron = document.querySelector("#idVaron");
        const idMujer = document.querySelector("#idMujer");
        const idSelectorActividad = document.querySelector("#idSelectorActividad");

        const idConsumeVegetales = document.querySelector("#idConsumeVegetales");
        const idConsumeCarbohidratos = document.querySelector("#idConsumeCarbohidratos");
        const idConsumeProteinas = document.querySelector("#idConsumeProteinas");

        const idBtnCalcular = document.querySelector("#idBtnCalcular");

        const idResultado = document.querySelector("#idResultado");


        console.log(idEdad);
        console.log(idVaron);
        console.log(idMujer);
        console.log(idSelectorActividad);

        console.log(idConsumeVegetales);
        console.log(idConsumeCarbohidratos);
        console.log(idConsumeProteinas);

        console.log(idBtnCalcular);

        console.log(idResultado);

        idBtnCalcular.addEventListener("click",()=>
        {

            let edad = Number(idEdad.value);
            let varon = idVaron.checked;
            let mujer = idMujer.checked;

            let actividadFisica = Number(idSelectorActividad.value);

            let consumeVegetales = idConsumeVegetales.checked;
            let consumeCarbohidratos = idConsumeCarbohidratos.checked;
            let consumeProteinas = idConsumeProteinas.checked;

            console.log(edad);
            console.log(varon);
            console.log(mujer);

            console.log(actividadFisica);

            console.log(consumeVegetales);
            console.log(consumeCarbohidratos);
            console.log(consumeProteinas);

            if(fnValidarEdad(edad))
            {
                console.log("por aqui la edad es valida");

                let caloriasBase = 0;
                caloriasBase = fnCaloriasBase(edad,varon,mujer);

                let caloriasPorActividadFisica = fnCaloriasPorActividadFisica(caloriasBase,actividadFisica);

                let caloriasAdicionalesConsumoVegetariano = fnCaloriasAdicionales(consumeVegetales);
                let caloriasAdicionalesConsumeCarbohidratos = fnCaloriasAdicionales(consumeCarbohidratos);
                let caloriasAdicionalesConsumeProteinas = fnCaloriasAdicionales(consumeProteinas);

                console.log(caloriasBase);
                console.log(caloriasPorActividadFisica);

                console.log(caloriasAdicionalesConsumoVegetariano);
                console.log(caloriasAdicionalesConsumeCarbohidratos);
                console.log(caloriasAdicionalesConsumeProteinas);




            }
            else
            {
                alert("La edad debe estar comprendido entre 1 y 99 años");
            }



           

        })




    })