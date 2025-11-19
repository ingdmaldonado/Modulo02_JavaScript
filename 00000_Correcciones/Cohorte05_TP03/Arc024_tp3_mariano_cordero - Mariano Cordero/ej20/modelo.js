/* 
    Realizar una aplicación web que permita calcular y determinar la dosis de insulina recomendada para un 
paciente diabético; Basada en tres datos importantes para el cálculo. 
1) Nivel de glucosa en sangre 
2) Peso Corporal (en kilogramos) 
3) Tipo de diabetes a. Tipo 1 b. Tipo 2 

Insulina para Tipo 1: El cálculo es el 50% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre,  
este último término solamente si la glucosa es mayor a 180. 
Insulina para Tipo 2: El cálculo es el 20% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre, 
este último término solamente si la glucosa es mayor a  180. 

La función debe retornar la dosis de insulina recomendada y recibir como parámetros de entrada 
(argumentos) nivel de glucosa, peso corporal y tipo de diabetes.  
Salidas de la aplicación: la aplicación debe indicar la insulina recomendada para el paciente
    

*/


export const dosisInsulina = (nivelGlucosa,pesoCorporal,tipoDeDiabetes) =>
{
   
    let calculoInsulina = 0; 

    switch(tipoDeDiabetes)
    {
        case 1: // tipo de diabetes 1
            {
                if(nivelGlucosa > 180)
                {
                    calculoInsulina =  (pesoCorporal * 50)/100 + (nivelGlucosa * 50)/100;//p3* el calculo 1
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
                    calculoInsulina = (pesoCorporal * 20)/100 + (nivelGlucosa * 50)/100;//p4* el calculo 2
                }
                else
                {
                    calculoInsulina = (pesoCorporal * 20)/100;
                }
                
                break;
            }
        default:
            {
                
                calculoInsulina = -1;//es para decir que algo salio mal ( en vez de devolver calculoInsulina = "Algo salio mal" )
                break;
            }
    }

    return calculoInsulina;


};