

/*
(1) Uso de Spread Operator para clonar objetos
Permite crear una copia superficial de un objeto.
*/

/*
Ejemplo:
Se tiene un objeto producto. Se desea crear una copia modificando solo una propiedad.
*/
const producto = {
    nombre: "Teclado",
    precio: 5000,
    stock: 30
  };
  const productoActualizado = { ...producto, stock: 25 };
  console.log(producto);
  console.log(productoActualizado);
  
  /*
  Ejercicio:
  Dado el siguiente objeto, creá una copia llamada usuarioInactivo que mantenga el mismo contenido pero con la propiedad activo igual a false.
  (No mostrar la solución aquí).
  */
  const usuario = {
    id: 1,
    nombre: "Julián",
    activo: true
  };
  
  /*
  (2) Uso de Spread Operator para combinar objetos
  Se pueden fusionar dos objetos en uno nuevo.
  */
  
  /*
  Ejemplo:
  Se tienen los datos personales y laborales de una persona. Se desea combinarlos.
  */
  const datosPersonales = { nombre: "Lucía", edad: 28 };
  const datosLaborales = { puesto: "Diseñadora UX", seniority: "Semi Senior" };
  const perfilCompleto = { ...datosPersonales, ...datosLaborales };
  console.log(perfilCompleto);
  
  /*
  Ejercicio:
  Dado los siguientes objetos, combiná ambos en uno solo llamado datosCompletos.
  (No mostrar la solución aquí).
  */
  const contacto = { email: "marcos@example.com", telefono: "123456789" };
  const ubicacion = { ciudad: "Córdoba", pais: "Argentina" };
  
  /*
  (3) Uso de Spread Operator en arrays
  Permite clonar o combinar arrays.
  */
  
  /*
  Ejemplo:
  Se tiene un array de productos y se desea agregar uno nuevo sin modificar el original.
  */
  const productos = ["mouse", "teclado", "monitor"];
  const nuevosProductos = [...productos, "impresora"];
  console.log(productos);
  console.log(nuevosProductos);
  
  /*
  Ejercicio:
  Dado los siguientes arrays, unilos en uno nuevo llamado todos.
  (No mostrar la solución aquí).
  */
  const backend = ["Node", "Express"];
  const frontend = ["React", "Vue"];

  