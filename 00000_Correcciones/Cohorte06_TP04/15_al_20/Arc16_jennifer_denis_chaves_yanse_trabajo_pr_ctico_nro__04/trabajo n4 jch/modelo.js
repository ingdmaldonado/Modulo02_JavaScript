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

/* ======================================
   PUNTO 1
   Mostrar alumnos con forEach
====================================== */

export const fnMostrarAlumnos = (vector)=>{

    vector.forEach(alumno=>{

        const {apellido,nombre} = alumno;

        console.log(`${apellido} ${nombre}`);

    });

};

/* ======================================
   PUNTO 2
   Unificar cohortes con Spread
====================================== */

export const fnUnificarCohortes = (
    cohorte1,
    cohorte2,
    cohorte3,
    cohorte4
)=>{

    return [
        ...cohorte1,
        ...cohorte2,
        ...cohorte3,
        ...cohorte4
    ];

};

/* ======================================
   PUNTO 3A
   Filtrar aprobados
====================================== */

export const fnAprobados = (alumnos)=>{

    return alumnos.filter(
        alumno => alumno.nota_final > 5
    );

};

/* ======================================
   PUNTO 3B
   Filtrar desaprobados
====================================== */

export const fnDesaprobados = (alumnos)=>{

    return alumnos.filter(
        alumno => alumno.nota_final <= 5
    );

};

/* ======================================
   PUNTO 4
   Ordenar por nota
====================================== */

export const fnOrdenarPorNota = (alumnos)=>{

    return [...alumnos].sort(
        (a,b)=>a.nota_final - b.nota_final
    );

};

/* ======================================
   PUNTO 5
   Buscar alumno por DNI
====================================== */

export const fnBuscarAlumno = (alumnos,dni)=>{

    return alumnos.find(
        alumno => alumno.dni === dni
    );

};

/* ======================================
   PUNTO 6A
   Reduce con if/else
====================================== */

export const fnContarAprobadosIfElse = (alumnos)=>{

    return alumnos.reduce((acumulador,alumno)=>{

        if(alumno.nota_final > 5){

            return acumulador + 1;

        }else{

            return acumulador;

        }

    },0);

};

/* ======================================
   PUNTO 6B
   Reduce con operador ternario
====================================== */

export const fnContarAprobadosTernario = (alumnos)=>{

    return alumnos.reduce(

        (acumulador,alumno)=>

            alumno.nota_final > 5
                ? acumulador + 1
                : acumulador

    ,0);

};

/* ======================================
   Clases
====================================== */

export class Alumno{

    constructor(
        dni,
        nombre,
        apellido,
        nota_final
    ){

        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nota_final = nota_final;

    }

}

/* ======================================
   Rest Operator
====================================== */

export const fnCantidadAlumnos = (...alumnos)=>{

    return alumnos.length;

};

/* ======================================
   Conversion a JSON
====================================== */

export const fnConvertirJSON = (datos)=>{

    return JSON.stringify(datos);

};