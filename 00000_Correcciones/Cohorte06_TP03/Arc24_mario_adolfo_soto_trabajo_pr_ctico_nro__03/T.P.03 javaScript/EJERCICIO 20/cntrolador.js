import {fnPromedio, fnEstadoAlumno} from "./modelo.js";
/* Realizar una arrow function que reciba como parámetro las 3 notas que obtuvo un alumno en los
distintos trabajos prácticos de una materia y que a partir de esas notas obtenga el promedio de las mismas*/


window.onload = ()=>{
    console.log(`la pagina esta cargada y funcionando ! =D`);

   /* let resultado1 = fnPromedio(3,4,3);
    
    console.log(resultado1);*/

    const estadoAplicacion = {notaAlumno1:0,
                            notaAlumno2:0,
                            notaAlumno3:0,
                             };

    const idNotaAlumno1 = document.querySelector("#idNotaAlumno1");
    const idNotaAlumno2 = document.querySelector("#idNotaAlumno2");
    const idNotaAlumno3 = document.querySelector("#idNotaAlumno3");
    const btnCalcular = document.querySelector("#btnCalcular");
    const resultado =document.querySelector("#resultado");
    const btnGuardar = document.querySelector("#btnGuardar");
    const btnRecuperar =document.querySelector("#btnRecuperar");
    
    //oninput notas altumnos
    idNotaAlumno1.oninput = ()=>{
        estadoAplicacion.notaAlumno1 = Number(idNotaAlumno1.value) ;
        console.log(estadoAplicacion);
    };
    
    idNotaAlumno2.oninput = ()=>{
        estadoAplicacion.notaAlumno2 = Number(idNotaAlumno2.value) ;
        console.log(estadoAplicacion);
    };
   
    idNotaAlumno3.oninput = ()=>{
        estadoAplicacion.notaAlumno3 = Number(idNotaAlumno3.value) ;
        console.log(estadoAplicacion);
    };

    // on click 
    btnCalcular.onclick = ()=>{
        let notaPromedio = fnPromedio (estadoAplicacion.notaAlumno1,estadoAplicacion.notaAlumno2,estadoAplicacion.notaAlumno3);
         
    

    /*Realizar una arrow function que reciba como parámetro una nota promedio y que según la nota recibida
como parámetro devuelva un texto que diga los siguientes mensajes.
• Si la nota <= 4 debe devolver “Desaprobado”
• Si la nota > 4 y nota <= 7 debe devolver “Aprobado”
• Si la nota >7 y nota <=9 debe devolver “Muy Bueno”
• Si la nota = 10 debe devolver “Excelente”
Nota: Debe Devolver un Texto*/

    
let resultado1 = fnEstadoAlumno(notaPromedio);
//resultado
    resultado.textContent =`el promedio es ${notaPromedio.toFixed(2)} ${resultado1}`;


    };
    //botones guardar/recuperar
    btnGuardar.onclick = ()=>{
        let objetoJSON = JSON.stringify(estadoAplicacion);
        localStorage.setItem("misDatos",objetoJSON);
    }
    btnRecuperar.onclick = ()=>{
        let datosJSON = localStorage.getItem ("misDatos");
        if(datosJSON)
        {
            console.log(datosJSON);
            let objeto = JSON.parse(datosJSON);
            console.log(objeto);
            idNotaAlumno1.value = objeto.notaAlumno1;
            idNotaAlumno2.value = objeto.notaAlumno2;
            idNotaAlumno3.value = objeto.notaAlumno3;
        }
    }
        

   
};
