
/* 
Ejercicio Nro. 04: Estructuras Condicionales (if/else)
Ingrese un número y determine si es
positivo o negativo usando una estructura 
condicional if/else y también resuelva el 
mismo problema utilizando un operador ternario.

    (numero >= 0) => es positivo
*/

{
    console.log(`la aplicacion esta corriendo`);

    let numeroIngresado = 0; // siempre declaro e inicializo
    numeroIngresado = Number(prompt(`por favor ingrese numero`));

    // forma 1 - con operador ternario y mostrando por consola //
    numeroIngresado >= 0 ? console.log("es positivo"): console.log("es negativo");

    // forma 2 - con operador ternario inicializando una variable //
    let resultado = numeroIngresado >= 0 ? "es positivo":"es negativo";
    console.log(resultado);

    // forma 3 - con un condicional if/else
    if(numeroIngresado >= 0)// lado verdadero
    {
        console.log(`el numero ingresado es positivo`);
    }
    else // lado falso
    {
        console.log(`el numero ingresado es negativo`)
    }
    console.log(`Numero: ${numeroIngresado}`);
}

/*

    if => generalmente cuando tengo expresiones
    que evaluar complejas y generalmente están
    vinculadas a analizar el cumplimiento
    de varias variables.
    
        if()
        {
            por aqui puedo poner un programa completo
            linea1; ....
        }
        else
        {
            por aqui otro programa;
            linea1;
            linea2;
            linea3;
        }

    operador ternario => una evaluación simple.

    condicion ? 1 sola instruccion por el verdadero:1 sola instruccion;

*/
    {
        let ingresosPercibidos = 0;
        ingresosPercibidos = Number(prompt(`Por favor ingrese su salario`));

        /* 
            rango 1 => 0 - 300.000 => 7%
            rango 2 => 300.000 - 600.000 => 6.2%
            rango 3 => 600.000 - 1.000.000 => 5.8%
            rango 4 => resto => 4%
        */

        let porcentajeIncremento = 0;

        if((ingresosPercibidos >= 0)&&(ingresosPercibidos <= 300000))
        { // rango 1
            porcentajeIncremento = 7;
        }
        else
        {
            if((ingresosPercibidos > 300000)&&(ingresosPercibidos <= 600000))
            { // rango 2
                porcentajeIncremento = 6.2;
            }
            else
            {
                if((ingresosPercibidos > 600000) && (ingresosPercibidos <= 1000000))
                { // rango 3
                    porcentajeIncremento = 5.8;
                }
                else
                { // rango 4
                    if(ingresosPercibidos > 1000000)
                    {
                        porcentajeIncremento = 4;
                    }
                    else
                    {
                        porcentajeIncremento = 0;
                        alert("POR FAVOR INGRESE UN SALARIO CORRECTO");
                    }
                }
            }
        }
        console.log(`Sus ingresos son ${ingresosPercibidos} y su % de incremento sería ${porcentajeIncremento}`);
        
    }


