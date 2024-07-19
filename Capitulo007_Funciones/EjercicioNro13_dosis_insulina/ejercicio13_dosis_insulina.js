
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