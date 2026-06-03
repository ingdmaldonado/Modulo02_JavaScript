import {  cohorte01, 
          cohorte02, 
          cohorte03, 
          cohorte04, 
          fnRecorrerVectorPunto01, 
          fnExpandirVectorPunto02,
          fnCantidadAlumnosAprobadosPunto06_v1,
          fnCantidadAlumnosAprobadosPunto06_v2
       } from './modelo.js'

/*
    Ejercicio Nro. 32: ( spread operator … y métodos de vectores)

    Un profesor de programación tiene 4 curso o cohortes, en donde en cada cohorte existen alumnos diferentes que 
    cursaron su módulo de “fundamentos de programación con JavaScript”, el profesor tiene en un vector diferente los 
    alumnos y sus notas finales del cursado. “Se aprueba con notas > 4”. El listado de alumnos es el siguiente:
*/

window.onload = ()=>{
    
    //---------------------Punto Nro 1---------------------
    const idPunto1 = document.querySelector('#idPunto1');

    idPunto1.onclick = ()=>{
        
        console.log('--------Cohorte 04----------');
        fnRecorrerVectorPunto01(cohorte04);

        //Otras cohortes
        console.log('--------Cohorte 01----------');
        fnRecorrerVectorPunto01(cohorte01);

        console.log('--------Cohorte 02----------');
        fnRecorrerVectorPunto01(cohorte02);

        console.log('--------Cohorte 03----------');
        fnRecorrerVectorPunto01(cohorte03);
    };

    //---------------------Punto Nro 2---------------------
    const idPunto2 = document.querySelector('#idPunto2');

    idPunto2.onclick = ()=>{

        const cohortes = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];

        fnExpandirVectorPunto02(cohortes);
    };

    //---------------------Punto Nro 3---------------------
    const idPunto3 = document.querySelector('#idPunto3');

    idPunto3.onclick = ()=>{

        const cohortes = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];
      
        //ALUMNOS APROBADOS    
        const alumnosAprobados = cohortes.filter(alumno => alumno.nota_final > 5);
        console.log('Alumnos Aprobados');
        
        //Recorremos alumnos aprobados
        alumnosAprobados.forEach(alumnos=>{
            console.log(`Apellido: ${alumnos.apellido} Nombre: ${alumnos.nombre} Nota final: ${alumnos.nota_final}`);

        });
        
        //ALUMNOS DESAPROBADOS
        const alumnosDesaprobados = cohortes.filter(alumno => alumno.nota_final <= 5);
        console.log('Alumnos Desaprobados');

        //Recorremos alumnos desaprobados
        alumnosDesaprobados.forEach(alumnos=>{
            console.log(`Apellido: ${alumnos.apellido} Nombre: ${alumnos.nombre} Nota final: ${alumnos.nota_final}`);
        });
    };

    //---------------------Punto Nro 4---------------------
    const idPunto4 = document.querySelector('#idPunto4');

    idPunto4.onclick = ()=>{

        const cohortes = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];
        
        //console.log([...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04]);
        //Ordenamos las notas del objeto literal
        cohortes.sort((primerElemente, segundoElemento) => primerElemente.nota_final - segundoElemento.nota_final );

        cohortes.forEach(alumnos => console.log(`Apellido: ${alumnos.apellido} Nombre: ${alumnos.nombre} Nota: ${alumnos.nota_final}`));
    };

    //---------------------Punto Nro 5---------------------
    const idPunto5 = document.querySelector('#idPunto5');
    const idBuscar = document.querySelector('#idBuscar');
    const etiquetaValorBuscado = document.querySelector('#etiquetaValorBuscado');

    //Variable con el valor a buscar
    let numeroDNI = 0;
    
    idBuscar.oninput = ()=>{
        numeroDNI = Number(idBuscar.value);
    };

    idPunto5.onclick = ()=>{

        const cohortes = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];
        
        //Generamos la busqueda
        let registroAlumno = cohortes.find(alumno=>Number(alumno.dni) === numeroDNI);
        
        if(registroAlumno)
        {
            etiquetaValorBuscado.textContent = `DNI: ${registroAlumno.dni} - Apellido: ${registroAlumno.apellido} - Nombre: ${registroAlumno.nombre} - Nota: ${registroAlumno.nota_final}`;
        }else
        {
            etiquetaValorBuscado.textContent = 'Registro no encontrado';
        }
        
    };

    //---------------------Punto Nro 6---------------------
    const idPunto6 = document.querySelector('#idPunto6');
    const nroAlumnosAprobadosV1 = document.querySelector('#nroAlumnosAprobadosV1');
    const nroAlumnosAprobadosV2 = document.querySelector('#nroAlumnosAprobadosV2');
    idPunto6.onclick = ()=>{

        const cohortes = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];

        //Version 1 if/else
        let cantidadAlumnosAprobadosv1 = fnCantidadAlumnosAprobadosPunto06_v1(cohortes);

        nroAlumnosAprobadosV1.textContent = `Cantidad de alumnos aprobados con (if/else): ${cantidadAlumnosAprobadosv1}`;

        //Version 2 operador ternario
        let cantidadAlumnosAprobadosv2 = fnCantidadAlumnosAprobadosPunto06_v2(cohortes);

        nroAlumnosAprobadosV2.textContent = `Cantidad de alumnos aprobados con (operador ternario): ${cantidadAlumnosAprobadosv2}`;
    };

};