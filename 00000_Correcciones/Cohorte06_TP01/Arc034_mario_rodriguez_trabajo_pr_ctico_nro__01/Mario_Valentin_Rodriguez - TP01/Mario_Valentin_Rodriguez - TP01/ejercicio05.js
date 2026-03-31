/* Ejercicio Nro. 05: 

Estructuras Condicionales (if/else) 
Realizar un programa que permita introducir un valor (X) y determinar si el mismo es PAR ó IMPAR. 

*/

{
    let valor = 0;
    valor = Number(prompt(`Ingrese un valor numerico: `));
    console.log(`El valor ingresado es ${valor}`);

    if(valor % 2 === 0)
    {
        console.log(`El valor ${valor} es PAR`);
    }
    else{
        console.log(`El valor ${valor} es IMPAR`);
    }

} 