

let notaTrabajo = 0;
let cantidadErrores = 0;
let banderaCicloExterior = 1;

while (banderaCicloExterior == 1) {

    notaTrabajo = Number(prompt(`Ingrese la nota del trabajo:`));

    if (notaTrabajo >= 0 && notaTrabajo <= 4) {
        alert(`Trabajo Desaprobado`);
    }

    if (notaTrabajo > 4 && notaTrabajo <= 7) {
        alert(`Tabajo Aprobado`);
    }

    if (notaTrabajo > 7 && notaTrabajo < 10) {
        alert(`Tabajo MUY BUENO`);
    }

    if (notaTrabajo == 10) {
        alert(`Trabajo Exelente`);
    }

    if (notaTrabajo < 0 || notaTrabajo > 10) {
        cantidadErrores++;
        alert(`Nota Invalida`);
    }

    do {
        banderaCicloExterior = Number(prompt(`Desea Ingresar Una nota: 0) No , 1) Si`));

        if (banderaCicloExterior != 0 && banderaCicloExterior != 1) {
            alert(`Opcion Invalida`);
        }
    } while (banderaCicloExterior != 0 && banderaCicloExterior != 1)
}

alert(`Fin del Programa `);
console.log(`La cantidad de Errores por cargar notas Incorrectas es: ${cantidadErrores}`);











