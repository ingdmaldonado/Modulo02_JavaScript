
/*Realizar una arrow function que reciba 
como parámetro las 3 notas que obtuvo un alumno 
en los distintos trabajos prácticos de una materia
 y que a partir de esas notas obtenga el promedio
 de las mismas*/

export const fnPromedioDeTres = (nota1,nota2,nota3)=>{
    return (nota1 + nota2 + nota3)/3;
};


export const fnSobreTasa = (tipoProducto,importeBase)=>{

    let sobreTasa = 0;

    switch(tipoProducto)
    {
        case 1:
            {
                sobreTasa = (importeBase * 5)/1000;
                break; 
            }
        case 2:
            {
                sobreTasa = (importeBase * 1)/1000;
                break; 
            }
        default:
            {
                sobreTasa = 0;
                break;
            }
    }
    return sobreTasa;    
}; 


export const fnSobreTasa2 = (tipoProducto,importeBase)=>{

    /* early returns */

    if(tipoProducto === 1) return (importeBase * 5)/1000;
    if(tipoProducto === 2) return (importeBase * 1)/1000;

    return 0;
  
}; 


export const dosisDeInsulina = (nivelGlucosa,peso,tipoDiabetes)=>{

    /*
    Para Tipo 1: El cálculo es el 50% del Peso corporal del 
    paciente + el 50% del nivel de glucosa en sangre,
    este último término solamente si la glucosa es mayor a 180.
    */

    /*
    Para Tipo 2: El cálculo es el 20% del Peso corporal del 
    paciente + el 50% del nivel de glucosa en sangre,
    este último término solamente si la glucosa es mayor a 180.
    */

    let dosis = 0;

    if(tipoDiabetes === 1) // tipo de diabetes 1
    {
        if(nivelGlucosa > 180) // cuando la glucosa es mayor a 180
        {
            dosis = (peso * 50/100) + (nivelGlucosa * 50/100)
        }
        else // cuando la glucosa es menor o igual 180
        {
             dosis = (peso * 50/100);
        }
    }

    if(tipoDiabetes === 2)
    {
        if(nivelGlucosa > 180)
        {
            dosis = (peso * 20/100) + (nivelGlucosa * 50/100);
        }
        else
        {
            dosis = (peso * 20/100);
        }
    }

    return dosis;

};