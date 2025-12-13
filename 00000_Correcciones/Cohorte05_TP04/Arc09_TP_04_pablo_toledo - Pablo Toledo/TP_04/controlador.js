//Importo los datos de datos.js
import {cohorte01,cohorte02,cohorte03,cohorte04,botones,cohortes} from "./datos.js";
//Importo Funciones de modelo.js
import {fnMuestraListadoCohortes,fnMuestraVectorAlumnos,filtrarAprobados,filtrarDesaprobados, ordenarPorNota,buscarAlumnoPorDni, contarAprobadosIF, contarAprobadosTernario,fnTitulo,ocultar} from "./modelo.js";



window.onload = () => {

    console.log("Sistema Funcionando");

    // Leo los Botones
    const idContenedorDeBotones = document.querySelector(`#idContenedorDeBotones`);
    const idResultados = document.querySelector(`#idResultados`);
    const  idSelectCohortes = document.querySelector(`#idSelectCohortes`);
    const idTitulo = document.querySelector(`#idTitulo`);

    ocultar();
    // Uno todas las Cohortes para luego procesarlas
    const todasLasCohortes = [...cohorte01,...cohorte02,...cohorte03,...cohorte04];

    //muestra los botones de todos los ejercicios
    botones.forEach(botoness => {    
        const {id,detalle} = botoness;
            const botonDetalle = document.createElement("button");
            botonDetalle.textContent = detalle;
            botonDetalle.onclick = () => {
                switch (id) {
                    case 1:
                        /* 
                            1)
                            Realice una función, que reciba como parámetro un vector de alumnos (puede ser de cualquier cohorte)
                            los recorra con un forEach y muestre por consola, el apellido y el nombre.
                            Invoque esa misma función, pasándole como parámetro el vector de la cohorte01, 
                            luego el vector de la cohorte02 y así sucesivamente hasta la cuarta cohorte.
                        */

                        idSelectCohortes.style.display = idSelectCohortes.style.display == 'block' ? 'none' : 'block';
                        fnTitulo("Listado de Alumnos");
                        fnMuestraListadoCohortes(cohortes);
                        break;    
                    case 2:
                        /*
                            2)
                            El profesor desea unificar todos los alumnos en un solo vector, 
                            dado que estructuralmente son iguales, utilice spread operator para “unificar el contenido de las cuatro cohortes” 
                            en un solo vector. Muestre por consola el vector resultante.
                        */  
                        ocultar();
                        fnTitulo("Listado de Alumnos de todas las Cohortes");                    
                        fnMuestraVectorAlumnos(todasLasCohortes,["dni","apellido", "nombre","nota_final"]);
                        break;    

                    case 3:
                        /*
                            Sobre los datos unificados, cree dos vectores nuevos, uno puede llamarse alumnosAprobados 
                            y el otro alumnosDesaprobados.
                            Para crear el vector de alumnos aprobados, aplique el método filter sobre el 
                            Vector que tiene todos los alumnos cuando la nota > 5;
                            Para crear el vector de alumnos desaprobados, aplique el método filter 
                            sobre el Vector que tiene todos los alumnos cuando la nota <= 5;
                        */

                        fnTitulo("Listado de Alumnos APROBADOS");  

                        let aprobados = filtrarAprobados(todasLasCohortes);
                        
                        fnMuestraVectorAlumnos(aprobados,["dni","apellido", "nombre","nota_final"]);
                        fnTitulo(`Listado de Alumnos ${idSelectCohortes.textContent}` );
                        
                        break;                                          
                   case 4:
                        fnTitulo("Listado de Alumnos DESAPROBADOS");  
                        let desaprobados = filtrarDesaprobados(todasLasCohortes);
                        fnMuestraVectorAlumnos(desaprobados,["dni","apellido", "nombre","nota_final"]);
                        break;
                    case 5:
                        /*
                        Sobre el vector Total de alumnos (cuatro cohortes), 
                        aplique el método “sort” = ordenar 
                        y ordene los datos de todos esos alumnos por nota de menor a mayor.
                        */
                        fnTitulo("Listado de Alumnos Ordenados por Nota");  
                        let ordenados = ordenarPorNota(todasLasCohortes);
                        fnMuestraVectorAlumnos(ordenados,["dni","apellido", "nombre","nota_final"]);
    
                        break;                      
                    case 6:
                        /*
                        Sobre el vector Total de alumnos, realice una búsqueda de los siguientes alumnos
                         aplicando el método “find” 
                         que tienen los vectores incorporados y busque algún alumno por su “dni”. El que ud. Desee.
                        */
                         
                        const dni = prompt("Ingrese DNI del Alumno a buscar:");
                        const resultado = buscarAlumnoPorDni(todasLasCohortes, dni);
                        if (resultado.encontrado) {
                                fnTitulo("Datos Alumnos Encontrado");
                                console.log(resultado.mensaje);
                                console.log(resultado.datos);
                                fnMuestraVectorAlumnos(resultado.datos,["dni","apellido", "nombre","nota_final"]);      
                            } else {
                                console.warn(resultado.mensaje);
                                alert (resultado.mensaje);
                            }
  
                        break;                      
                    case 7:
                           /*
                           Sobre el vector Total de alumnos, deseamos “contabilizar” la cantidad de alumnos aprobados, 
                           es decir la cantidad de alumnos que tienen nota > 5; 
                           para ello utilicen el método reduce que tienen los vectores incorporados para contabilizar. 
                           Realice esto de dos formas
                                    a. Usando una arrow function que a dentro utilice un condicional 
                                        if/else para saber si la nota > 5 y por lo tanto contabilizar los aprobados;
                                    b.  Usando una arrow function que a dentro utilice un operador ternario para saber
                                        si la nota > 5 y por lo tanto contabilizar los aprobados;
                            Ambas formas deben llegar al mismo resultado, únicamente que se implementaron de dos formas diferentes.
                           */
                            fnTitulo("Listado Alumnos Aprobados con Totales");
                            const AprobadosIF = contarAprobadosIF(todasLasCohortes);
                            const AprobadosTE = contarAprobadosTernario(todasLasCohortes);  
                            console.log(`Cantidad Alumnos Aprobados (Calculo IF): ${AprobadosIF}`);
                            console.log(`Cantidad Alumnos Aprobados (Calculo TERNARIO) : ${AprobadosTE}`);
                            fnTitulo(`Listado Alumnos Aprobados - Total Encontrados : ${AprobadosIF}`);
                             let aprobados1 = filtrarAprobados(todasLasCohortes);
                                           
                            fnMuestraVectorAlumnos(aprobados1,["dni","apellido", "nombre","nota_final"]);
                                                        
                        break;                     
    
                };
            };
            
    
           idContenedorDeBotones.appendChild(botonDetalle);  
            
           });  
          
   
}

