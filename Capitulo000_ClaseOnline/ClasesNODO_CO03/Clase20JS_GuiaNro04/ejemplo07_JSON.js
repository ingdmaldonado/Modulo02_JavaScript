

/***************************************************************
Guía práctica: Convertir objetos a JSON y viceversa en JavaScript
****************************************************************/

/*
(1) Convertir objeto a JSON con JSON.stringify
*/
const producto = {
    nombre: "Auriculares",
    precio: 15000,
    disponible: true
  };
  const productoJSON = JSON.stringify(producto);
  console.log("Producto en formato JSON:", productoJSON);
  
  /*
  (2) Convertir cadena JSON a objeto con JSON.parse
  */
  const cadenaJSON = '{"nombre":"Auriculares","precio":15000,"disponible":true}';
  const productoObjeto = JSON.parse(cadenaJSON);
  console.log("Nombre del producto:", productoObjeto.nombre);
  console.log("Precio:", productoObjeto.precio);
  
  /*
  (3) Convertir un vector de objetos a JSON
  */
  const productos = [
    { nombre: "Monitor", precio: 45000 },
    { nombre: "Mouse", precio: 3500 },
    { nombre: "Teclado", precio: 7800 }
  ];
  const productosJSON = JSON.stringify(productos);
  console.log("Vector de productos en JSON:", productosJSON);
  
  /*
  (4) Convertir un JSON de un vector de objetos a vector JS
  */
  const datosRecibidos = '[{"nombre":"Monitor","precio":45000},{"nombre":"Mouse","precio":3500},{"nombre":"Teclado","precio":7800}]';
  const vectorProductos = JSON.parse(datosRecibidos);
  console.log("Productos recibidos:");
  vectorProductos.forEach(producto => {
    console.log(producto.nombre + " - $" + producto.precio);
  });
  
  /*
  Ejercicio:
  Dado el siguiente vector de objetos, convertí el vector a JSON y mostralo por consola.
  Luego, convertí ese JSON nuevamente a vector de objetos y mostrá solo los nombres por consola.
  (No mostrar la solución aquí).
  */
  const clientes = [
    { nombre: "Martina", edad: 26 },
    { nombre: "Pablo", edad: 34 },
    { nombre: "Julián", edad: 29 }
  ];
  