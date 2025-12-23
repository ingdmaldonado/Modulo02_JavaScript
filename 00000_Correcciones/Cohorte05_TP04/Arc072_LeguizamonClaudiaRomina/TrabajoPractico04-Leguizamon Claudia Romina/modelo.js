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

export const fnNombreyApellido = cohorte=>cohorte.forEach(alumno=>console.log(`Nombre: ${alumno.nombre} y Apellido: ${alumno.apellido}`));  

export const fnEncuentraDNI = (cohorte, documento)=>
    {
        const alumnoBuscado=cohorte.find(alumno=>Number(alumno.dni) === documento);
        if (alumnoBuscado)
        {
          console.log(alumnoBuscado);
        }
       else
        {
            alert(`El Dni ingresado no corresponde a un alumno de una Cohorte`)
        }
    }

export const fnFiltraAprobados=cohorte=> 
    {
       const alumnosAprobados=cohorte.filter(alumno=>alumno.nota_final>=5)
       console.log(alumnosAprobados)    
};
 export const fnFiltraDesaprobados=cohorte=> 
    {
       const alumnosDesaprobados=cohorte.filter(alumno=>alumno.nota_final<5)
       console.log(alumnosDesaprobados)    
};      
       
 export const fnContadorAlumnosAprobados=cohorte =>
        {
        const contadorAlumnosAprobados=cohorte.reduce ((contador,alumno)=>
            {
        if(alumno.nota_final>=5)    
        {
          contador=contador+1;  
        }
        return contador;
        },0); 
        console.log(contadorAlumnosAprobados);
        };

export const fnContadorAlumnosAprobadosot=cohorte =>
        {
        const contadorAlumnosAprobados=cohorte.reduce((contador,alumno)=>{ alumno.nota_final>=5 ? contador=contador+1 : contador;
            
        return contador;
        },0); 
        console.log(contadorAlumnosAprobados);
        };

export const fnvectorTotal= ([ ...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04]);

export const fnvectorOrdenado= (vectorTotaldeAlumnos)=>
    {vectorTotaldeAlumnos.sort((a, b) => a.nota_final - b.nota_final)
     console.log(vectorTotaldeAlumnos);   
    };

  


