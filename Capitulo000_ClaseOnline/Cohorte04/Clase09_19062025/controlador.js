

/* una función es un subproceso. que 
se declara con la palabra function
a su vez lleva un nombre y entre parentesis
lleva el o los parametros de entrada 

    function
    nombre
    () => los parametros del proceso.

*/

/* Definición de la función */

function cuadradoDeUnNumero(numero)
{
    let auxiliar = numero * numero;

    return auxiliar; // porque marca el fin de la función e indica que es lo que devuelve.

}



{
    console.log(`la aplicación está corriendo !!!`);

    /* esto es código de ejemplo. */

    let numero1 = 10;

    let numero2 = 12;

    let numero3 = 9;

    // calculando el cuadrado 1 //
    let cuadrado1 = numero1 * numero1; 
    console.log(cuadrado1);

    // calcular el cuadrado de 12 //
    let cuadrado2 = numero2 * numero2;
    console.log(cuadrado2);


    // Invocando = llamar por su nombre y le paso los parametros que necesita //
   
    let cuadrado3 = cuadradoDeUnNumero(2);
    console.log(cuadrado3);

    let cuadrado4 = cuadradoDeUnNumero(numero3);
    console.log(cuadrado4);

}

/************ DOS MOMENTOS **************/

/* DEFINICIÓN DE LA FUNCIÓN: 

    - cuando la estoy creando, le asigno un nombre y le asigno
    los parametros de entrada, detalle las instrucciones del cuerpo
    y MUY IMPORTANTE le INDICO cual es el valor que debe retornar

*/

/* INVOCACIÓN O LLAMADA DE LA FUNCIÓN:

    ES EL momento cuando comienzo a utilizar la función.

    cuando invoco una función, lo hago llamandola por el nombre

*/

/* LA SEPARACIÓN DE FUNCIONES Y RESPONSABILIDADES 

    1 PERSONA QUE SE ENCARGA DE TOMAR LOS PEDIDOS 

    2 PERSONA O LAS PERSONAS EN LA COCINA QUE SE ENCARGAN DE REALIZAR LOS PEDIDOS

        - le preocupa tener todos los viveres, ingredientes para la cocinar todos los pedidos
        - conseguir el pan, verdras, ....

        LO QUE NO LE PREOCUPA
        - no le preocupa para donde va el envío ?.
        - no le preocupa como se realizo el pago ?.
        - no le preocupa si a fuera esta lloviendo, corre viento o esta muy frio.
        - no le preocupa si la moto tiene combustible o no tiene combustible

    3 REPARTE 

        - no le importa como y porque medio pago 
        - tampoco le preocupa si la cocina tiene todos los ingredientes
        - 

        - si la moto esta condiciones
        - si tengo el seguro pagado
        - la distancia

*/

/* 
    1) RECEPCION DE PEDIDOS:  Toma el pedido

    2) ELABORACION DE PEDIDO: La comanda => La cocina toma el pedido y cominza la elaboración

        salida de elaboración pedido

    3) ENVIO DE PEDIDO: se encarga de recibir los pedidos del area
    de ELABORACIÓN y los transporta hasta su lugar de destino.

    CAJA NEGRA: ese proceso es aislado. 


*/