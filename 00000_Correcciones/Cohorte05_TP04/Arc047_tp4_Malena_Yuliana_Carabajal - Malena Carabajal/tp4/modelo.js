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

//funcion para mostrar los nombres y apellidos de las 4 cohortes
export  function  devolverNombreyApellido (cohorte) {
    cohorte.forEach(elemento => console.log(`Nombre: ${elemento.nombre} Apellido: ${elemento.apellido}`));
}

//funcion para unificar todos los alumnos en un solo vector
export function unificarAlumnos (cohorte01, cohorte02,cohorte03,cohorte04){
    const alumnos = [...cohorte01,...cohorte02,...cohorte03,...cohorte04];
    return alumnos;
};

//funcion para filtrar los alumnos aprobados
export function alumnosAprobados (vector){
    return vector.filter(elemento => elemento.nota_final > 5);
};

//funcion para filtrar los alumnos desaprobados
export function alumnosDesaprobados (vector) {
    return vector.filter(elemento => elemento.nota_final <= 5);
}

//funcion para ordenar las notas
export function ordenarNotas (vector) {
    const copia = [...vector];
    copia.sort((a,b) => a.nota_final - b.nota_final);
    return copia;
};

//funcion para buscar alumno
export function buscarAlumno(vector, dni){
    let alumno = vector.find(elemento => elemento.dni === dni);
    return alumno;
};

//funcion para contar alumnos (forma 1)
export function contarAlumnosForma1 (vector){
    return vector.reduce((contador,elemento) => {
        if (elemento.nota_final > 5){
            return contador + 1;
        }else { 
            return contador;
        }
    },0);
};

//funcion para contar alumnos (forma 2)
export function contarAlumnosForma2 (vector){
    return vector.reduce((contador,elemento) => elemento.nota_final>5 ? contador + 1 : contador,0);
};