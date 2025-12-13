/** Ejercicio Nro. 18: ( spread operator … y métodos de vectores)
Un profesor de programación tiene 4 curso o cohortes, en donde en cada cohorte existen alumnos diferentes que cursaron su módulo de “fundamentos de programación con JavaScript”, el profesor tiene en un vector diferente los alumnos y sus notas finales del cursado. “Se aprueba con notas > 4”. El listado de alumnos es el siguiente:*/

export const cohorte01 = [
  { dni: "12345678", nombre: "Juan", apellido: "Pérez", nota_final: 8 },
  { dni: "23456789", nombre: "Ana", apellido: "Gómez", nota_final: 6 },
  { dni: "34567890", nombre: "Carlos", apellido: "López", nota_final: 5 },
  { dni: "45678901", nombre: "María", apellido: "Martínez", nota_final: 7 }
];

export const cohorte02 = [
  { dni: "56789012", nombre: "Sofía", apellido: "Ramírez", nota_final: 9 },
  { dni: "67890123", nombre: "Luis", apellido: "Fernández", nota_final: 4 },
  { dni: "78901234", nombre: "Elena", apellido: "Torres", nota_final: 5 }
];

export const cohorte03 = [
  { dni: "89012345", nombre: "Pedro", apellido: "Álvarez", nota_final: 10 },
  { dni: "90123456", nombre: "Clara", apellido: "Méndez", nota_final: 3 },
  { dni: "12345679", nombre: "Jorge", apellido: "Salinas", nota_final: 6 },
  { dni: "23456780", nombre: "Andrea", apellido: "Cruz", nota_final: 2 },
  { dni: "34567891", nombre: "Sergio", apellido: "Paredes", nota_final: 8 }
];

export const cohorte04 = [
  { dni: "45678902", nombre: "Lucía", apellido: "Ortiz", nota_final: 7 },
  { dni: "56789013", nombre: "Miguel", apellido: "Vega", nota_final: 4 },
  { dni: "67890124", nombre: "Raquel", apellido: "Silva", nota_final: 9 },
  { dni: "78901235", nombre: "Hugo", apellido: "Moreno", nota_final: 5 },
  { dni: "89012346", nombre: "Natalia", apellido: "Quinteros", nota_final: 6 },
  { dni: "90123457", nombre: "Diego", apellido: "Arce", nota_final: 3 }
];



// 1) Mostrar apellido + nombre (forEach)
export const mostrarAlumnos = (vector) => {
  let texto = "";
  vector.forEach(al => {
    texto += `${al.apellido}, ${al.nombre}\n`;
  });
  return texto;
};

// 2) Unificar con spread
export const unificarCohortes = (c1, c2, c3, c4) => {
  return [...c1, ...c2, ...c3, ...c4];
};

// 3) Filtrar aprobados/desaprobados
export const filtrarAprobados = (lista) =>
  lista.filter(al => al.nota_final > 5);

export const filtrarDesaprobados = (lista) =>
  lista.filter(al => al.nota_final <= 5);

// 4) Ordenar por nota
export const ordenarPorNota = (lista) =>
  [...lista].sort((a, b) => a.nota_final - b.nota_final);

// 5) Buscar por DNI
export const buscarDNI = (lista, dniBuscado) =>
  lista.find(al => al.dni === dniBuscado);

// 6a) Contar aprobados con IF
export const contarAprobadosIF = (lista) =>
  lista.reduce((cont, al) => {
    if (al.nota_final > 5) return cont + 1;
    else return cont;
  }, 0);

// 6b) Contar aprobados con ternario
export const contarAprobadosTernario = (lista) =>
  lista.reduce((cont, al) => cont + (al.nota_final > 5 ? 1 : 0), 0);
