export const fnDosisDeInsulina = ( tipoDeDiabetes , nivelGlucosa, peso) => {

    let dosis = 0;

    if(tipoDeDiabetes ===1)
    {
        if(nivelGlucosa > 180)
        {
            dosis = (peso * 50/100) + (nivelGlucosa * 50/100)
        }
        else
        {
            dosis = (peso * 50/100)
        }    
    }

    if(tipoDeDiabetes ===2)
    {
        if(nivelGlucosa > 180)
        {
            dosis = (peso * 20/100) + (nivelGlucosa * 50/100)
        }
        else
        {
            dosis = (peso * 20/100)
        }    
    }

    return dosis;
};

export const fnGuardarEstado =(estadoAplicacion) => {

    let estadoApp = JSON.stringify(estadoAplicacion);

    localStorage.setItem("estadoApp", estadoApp);
};

export const fnRecuperarEstado = () => {

    let datoRecuperado = localStorage.getItem("estadoApp");
            console.log(datoRecuperado);

            if (datoRecuperado)

                {
                    let estadoOBJETO = JSON.parse(datoRecuperado);

                    console.log(datoRecuperado);

                    console.log(estadoOBJETO);

                    idTipo.value = estadoOBJETO.diabete;
                    idNumero1.value = estadoOBJETO.peso;
                    idNumero2.value = estadoOBJETO.glucosa;
                    

                }
};