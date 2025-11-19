/*
Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios 
Públicos de Aguas de Catamarca” y partir de ese importe base calcule y devuelva la Tasa de Fiscalización ENRE 
(Ente Regulador de Servicios Públicos) que corresponde al 1,2 % del importe Base ingresado como parámetro de 
la arrow function. 
Nota: Debe devolver un número  
*/

export const servicioAguasCatENRE = (importeBase) =>
{
    let tasaENRE = 0;

    tasaENRE = (importeBase * 1.2)/100 + importeBase;

    return tasaENRE; //Recordatorio. devuelve el valor del resultado final dentro de la funcion
};