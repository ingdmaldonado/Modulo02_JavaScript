// Programa para cargar notas y clasificarlas

let seguir = true;
let errores = 0;

while (seguir) {

  let ingreso = prompt("Ingresá una nota (0 a 10):");

  // si cancela
  if (ingreso === null) {
    console.log("Se canceló la carga");
    break;
  }

  let nota = parseFloat(ingreso);

  // validación
  if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log("Nota inválida");
    errores++;

  } else {

    // clasificación
    if (nota <= 4) {
      console.log("Desaprobado");

    } else if (nota <= 7) {
      console.log("Aprobado");

    } else if (nota < 10) {
      console.log("Muy bueno");

    } else {
      console.log("Excelente");
    }
  }

  // seguir o no
  let resp = prompt("¿Querés seguir? (s/n)");

  if (!resp || resp.toLowerCase() !== "s") {
    seguir = false;
  }
}

// resumen final
console.log("---- RESUMEN ----");
console.log("Errores:", errores);
console.log("Fin");