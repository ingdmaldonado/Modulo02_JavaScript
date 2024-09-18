


/*
    - 500.000 a 1.500.000 la rentabilidad será del 6% mensual
 	- 1.500.000 hasta 5.000.000 la rentabilidad será del 7,5% mensual
    - 5.000.000 hasta 25.000.000 la rentabilidad será del 8,5% mensual
 	- para valores que superen esa magnitud la tasa mensual será 

*/

const fnDevolverRentabilidadMensual = (capitalIngresado)=>
    {
        if((capitalIngresado >= 500000) && (capitalIngresado <= 1500000))
        {
            return capitalIngresado * 6/100;
        }
        if((capitalIngresado > 1500000) && (capitalIngresado <= 5000000))
        {
            return capitalIngresado * 7.5/100;
        }
        if((capitalIngresado > 5000000) && (capitalIngresado <= 25000000))
        {
            return capitalIngresado * 8.5/100;
        }
        if((capitalIngresado > 25000000))
        {
            return capitalIngresado * 9.5/100;
        }

        return 0;
    }

/* esta función se encarga de devolver la rentabilidad TOTAL */
const fnRentabilidadTotal = (rentabilidadMensual,cantidadDeMeses)=>
{
    if((cantidadDeMeses >=1) && (cantidadDeMeses <= 3))
    {
        return rentabilidadMensual * cantidadDeMeses;
    }
    else
    {
        return 0;
    }
}

/*
•	Para Clientes que ya sean del Banco, ofreceremos un 0.7% más 
    sobre la rentabilidad ya definida en el punto 2. Es decir,
    se debe calcular el 0.7% sobre la rentabilidad del plazo fijo.
*/
const fnAdicionalPorSerClienteDelBanco = (esClienteDelBanco,rentabilidadTOTAL)=>
    {
        if(esClienteDelBanco)
        {
            return (rentabilidadTOTAL * 0.7)/100;
        }
        else
        {
            return 0;
        }
    }

/*
    Para Clientes que acepten plazos fijos auto renovables de 3 (tres) meses,
     ofreceremos un 0.9% más sobre la rentabilidad   
     ya definida en el punto 2. Es decir, se debe calcular 
     el 0.9% sobre la rentabilidad del plazo fijo.
*/

const fnAdicionalPorPlazoFijoAutoRenovable = (aceptaAutoRenovable,rentabilidadTOTAL)=>
    {
        if(aceptaAutoRenovable)
        {
            return (rentabilidadTOTAL * 0.9)/100;
        }
        else
        {
            return 0;
        }
    }


window.addEventListener("load",()=>{

    console.log("ejercicio 7 funcionando");

    /* el capital, podria sacarlo de un input */
    let importeCapital = 1000000;

    /* a la rentabilidad mensual podría mostrarla en un label, etiqueta h1 ... */
    let rentabilidadMensual = 0;

    rentabilidadMensual = fnDevolverRentabilidadMensual(importeCapital);

    console.log(rentabilidadMensual)

    /* a partir de aqui calculo la rentabilidad TOTAL */

    let cantidadDeMeses = 0;// la puedo sacar desde un select 
    cantidadDeMeses = 3;

    let rentabilidadTOTAL = fnRentabilidadTotal(rentabilidadMensual,cantidadDeMeses);

    console.log(rentabilidadTOTAL);

    /* aqui voy a calcular los dos adicionales que
    podrían presentarse */

    /* a esto lo saco desde un checkbox */
    let esClienteDelBanco = true; /* true es cliente del banco, en caso de false no es cliente del banco */

    let rentabilidadAdicionalPorClienteDeBanco = 0;

    rentabilidadAdicionalPorClienteDeBanco = fnAdicionalPorSerClienteDelBanco(esClienteDelBanco,rentabilidadTOTAL);

    console.log(rentabilidadAdicionalPorClienteDeBanco);

    let rentabilidadPlazoFijoRenovable = 0;

    rentabilidadPlazoFijoRenovable = fnAdicionalPorPlazoFijoAutoRenovable(true,rentabilidadTOTAL);

    console.log(rentabilidadPlazoFijoRenovable);


})