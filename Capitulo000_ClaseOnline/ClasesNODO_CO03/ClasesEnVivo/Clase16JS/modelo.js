
/* MODULO donde guardo las funciones específicas
del MODELO, donde guardo la lógica específica
de las reglas de negocio que tiene la aplicaciónn nuestra */


/* 
- 500.000 a 1.500.000 la rentabilidad será del 6% mensual
- 1.500.000 hasta 5.000.000 la rentabilidad será del 7,5% mensual
- 5.000.000 hasta 25.000.000 la rentabilidad será del 8,5% mensual
- para valores que superen esa magnitud la tasa mensual será del 9,5%
*/

/* funcion flecha que devuelve la tasa
mensual */

export const fnRetornarTasaMensual = (capital)=>
    {
        let tasaMensual = 0;

        if((capital >= 500000) && (capital <= 1500000))
        {
            tasaMensual = 6;
        }
        if((capital > 1500000) && (capital <= 5000000))
        {
            tasaMensual = 7.5;
        }
        if((capital > 5000000) && (capital <= 25000000))
        {
            tasaMensual = 8.5;
        }
        if(capital > 25000000)
        {
            tasaMensual = 9.5;
        }

        return tasaMensual;

    }

    /* funcion flecha o arrow function que retorna la tasa
    total */

export const fnRetornaTasaTotal = (tasaMensual,cantidadDeMeses) =>
    {
        return (cantidadDeMeses * tasaMensual);
    }

/* funcion fleha o arrow function que retorna el 
importe de capital con su rentabilidad total */

export const fnRetornoTotalPlazoFijo = (tasaTotal,importeCapital)=>
    {
        return importeCapital + (importeCapital * tasaTotal)/100;
    }