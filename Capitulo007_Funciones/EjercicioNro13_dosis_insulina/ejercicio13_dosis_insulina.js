
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
 

Clasificación del IMC
La Organización Mundial de la Salud (OMS) clasifica el IMC en las siguientes categorías:

Bajo peso: IMC menor de 18.5
Peso normal: IMC entre 18.5 y 24.9
Sobrepeso: IMC entre 25 y 29.9
Obesidad grado I: IMC entre 30 y 34.9
Obesidad grado II: IMC entre 35 y 39.9
Obesidad grado III (Obesidad mórbida): IMC de 40 o más
	La función debe recibir como parámetros la altura (en metros) y el peso (en kilogramos) y calcular el IMC, devolverlo y además mostrar los carteles de (bajo peso, peso normal, sobre peso, etc) según el cálculo.
Nota: expresar las funciones de forma tradicional y como arrow function.


*/


/* Función que se encargará de calcular la dosis de Insulina
para un paciente diabético. recibe como parametro tres valores
que son, el nivel de glucosa en sangre, el peso corporal y el tipo
de diabetes */

const fnDosisInsulina = (nivelGlucosa,pesoCorporal,tipoDiabetes) =>
    {
        let dosisInsulina = 0;

        if(tipoDiabetes === 1)
        {
            // para tipo 1 es el 50% del pesos corporal
            dosisInsulina = (pesoCorporal * 50)/100;

            // si el nivel de glucosa > 180
            if(nivelGlucosa > 180) 
            {
                /* 
                si el nivel glucosa es mayora 180, agregamos 
                al cálculo normal de insulina, el 50% del nivel
                de glucosa 
                */

                dosisInsulina = dosisInsulina + (nivelGlucosa * 50)/100;
            }
        }

        if(tipoDiabetes === 2)
        {
            // para tipo 2 es el 20% del peso corporal
            dosisInsulina = (pesoCorporal * 20)/100;

            if(nivelGlucosa > 180)
            {
                /* 
                si el nivel glucosa es mayora 180, agregamos 
                al cálculo normal de insulina, el 20% del nivel
                de glucosa 
                */

                dosisInsulina = dosisInsulina + (nivelGlucosa * 20)/100;
            }
        }

        return dosisInsulina;
    }


    /* EJEMPLO DE INVOCACIÓN DE LA FUNCIÓN */
    {

        let nivelg = 190;
        let pesoc = 80;
        let tipodia = 1;

        let Resultado = fnDosisInsulina(nivelg,pesoc,tipodia);

        console.log(`El Nivel de Insulina recomendado para Glucosa ${nivelg} Peso ${pesoc} Tipo Diabetes ${tipodia} es := ${Resultado}`);

    }