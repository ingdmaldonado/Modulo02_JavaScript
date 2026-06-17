import {productos} from "./modelo.js";

window.onload = ()=>{

    console.log("esta es la clase de hoy 04.05.2026");

    console.log("------- for Each Ejemplo 1--------");

    console.log(productos);

    // Esta seria la forma completa de invocar el forEach (item,indice) //
    productos.forEach((item,indice)=>{

        console.log(`Id:${item.id} - Nombre:${item.nombre}`);

    });

    /* 
        Esta sería la forma corta de hacer un forEach 

        1) no pasar el indice en la función callBack porque
        generalmente no lo necesito. 

        2) cuando hago la arrow function o funcion callBack
        el parametro de entrada generalmente es el nombre del
        vector en singular

        3) Trato en lo posible que la funcion callBack este
        expresada como arrow function y ademas, si puedo simplificarla
        MEJOR !!!.
            * que reciba un solo parametro => ()
            * si tiene una sola instrucción en el cuerpo puedo obviar el return 
            * si tiene una sola instrucción en el cuerpo puedo obviar {};
    
    */

    //productos.forEach((producto)=>{});

    console.log("------- for Each Ejemplo 2 --------");

    productos.forEach(producto => console.log(`ID: ${producto.id} - NOMBRE: ${producto.nombre}`));

    console.log("------- find forma larga --------");

    /* Busca un valor en el vector que cumpla con las condiciones
    de busqueda que uno determine dentro de la arrow funcion callBack */

    let producto1 = productos.find((producto)=>{

        if(producto.id === 5)
        {
            return true;
        }

    })

    if(producto1)
    {
        console.log(producto1);
    }
    else
    {
        console.log("producto no encontrado");
    }

    console.log("------- find forma corta --------");

    let producto2 = productos.find(producto=>producto.id === 7);

    if(producto2)
    {
        console.log(producto2);
    }

    console.log("------- find forma corta seleccion multiple --------");

    let producto3 = productos.find(producto => producto.precio > 11000);

    if(producto3)
    {
        console.log(producto3);
    }

    console.log("------- filter largo --------");

    let vectorDeProductos = productos.filter((producto)=>{

        if(producto.precio > 11000)
        {
            return true;
        }        
    });

    console.log(vectorDeProductos);

    console.log("------- filter corto --------");

    let vectorDeProductos2 = productos.filter(producto => producto.precio > 11000);

    console.log(vectorDeProductos2);
    
    console.log("------- some --------");

    /* Si alguno cumple con una condición . la función
    me devuelve true o false */

    let resultadoSome = productos.some(producto => producto.precio < 500);

    console.log(resultadoSome);

    /* every => si todos cumplen una condición, me devolverá
    true 
    
    every, some, filter, find son funciones de nivel superior
    que a dentro. reciben una funcion callBack siempre definida
    por el usuario.
    
    */

    console.log("------- every --------");

    let resultadoEvery = productos.every(producto => producto.precio > 900);

    console.log(resultadoEvery);



};