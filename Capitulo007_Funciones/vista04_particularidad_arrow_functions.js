

/* Una Arrow Function Completa */
const ivaFactura = (importeFactura) =>
    {
        return (importeFactura * 21)/100;
    }


/* Si las Arrow Function reciben un solo parametro
de entrada y tienen una única operación de cálculo ó
expresión, se pueden obviar los siguientes datos

    - no es necesario que estén los parentesis del parametro ()
    - no es necesario que estén las {} llaves del cuerpo
    - no es necesario colocar la palabra return
*/

const ivaFactura2 = importeFactura => importeFactura * 21/100;

/* Si las Arrow Function reciben un solo parametro, 
es posible eliminar los () parentesis de los parametros */

const DevolverTasaMunicipal = importeFactura =>
{
    if (importeFactura > 0)
    {
        return (importeFactura * 3)/100;
    }
    else
    {
        return 0;
    }
}


/* EJEMPLO DE INVOCACION DE LAS FUNCIONES */

{
    /* aqui invoco a la primera función */
    let Resultado1 = ivaFactura(10000);
    console.log(`El IVA de la Factura es: ${Resultado1}`);

    /* aquí invoco a la arrow function corta */
    let Resultado2 = ivaFactura2(10000);
    console.log(`El IVA de la Factura (arrow function corta) ${Resultado2}`);
}