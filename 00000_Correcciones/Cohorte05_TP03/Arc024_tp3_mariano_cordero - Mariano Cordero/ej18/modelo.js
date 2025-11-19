/*
    Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios 
    Públicos de Aguas de Catamarca” y a partir de ese importe base calcule y devuelva la Tasa de Subsuelo, que es 
    un importe que corresponde al 3% del importe Base ingresado como parámetro de la arrow function. 
    Nota: Debe devolver un número 
 */
export const servicioAguasCatSubsuelo = (importeBase) =>
{
    let tasaSubsuelo = 0;

    tasaSubsuelo = (importeBase * 3)/100 + importeBase;

    return tasaSubsuelo; //Recordatorio. devuelve el valor del resultado final dentro de la funcion
};