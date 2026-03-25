
/* 

Una Frigorífico posee una cinta transportadora y clasificadora de huevos para consumo humano. La cinta 
no tan solo los transporta sino también los clasifica según su peso. es decir, al final de la cinta existe una balanza 
electrónica de alta precisión que evalúa su peso y los clasifica.
[20:05, 22/10/2025] +54 9 3834 02-3236: 
a) XL, súper grandes: peso ≥ 73 gramos.  
b) L, grandes: peso ≥ 63 gramos y < 73 gramos.  
c) M, medianos: peso ≥ 53 gramos y < 63 gramos.
[20:05, 22/10/2025] +54 9 3834 02-3236: Nota: considere como descartados aquellos que no estén dentro del rango de valores aceptables.
[20:06, 22/10/2025] +54 9 3834 02-3236: 1) Cantidad total de Huevos (Todas las categorías) 

2) Cantidad total de Huevos XL 
3) Cantidad total de Huevos L 
4) Cantidad total de Huevos M 
5) Cantidad total de Huevos descartados 

6) Determinar el % de Huevos XL sobre el Total 
7) Determinar el % de Huevos L sobre el Total 
8) Determinar el % de Huevos M sobre el Total

*/

{

    let continua = "SI";
    let contadorHuevos = 0;

    let contadorDescartes = 0;
    let contadorM = 0;
    let contadorL = 0;
    let contadorXL = 0;



    while (continua === "SI")
    {
        /* (1ro) Vamos a ir Contando huevo x huevo */
        contadorHuevos = contadorHuevos + 1;

        /* (2do) Leer el peso de cada huevo */
        let pesoHuevo = 0;
        pesoHuevo = Number(prompt(`Ingrese el Peso del huevo ${contadorHuevos}`));

        /* (3ra.) Registrar los Huevos por Categoria 
            a) XL, súper grandes: peso ≥ 73 gramos.  
            b) L, grandes: peso ≥ 63 gramos y < 73 gramos.  
            c) M, medianos: peso ≥ 53 gramos y < 63 gramos.
        */

        // aqui registramos los contadores //

        contadorDescartes = pesoHuevo < 53 ? contadorDescartes + 1: contadorDescartes;

        contadorM = pesoHuevo >= 53 && pesoHuevo < 63 ? contadorM + 1: contadorM;

        contadorL = pesoHuevo >=63 && pesoHuevo < 73 ? contadorL + 1: contadorL;

        contadorXL = pesoHuevo >= 73 ? contadorXL + 1:contadorXL;
        
        /* (4ta.) Mostrando el avance de los contadores */

        console.log(`Contador de Descartes: ${contadorDescartes}`);
        console.log(`Contador de M: ${contadorM}`);
        console.log(`Contador de L: ${contadorL}`);
        console.log(`Contador de XL: ${contadorXL}`);

        /* (5ta.) Preguntarle al operador si desea continuar */

        continua = prompt(`Desea continuar cargando ?. (SI/NO)`);

    }

    /* (6ta.) Aqui vamos a calcular las Proporciones o Porcentajes */

    let porcentajeDescartes = 0;
    let porcentajeM = 0;
    let porcentajeL = 0;
    let porcentajeXL = 0;

    porcentajeDescartes = (contadorDescartes / contadorHuevos)*100;

    porcentajeM = (contadorM / contadorHuevos) * 100;

    porcentajeL = (contadorL / contadorHuevos) * 100;

    porcentajeXL = (contadorXL / contadorHuevos) * 100;

    console.log(`Porcentaje Descartes: ${porcentajeDescartes}`);
    console.log(`Porcentaje M: ${porcentajeM}`);
    console.log(`Porcentaje L: ${porcentajeL}`);
    console.log(`Porcentaje XL: ${porcentajeXL}`);


    console.log(`FINALIZAMOS !!!.`);

   
}