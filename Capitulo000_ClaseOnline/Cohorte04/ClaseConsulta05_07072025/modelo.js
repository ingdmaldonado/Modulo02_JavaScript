


/* esta es una función que recibe
como parametro el importe base
de una factura y devuelve el 21% 
de ese importe base */

export const fnCalcularIVA = (base)=>
    {
        return (base * 21)/100;
    }


/* exportamos una función desde
a dentro de un MODULO 
*/

export const fnCalcularIB = (base)=>
    {
        return (base * 3)/100;
    }