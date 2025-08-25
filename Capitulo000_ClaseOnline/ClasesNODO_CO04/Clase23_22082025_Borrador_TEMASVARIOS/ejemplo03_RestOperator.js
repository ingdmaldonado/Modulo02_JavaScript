
// ejemplo03_RestOperator.js
window.addEventListener("load", () => {

  /* 
    REST OPERATOR (...)
    -------------------
    Idea central:
    - "Agrupa el resto" de elementos/propiedades en una sola variable.
    - No confundir con SPREAD: SPREAD "expande", REST "agrupa".
    Casos clave (80% de uso real):
    1) Parámetros de función
    2) Destructuring de arrays
    3) Destructuring de objetos
  */

  /* ==========================================================
     1) REST en PARÁMETROS DE FUNCIÓN
     - Junta todos los argumentos extra en un array.
     - Uso típico: funciones que aceptan cantidad variable de argumentos.
  ========================================================== */
  function sumar(...numeros) {
    // 'numeros' es un ARRAY con todos los argumentos recibidos
    return numeros.reduce((acc, n) => acc + n, 0);
  }
  console.log("REST función:", sumar(1, 2, 3, 4)); // 10

  /* ==========================================================
     2) REST en ARRAY DESTRUCTURING
     - Toma los primeros elementos y agrupa "el resto" en otro array.
  ========================================================== */
  const valores = [10, 20, 30, 40, 50];
  const [a, b, ...restoValores] = valores;
  // a=10, b=20, restoValores=[30, 40, 50]
  console.log("REST array:", a, b, restoValores);

  /* ==========================================================
     3) REST en OBJECT DESTRUCTURING
     - Toma algunas propiedades y agrupa "las restantes" en otro objeto.
     - Muy usado para separar "lo que necesito" de "todo lo demás".
  ========================================================== */
  const persona = { id: 7, nombre: "Ana", edad: 25, ciudad: "Catamarca" };
  const { nombre, ...restoPersona } = persona;
  // nombre="Ana", restoPersona={ id:7, edad:25, ciudad:"Catamarca" }
  console.log("REST objeto:", nombre, restoPersona);

});
