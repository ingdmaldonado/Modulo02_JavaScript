
window.addEventListener("load",()=>
  {

  /* =========================================================================
   EJEMPLOS DESTRUCTURING — con aclaraciones docentes
   Objetivo: que no confundan “destructuring” con “crear arrays/objetos”.
   Regla:
   - OBJETOS  → { }  (se extrae por NOMBRE de propiedad)
   - ARRAYS   → [ ]  (se extrae por POSICIÓN/ÍNDICE)
   Importante: destructuring NO crea nuevos arrays/objetos; solo crea VARIABLES.
   ========================================================================= */

/* -------------------------------------------------------------------------
   1) OBJETO: destructuring básico
   Idea: extraer variables desde las PROPIEDADES del objeto usando { }.
   No se crea ningún objeto nuevo; solo variables sueltas.
   ------------------------------------------------------------------------- */
const persona = { nombre: "Ana", edad: 25, ciudad: "Madrid" };
const { nombre, edad } = persona;
console.log("1)", nombre, edad); // "Ana", 25

/* -------------------------------------------------------------------------
   2) OBJETO: alias (renombrar variables al extraer)
   Idea: la propiedad 'descripcion' se guarda en la variable 'detalle'.
   ------------------------------------------------------------------------- */
const producto = { id: 1, descripcion: "Teclado", precio: 3000 };
const { descripcion: detalle, precio: costo } = producto;
console.log("2)", detalle, costo); // "Teclado", 3000

/* -------------------------------------------------------------------------
   3) OBJETO: valores por defecto
   Idea: si 'rol' no existe en el objeto, se usa "invitado".
   ------------------------------------------------------------------------- */
const usuario = { nombre: "Carlos" };
const { nombre: nombreUsuario, rol = "invitado" } = usuario;
console.log("3)", nombreUsuario, rol); // "Carlos", "invitado"

/* -------------------------------------------------------------------------
   4) OBJETO anidado (simple)
   Idea: saco 'ciudad' desde un objeto interno 'direccion'.
   ------------------------------------------------------------------------- */
const empleado = {
  id: 10,
  nombre: "Laura",
  direccion: { ciudad: "Barcelona", pais: "España" }
};
const { nombre: nombreEmpleado, direccion: { ciudad } } = empleado;
console.log("4)", nombreEmpleado, ciudad); // "Laura", "Barcelona"

/* -------------------------------------------------------------------------
   5) ARRAY: destructuring básico por POSICIÓN
   Idea: extraer el 1° y 2° elemento con [ ].
   OJO: NO se está creando un array; solo variables sueltas.
   ------------------------------------------------------------------------- */
const colores = ["rojo", "verde", "azul"];
const [primero, segundo] = colores;
console.log("5)", primero, segundo); // "rojo", "verde"

/* -------------------------------------------------------------------------
   6) ARRAY: “saltear” posiciones
   Idea: dejar un hueco para omitir valores. NO crea un vector nuevo.
   Confusión común: esto NO define un array; crea variables sueltas.
   ------------------------------------------------------------------------- */
const [ , segundoColor ] = colores; // toma el índice 1 → "verde"
console.log("6)", segundoColor); // "verde"

/* -------------------------------------------------------------------------
   6B) CONTRASTE: acá SÍ creo un array nuevo
   Idea: a diferencia de destructuring, esto construye un NUEVO vector.
   ------------------------------------------------------------------------- */
const nuevoVector = [colores[1]]; // ["verde"]
console.log("6B)", nuevoVector); // ["verde"]

/* -------------------------------------------------------------------------
   7) ARRAY: valor por defecto
   Idea: si falta el segundo elemento, usar "naranja".
   ------------------------------------------------------------------------- */
const frutas = ["manzana"];
const [fruta1, fruta2 = "naranja"] = frutas;
console.log("7)", fruta1, fruta2); // "manzana", "naranja"

/* -------------------------------------------------------------------------
   8) VECTOR DE OBJETOS (combinado)
   Idea: [] para elegir el OBJETO por posición; {} para extraer propiedades.
   No se crea ningún array/objeto nuevo; solo variables sueltas.
   ------------------------------------------------------------------------- */
const usuarios = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Lucía" }
];
const [ , { nombre: nombreU2 } ] = usuarios; // toma el 2° objeto y saca 'nombre'
console.log("8)", nombreU2); // "Lucía"

/* -------------------------------------------------------------------------
   9) VECTOR de OBJETOS que contiene a su vez un VECTOR de OBJETOS
   Idea: caso realista (jerárquico). Mezcla [] y {} sin crear estructuras nuevas.
   ------------------------------------------------------------------------- */
const paises = [
  {
    nombre: "Argentina",
    ciudades: [
      { nombre: "Buenos Aires", poblacion: 3000000 },
      { nombre: "Córdoba", poblacion: 1500000 }
    ]
  },
  {
    nombre: "España",
    ciudades: [
      { nombre: "Madrid", poblacion: 3200000 },
      { nombre: "Barcelona", poblacion: 1600000 }
    ]
  }
];

// Extraigo:
// - del primer país: su nombre y la 1ª ciudad
// - del segundo país: su nombre y la 2ª ciudad
const [
  { nombre: pais1, ciudades: [ { nombre: ciudad1 } ] },
  { nombre: pais2, ciudades: [ , { nombre: ciudad2 } ] }
] = paises;

console.log("9)", pais1, ciudad1); // "Argentina", "Buenos Aires"
console.log("9)", pais2, ciudad2); // "España", "Barcelona"

/* -------------------------------------------------------------------------
   10) Destructuring en PARÁMETROS de función
   Idea: muy usado en proyectos. Se pasan objetos y la función extrae solo lo que necesita.
   Ejemplo con:
   - Un objeto que ya existe
   - Un objeto literal creado "en caliente"
   ------------------------------------------------------------------------- */

const mostrarCliente = ({ id, nombre }) => {
  console.log(`10) Cliente #${id}: ${nombre}`);
};

// Caso A: invocando con un objeto ya existente
const clienteExistente = { id: 201, nombre: "María", saldo: 8000 };
mostrarCliente(clienteExistente); 


// Caso B: invocando con un objeto literal creado en la invocación
mostrarCliente({ id: 202, nombre: "José", saldo: 12000 });





})