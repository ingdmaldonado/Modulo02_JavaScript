// modelo.js

// Datos base: 4 cohortes
const cohorte01 = [
  { dni: "12345678", nombre: "Juan", apellido: "Pérez", nota_final: 8 },
  { dni: "23456789", nombre: "Ana", apellido: "Gómez", nota_final: 6 },
  { dni: "34567890", nombre: "Carlos", apellido: "López", nota_final: 5 },
  { dni: "45678901", nombre: "María", apellido: "Martínez", nota_final: 7 }
];

const cohorte02 = [
  { dni: "56789012", nombre: "Sofía", apellido: "Ramírez", nota_final: 9 },
  { dni: "67890123", nombre: "Luis", apellido: "Fernández", nota_final: 4 },
  { dni: "78901234", nombre: "Elena", apellido: "Torres", nota_final: 5 }
];

const cohorte03 = [
  { dni: "89012345", nombre: "Pedro", apellido: "Álvarez", nota_final: 10 },
  { dni: "90123456", nombre: "Clara", apellido: "Méndez", nota_final: 3 },
  { dni: "12345679", nombre: "Jorge", apellido: "Salinas", nota_final: 6 },
  { dni: "23456780", nombre: "Andrea", apellido: "Cruz", nota_final: 2 },
  { dni: "34567891", nombre: "Sergio", apellido: "Paredes", nota_final: 8 }
];

const cohorte04 = [
  { dni: "45678902", nombre: "Lucía", apellido: "Ortiz", nota_final: 7 },
  { dni: "56789013", nombre: "Miguel", apellido: "Vega", nota_final: 4 },
  { dni: "67890124", nombre: "Raquel", apellido: "Silva", nota_final: 9 },
  { dni: "78901235", nombre: "Hugo", apellido: "Moreno", nota_final: 5 },
  { dni: "89012346", nombre: "Natalia", apellido: "Quinteros", nota_final: 6 },
  { dni: "90123457", nombre: "Diego", apellido: "Arce", nota_final: 3 }
];

// 1) forEach + destructuring
const fnMostrarAlumnosConsola = (vectorAlumnos) => {
  vectorAlumnos.forEach((alumno) => {
    const { apellido, nombre } = alumno;
    console.log(`${apellido}, ${nombre}`);
  });
};

// 2) Spread operator: unificar cohortes
const totalAlumnos = [
  ...cohorte01,
  ...cohorte02,
  ...cohorte03,
  ...cohorte04
];

// 3) filter: aprobados / desaprobados (nota > 4)
const fnObtenerAprobados = (vectorAlumnos) => {
  return vectorAlumnos.filter((alumno) => alumno.nota_final > 4);
};

const fnObtenerDesaprobados = (vectorAlumnos) => {
  return vectorAlumnos.filter((alumno) => alumno.nota_final <= 4);
};

// 4) sort: ordenar por nota
const fnOrdenarPorNotaAsc = (vectorAlumnos) => {
  const copia = [...vectorAlumnos];
  copia.sort((a, b) => a.nota_final - b.nota_final);
  return copia;
};

// 5) find: buscar alumno por DNI
const fnBuscarAlumnoPorDni = (vectorAlumnos, dniBuscado) => {
  return vectorAlumnos.find((alumno) => alumno.dni === dniBuscado);
};

// 6a) reduce + if/else (nota > 4)
const fnContarAprobadosIf = (vectorAlumnos) => {
  const cantidad = vectorAlumnos.reduce((acum, alumno) => {
    if (alumno.nota_final > 4) {
      return acum + 1;
    } else {
      return acum;
    }
  }, 0);

  return cantidad;
};

// 6b) reduce + ternario (nota > 4)
const fnContarAprobadosTernario = (vectorAlumnos) => {
  const cantidad = vectorAlumnos.reduce(
    (acum, alumno) => alumno.nota_final > 4 ? acum + 1 : acum,
    0
  );
  return cantidad;
};

// Conversión a JSON
const fnConvertirAJson = (dato) => {
  return JSON.stringify(dato, null, 2);
};

export {
  cohorte01,
  cohorte02,
  cohorte03,
  cohorte04,
  totalAlumnos,
  fnMostrarAlumnosConsola,
  fnObtenerAprobados,
  fnObtenerDesaprobados,
  fnOrdenarPorNotaAsc,
  fnBuscarAlumnoPorDni,
  fnContarAprobadosIf,
  fnContarAprobadosTernario,
  fnConvertirAJson
};