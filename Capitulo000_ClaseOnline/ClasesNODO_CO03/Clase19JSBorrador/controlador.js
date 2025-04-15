
window.addEventListener("load",()=>
    {
        console.log("running");

        /*********** OBJETOS LITERALES **********/

        // ALUMNO 1: LOPEZ JORGE RAFAEL
        const nota1 = { dni: 27272421, apellido: "LOPEZ", nombre: "JORGE RAFAEL", modulo: "HTML Y CSS", nota: 8 };
        const nota2 = { dni: 27272421, apellido: "LOPEZ", nombre: "JORGE RAFAEL", modulo: "JAVASCRIPT", nota: 9 };
        const nota3 = { dni: 27272421, apellido: "LOPEZ", nombre: "JORGE RAFAEL", modulo: "BACKEND NODE JS", nota: 7.5 };
        const nota4 = { dni: 27272421, apellido: "LOPEZ", nombre: "JORGE RAFAEL", modulo: "FRONT END - REACT", nota: 3 };
    
        // ALUMNO 2: GARCIA MARIA LAURA
        const nota5 = { dni: 29456372, apellido: "GARCIA", nombre: "MARIA LAURA", modulo: "HTML Y CSS", nota: 10 };
        const nota6 = { dni: 29456372, apellido: "GARCIA", nombre: "MARIA LAURA", modulo: "JAVASCRIPT", nota: 9.5 };
        const nota7 = { dni: 29456372, apellido: "GARCIA", nombre: "MARIA LAURA", modulo: "BACKEND NODE JS", nota: 8 };
        const nota8 = { dni: 29456372, apellido: "GARCIA", nombre: "MARIA LAURA", modulo: "FRONT END - REACT", nota: 9 };

        // ALUMNO 3: RAMIREZ MIGUEL ANGEL
        const nota9 = { dni: 30987156, apellido: "RAMIREZ", nombre: "MIGUEL ANGEL", modulo: "HTML Y CSS", nota: 6 };
        const nota10 = { dni: 30987156, apellido: "RAMIREZ", nombre: "MIGUEL ANGEL", modulo: "JAVASCRIPT", nota: 4 };
        const nota11 = { dni: 30987156, apellido: "RAMIREZ", nombre: "MIGUEL ANGEL", modulo: "BACKEND NODE JS", nota: 5 };
        const nota12 = { dni: 30987156, apellido: "RAMIREZ", nombre: "MIGUEL ANGEL", modulo: "FRONT END - REACT", nota: 4.5 };

        console.log(nota1);
        console.log(nota2);

        /************** VECTORES DE OBJETOS LITERALES *************/

        const vectorDeAlumnos = [nota1,nota2,nota3,nota4,nota5,nota6,nota7,nota8,nota9,nota10,nota11,nota12];
        console.log(vectorDeAlumnos);

        /********************************************************************/
        /******************** (01) - RECORRIDO CON forEach ******************/
        /********************************************************************/

        vectorDeAlumnos.forEach((notaAlumno,indice)=>{
            console.log(`indice ${indice} - apellido: ${notaAlumno.apellido} nombre: ${notaAlumno.nombre} - nota:${notaAlumno.nota}`);
        })

        console.log(`----------------------------`);

        vectorDeAlumnos.forEach(notaAlumno => 
            {
                console.log(`apellido: ${notaAlumno.apellido} nombre: ${notaAlumno.nombre} - nota:${notaAlumno.nota}`);
            })

        /****************************************************************************/
        /**************** (02) - MOSTRAR POR CONSOLA que desaprobaron algún MÓDULO  */
        /****************************************************************************/

        console.log(`----------------------------`);

        // forma completa -- con una arrow function completa 
        vectorDeAlumnos.forEach(notaAlumno => 
            {
                if(notaAlumno.nota <= 4)
                {
                    console.log(notaAlumno);
                }
            })

        console.log(`----------------------------`);

        // forma corta - con un arrow function corta //
        vectorDeAlumnos.forEach(notaAlumno => notaAlumno.nota <= 4 ? console.log(notaAlumno):'');
       
        /**********************************************************************************/
        /**************** (03) - CONTABILIZAR CUANTOS ALUMNOS APROBARON EL PRIMER MÓDULO  */
        /**********************************************************************************/

        let contadorDesaprobaronModulo02 = 0;
        let contadorAprobaronModulo02 = 0;
        vectorDeAlumnos.forEach(notaAlumno => 
            {
                if(notaAlumno.modulo === 'JAVASCRIPT')
                {
                    if(notaAlumno.nota >= 4)
                    {
                        contadorAprobaronModulo02++;
                    }
                    else
                    {
                        contadorDesaprobaronModulo02++;
                    }                   
                }   
            })

        console.log(`Módulo 02 - Aprobados: ${contadorAprobaronModulo02} - Desaprobados: ${contadorDesaprobaronModulo02}`);


    })