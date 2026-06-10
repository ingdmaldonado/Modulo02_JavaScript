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



//PUNTO N° 1. //
export const fnMuestraEstudiantes =  (vectorEstudiante) =>{

vectorEstudiante.forEach((estudiante) => {

    console.log(`${estudiante.nombre} ${estudiante.apellido} nota final: ${estudiante.nota_final}`);
}


)}; 


//PUNTO N° 2//

export const fnUnificarAlumnos = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04]; 




//PUNTO N° 3//

export const fnAlumnosAprobados = (estudiantes) => {

   return fnUnificarAlumnos.filter((estudiantes) =>{

        if (estudiantes.nota_final > 5){
            return true;
        }
        return false;
    })
}

export const fnAlumnosDesaprobados = (estudiantes) => {

   return fnUnificarAlumnos.filter((estudiantes) => {

        if (estudiantes.nota_final <= 5) {

            return true;
        }
        return false;
    })
}

//PUNTO N° 4//


export const fnOrdenarAlumnosNotaMayor = (estudiantes) => {
    const copiaEstudiantes = [...estudiantes];

    copiaEstudiantes.sort((alumnosA, alumnoB)=> {
        return alumnosA.nota_final - alumnoB.nota_final;
    })

return copiaEstudiantes;
}





//PUNTO N° 5//

export const fnBuscarAluDNI = (dni) => {


    return fnUnificarAlumnos.find((alumno)=> {

        return alumno.dni === dni;
    })
}


//PUNTO N° 6//


export const fnContarAprobConIf = (estudiantes) => {


    return estudiantes.reduce((contadorAprob, estudiantes)=>{

        if (estudiantes.nota_final > 5){

            return contadorAprob + 1;
        }

        else {
            return contadorAprob
        };
        

    },
0
);
} 


export const fnContarAprobOperadorTernario =  (estudiantes) => {

    return estudiantes.reduce((contadorAprob, estudiantes)=>{
        return estudiantes.nota_final > 5 ? contadorAprob + 1 : contadorAprob;
    }, 0);
}