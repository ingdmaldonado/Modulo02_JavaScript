
/*
    Realizar un programa que permita el Ingreso de 2 (dos números)
    (A y B) utilizando variables y realice las
    siguientes operaciones.
        - Muestre la suma de ambos (A + B)
        - Muestre la resta (A – B)
        - Muestre el Producto de ambos (A * B)
        - Muestre el Cociente entre ambos (A / B)
    
    Nota: En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con el programa
*/
{
    console.log(`la aplicación está corriendo`);

    let a = 0; // declarar e inicializar en cero una variable
    let b = 0; // declarar e inicializar en cero una variable

    a = Number(prompt(`ingrese el valor de a: `));
    b = Number(prompt(`ingrese el valor de b: `));

    let suma = 0;
    let resta = 0;
    let producto = 0;
    let division = 0;

    suma = a + b; // aqui estamos haciendo la suma
    resta = a - b; // aqui le digo al programa que reste esas dos variables
    producto = a * b; // aqui multiplico las dos variables

    division = (b !== 0) ? a/b : 0;

    /* No se puede dividir por cero.
    eso genera matematicamente una
    INDETERMINACIÓN. => tiende a infinito
    
        numerador / denominador => no se puede dividir por cero

            significa que el denominador no puede ser CERO

            20/0
            40/0
            -100/0

            cualquierVariable/0
    */

    console.log(`N1: ${a} y N2: ${b} suma: ${suma} resta: ${resta} producto: ${producto} y disivion: ${division}`);

}

/* SISTEMAS QUE MANEJAN MUCHA
CANTIDAD DE INFORMACIÓN Y MANEJAMOS
MUCHAS OPERACIONES COMERCIALES
Y DE DINERO.

    calculo1 => calculo2 => calculo3 => ... calculon

    toda la secuencia de pasos tiene error.

    tengo que tratar de evitar.

        no se puede dividir por cero
        no se pueden sacar raices cuadradas de numeros negativos
*/