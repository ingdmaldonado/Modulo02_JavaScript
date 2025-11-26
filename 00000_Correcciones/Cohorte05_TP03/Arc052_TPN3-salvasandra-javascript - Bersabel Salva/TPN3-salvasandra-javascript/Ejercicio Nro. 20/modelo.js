/* Ejercicio Nro. 20:
Realizar una aplicación web que permita calcular y determinar la dosis de insulina recomendada para un paciente diabético; Basada en tres datos importantes para el cálculo.
1) Nivel de glucosa en sangre
2) Peso Corporal (en kilogramos)
3) Tipo de diabetes
a. Tipo 1
b. Tipo 2
Para Tipo 1: El cálculo es el 50% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre,
este último término solamente si la glucosa es mayor a 180.
Para Tipo 2: El cálculo es el 20% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre,
este último término solamente si la glucosa es mayor a 180.
La función debe retornar la dosis de insulina recomendada y recibir como parámetros de entrada (argumentos) nivel de glucosa, peso corporal y tipo de diabetes.
Salidas de la aplicación: la aplicación debe indicar la insulina recomendada para el paciente.
*/

export const calcularDosisInsulina = (nivelGlucosa, pesoCorporal, tipoDiabetes) => {
    let dosisRecomendada = 0;
  
    if (tipoDiabetes === 1) {
      // Diabetes tipo 1
      dosisRecomendada = pesoCorporal * 0.5;
      if (nivelGlucosa > 180) {
        dosisRecomendada += nivelGlucosa * 0.5;
      }
  
    } else if (tipoDiabetes === 2) {
      // Diabetes tipo 2
      dosisRecomendada = pesoCorporal * 0.2;
      if (nivelGlucosa > 180) {
        dosisRecomendada += nivelGlucosa * 0.5;
      }
  
    } else {
      console.log(`Tipo de diabetes no válido. Debe ingresar 1 o 2.`);
    }
  
    return dosisRecomendada;
  };
  