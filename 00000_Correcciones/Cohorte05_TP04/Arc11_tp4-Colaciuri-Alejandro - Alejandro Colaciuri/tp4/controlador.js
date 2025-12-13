import { mostrarAlumnos } from "./modulo.js";
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

const alumnosDeTodasCohortes=[...cohorte01,...cohorte02,...cohorte03,...cohorte04];

window.onload=()=>{
    //punto 1
    console.log("--------punto 1-------");
    mostrarAlumnos(cohorte01);
    mostrarAlumnos(cohorte02);
    mostrarAlumnos(cohorte03);
    mostrarAlumnos(cohorte04);
    console.log("__________________________");

    //punto 2
    console.log("--------punto 2-------");
    mostrarAlumnos(alumnosDeTodasCohortes);
    console.log("__________________________");

    //punto 3
    console.log("--------punto 3-------");
    const alumnosAprobados= alumnosDeTodasCohortes.filter(alumno=>alumno.nota_final>5);

    const alumnosDesaprobados= alumnosDeTodasCohortes.filter(alumno=>alumno.nota_final<=5);

    mostrarAlumnos(alumnosAprobados);
    mostrarAlumnos(alumnosDesaprobados);

    console.log("__________________________");
    //punto 4
    console.log("--------punto 4-------");
    const alumnosOrdenados=alumnosDeTodasCohortes.sort((a,b)=>a.nota_final-b.nota_final);

    mostrarAlumnos(alumnosOrdenados);
    console.log("__________________________");
    
    //punto 5
    console.log("--------punto 5-------");

    const dnialumnobuscado="45678902";

    const resultado = alumnosDeTodasCohortes.find(({dni})=>dni===dnialumnobuscado);

    const {nombre,apellido,dni}=resultado;
    console.log(nombre,apellido,dni);
    console.log("__________________________");
    
    //punto 6
    console.log("--------punto 6-------");

    //con if/else
    const resultado2= alumnosDeTodasCohortes.reduce((acumulador,alumno)=>{
        if(alumno.nota_final>5){acumulador++}
        return acumulador;
    },0);

    console.log(resultado2);

    //con operador ternario
    const resultado3= alumnosDeTodasCohortes.reduce((acumulador,alumno)=>{
        alumno.nota_final>5?acumulador++:false;
        return acumulador;
    },0);

    console.log(resultado3);

    /* ------------EXTRA-------------- */
    
    /* punto 6 con salida en Dom */

    const idDniBuscado =document.querySelector("#idDniBuscado");
    const idbtnBuscarAlumno =document.querySelector("#idbtnBuscarAlumno");
    const idMostrarAlumno =document.querySelector("#idMostrarAlumno");

    idbtnBuscarAlumno.onclick=()=>{
        let dniIngresado=idDniBuscado.value;

        let alumnoEncontrado=alumnosDeTodasCohortes.find(({dni})=>
            dni===dniIngresado);
        if(alumnoEncontrado){
            idMostrarAlumno.textContent=`Apellido: ${alumnoEncontrado.apellido} - Nombre: ${alumnoEncontrado.nombre} - Dni: ${alumnoEncontrado.dni}`;
        }else{
            idMostrarAlumno.textContent=`El dni ingresado no coincide con ningun alumno registrado`;
        }
        
    }


    //listado de alumnos
    const idBtnlistarAlumnos =document.querySelector("#idBtnlistarAlumnos");

    const theadAlumnos =document.querySelector("#theadAlumnos");
    const tbodyAlumnos = document.querySelector("#tbodyAlumnos");
    

    idBtnlistarAlumnos.onclick=()=>{
        //estructura del theadd
        let encabezadoTabla=`
        <tr>
            <th>N°</th>
            <th>Apellido</th>
            <th>Nombre</th>
            <th>DNI</th>
            <th>Nota Final</th>
        </tr>`;

        //estructura del tbody
        let acumuladorAlumnos="";
        let contador=0;
        alumnosDeTodasCohortes.forEach((alumno)=>{
            contador++;

            acumuladorAlumnos=acumuladorAlumnos+
            `<tr>
            <td>${contador}</td>
            <td>${alumno.apellido}</td> 
            <td>${alumno.nombre}</td>
            <td>${alumno.dni}</td>
            <td>${alumno.nota_final}</td>
            </tr>`;
        });

        theadAlumnos.innerHTML=encabezadoTabla;
        tbodyAlumnos.innerHTML=acumuladorAlumnos;
    };

}