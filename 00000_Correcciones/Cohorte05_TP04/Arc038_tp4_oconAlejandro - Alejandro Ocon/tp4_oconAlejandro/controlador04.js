import{cohorte01, cohorte02, cohorte03,cohorte04} from "./modulo04.js";


window.onload=()=>

{
    console.log("El tp nro 4 es corriendo");
   

    console.log(cohorte01);
    console.log(cohorte02);
    console.log(cohorte03);
    console.log(cohorte04);     

   
    let seleccionCohorte = Number(prompt("eleiga la cohorte"));
    console.log("***************PUNTO 1****************");
    switch(seleccionCohorte)
    {
    case 1:
        { 
            cohorte01.forEach((alumno)=>{
            console.log(`Cohorte 1: El nombre es ${alumno.nombre}, y el apellido es ${alumno.apellido}` );
            });
            break;
        }
    case 2:
        {
            cohorte02.forEach((alumno)=>{
            console.log(`Cohorte 2: El nombre es ${alumno.nombre}, y el apellido es ${alumno.apellido}` );
           });
            break;
        }
    case 3:
        { 
            cohorte03.forEach((alumno)=>{
            console.log(`Cohorte 3: El nombre es ${alumno.nombre}, y el apellido es ${alumno.apellido}` );
           });
            break;
        }
    case 4:
        {
            cohorte04.forEach((alumno)=>{
                console.log(`Cohorte 4: El nombre es ${alumno.nombre}, y el apellido es ${alumno.apellido}` );
               });
               break
        }
    default:
        {
            console.log("Eliga una opcion valida");
            break;
        }
    }
   
  

   
   console.log("***************PUNTO 2****************");
//PUNIFICAR VECTORES con Spread Operator u Operador de propagacion

const totalAlumnos = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];
console.log(totalAlumnos);



console.log("***************PUNTO 3A****************");
    //PUNTO 3.A APROBADOS
    const alumnosAprobados = totalAlumnos.filter (nota => nota.nota_final >5)
    console.log(`Los alumnos aprobados son ${alumnosAprobados}`);

console.log("***************PUNTO 3B****************");
    //PUNTO 3.B DESAPROBADOS
    const alumnosDesaprobados = totalAlumnos.filter(nota=>nota.nota_final <=5)
    console.log(`Los alumnos desaprobados son ${alumnosDesaprobados}`)

console.log("***************PUNTO 4****************");
    //PUNTO 4 SORT

let alumnoOrdenados= totalAlumnos.sort((notaA, notaB) => notaA.nota_final - notaB.nota_final);

console.log(alumnoOrdenados);

console.log("***************PUNTO 5****************");
//PUNTO 5-FIND por numero de DNI
  

    const dniAlumno = totalAlumnos.find((id,indice)=>{

        if(id.dni === "90123456")
        {
            return true;
        }
        else
        {
            return false;
        }
    });

    if(dniAlumno)
    {
        console.log(dniAlumno);
    }
    else
    {
        alert(`El dni no es de un alumno`);
    }
        

    
console.log("***************PUNTO 6****************");
//PUNTO 6-
let contador = 0; 
const cantidadAlumnosAprobados = totalAlumnos.reduce((contador, alumno) => 
{
    if (alumno.nota_final > 5) 
        {
        contador = contador + 1
        return contador;
        } 
    else {
        return contador; 
        }
}, 0); 
// Mostrar la cantidad de alumnos aprobados



let contador1 = 0;
const cantidadAprobadosTernario = totalAlumnos.reduce((contador1, alumno) => 
    {
    return alumno.nota_final > 5 ? contador1= contador1 + 1 : contador;
    }, 0); 



// Mostrar la cantidad de alumnos aprobados
console.log(`Cantidad de alumnos aprobados(IF/ELSE): ${cantidadAlumnosAprobados}`);
console.log(`Cantidad de alumnos aprobados (Ternario): ${cantidadAprobadosTernario}`);
   
   


    

  
};//cierre del onload