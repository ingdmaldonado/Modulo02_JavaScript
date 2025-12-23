// MODELO.JS - TRABAJO PRACTICO NRO 04
// Aca van los datos de las cohortes y las funciones que voy a usar

/* DATOS DE LAS COHORTES 
 Estos son los vectores con los alumnos de cada cohorte
 Cada alumno es un objeto literal con dni, nombre, apellido y nota_final*/

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


//  PUNTO 1 
/* Funcion que recibe un vector de alumnos y muestra apellido y nombre con forEach
 Tambien devuelve un string con todos los datos para mostrar en el HTML */

const mostrarAlumnos = (vectorAlumnos, nombreCohorte) => {
    console.log(`--- ${nombreCohorte} ---`);
    let resultado = "";
    
    // Recorrer el vector con forEach como pide el enunciado
    vectorAlumnos.forEach((alumno) => {
        console.log(`${alumno.apellido}, ${alumno.nombre}`);
        resultado = resultado + `${alumno.apellido}, ${alumno.nombre}<br>`;
    });
    
    return resultado;
};


/* PUNTO 2 
 Funcion que unifica las 4 cohortes usando spread operator
 El spread operator (...) "desparrama" los elementos del vector
*/
const unificarCohortes = () => {
    // Uso spread operator para juntar todos los alumnos en un solo vector
    let todosLosAlumnos = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];
    console.log("Vector unificado con todos los alumnos:");
    console.log(todosLosAlumnos);
    return todosLosAlumnos;
};


/*  PUNTO 3 
 FUNCIONES PARA FILTRAR APROBADOS Y DESAPROBADOS
SE APRUEBA CON NOTA > 5 (SEGUN EL PUNTO 3 DEL ENUNCIADO) */

const obtenerAprobados = (vectorAlumnos) => {
    // Uso filter para obtener solo los que tienen nota > 5
    let aprobados = vectorAlumnos.filter((alumno) => {
        return alumno.nota_final > 5;
    });
    return aprobados;
};

const obtenerDesaprobados = (vectorAlumnos) => {
    // Uso filter para obtener los que tienen nota <= 5
    let desaprobados = vectorAlumnos.filter((alumno) => {
        return alumno.nota_final <= 5;
    });
    return desaprobados;
};


/*  PUNTO 4 
 Funcion para ordenar por nota de menor a mayor usando sort*/

const ordenarPorNota = (vectorAlumnos) => {
    // Haria una copia con spread para no modificar el original
    let vectorCopia = [...vectorAlumnos];
    
    // Uso sort con una funcion de comparacion

    vectorCopia.sort((a, b) => {
        return a.nota_final - b.nota_final;
    // Si retorna negativo, a va antes que b
    // Si retorna positivo, b va antes que a
    });
    
    return vectorCopia;
};


/*  PUNTO 5 
 Funcion para buscar un alumno por DNI usando find*/

const buscarPorDni = (vectorAlumnos, dniBuscado) => {
    // Find devuelve el primer elemento que cumple la condicion
    // Si no encuentra nada devuelve undefined
    let alumnoEncontrado = vectorAlumnos.find((alumno) => {
        return alumno.dni === dniBuscado;
    });
    return alumnoEncontrado;
};


/*PUNTO 6  Funciones para contar aprobados usando reduce
 Tengo que hacerlo de dos formas: con if/else y con operador ternario*/

// Forma A: usando if/else dentro del reduce
const contarAprobadosConIf = (vectorAlumnos) => {
    let cantidad = vectorAlumnos.reduce((acumulador, alumno) => {
        // Si la nota es mayor a 5, sumo 1 al acumulador
        if (alumno.nota_final > 5) {
            return acumulador + 1;
        } else {
            return acumulador;
        }
    }, 0); //  valor inicial del acumulador
    
    return cantidad;
};

// Forma B: usando operador ternario dentro del reduce
const contarAprobadosConTernario = (vectorAlumnos) => {
    let cantidad = vectorAlumnos.reduce((acumulador, alumno) => {
        //valor_si_true : valor_si_false
        return alumno.nota_final > 5 ? acumulador + 1 : acumulador;
    }, 0);
    
    return cantidad;
};


/* FUNCION AUXILIAR 
 Para mostrar un vector de alumnos en formato tabla HTML*/

const generarTablaAlumnos = (vectorAlumnos) => {
    if (vectorAlumnos.length === 0) {
        return "<p>No hay alumnos para mostrar</p>";
    }
    
    let tabla = "<table border='1'>";
    tabla = tabla + "<tr><th>DNI</th><th>Apellido</th><th>Nombre</th><th>Nota</th></tr>";
    
    vectorAlumnos.forEach((alumno) => {
        tabla = tabla + `<tr>
            <td>${alumno.dni}</td>
            <td>${alumno.apellido}</td>
            <td>${alumno.nombre}</td>
            <td>${alumno.nota_final}</td>
        </tr>`;
    });
    
    tabla = tabla + "</table>";
    return tabla;
};


// EXPORTO todo lo que necesito usar en el controlador
export {
    cohorte01,
    cohorte02,
    cohorte03,
    cohorte04,
    mostrarAlumnos,
    unificarCohortes,
    obtenerAprobados,
    obtenerDesaprobados,
    ordenarPorNota,
    buscarPorDni,
    contarAprobadosConIf,
    contarAprobadosConTernario,
    generarTablaAlumnos
};
