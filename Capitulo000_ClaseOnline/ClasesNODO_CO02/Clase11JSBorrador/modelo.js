

 
/* esta función recibe como parametro la edad, una variable booleana
que determina si es varon ó mujer y en función de ello devuelve las
calorías base */

export const fnCaloriasBase = (edad,varon,mujer)=>
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


export const fnCaloriasPorActividadFisica = (caloriasBase,tipoDeActividad)=>
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

export const fnCaloriasAdicionales = (sumaCaloriasAdicionales)=>
    {
        if(sumaCaloriasAdicionales)
        {
            return 50;
        }
        return 0;
    }