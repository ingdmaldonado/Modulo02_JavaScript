

/* esta función recibe como parametro una edad y 
determina si está dentro de un rango válido */

const fnValidarEdad = (edad)=>
    {
        let edadValida = false;

       // edad > 0 && edad < 100 ? edadValida=true:edadValida=false;

        return (edad > 0 && edad < 100 ? true:false);

      //  return edadValida;

    }


/* esta función recibe como parametro la edad, una variable booleana
que determina si es varon ó mujer y en función de ello devuelve las
calorías base */

const fnCaloriasBase = (edad,varon,mujer)=>
{
    let caloriasBase = 0;
    
    if(varon)
    {
        caloriasBase = 10 * edad;
    }
    if(mujer)
    {
        caloriasBase = 8 * edad;
    }

    return (caloriasBase);

}

/* esta función recibe como parametros las calorias base y luego
el tipo de actividad, en función del tipo de actividad determina
las calorías adicionales que el cuerpo necesita.*/


const fnCaloriasPorActividadFisica = (caloriasBase,tipoDeActividad)=>
    {
        let caloriasPorActividadFisica = 0;

        switch (tipoDeActividad) 
        {
            case 1:
                {
                    caloriasPorActividadFisica = 0;
                    break;

                }
            case 2:
                {
                    caloriasPorActividadFisica = caloriasBase * 10/100;
                    break;

                }
            case 3:
                {
                    caloriasPorActividadFisica = caloriasBase * 20/100;
                    break;                    
                }
            case 4:
                {
                    caloriasPorActividadFisica = caloriasBase * 30/100;
                    break;               
                }
            default:
                {   
                    caloriasPorActividadFisica = 0;
                }
        }

        return (caloriasPorActividadFisica);

    }


/* esta función calcularía las calorias adicionales, dependiendo
si es necesario acumular esas calorias */

const fnCaloriasAdicionales = (sumaCaloriasAdicionales)=>
    {
        if(sumaCaloriasAdicionales)
        {
            return 50;
        }
        return 0;
    }

/* esta función calcularía las calorías TOTALES que una
persona necesita, en función de la edad,sexo, actividad física y 
alimentación adicional 
*/

const fnCaloriasTotales = ()=>
    {
        
    }



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



            }
            else
            {
                alert("La edad debe estar comprendido entre 1 y 99 años");
            }



           

        })




    })