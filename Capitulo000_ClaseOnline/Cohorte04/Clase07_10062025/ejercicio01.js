
/*
    
Ejercicio Nro. 33: (Estructuras Repetitivas + Estructuras de Control de Flujo + Contadores + Acumuladores)
Realizar un Programa que permita ingresar 10 números y que para todos ellos realice las siguientes operaciones:
 
    - Contar la cantidad de números pares
    - Sumar el total de los números pares
    - Promedio de números pares

    - Contar la cantidad de números impares
    - Sumar el total de los números impares
    - Promedio de números impares

    - Sumar la Cantidad total de elementos ingresados

Nota: Controlar que al realizar los promedios las cantidades no sean igual a cero; ya que al calcular el cociente podría dar una indeterminación ó un valor infinito.
*/

{
    console.log(`esta aplicacion esta corriendo`);

    /* cuando conozco con exactitud la cantidad
    de numeros a procesar. => for */


    let numero = 0;

    let sumaDePares = 0; // declaro e inicializo una variable donde suma total de los pares
    let cantidadDePares = 0; // voy a tener la cantidad de numeros pares que ingrese el operador
    let promedioDePares = 0; // sumaDePares / cantidadDePares

    let sumaDeImpares = 0;
    let cantidadDeImpares = 0;
    let promedioDeImpares = 0;

    for(let i = 1;i <= 4;i=i+1)
    {
        //console.log(`esta es la iteración ${i}`);

      
        numero = Number(prompt(`por favor ingrese el numero ${i}`));

        /*
            numero = 7 --> perdi !!!.
            numero = 14
        
        */

        if(numero%2 === 0) // modulo o resto de la division por 2
        {
            //console.log(`el numero es PAR`);
            sumaDePares = sumaDePares + numero; //  8 + 4 + 6 + 2 = 20
            cantidadDePares = cantidadDePares + 1; // una variable que se suma asi misma de 1 en 1
        }
        else
        {
            //console.log(`el numero es IMPAR`);

            sumaDeImpares = sumaDeImpares + numero; // acumulador de impares
            cantidadDeImpares = cantidadDeImpares + 1; // contador de impares

        }

        console.log(`numero leido: ${numero}`);

    }

    /* DENOMINADOR NO PUEDE SER CERO */

    promedioDePares = cantidadDePares !== 0 ? sumaDePares / cantidadDePares: 0;
    promedioDeImpares = cantidadDeImpares !== 0 ? sumaDeImpares / cantidadDeImpares:0;

    console.log(`Suma de Pares: ${sumaDePares} Cantidad Pares: ${cantidadDePares} Suma Impares : ${sumaDeImpares} Cantidad Impares: ${cantidadDeImpares}`);
    console.log(`Promedio Pares: ${promedioDePares} Promedio Impares: ${promedioDeImpares}`);


}