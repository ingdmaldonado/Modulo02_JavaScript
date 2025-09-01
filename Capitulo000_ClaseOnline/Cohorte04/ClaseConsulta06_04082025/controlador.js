

/* Un vector es una
estructura de datos lineal en memoria (RAM)
que nos permite alojar multiples datos
que se pueden acceder y manipular con el mismo
nombre */

const sueldosDeJubilados = [500000,350000,480000,1200000,450000];

// este seria un ejemplo de un vector vacio //
const vectorVacio = [];

/* crearme una funcion que se llame 


    const a = (parametro1,parametro2, ....)=>{return };

    Si y solo si:

        - la función recibe 1 solo parametro ()
        - si en el cuerpo de la función hay una sola sentencia puedo obviar los {}
        - si la función tiene 1 sola instrucción. no es necesario poner la palabra return

*/

const fnCuadrado = (numero)=>
    {
        let auxiliar = 0;
        auxiliar = numero * numero;
        return auxiliar;
    }

const fnCuadrado2 = numero => numero * numero;


window.addEventListener("load",()=>
{

    // generar una referencia desde javaScript => objeto visual //
    const idBtnPrueba = document.querySelector("#idBtnPrueba");


    /* delegación de eventos y una función que se
    la denomina como función callBack */

    idBtnPrueba.addEventListener("click",()=>{

        console.log(`me estan haciendo click`);

    })



    console.log(`La aplicación está corriendo`);

    /* 1ro) mostrar todo el vector completo */

    console.log(sueldosDeJubilados);

    /* 2do) Vamos a mostrar como acceder a un elemento
    especifico del vector */

    console.log(sueldosDeJubilados[2]);

    /* 3ro) Si quiero cambiar un valor */

    sueldosDeJubilados[2] = 555678;

    console.log(sueldosDeJubilados[2]);

    /* 4to) Repaso de los metodos de manipulación 
    
        inserción (por adelante, por dentras)
        eliminacion (por delante, por atras)
    */

    // insercion de un elemento por atras //

    sueldosDeJubilados.push(2000000);
    
    // insertar al principio 

    sueldosDeJubilados.unshift(450000)
    sueldosDeJubilados.unshift(680000);
    sueldosDeJubilados.unshift(978000);

    console.log(sueldosDeJubilados);

    // eliminar por adelante por adelante shift //

    let primerSueldo = sueldosDeJubilados.shift();

    console.log(primerSueldo);
    console.log(sueldosDeJubilados);

    // eliminar el ultimo elemento pop //

    let ultimoElemento = sueldosDeJubilados.pop();

    console.log(ultimoElemento);

    console.log(sueldosDeJubilados);

    /* recorrido tradicional con for 
    
        ventajas 1 => puedo recorrer los elementos
        no necesariamente de forma consecutiva.
        es decir, puedo ir saltando de a 2.

        ventaja 2 => es que puedo salir del recorrido
        en el momento que quiera con un break;

            => lo compenso con un metodo que se llama find()

        desventaja 1: No sirve, cuando en el recorrido
        del vector, estoy agregando o quitando elementos
        de la misma estructura vectorial.

    
    */

    for(let indice = 0; indice < sueldosDeJubilados.length;indice = indice + 1)
    {
        console.log(`elemento ${indice} valor: ${sueldosDeJubilados[indice]}`);       

    }

    console.log("--------------------------------------");

    /**********************************************/
    /* LAS PARTICULARIDADES DE LAS ARROW FUNCTION */
    /**********************************************/

    console.log(fnCuadrado(7));

    console.log(fnCuadrado2(7));


     /* funciones callBack 
    
        En el concepto de funciones callBack hay dos estructuras
        de funciones necesarias.

        1 => función fnLlamadora

        2 => función callBack ó función llamada
        
        la función (1) llamadora. es una función que
        puede recibir como parametro otra función 
        y ejecutarla dentro del cuerpo de su función.
            
    */


    /*
        ventaja1 => se asegura de recorrer todos los elementos
        aunque durante el recorrido yo vaya agregando o quitando
        elementos del vector de forma dinamica. 

        desventaja1 => si o si, recorre todos los elementos.


    */

    console.log(`------ recorrido for each 1 --------`);

    sueldosDeJubilados.forEach((elemento,indice)=>
        {
            console.log(`indice: ${indice} - elemento: ${elemento}`);
        })

    
    console.log(`------ recorrido for each 2 --------`);

    sueldosDeJubilados.forEach(elemento => console.log(elemento));

    console.log(`------ recorrido for each 3 --------`);

    /* porque en el recorrido, en la iteración
    el nombre de ese parametro, me da una idea, 
    de lo que estoy tratando dentro del ciclo iterativo 
    
        CARGA SEMANTICA FUERTE

    */

    sueldosDeJubilados.forEach(sueldo =>{

        let aumento = sueldo * 20 / 100;

        console.log(`sueldo:= ${sueldo} aumento:= ${aumento}`);

    })

})