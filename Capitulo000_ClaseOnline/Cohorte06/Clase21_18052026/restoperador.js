
/* 
    - Destructuring 
    - Spread Operator (despues del =)  = ...

        * propagación de elementos de un vector
        * propagación de atributos de un objeto

    - Rest Operador (antes del igual) ... = 

        * agrupador elementos de un vector
        * agrupar atributos de un objeto
        * es la unica forma de pasar múltiples parametros
        a una función


*/

{
    const IngresosEnero = [150000,250000,355000,777.77,555777.90];

    const IngresosFebrero = [277555.20,222888.40];

    /* aqui como el simbolo ... está del lado de
    la derecha del = esto es Spread Operator */
    
    const IngresosTotales = [...IngresosEnero,...IngresosFebrero];

    console.log(IngresosTotales);

    /* Rest operator => El resto de un Vector */

    const [unoDeEnero,,tresDeEnero,...restoDeEnero] = IngresosEnero;

    console.log(unoDeEnero);
    console.log(tresDeEnero);    
    console.log(restoDeEnero);

    const fnCalculePromedioDeNotas = (nota1,nota2,nota3) =>{

        return (nota1 + nota2 + nota3)/3;

    };

    /* Estoy haciendo la invocación de la función
    que me permite calcular el promedio de tres notas */

    let resultado1 = fnCalculePromedioDeNotas(9,7,8);
    console.log(resultado1);

    /* el Rest Operator en parametros de una función 
    
        los ... suspensivos en los parametros de una función
        le indican al motor javaScript que esa función puede
        recibir múltiples parametros y a todos esos parametros
        los va a agrupar en un solo nombre. ese nombre se va a
        llamar notas

    */

    const fnPromedioDeNotas = (...notas)=>{

        console.log(...notas);
        console.log(notas); // cuando yo necesite trabajar con todos esos parametros juntos

        let sumaTotal = 0;

        notas.forEach(nota =>{sumaTotal = sumaTotal + nota});

        return (sumaTotal/notas.length);

       

    };

    /* aqui estoy invocando una función que 
    recibe múltiples parametros -*/

    let resultado2 = fnPromedioDeNotas(10,9,7,8,5,10);
    
    console.log(resultado2)

}

/* 
    DESTRUCTURING
    SPREAD OPERATOR
    REST OPERATOR
*/