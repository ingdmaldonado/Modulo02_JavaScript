
// ejemplo04_JSON.js
window.addEventListener("load", () => {

  /* 
    JSON (JavaScript Object Notation)
    ---------------------------------
    Es el formato estándar para intercambiar datos entre sistemas.
    JSON es texto, no un objeto. 
    Métodos clave en JS:
      - JSON.stringify(objeto)  => convierte objeto JS en STRING JSON
      - JSON.parse(stringJSON)  => convierte STRING JSON en objeto JS
  */

  /* ==========================================================
     1) OBJETO a JSON (stringify)
     ========================================================== */
  const persona = { id: 1, nombre: "Juan", edad: 30 };
  const personaJSON = JSON.stringify(persona);
  // personaJSON ahora es un STRING en formato JSON
  console.log("Objeto a JSON:", personaJSON);
  // Resultado: {"id":1,"nombre":"Juan","edad":30}

  /* ==========================================================
     2) JSON a OBJETO (parse)
     ========================================================== */
  const cadena = '{"id":2,"nombre":"Ana","edad":25}'; 
  const objeto = JSON.parse(cadena);
  // objeto ahora es un verdadero objeto JS
  console.log("JSON a Objeto:", objeto, objeto.nombre);

  /* ==========================================================
     3) CASO PRÁCTICO
     Guardar y recuperar datos del localStorage
     - localStorage solo guarda STRINGS, por eso usamos JSON
  ========================================================== */
  const productos = [
    { id: 1, nombre: "Mouse", precio: 100 },
    { id: 2, nombre: "Teclado", precio: 200 }
  ];

  // Guardar (convertir a JSON string antes)
  localStorage.setItem("productos", JSON.stringify(productos));

  // Recuperar (convertir de JSON string a objeto)
  const productosGuardados = JSON.parse(localStorage.getItem("productos"));
  console.log("Productos recuperados:", productosGuardados);

});
