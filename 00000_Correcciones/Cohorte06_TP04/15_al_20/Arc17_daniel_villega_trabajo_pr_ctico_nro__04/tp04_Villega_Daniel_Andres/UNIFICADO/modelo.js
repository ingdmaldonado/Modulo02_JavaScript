
export const unirCohortes = (...cohortes) => {
  return [...cohortes.flat()];
};


export const listarAlumnos = (alumnos) => {
  alumnos.forEach(({ apellido, nombre }) => {
    console.log(`${apellido}, ${nombre}`);
  });
};
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


export const unificarCohortes = () => {
    return [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];
};



export const obtenerTodosLosAlumnos = (cohorte01, cohorte02, cohorte03, cohorte04) => {
    return [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];
};


export const obtenerAprobados = (todosLosAlumnos) => {
    return todosLosAlumnos.filter(alumno => alumno.nota_final > 5);
};


export const obtenerDesaprobados = (todosLosAlumnos) => {
    return todosLosAlumnos.filter(alumno => alumno.nota_final <= 5);
};





export const filtrarAprobados = (todosLosAlumnos) => {
    return todosLosAlumnos.filter(({ nota_final }) => nota_final > 4);
};


export const ordenarPorNotaAscendente = (todosLosAlumnos) => {
    return [...todosLosAlumnos].sort((a, b) => a.nota_final - b.nota_final);
};





export const obtenerTodosLosAlumnos1 = (c01, c02, c03, c04) => {
    return [...c01, ...c02, ...c03, ...c04];
};


export const buscarAlumnoPorDni1 = (alumnos, dniBuscado) => {
    return alumnos.find(alumno => alumno.dni === dniBuscado);
};


export const obtenerAprobados1 = (alumnos) => {
    return alumnos.filter(({ nota_final }) => nota_final > 0 <10);
};


export const aFormatoJSON = (datos) => {
    return JSON.stringify(datos, null, 2);
};




export const contarAprobadosIf = (totalAlumnos) => {
    return totalAlumnos.reduce((contador, alumno) => {
        if (alumno.nota_final > 5) {
            return contador + 1;
        } else {
            return contador;
        }
    }, 0);
};


export const contarAprobadosTernario = (totalAlumnos) => {
    return totalAlumnos.reduce((contador, alumno) => (alumno.nota_final > 5 ? contador + 1 : contador), 0);
};


export const obtenerPromedio = (totalAlumnos) => {
    if (totalAlumnos.length === 0) return 0;
    const sumaNotas = totalAlumnos.reduce((acumulador, alumno) => acumulador + alumno.nota_final, 0);
    return (sumaNotas / totalAlumnos.length).toFixed(2);
};

