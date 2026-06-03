
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

    export const unificarCohortes = (c1, c2, c3, c4) => [...c1, ...c2, ...c3, ...c4];

  export const listasAlumnos = (cohorte) => {
    let acumulador = ""; 
    
    cohorte.forEach(({ apellido, nombre }) => {
        console.log(`${apellido}, ${nombre}`);
        acumulador += `${apellido}, ${nombre}\n`; 
    });

    return acumulador; 
};

export const cohorteXtipos = (tipo) => {
    if (tipo === 0) return `No definido`;
    if (tipo === 1) return listasAlumnos(cohorte01);
    if (tipo === 2) return listasAlumnos(cohorte02);
    if (tipo === 3) return listasAlumnos(cohorte03);
    if (tipo === 4) return listasAlumnos(cohorte04);
}; 

    const obtenerAprobados = (alumnos) => alumnos.filter(alumno => alumno.nota_final > 5);

    const obtenerDesaprobados = (alumnos) => alumnos.filter(alumno => alumno.nota_final <= 5);

    const todosLosAlumnos = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);


 export const notas = (tipo) => {
    if (tipo === 0) {
        return "No definido";
    }

    let alumnosFiltrados = [];

    if (tipo === 1) {
        console.log("--- Alumnos Aprobados ---");
        alumnosFiltrados = obtenerAprobados(todosLosAlumnos);
    } else if (tipo === 2) {
        console.log("--- Alumnos Desaprobados ---");
        alumnosFiltrados = obtenerDesaprobados(todosLosAlumnos);
    }

    return alumnosFiltrados.map(({ apellido, nombre, nota_final }) => {
        return `${apellido}, ${nombre} - Nota: ${nota_final}`;
    }).join("\n");
}
    export const ordenarPorNotas = (alumnos) => [...alumnos].sort((a, b) => a.nota_final - b.nota_final);                           
        
    export const buscarPorDni = (alumnos, dniBuscado) => alumnos.find(alumno => alumno.dni === dniBuscado);

    export const contarAprobadosConIf = (alumnos) => {
    return alumnos.reduce((acumulador, alumno) => {
        if (alumno.nota_final > 5) {
            return acumulador + 1;
        } else {
            return acumulador;
        }
    }, 0);
};

    export const contarAprobadosConTernario = (alumnos) => 
    alumnos.reduce((acumulador, alumno) => alumno.nota_final > 5 ? acumulador + 1 : acumulador, 0);
