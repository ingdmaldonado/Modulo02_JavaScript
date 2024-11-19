
/* Este módulo. tiene
dos funciones. ambas funciones
se exportan con la palabra export
y permiten la agrupación de código y 
lógica del programa */


export const fnCalcularDosisDeInsulina = (tipoDeDiabetes,pesoCorporal,nivelDeGlucosa)=>
    {
        let dosisDeInsulina = 0;

        if(tipoDeDiabetes ===1)
        {
            if(nivelDeGlucosa > 180)
            {
                console.log("caso 1");
                dosisDeInsulina = pesoCorporal/2 + nivelDeGlucosa /2;
            }
            else
            {
                console.log("caso 2");
                dosisDeInsulina = pesoCorporal/2;
            }
        }
        if(tipoDeDiabetes ===2)
        {
            if(nivelDeGlucosa > 180)
            {
                console.log("caso 3");
                dosisDeInsulina = (pesoCorporal * 20)/100 + nivelDeGlucosa /2;
            }
            else
            {
                console.log("caso 4");
                dosisDeInsulina = (pesoCorporal * 20)/100;
            }

        }

        return dosisDeInsulina;
    }

export const Cuadrado = (numero) =>
    {
        return numero * numero;
    }