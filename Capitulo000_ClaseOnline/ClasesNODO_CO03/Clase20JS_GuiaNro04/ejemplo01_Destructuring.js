
/*
Guía práctica de Destructuring de Objetos en JavaScript
En esta guía se abordan exclusivamente los usos más comunes y relevantes del destructuring de objetos, tanto en desarrollo backend como en frontend con React. Cada sección incluye una explicación breve y ejercicios prácticos enfocados en situaciones reales.
*/

/***************************************************************
(1) Destructuring directo (uso común en funciones, loops, módulos)
Permite extraer propiedades directamente de un objeto y asignarlas a variables.
****************************************************************/

const usuario = { nombre: "Ana", edad: 25 };
const { nombre, edad } = usuario;
console.log(nombre); // "Ana"
console.log(edad);   // 25

/*
Ejercicio: Guia Nro. 04 - Ejercicio 01
Dado el siguiente objeto, extraé las variables descripcion, precio y stock usando destructuring y mostralas por consola.
*/

const producto = { descripcion: "Café en grano", precio: 3500, stock: 12 };

/*****************************************************************
(2) Renombramiento de variables (muy usado en funciones reutilizables)
Permite cambiar el nombre de la variable al extraerla del objeto.
******************************************************************/
const usuario2 = { nombre: "Ana", edad: 25 };
const { nombre: nombreUsuario } = usuario2;
console.log(nombreUsuario); // "Ana"

/*
Ejercicio: Guia Nro. 04 - Ejercicio 02
Dado el siguiente objeto, extraé la propiedad nombre y renombrala como nombreCliente. Mostralo por consola.
*/
const cliente = { nombre: "Laura", correo: "lau@example.com" };

/**************************************************************
(3) Valores por defecto
Evita errores cuando una propiedad no existe en el objeto.
**************************************************************/

const usuario3 = { nombre: "Carlos", edad: 40 };
const { telefono = "No disponible" } = usuario3;
console.log(telefono); // "No disponible"

/*
Ejercicio: Guia Nro. 04 - Ejercicio 03
Dado el siguiente objeto, extraé username y telefono (con valor por defecto "Sin teléfono"). Mostralos por consola.
*/
const usuario4 = { username: "juanma", email: "juanma@gmail.com" };

/*******************************************************************
(4) Destructuring en los parámetros de una función (muy común en React y backend)
********************************************************************/

function mostrarUsuario({ nombre, edad }) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}
mostrarUsuario({ nombre: "Florencia", edad: 29 });

/*
Ejercicio: Guia Nro. 04 - Ejercicio 04
Escribí una función mostrarProducto que reciba un objeto con las propiedades nombre y precio, y las muestre por consola usando destructuring en los parámetros.
*/

/******************************************************************
(5) Destructuring de objetos anidados
Muy útil cuando los objetos tienen estructuras más profundas.
*******************************************************************/
const config = {
  servidor: {
    host: "localhost",
    puerto: 3000
  }
};
const { servidor: { host, puerto } } = config;
console.log(host);
console.log(puerto);

/*
Ejercicio: Guia Nro. 04 - Ejercicio 05
Dado el siguiente objeto, extraé titular, nombre del banco y sucursal usando destructuring.
*/
const cuenta = {
  titular: "Lucía",
  banco: {
    nombre: "Banco Nación",
    sucursal: 1234
  }
};

/******************************************************************
(6) Destructuring combinado con arrays (útil en APIs, hooks, etc.)
******************************************************************/

const response = {
  estado: 200,
  data: [1, 2, 3]
};
const { estado, data: numeros } = response;
console.log(estado);
console.log(numeros);

/*
Ejercicio: Guia Nro. 04 - Ejercicio 06
Dado el siguiente objeto, extraé ok y renombrá resultados como datos. Mostralos por consola.
*/
const respuesta = {
  ok: true,
  resultados: ["A", "B", "C"]
};

/*******************************************************************
(7) Destructuring con props en React
********************************************************************/

function Saludo({ nombre, edad }) {
  console.log(`Hola ${nombre}, tenés ${edad} años.`);
}
Saludo({ nombre: "Sofía", edad: 22 });

/*
Ejercicio: Guia Nro. 04 - Ejercicio 07
Escribí un componente funcional Usuario que reciba nombre, email y edad por props usando destructuring directamente en los parámetros y muestre los datos en consola.
*/
