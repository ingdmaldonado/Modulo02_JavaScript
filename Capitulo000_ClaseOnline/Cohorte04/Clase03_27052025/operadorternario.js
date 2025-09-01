
/* Estructuras
de control de flujo
    => if/else
    => operador ternario => React
    => switch
*/

/* 
    ECMAJS 2015 => 2015 EN ADELANTE 
*/

{
    let edadPersona = 0;
    edadPersona = Number(prompt(`Ing. su Edad`));

    let resultado = edadPersona >= 18 ? `Mayor de edad`:`Menor de edad`;
    console.log(`La edad Ingresada es ${edadPersona} y es ${resultado}`);

}

{
    /* 
        en programación/no se puede dividir por cero => indeterminacion
    */

    let totalFacturado1 = 200000;
    let cantidadFacturas1 = 5;
    let promedio1 = totalFacturado1 / cantidadFacturas1;

    let totalFacturado2 = 400000;
    let cantidadFacturas2 = 0; 

    /* 
        notas de credito => 10.000 compra y vino otro devolucion -10.000 
    */

    let cociente = 200/5;
    console.log(cociente);

    let cociente2 = 400000/0; // tiende a infinito.
    console.log(cociente2);

    console.log(promedio1);

    let numerador = 4000 
    let denominador = 0;

    // les agradezco infinitamente a los que pensaron en esto //
    
    let resultado = denominador !== 0 ? numerador / denominador:0;

    console.log(resultado);


}

/* 
    registrar el ingreso de las personas de 
    catamarca por segmento salarial y por barrio.

    0 => cantidad de personas
    ingresos >0 y ingresos <= 400.000 => cantidad de personas
    ingresos > 400.000 y ingresos <= 2.500.000 => cantidad de personas
    ingresos > 2.500.000 y ingresos <= 5.000.000 => cantidad de personas


    cantidad de personas = 0;

    estratificacion de segmentos

        18 - 25 => redes sociales 

        25 - 30 => redes sociales


    promedio = total / cantidad de personas del segmento ?.


    calculo1 => calculo2 => calculo3 ... calculon




*/