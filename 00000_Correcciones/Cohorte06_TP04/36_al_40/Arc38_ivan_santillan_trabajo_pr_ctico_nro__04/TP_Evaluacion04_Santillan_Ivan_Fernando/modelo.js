export const cohorte01 = [
  { dni: "12345678", nombre: "Juan", apellido: "Perez", nota_final: 8 },
  { dni: "23456789", nombre: "Ana", apellido: "Gomez", nota_final: 6 },
  { dni: "34567890", nombre: "Carlos", apellido: "Lopez", nota_final: 5 },
  { dni: "45678901", nombre: "Maria", apellido: "Martinez", nota_final: 7 }
];

export const cohorte02 = [
  { dni: "56789012", nombre: "Sofia", apellido: "Ramirez", nota_final: 9 },
  { dni: "67890123", nombre: "Luis", apellido: "Fernandez", nota_final: 4 },
  { dni: "78901234", nombre: "Elena", apellido: "Torres", nota_final: 5 }
];

export const cohorte03 = [
  { dni: "89012345", nombre: "Pedro", apellido: "Alvarez", nota_final: 10 },
  { dni: "90123456", nombre: "Clara", apellido: "Mendez", nota_final: 3 },
  { dni: "12345679", nombre: "Jorge", apellido: "Salinas", nota_final: 6 },
  { dni: "23456780", nombre: "Andrea", apellido: "Cruz", nota_final: 2 },
  { dni: "34567891", nombre: "Sergio", apellido: "Paredes", nota_final: 8 }
];

export const cohorte04 = [
  { dni: "45678902", nombre: "Lucia", apellido: "Ortiz", nota_final: 7 },
  { dni: "56789013", nombre: "Miguel", apellido: "Vega", nota_final: 4 },
  { dni: "67890124", nombre: "Raquel", apellido: "Silva", nota_final: 9 },
  { dni: "78901235", nombre: "Hugo", apellido: "Moreno", nota_final: 5 },
  { dni: "89012346", nombre: "Natalia", apellido: "Quinteros", nota_final: 6 },
  { dni: "90123457", nombre: "Diego", apellido: "Arce", nota_final: 3 }
];

export const mostrarApellidoYNombre = (alumnos) => {
  const listado = [];

  alumnos.forEach((alumno) => {
    const { apellido, nombre } = alumno;
    listado.push(`${apellido}, ${nombre}`);
  });

  return listado;
};

export const unificarCohortes = (...cohortes) => {
  return [...cohortes[0], ...cohortes[1], ...cohortes[2], ...cohortes[3]];
};

export const obtenerAlumnosAprobados = (alumnos) => {
  return alumnos.filter((alumno) => alumno.nota_final > 5);
};

export const obtenerAlumnosDesaprobados = (alumnos) => {
  return alumnos.filter((alumno) => alumno.nota_final <= 5);
};

export const ordenarPorNotaAscendente = (alumnos) => {
  return [...alumnos].sort((alumnoA, alumnoB) => alumnoA.nota_final - alumnoB.nota_final);
};

export const buscarAlumnoPorDni = (alumnos, dni) => {
  return alumnos.find((alumno) => alumno.dni === dni);
};

export const contarAprobadosConIfElse = (alumnos) => {
  return alumnos.reduce((contador, alumno) => {
    if (alumno.nota_final > 5) {
      return contador + 1;
    }

    return contador;
  }, 0);
};

export const contarAprobadosConTernario = (alumnos) => {
  return alumnos.reduce((contador, alumno) => alumno.nota_final > 5 ? contador + 1 : contador, 0);
};

export const convertirAJson = (datos) => {
  return JSON.stringify(datos, null, 2);
};
