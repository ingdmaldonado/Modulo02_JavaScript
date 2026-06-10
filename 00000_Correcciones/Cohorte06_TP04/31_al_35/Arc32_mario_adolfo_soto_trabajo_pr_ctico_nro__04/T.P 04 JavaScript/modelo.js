
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

export const todasLasCohortes =[ ...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];

export const mostrarAlumnos =(alumnos)=>{
    alumnos.forEach((alumno)=>{

        console.log(`alumno ${alumno.apellido}, ${alumno.nombre}`);
    });
    

    
};

export const cohorteXTipo = (tipo)=>{
    
    if(tipo === 0)
        {
            console.log(`Resultado no valido`);
        }
    else if (tipo === 1)
    {
        return cohorte01;
    }
    else if (tipo === 2)
    {
         return cohorte02;
    }
    else if (tipo ===3)
    {    
        return cohorte03;
    }
    else if (tipo ===4)
    {
        
        return cohorte04;

    }
     


};

export const alumnosAprobados = ()=>{
   let aprobados = todasLasCohortes.filter((alumno)=>{
        return alumno.nota_final > 5;
    })
    return aprobados;
}

export const alumnosDesaprobados = ()=>{
    let desaprobados = todasLasCohortes.filter((alumno)=>{
        return alumno.nota_final <= 5;
    })
    return desaprobados;

}

export const mostrarAlumnosConNota =(alumnos)=>{
    alumnos.forEach((alumno)=>{

        console.log(`alumno ${alumno.apellido}, ${alumno.nombre}, ${alumno.nota_final}`);
    });
    

    
};

export const ordenarPorNotas = ()=>{
    let ordenados = todasLasCohortes.sort((a,b)=>{
        return a.nota_final - b.nota_final;
    })
    return ordenados;
};

export const busquedaPorDNI = ()=>{
    let buscar = todasLasCohortes.find((alumno)=>{
        return alumno.dni === "90123456";
        

    })
    return buscar;

};

export const cantidadAprobadosReduce = ()=>{

    let cantidad = todasLasCohortes.reduce((contador, alumno)=>{

        if(alumno.nota_final > 5){
            return contador + 1;
        }
        else{
            return contador;
        }

    }, 0);

    return cantidad;
};

export const cantidadAprobadosTernario = ()=>{

    let cantidad = todasLasCohortes.reduce((contador, alumno)=>{

        return alumno.nota_final > 5? contador + 1 : contador;}, 0);

    return cantidad;
};