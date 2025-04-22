
// Esperamos que la ventana (y todo el DOM) esté completamente cargada
window.addEventListener("load", () => {

    // Variable donde se almacenará el contenido del archivo una vez leído
    let contenidoArchivo = "";
  
    // Seleccionamos el input de archivo
    const inputArchivo = document.querySelector("#archivoTxt");
  
    // Seleccionamos el botón que inicia el procesamiento
    const botonProcesar = document.querySelector("#btnProcesar");
  
    // Seleccionamos el contenedor donde se mostrarán los errores o resultados
    const contenedorErrores = document.querySelector("#errores");
  
    // Evento que se dispara cuando el usuario selecciona un archivo
    inputArchivo.addEventListener("change", (e) => {
      const archivo = e.target.files[0]; // Obtenemos el primer archivo seleccionado
  
      if (!archivo) {
        contenedorErrores.textContent = "No se seleccionó ningún archivo.";
        return; // Salimos si no hay archivo
      }
  
      const lector = new FileReader(); // Creamos un lector de archivos
  
      // Evento que se dispara cuando se termina de leer el archivo
      lector.onload = (evento) => {
        contenidoArchivo = evento.target.result; // Guardamos el contenido leído
        contenedorErrores.textContent = ""; // Limpiamos cualquier error previo
      };
  
      lector.readAsText(archivo); // Leemos el archivo como texto plano
    });
  
    // Evento que se dispara cuando el usuario hace clic en el botón "Procesar"
    botonProcesar.addEventListener("click", () => {
      // Si aún no se cargó el contenido, avisamos al usuario
      if (!contenidoArchivo) {
        contenedorErrores.textContent = "Primero seleccioná un archivo.";
        return;
      }
  
      const errores = []; // Array para acumular mensajes de error
      const lineas = contenidoArchivo.split("\\n"); // Separamos el contenido por líneas
  
      // Recorremos cada línea del archivo
      lineas.forEach((linea, index) => {
        try {
          const [cuit, nombre] = linea.trim().split(";"); // Separamos CUIT y nombre
  
          // Verificamos si faltan datos
          if (!cuit || !nombre) {
            throw new Error(`Línea ${index + 1}: formato incompleto.`);
          }
  
          // Verificamos que el CUIT tenga 11 caracteres numéricos
          if (cuit.length !== 11 || isNaN(cuit)) {
            throw new Error(`Línea ${index + 1}: CUIT inválido (${cuit}).`);
          }
  
          // Si todo está bien, mostramos el resultado por consola
          console.log(`✔️ Línea ${index + 1}: CUIT = ${cuit}, Nombre = ${nombre}`);
  
        } catch (error) {
          errores.push(error.message); // Guardamos el mensaje de error
        }
      });
  
      // Mostramos todos los errores en pantalla, o un mensaje de éxito si no hubo errores
      contenedorErrores.innerHTML = errores.length
        ? errores.map(msg => `<div>❌ ${msg}</div>`).join("")
        : "<div style='color:green;'>Todos los datos fueron procesados correctamente.</div>";
    });
  });
  