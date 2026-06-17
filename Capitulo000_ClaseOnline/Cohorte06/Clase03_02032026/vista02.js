
/*
    Un restaurante tiene que 
    facturar el importe del servicio
    y el 20% del servicio de mozo 
    siempre y cuando la compra sea
    menor a 100 dolares.
    
    
    si consumis menos de 100 dolares => no pagas el 20% de servicio
    si consumis 100 o mas de 100 => pagas el 20% de servicio

*/

{

    let importeConsumicion = 0;

    importeConsumicion = Number(prompt(`Ing. Importe Consumición`));

    let servicioDeMeza = importeConsumicion >= 100 ? (importeConsumicion * 20)/100 : 0;

    let totalAPagar = importeConsumicion + servicioDeMeza;

    console.log(importeConsumicion,servicioDeMeza,totalAPagar);

    /* Operador Ternario sirve para:

        - inicializar variables numericas condicionadas.

        - que no tiene {} => 

        - no la recomiendo para estructuras condicionales ANIDADAS
    */

}