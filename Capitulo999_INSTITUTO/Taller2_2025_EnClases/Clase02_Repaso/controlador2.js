

// FUNCIONES - CLASICA //

/* function es palabra reservada
    el nombre de la función
() => parametros de entrada
{} => aqui dentro esta el cuerpo de la función 

Esto se comporta como CAJA NEGRA

es un proceso aislado, que lo único que hace 
es recibir como parametro de entrada un numero
y a partir de ese numero, calcular el cuadrado
y devolverlo a quien lo solicita.

    0) compras
    1) atiende los pedidos
    2) cocina => prepara la comida (CAJA NEGRA)

        - se despreocupa de las compras
        - se despreocupa quien hizo el pedido
        - se despreocupa quien y como se pago el producto
        - se despreocupa quien lo llevo
        - el tiempo de demora
        - 

    3) delivery => llevar la comida

*/

function CuadradoDeUnNumero(numero)
{
    let auxiliar = 0; // declaro e inicializo en cero
    auxiliar = numero * numero; // elevando al cuadrado el numero
    return auxiliar; // 
}

// aqui habrá un bloque de codigos que sera el programa principal
{
    

    // EJEMPLO DE DIFERENTES FORMAS DE INVOCACION O LLAMADO DE FUNCIONES //

    // Ejemplo 01 - lo llamo dentro de un console.log //
    console.log(`El Cuadrado de 5 es :`,CuadradoDeUnNumero(5));

    // Ejemplo 02 - guardo el resultado en una variable //

    let resultado = 0;

        /* para guardar el valor del resultado de una funcion dentro de una variable o constante
        esa función tiene que tener la palabra return */

    resultado = CuadradoDeUnNumero(7); // invocando y guardando el resultado en una variable
    console.log(resultado);

    // Ejemplo 03 - le paso como parametro una variable //

    let numeroX = 5;
    const numeroY = 4;

    let resultadoCuadrado = CuadradoDeUnNumero(numeroX);

    resultadoCuadrado = CuadradoDeUnNumero(numeroY);

    console.log(resultadoCuadrado)


    /* Ejemplo 04  las funciones me ayudan a 
    expresar complejas estructuras o ecuaciones
    matematicas. principalmente cuando los calculos
    son complejos */

    let x1 = 7;
    let x2 = -2;

    let resultadoEcuacion1 = 2 * CuadradoDeUnNumero(2) - 3*CuadradoDeUnNumero(x1);
    console.log(resultadoEcuacion1);

    let resultadoEcuacion2 = CuadradoDeUnNumero(CuadradoDeUnNumero(x1));
    console.log(resultadoEcuacion2);

    


}