
/* PARTICULARIDADES DE LAS ARROW FUNCTION */

/* (1ro) puedo guardar en constantes o
variables */

const Cuadrado = (numero)=> 
    {
        return numero * numero;
    };

/* PARTICULARIDAD 1 - Cuando una arrow function, recibe
un solo parametro de entrada 
se pueden obviar los () 
UNICAMENTE CUANDO RECIBE 1 SOLO PARAMETRO

    - no recibe ningun parametro ()
    - cuando recibe mas de un parametro (p1,p2)

*/


const Cuadrado2 = numero => {

    return numero * numero;

};


/* PARTICULARIDAD 2 - Cuando la función flecha
tiene una sola instrucción puedo obviar
los {} y puedo obviarme la palabra return 
*/

const Cuadrado3 = numero => numero * numero;



window.addEventListener("load",()=>
{

    console.log(`running`);

    /* arrow function completa ()=>{return} */
    let resultado1 = Cuadrado(7);
    console.log(resultado1);

    /* particularidad 1  parametro => {return} */

    let resultado2 = Cuadrado2(7);
    console.log(resultado2);

    /* particularidad 2 */

    let resultado3 = Cuadrado3(7);
    console.log(resultado3);

    

})