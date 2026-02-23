
/* Particularidades de
las Arrow Function */

/* 

()=>{}

1ra) Si una arrow
function recibe un solo parametro
se pueden quitar los parentesis ()
de los parametros.
Si, solo si. recibe uno solo.
    () 

2da) Que si la función en su cuerpo
tiene una sola instrucción. se pueden 
obviar las llaves del cuerpo 
    {}

3ra) Si la función tiene una sola instrucción
se puede obviar la palabra return
*/

const fnCuadrado = (numero) => 
    {
        return numero * numero
    };

const fnCuadrado3 = numero => numero * numero;

/* parametro1=>instruccion1; */ 

/* Ejemplo 01 => particularidad 1
solamente cuando recibe un solo parametro */

const fnCuadrado2 = numero => {return numero * numero};

/* Ejemplo 02 => particularidad 2 */

const fnSaludar = nombre => {console.log(`hola como estás ?. ${nombre}`)};

const fnSaludar2 = nombre => console.log(`hola como estás ?. ${nombre}`)

/* Ejemplo 03 => particularidad1, la particularidad 2, y la 3 */



/* 
    - 1) quitamos los () del parametro
    - 2) tiene una sola instrucción podemos quitar las llaves {}
    - 3) quitar la palabra return
*/


window.onload = ()=>{

    console.log("running");

    let resultado1 = fnCuadrado(5);
    console.log(resultado1);

    let resultado2 = fnCuadrado2(5);
    console.log(resultado2);

    fnSaludar(`Ever Martin`);

    fnSaludar(`Juan Nugues`);

    fnSaludar2(`Federico Moyetta`);

    const resultado3 = fnCuadrado3(5);
    console.log(resultado3);


}