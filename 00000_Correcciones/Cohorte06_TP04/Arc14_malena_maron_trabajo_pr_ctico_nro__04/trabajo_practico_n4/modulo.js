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


const mostrarAlumnos =(alumnos)=>{
    alumnos.forEach ((alumno) => {
        console.log(alumno.apellido,alumno.nombre);
       
    
        
        
    })};
     mostrarAlumnos(cohorte01);
     mostrarAlumnos(cohorte02);
     mostrarAlumnos(cohorte03);
     mostrarAlumnos(cohorte04)

    let unificado=[...cohorte01,...cohorte02,...cohorte03,...cohorte04]
    console.log(unificado)

    const alumnosAprobados = (unificado) =>{
        unificado.filter((unificado)=>{

           if (unificado.nota_final > 5)
            console.log(unificado.nota_final,unificado.apellido,unificado.nombre)

        })};
    alumnosAprobados(unificado);
    
    const alumnosDesaprobados =(unificado)=>{
        unificado.filter((unificado)=>{
            if(unificado.nota_final <=5)
              console.log(unificado.nota_final,unificado.apellido,unificado.nombre)  

       })};
    alumnosDesaprobados(unificado)   

    unificado.sort ((alumnosDesaprobados,alumnosAprobados)=> alumnosDesaprobados.nota_final- alumnosAprobados.nota_final);
    console.log(unificado);

    let buscarDni = unificado.find((alumno)=>{

       return alumno.dni === "90123456";

        

        
    });
       if (buscarDni) {
    console.log(buscarDni);
    } 
    else {
    console.log("Alumno no encontrado");}

    let cantidadAprobados = unificado.reduce((contador, alumno) => {

      if (alumno.nota_final > 5) {
        contador++;
        }

       return contador;

     }, 0);

     console.log("Aprobados:", cantidadAprobados);


     let cantidadDAprobados=unificado.reduce((contador,alumno)=>{
        return alumno.nota_final > 5 ?contador+1:contador;

     },0);

     console.log("Aprobados",cantidadAprobados)

