/*Ejercicio Nro. 20:
Realizar una aplicación web que permita calcular y determinar la dosis de insulina recomendada para un
paciente diabético; Basada en tres datos importantes para el cálculo.
1) Nivel de glucosa en sangre
2) Peso Corporal (en kilogramos)
3) Tipo de diabetes
a. Tipo 1
b. Tipo 2

Para Tipo 1: El cálculo es el 50% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre,
este último término solamente si la glucosa es mayor a 180.
Para Tipo 2: El cálculo es el 20% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre,
este último término solamente si la glucosa es mayor a 180.
La función debe retornar la dosis de insulina recomendada y recibir como parámetros de entrada
(argumentos) nivel de glucosa, peso corporal y tipo de diabetes.
Salidas de la aplicación: la aplicación debe indicar la insulina recomendada para el paciente. */

// calculo para una dosis de insulina
const calcularDosisInsulina = (glucosa, peso, tipoDiabetes) => {

    let dosis = 0;

    if (tipoDiabetes === 1) {
        // Tipo 1
        dosis = peso * 0.50;

        if (glucosa > 180) {
            dosis += glucosa * 0.50;
        }
    } 
    else if (tipoDiabetes === 2) {
        // Tipo 2
        dosis = peso * 0.20;

        if (glucosa > 180) {
            dosis += glucosa * 0.50;
        }
    } 
    else {
        return "Tipo de diabetes inválido";
    }

    return dosis;
};

