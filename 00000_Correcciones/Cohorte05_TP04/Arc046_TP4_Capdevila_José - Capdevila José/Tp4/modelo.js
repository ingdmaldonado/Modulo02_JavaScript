//Cohortes de Alumnos
export const cohorte1=[
    {dni: "12345678", nombre: "Juan", apellido: "Pérez", nota_final: 8},
    {dni: "23456789", nombre: "Ana", apellido: "Gómez", nota_final: 6},
    {dni: "34567890", nombre: "Carlos", apellido: "López", nota_final: 5},
    {dni: "45678901", nombre: "María", apellido: "Martínez", nota_final: 7}
];

export const cohorte2=[
    {dni: "56789012", nombre: "Sofía", apellido: "Ramírez", nota_final: 9},
    {dni: "67890123", nombre: "Luis", apellido: "Fernández", nota_final: 4},
    {dni: "78901234", nombre: "Elena", apellido: "Torres", nota_final: 5}
];

export const cohorte3=[
    {dni: "89012345", nombre: "Pedro", apellido: "Álvarez", nota_final: 10},
    {dni: "90123456", nombre: "Clara", apellido: "Méndez", nota_final: 3},
    {dni: "12345679", nombre: "Jorge", apellido: "Salinas", nota_final: 6},
    {dni: "23456780", nombre: "Andrea", apellido: "Cruz", nota_final: 2},
    {dni: "34567891", nombre: "Sergio", apellido: "Paredes", nota_final: 8}
];

export const cohorte4=[
    {dni: "45678902", nombre: "Lucía", apellido: "Ortiz", nota_final: 7},
    {dni: "56789013", nombre: "Miguel", apellido: "Vega", nota_final: 4},
    {dni: "67890124", nombre: "Raquel", apellido: "Silva", nota_final: 9},
    {dni: "78901235", nombre: "Hugo", apellido: "Moreno", nota_final: 5},
    {dni: "89012346", nombre: "Natalia", apellido: "Quinteros", nota_final: 6},
    {dni: "90123457", nombre: "Diego", apellido: "Arce", nota_final: 3}
];

//FUNCIONES LÓGICAS

//1)Función para recorrer y mostrar apellido y nombre 
export const mostrarAlumnos=(vectorAlumnos)=>{
    vectorAlumnos.forEach(alumno=>{ //Por cada Alumno del Vector de alumnos
        console.log(`>${alumno.apellido}, ${alumno.nombre}`); //Mostrar en consola Apellido, Nombre
    });
};

//2)Unificar cohortes con Spread Operator 
export const unificarCohortes=(c1,c2,c3,c4)=>{
    return [...c1,...c2,...c3,...c4];
};

//3)Filtrar  
//Aprobados (Nota>5)
export const obtenerAprobados=(todos)=>{
    return todos.filter(alumno=>alumno.nota_final>5);
};

//Desaprobados (Nota<=5)
export const obtenerDesaprobados=(todos)=>{
    return todos.filter(alumno=>alumno.nota_final<=5);
};

//4)Ordenar por nota de menor a mayor (Sort) 
export const ordenarPorNota=(todos)=>{
    //Al usar [...todos] creo una copia y no cambio el array original
    return [...todos].sort((a,b)=>a.nota_final-b.nota_final);
};

//5)Buscar por DNI (Find) 
export const buscarAlumnoPorDni=(todos,dniBuscado)=>{
    return todos.find(alumno=>alumno.dni===dniBuscado);
};

//6)Contar aprobados (Reduce)
//Con If
export const contarAprobadosIf=(todos)=>{
    return todos.reduce((contador, alumno)=>{
        if (alumno.nota_final>5){
            return contador++;
        } else {
            return contador;
        }
    },0);
};

//Con Ternartio
export const contarAprobadosTernario=(todos)=>{
    return todos.reduce((contador,alumno)=>(alumno.nota_final>5?contador+1:contador),0);
};