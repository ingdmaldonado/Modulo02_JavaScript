
/* 

 Realizar un programa que permita a un Bioquímico
ingresar los valores de glucosa en sangre y determine
y muestre las alertas que se deberían imprimir 
en el análisis de sangre en ayunas. 
la tabla de valoración es la siguiente:


unidad (miligramos por decilitro).

- un nivel de 70 a 99 mg/dl (3.9 y 5.5 mmol/l) se considera normal.

-un nivel de 100 a 125 mg/dl (5.6 a 6.9 mmol/l) 
significa que usted tiene una alteración de la glucosa en ayunas,
un tipo de prediabetes. 
Esto incrementa el riesgo de desarrollar 
diabetes tipo 2.

-un nivel de 126 mg/dl (7 mmol/l) o mayor casi siempre 
significa que usted tiene diabetes.

https://medlineplus.gov/spanish/ency/article/003482.htm


*/

/* 

    1) nivel de glucosa en sangre

    2) en función de los valores. determinar que
    tipo de mensaje le voy a decir al Bioquimico.

*/

{
    /* primero. vamos a definir la variable  */

    let nivelDeGlucosa = 0 // declaro e inicializo

    nivelDeGlucosa = prompt(`Por favor ingrese nivel de glucosa`);

    if(!isNaN(nivelDeGlucosa)) // si no es un numero ? => is not a number ?.
    { // Si es un numero
        
        // aqui transformo el valor de entrada a formato numerico //

        nivelDeGlucosa = Number(nivelDeGlucosa);

        /* aqui comienza la estructura condicional anidada
        para el nivel de glucosa */

        if ((nivelDeGlucosa >= 70) && (nivelDeGlucosa <= 99))
        {
            console.log(`valores normales de glucosa`);
        }  
        else
        {
            if((nivelDeGlucosa > 99) && (nivelDeGlucosa <= 125))
            {
                console.log(`posible pre diabetes tipo 2`);
            }
            else
            {
                if(nivelDeGlucosa > 125)
                {
                    console.log(`diabetes tipo 1`);
                }
                else
                {
                    console.log(`valores todavia no parametrizados`);
                }     
            }
        }  
    }
    else
    {
        // Si no es un numero
        console.log(`por aqui no es un numero`);
    }
}

/* switch => valores continuos. 1,2,3,4,

    operador ternario => quiero asignar un valor 
    a una variable con una comparación lógica simple

    comparación de valores continuos.

    100.2,99.5 
*/