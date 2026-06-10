/////////////////////////////////////////////////////
// COHORTES
// datos de alumnos
/////////////////////////////////////////////////////

export const cohorte01 = [
  { dni: "12345678", nombre: "Juan", apellido: "Pérez", nota_final: 8 },
  { dni: "23456789", nombre: "Ana", apellido: "Gómez", nota_final: 6 }
];

export const cohorte02 = [
  { dni: "56789012", nombre: "Sofía", apellido: "Ramírez", nota_final: 9 }
];

export const cohorte03 = [
  { dni: "89012345", nombre: "Pedro", apellido: "Álvarez", nota_final: 10 }
];

export const cohorte04 = [
  { dni: "45678902", nombre: "Lucía", apellido: "Ortiz", nota_final: 7 }
];


// ejercicio 1 - mostrar alumnos

export const mostrarAlumnos = (cohorte) => {

    // recorrer el array
    cohorte.forEach(alumno => {

        // mostrar apellido y nombre
        console.log(`${alumno.apellido} ${alumno.nombre}`);

    });

};