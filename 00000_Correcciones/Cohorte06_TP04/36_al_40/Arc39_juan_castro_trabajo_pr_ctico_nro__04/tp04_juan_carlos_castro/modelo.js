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


export const fnListAlumnos = (cohorte) => {
    cohorte.forEach((alumno) => {
        console.log(`Nombre: ${alumno.nombre} - Apellido: ${alumno.apellido}`)
    });
};

export const fnUnificarAlumnos = () => {
    const cohortes = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04]
    return cohortes;
};

export const fnAprobados = (alumnos) => {
    let vectorAprobados = alumnos.filter(alumno => alumno.nota_final > 5);
    return vectorAprobados;
};

export const fnDesaprobados = (alumnos) => {
    let vectorDesaprobados = alumnos.filter(alumno => alumno.nota_final < 5);
    return vectorDesaprobados;
};

export const fnOrdenarMenorMayor = (notas) => {
    let NotasMenorAMayor = notas.sort((notaAlta, notaBaja) => (notaAlta.nota_final - notaBaja.nota_final))
    return NotasMenorAMayor;
};

export const fnBuscarAlumno = (alumnos, dniAlumno) => {
    let resultado = alumnos.find(alumno => alumno.dni === dniAlumno)
    console.log(resultado);
    return resultado;
};

export const fnContarAprobados = (alumnos) => {

    let totalAprobadosIf = alumnos.reduce((aprobados, alumno) => {
        if (alumno.nota_final > 5) {
            return aprobados = aprobados + 1;
        }
        return aprobados
    }, 0)
    console.log(`la cantidad de aprobados con if es:`, totalAprobadosIf)

    let totalAprobadosTer = alumnos.reduce((aprobados, alumno) => {
       return alumno.nota_final > 5 ? aprobados + 1: aprobados;
    },0)
    console.log(`la cantidad de aprobados con operador ternario:`, totalAprobadosTer)
};
