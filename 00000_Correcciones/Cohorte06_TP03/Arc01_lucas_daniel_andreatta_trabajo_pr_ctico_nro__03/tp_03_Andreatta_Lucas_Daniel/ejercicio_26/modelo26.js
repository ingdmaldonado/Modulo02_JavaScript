
 /* 
Ejercicio Nro. 26: 
 
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
 este último término solamente si la glucosa es mayor a  180. 
 
La función debe retornar la dosis de insulina recomendada y recibir como parámetros de entrada 
(argumentos) nivel de glucosa, peso corporal y tipo de diabetes.  
 
Salidas de la aplicación: la aplicación debe indicar la insulina recomendada para el paciente.
*/

export const fnCalcularInsulina = (nivelGlucosa, pesoCorporal, tipoDiabete) => {
    
    let insulinaRecomendada = 0;

    switch (tipoDiabete) {
            case 1:{ /* El cálculo es el 50% del Peso corporal del paciente + 
                    el 50% del nivel de glucosa en sangre,  
                    este último término solamente si la glucosa es mayor a 180.*/
                
                    if ((nivelGlucosa>0) && (nivelGlucosa<=180)){
                        insulinaRecomendada = ((pesoCorporal*50)/100);
                    } else{ if (nivelGlucosa>180) {
                            insulinaRecomendada = ((pesoCorporal*50)/100)+((nivelGlucosa*50)/100);
                        }
                    }
                    break;
                }
            case 2:{ /*El cálculo es el 20% del Peso corporal del paciente + 
                    el 50% del nivel de glucosa en sangre, 
                    este último término solamente si la glucosa es mayor a  180. */
                
                    if ((nivelGlucosa>0) && (nivelGlucosa<=180)){
                        insulinaRecomendada = ((pesoCorporal*20)/100);
                    } else{ if (nivelGlucosa>180) {
                            insulinaRecomendada = ((pesoCorporal*20)/100)+((nivelGlucosa*50)/100);
                        }
                    }
                    break;
                }
            default:
                {
                    console.log(`Error!, ingrese una opcion de diabete correcta`);
                    break;
                }
        }

    return insulinaRecomendada;
};
