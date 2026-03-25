




/* 
REPASO DE TODO LO QUE ES ARROW FUNCTION => FUNCIONES FLECHA

    ()=>{}  esto es la estructura básica de una arrow function

        1 - parentesis para los parametros
        2 - el o los parametros separados por , 
        3 - la flecha o arrow
        4 - llaves para el cuerpo de la funcion
        5 - dentro del cuerpo la palabra return
*/

/* Ejemplo de definicion 1 => es una arrow function COMPLETA */
const Cuadrado1 = (numero)=>
    {
        return numero * numero;
    }

/* Ejemplo de definicion 2 => es una arrow function COMPLETA 

    calcule el descuento de aportes jubilatorios de un empleado
    determinado, recibiendo como parametro el sueldo bruto,
    va a recibir el % a descontar
*/

const calcularSueldoNeto = (sueldo,porcentaje) =>
{
    return sueldo - (sueldo * porcentaje)/100;

}

/* 
PARTICULARIDADES DE LAS ARROW FUNCTION 

    REACT // ANGULAR // EXPRESS // 
*/

/* PARTICULARIDAD 1: 

    - solamente cuando se recibe un solo parametro se puede obviar los ()

    - solamente cuando tiene una sola instrucción en el cuerpo se puede obviar las {}

    - solamente cuando tiene una sola instrucción en el cuerpo, se puede inferir que
    tiene implícito un return.

*/

const Cuadrado2 = numero => numero * numero;




/* PROGRAMA PRINCIPAL */
{
    // Ejemplo de invocacion 1 - arrow function
    let resultado1 = Cuadrado1(2);
    console.log(resultado1);

    // Ejemplo de invocacion 2 - arrow function

    let sueldoBruto = 1250000;
    let porcentajeDeDescuento = 7;

    let resultado2 = calcularSueldoNeto(sueldoBruto,porcentajeDeDescuento);
    console.log(resultado2);

    // Ejemplo de invocacion 3 - arrow function corta

    let resultado3 = Cuadrado2(-7);
    console.log(resultado3);

    

}
