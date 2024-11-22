

/* esta función es la que realiza el cálculo
base de calorias */

export const fnCaloriasBase = (edad,esMujer,esVaron)=>
    {
        let resultadoBase = 0;
        if(esVaron)
        {
            resultadoBase = edad * 10 + 500;
        }
        if(esMujer)
        {
            resultadoBase = edad * 8 + 400;
        }

        return resultadoBase;
    }

/* esta función lo que hará es tomar
las calorias base calculadas por la función
anterior y en función de la activiad física
devolver el incremento de calorías 


El cálculo debe basarse en los siguientes datos proporcionados por el usuario:


	3) Nivel de actividad física, seleccionando una de las siguientes opciones:
		a) Sedentario.
		b) Moderadamente activo.
		c) Activo.
		d) Muy activo.

*/

export const fnCaloriasPorActividadFisica = (caloriasBase,actividadFisica)=>
    {
        let caloriasPorActividadFisica = 0;

        switch(actividadFisica)
        {
            case 1: // sedentario
                {
                    caloriasPorActividadFisica = 0;
                    break;
                }
            case 2: // moderadamente activo
                {
                    caloriasPorActividadFisica = (caloriasBase * 10)/100;
                    break;
                }
            case 3: // activo
                {
                    caloriasPorActividadFisica = (caloriasBase * 20)/100;
                    break;
                }
            case 4: // muy activo
                {
                    caloriasPorActividadFisica = (caloriasBase * 30)/100;
                    break;
                }
            default:
                {
                    caloriasPorActividadFisica = 0;
                    break;
                }
        }
        return caloriasPorActividadFisica;
    }

/* Esta función. recibe como parametro las conductas
alimenticias del usuario. si consume vegetales,
si consume carbohidratos y si consume proteinas */

export const fnCaloriasAdicionales = (consumeVegetales,consumeCarbohidratos,consumeProteinas)=>
    {
        let caloriasAdicionales = 0;

        if(consumeVegetales)
        {
            caloriasAdicionales = caloriasAdicionales + 50;
        }
        if(consumeCarbohidratos)
        {
            caloriasAdicionales = caloriasAdicionales + 50;
        }
        if(consumeProteinas)
        {
            caloriasAdicionales = caloriasAdicionales + 50;
        }

        return caloriasAdicionales;

    }