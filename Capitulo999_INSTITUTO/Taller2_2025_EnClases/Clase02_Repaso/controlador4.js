

/* 


Realizar una arrow function que reciba como parámetros la altura y el peso y en función de esos valores calcule el IMC (índice de masa corporal), la función debe devolver el mensaje dependiendo de los valores obtenidos.

IMC= peso (kg) / (altura * altura) 

Nota: el peso esta expresado en kilogramos y la altura en metros.

o	Bajo peso: IMC menor de 18.5
o	Peso normal: IMC entre 18.5 y 24.9
o	Sobrepeso: IMC entre 25 y 29.9
o	Obesidad grado I: IMC entre 30 y 34.9
o	Obesidad grado II: IMC entre 35 y 39.9
o	Obesidad grado III (Obesidad mórbida): IMC de 40 o más
*/

/* me ahorro los (), me ahorro las {}, y no necesito el return */

// esta función devuelve el cuadrado
const Cuadrado = numero => numero * numero;

// esta función devuelve el IMC 
const IMC = (peso,altura) => 
{
    return (peso / Cuadrado(altura)).toFixed(2);
}

// una función que reciba como parametro el IMC y lo clasifique //

const AnalisisDelIMC = (IMC) => 
    {
        let analisis = "";

        if(IMC <= 18.5)
        {
            analisis = "BAJO PESO";
        }
        else
        {
            if((IMC > 18.5) && (IMC <= 24.9))
            {
                analisis = "PESO NORMAL";
            }
            else
            {
                if((IMC > 24.9)&&(IMC <= 29.9))
                {
                    analisis = "SOBRE PESO";
                }
                else
                {
                    if((IMC > 29.9)&&(IMC <=34.9))
                    {
                        analisis = "OBESIDAD GRADO 1";
                    }
                    else
                    {
                        if((IMC > 34.9)&&(IMC <= 39.9))
                        {
                            analisis = "OBESIDAD GRADO 2";
                        }
                        else
                        {
                            analisis = "OBESIDAD MÓRBIDA";
                        }
                    }
                }

            }
        }

    return analisis;

    }


// PROGRAMA PRINCIPAL //
{
    let peso1 = 75;
    let altura1 = 1.86;
    
    let resultado1 = IMC(peso1,altura1);

    let analisis1 = AnalisisDelIMC(resultado1);

    console.log(`Para el Peso de ${peso1} y la altura de ${altura1} el IMC es: ${resultado1} y el diagnostico es ${analisis1}`);

}