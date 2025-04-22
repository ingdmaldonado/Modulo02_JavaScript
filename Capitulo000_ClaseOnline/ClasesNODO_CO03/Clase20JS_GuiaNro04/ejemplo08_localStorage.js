

/*
Guía práctica: Uso de localStorage en JavaScript
Almacenar y recuperar datos usando la API del navegador.
Todos los valores se guardan como strings.
Para almacenar objetos o arrays, se debe usar JSON.stringify() al guardar y JSON.parse() al recuperar.
*/

window.addEventListener("load",()=>{

    /*
    (1) Guardar un objeto en localStorage
    */
    const usuario = {
        nombre: "Laura",
        edad: 27,
        logueada: true
    };
    localStorage.setItem("usuario", JSON.stringify(usuario));
    console.log("Usuario guardado en localStorage");
  
    /*
    (2) Leer el objeto desde localStorage
    */
        const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
        console.log("Nombre del usuario:", usuarioGuardado.nombre);
        console.log("¿Está logueada?", usuarioGuardado.logueada);
  
    /*
    (3) Guardar un array de objetos en localStorage
    */

    const productos = [
        { nombre: "Notebook", precio: 250000 },
        { nombre: "Tablet", precio: 120000 }
    ];
    localStorage.setItem("productos", JSON.stringify(productos));
    console.log("Productos guardados");
    
    /*
    (4) Leer el array de objetos y mostrar sus nombres
    */
    const productosGuardados = JSON.parse(localStorage.getItem("productos"));
    productosGuardados.forEach(producto => {
        console.log("Producto:", producto.nombre);
    });
  
  /*
  Ejercicio:
  Dado el siguiente objeto cliente, guardalo en localStorage bajo la clave "clienteApp".
  Luego, recuperalo y mostrá su nombre y edad por consola.
  (No mostrar la solución aquí).
  */
  const cliente = {
    nombre: "Valeria",
    edad: 35,
    suscripcion: "Premium"
  };


})

