
const notasAlumnos = [10,7,9,2,4,5,7,3];

window.addEventListener("load",()=>{

    console.log("aplicación corriendo");

    /* mostrar todo el vector */

    console.log(notasAlumnos);

    /* Ejemplo 1: recorrerlo al vector con forEach
    y dentro del forEach pongo una función
    callBack. 
    
        Si o si, necesita al menos 1
        parametro

        elemento

        elemento, indice
    
    */

    console.log(`....Este es el ejemplo 1 - forEach`)
    notasAlumnos.forEach((elemento,indice)=>
        {
            console.log(`valor: ${elemento} indice: ${indice}`);
        })

    /* Ejemplo 2: forEach con una arrow function 
    corta. y para que sea corta.

        recibir 1 solo parametro entrada => ()
        una sola instrucción en el cuerpo => {}
        si tiene una sola instrucción puedo no poner la palabra return

    */
    console.log(`....Este es el ejemplo 2 - forEach`)
    notasAlumnos.forEach(elemento => console.log(elemento));

    console.log(`....Este es el ejemplo 3 - forEach`)
    notasAlumnos.forEach(nota => console.log(nota));

    /* Ejemplo 04: metodo find . Funcion Completa */

    let Desaprobado = notasAlumnos.find((nota,indice)=>{
        if(nota < 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    })

    console.log("Ejemplo 04 - find ....");

    console.log(Desaprobado);

    /* Ejemplo 05: metodo find . Funcion Corta 
    

        recibe 1 solo parametro entrada => nota => me puedo obviar los ()

        Si el cuerpo de la función tiene una sola instrucción => puedo obviar las {} del cuerpo

        Si en el cuerpo de la función hay una sola instrucción puedo obviar la palabra return
    
    */

    console.log("Ejemplo 05 - find ....");

    let primerAprobado = notasAlumnos.find(nota => nota >= 7 && nota <= 8);

    console.log(primerAprobado);

    /* Ejemplo 06: Filter. que permite filtrar
    elementos que cumplan con la condición 
    que establezcamos dentro de la arrow function
    que se invoque como callBack */

    console.log("Ejemplo 06 - filter ....");

    let notasDesaprobadas = notasAlumnos.filter(nota => nota <= 3);

    console.log(notasDesaprobadas);

    /* Ejemplo 07: some. Determinar 
    si existe algún elemento dentro del vector
    que cumpla con una condición. 
    */
  
    console.log("Ejemplo 07 - some ....");
    let resultadoDeSome = notasAlumnos.some(nota => nota <= 3);

    console.log(resultadoDeSome);

    // en la evaluación existió algún desaprobado ?. //
    if(notasAlumnos.some(nota => nota <= 3))
    {
        console.log(`Si. hubo un alumno desaprobado`);
    }
    else
    {
        console.log(`No. no hubo ningún desaprobado`);
    }

    /* 1 HORA X DIA  = 15 minutos */

    /* 
    
        forEach
        find
        filter
        some
        every
    */

    /* Every => todos deben cumplir la condición.
    si hay uno que no cumple la condición. devuelve
    falso */

    console.log("Ejemplo 08 - every ....");

    let todosSonMayoresAUno = notasAlumnos.every(nota => nota >= 3);

    console.log(todosSonMayoresAUno);

    /* map => recorre los elementos del vector, aplicando
    una función callBack de transformación. sobre cada
    elemento aplica y transforma. 
    devuelve un vector totalmente nuevo
    */

    const preciosProductos = [15000,17000,22000,9500,35200,7800,23400,5200];

    /* recorremos el vector con la función map => TRANSFORMACIÓN
    y aplicamos una función callBack. y ese nuevo valor
    es el que saldra en el nuevo vector */

    console.log("Ejemplo 09 - map =>  ....");

    const preciosNuevos = preciosProductos.map(precio => precio * 1.15);

    console.log(preciosProductos);

    console.log(preciosNuevos);

    /* Ejemplo a Pedido de TOMAS !!!. 
    
    vamos a aplicar map => una función de transformación
    donde.

        A los productos cuyo valor sea menor a 10.000 => aplicamos el 100% aumento

        Al resto, le vamos a aplicar el 50% aumento
   
    */

    const preciosActualizados = preciosProductos.map(precio =>{

        if(precio < 10000)
        {
            return (precio *2); // aqui seria el doble
        }
        else
        {
            return (precio * 1.5); // aqui sería el 50%
        }       
    });
    
    console.log(preciosProductos);
    console.log(preciosActualizados);

    /* RESUMEN => CIERRE CLASE 
    
        forEach(fnCallBack) => Recorre todos

        find(fnCallBack) => Recorre todos hasta que encuentra el que cumple condicion

        filter(fnCallBack) => Devuelve un subconjunto de los que busca

        some(fnCallBack) => devuelve tru o false

        every(fnCallBack) => devuelve true si todos cumplen la condicion

        map(fnCallBack) => devuelve un vector previo aplicar una función de transformación.


        sort => ordenar
        reduce => contabilizacion y agrupación. informacion resumida.

    

    */
    

})