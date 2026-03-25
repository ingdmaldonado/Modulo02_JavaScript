/* 

Ejercicio propuesto Nro. 13:
	Realizar una función que pueda calcular y determinar la dosis de insulina recomendada para un paciente diabético. Basada en tres datos importantes para el cálculo.

1)	Nivel de glucosa en sangre
2)	Peso Corporal (en kilogramos)
3)	Tipo de diabetes
a.	Tipo 1
b.	Tipo 2

Para Tipo 1: El cálculo es el 50% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre, este último termino solamente si la glucosa es mayor a 180.

Para Tipo 2: El cálculo es el 20% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre, este último termino solamente si la glucosa es mayor a  180.

La función debe retornar la dosis de insulina recomendada y recibir como parámetros de entrada (argumentos) nivel de glucosa, peso corporal y tipo de diabetes.
Nota: expresar las funciones de forma tradicional y como arrow functions
Ejercicio propuesto Nro. 14:
	Realizar una función que pueda obtener y calcular el IMC – índice de masa corporal sabiendo que la fórmula es la siguiente IMC = peso (kg) / altura (metros) al cuadrado
 
*/

/* MOMENTO1 => DEFINICIÓN DE LA FUNCIÓN */

function dosisInsulina (nivelGlucosa,pesoCorporal,tipoDeDiabetes)
{
    let calculoInsulina = 0;

    switch(tipoDeDiabetes)
    {
        case 1: // tipo de diabetes 1
            {
                if(nivelGlucosa > 180)
                {
                    calculoInsulina =  (pesoCorporal * 50)/100 + (nivelGlucosa * 50)/100;
                }
                else
                {
                    calculoInsulina =  (pesoCorporal * 50)/100;
                }
                
                break;
            }
        case 2: // tipo de diabetes 2
            {
                if(nivelGlucosa > 180)
                {
                    calculoInsulina = (pesoCorporal * 20)/100 + (nivelGlucosa * 50)/100;
                }
                else
                {
                    calculoInsulina = (pesoCorporal * 20)/100;
                }
                
                break;
            }
        default:
            {
                calculoInsulina = -1;
                break;
            }
    }

    return calculoInsulina;


}

/***** PROGRAMA PRINCIPAL ****/

{
    console.log(`aplicación is running`);


    /***** TIPO 1 - NIVEL DE GLUCOSA MAYOR A 180 */

    let resultado1 = dosisInsulina(190,95,1);

    console.log(resultado1);

    /* utiliza la mitad del peso + mitad del nivel de glucosa */

    
    /***** TIPO 1 - NIVEL DE GLUCOSA MENOR A 180 */

    let resultado2 = dosisInsulina(100,95,1);

    console.log(resultado2);

    /* utiliza la mitad del peso => 47.5 */

        
    /***** TIPO 2 - NIVEL DE GLUCOSA MAYOR A 180 */

    let resultado3 = dosisInsulina(220,95,2);

    console.log(resultado3);

    /* 
        95 * 20/100 = 19

        220 * 50/100 = 110
    
    */

     /***** TIPO 2 - NIVEL DE GLUCOSA MENOR A 180 */

    let resultado4 = dosisInsulina(90,95,2);

    console.log(resultado4);

    /* 
        95 * 20/100 = 19

        220 * 50/100 = 110
    
    */




}


/* RECOMENDACIONES 

    1 - ME CONCENTRO EN COMPRENDER EL PROBLEMA

    2 - LAS FUNCIONES SIEMPRE TIENEN QUE DEVOLVER
    UN VALOR QUE EN TODOS LOS CASOS SEAN DEL MISMO TIPO

        CASO 1 => UN NUMERO

        CASO 2 => DEVOLVER UNA PALABRA

    3 - LAS FUNCIONES NUNCA DENTRO PIDEN QUE SE INGRESEN VALORES.
    
        prompt
        alert

    


*/