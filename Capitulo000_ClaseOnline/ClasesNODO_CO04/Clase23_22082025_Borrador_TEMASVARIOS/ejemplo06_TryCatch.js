
// ejemplo06_TryCatch.js
window.addEventListener("load", () => {

  /*
    ==========================================
    1) Manejo de error de sintaxis / referencia
       Caso típico: variable no definida.
    ==========================================
  */
  try {
    console.log(noExiste); // referencia a variable inexistente
  } catch (error) {
    console.error("Error atrapado:", error.message);
  }

  /*
    ==========================================
    2) Manejo de conversión de datos
       JSON.parse con un string mal formado.
    ==========================================
  */
  const textoIncorrecto = "{id:1, nombre:'Ana'}"; // JSON inválido
  try {
    const obj = JSON.parse(textoIncorrecto);
    console.log(obj);
  } catch (error) {
    console.error("Error al parsear JSON:", error.message);
  }

  /*
    ==========================================
    3) Uso de finally
       Siempre se ejecuta, ocurra o no el error.
    ==========================================
  */
  try {
    let numero = 10 / 0; // No es error en JS, devuelve Infinity
    console.log("Resultado:", numero);
  } catch (error) {
    console.error("Error en operación:", error.message);
  } finally {
    console.log("Bloque finally ejecutado (liberar recursos, cerrar conexión, etc.)");
  }

  /*
    ==========================================
    4) Lanzar un error propio con throw
       Muy usado para validar datos.
    ==========================================
  */
  function dividir(a, b) {
    if (b === 0) {
      throw new Error("No se puede dividir por cero");
    }
    return a / b;
  }

  try {
    let resultado = dividir(8, 0);
    console.log("Resultado división:", resultado);
  } catch (error) {
    console.error("Error en división:", error.message);
  }

});
