

/* FUNCIONES 

    - es un subproceso, un conjunto de instrucciones
    que están aisladas bajo un nombre, que tienen 
    como objetivo resolver algo específico.

    - son bloques de código de orden superior.
    es decir, el navegador primero las declada
    y define a las funciones y luego sigue
    con el resto del programa.
*/

/* definir una función que se llama
cuadrado, que recibe 1 solo parametro de entrada
y que dentro del cuerpo de la función. lo que 
hace es elevar al cuadrado el numero. y 
devolverlo 

las funciones, desconocen totalmente lo que
sucede en el resto del programa principal
o en el resto de los procedimientos y funciones.

es un proceso específico y aislado.

*/

/* CUANDO ALGO DEVUELVE UN VALOR ES UNA FUNCIÓN */

/* defino la función:

    function => que estoy creando una función
    nombre de la función => como lo identifico
    parametros de entrada => dentro de parentesis y separados por ,
*/

function CuadradoDeUnNumero(numero)
{
    let resultado = numero * numero;
    return resultado; // return
}

/* CUANDO ALGO NO LO DEVUELVE. ES UN PROCEDIIENTO */

function saludarAlUsuario(p1Nombre,p2Apellido)
{
    console.log(`Bienvenido al Sistema ${p1Nombre} ${p2Apellido}`);
}

function promedioDeTresNumeros(numero1,numero2,numero3)
{

    console.log(`numero 1 = ${numero1}`);
    console.log(`numero 2 = ${numero2}`);
    console.log(`numero 3 = ${numero3}`);

    let sumaDeTodosLosNumeros = 0;
    sumaDeTodosLosNumeros = numero1 + numero2 + numero3;
    let promedio = 0;
    promedio = sumaDeTodosLosNumeros / 3;

    return promedio;
}


/* bloque principal de código ó
programa principal */
{
    console.log("funcionando");

    let numero = 7;

    console.log(CuadradoDeUnNumero(2));

    console.log(CuadradoDeUnNumero(2+2));

    saludarAlUsuario("DANIEL","MALDONADO");

    saludarAlUsuario("NATALIA","RODRIGUEZ");

    /* ejemplo 01 - esto sera el ejemplo de la invocación
    del promedio de tres numeros */

    let resultado1 = 0;

    resultado1 = promedioDeTresNumeros(10,12,27);

    console.log(resultado1);

    /* ejemplo 02  - en este caso, le voy a pasar
    como parametro variables */

    let numeroa = 20;
    let numerob = 40;
    let numeroc = 47;

    let resultado2 = promedioDeTresNumeros(numeroa,numerob,numeroc);

    let resultado3 = promedioDeTresNumeros(2+8,7+15,numeroc);

    let resultado4 = promedioDeTresNumeros(2,4);

    console.log(resultado2);

    console.log(resultado3);

    console.log(resultado4);

    let variablexx;

    console.log(variablexx);

    /********************************************/

    let resultado5 = 2 * CuadradoDeUnNumero(2);
    console.log(resultado5);

    let resultado6 = (-1)*CuadradoDeUnNumero(CuadradoDeUnNumero(2));
    console.log(resultado6);

    let resultado7 = 0;

    resultado7 = CuadradoDeUnNumero(CuadradoDeUnNumero(3) + 3 * (promedioDeTresNumeros(22,25,44)));
    console.log(resultado7);

    /********************************************/

}

