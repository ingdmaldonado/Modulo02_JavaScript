
/*----------------------------------------------*/
/* (1ro:) importamos el Vector desde un módulo */
/*----------------------------------------------*/
import vectorContribuyentes from "./Datos/VectorContribuyentes_10000.js";


/*-----------------------------------------------------------------------*/
/* (4to) Voy a crear un objeto literal que contenga el estado
de la aplicación y para acceder a los atributos crearemos metodos
set que permitan establecer sus valores. esto es respetando las
buenas prácticas*/
/*------------------------------------------------------------------------*/

const estadoAplicacion = 
    {
        // atributos del objeto literal
        cuitIngresado:"",
        nombreIngresado:"",
        habilitarBusquedaProgresiva:false,
        filasVisiblesDeTabla:[],

        // este método permite recibir un valor nuevo y asignarlo al atributo CuitIngresado //
        setCuitIngresado(newValue)
        {
            this.cuitIngresado = newValue;
        } ,

        // este método permite recibir un valor nuevo y asignarlo al atributo NombreIngresado
        setNombreIngresado(newValue)
        {
            this.nombreIngresado = newValue.toUpperCase();
        },

        // este método permite recibir un valor nuevo y asignarlo al atributo HabilitarBusquedaProgresiva
        sethabilitarBusquedaProgresiva(newValue)
        {
            this.habilitarBusquedaProgresiva = newValue;
        },

        // este método permite recibir un valor nuevo y asignarlo al atributo filasVisiblesDeLaTabla
        setfilasVisiblesDeTabla(newValue)
        {
            this.filasVisiblesDeTabla = newValue;
        }
    }



   //(7.1) Realizamos una función que busque y filtre en el vector los contribuyentes que contengan el nombre
    const fnFiltrarPorNombre = (pNombre)=>
        {
            const vectorFiltrado = vectorContribuyentes.filter(element => element.PadronAFIPDenominacion.includes(pNombre));

            //console.log(vectorFiltrado);

            return (vectorFiltrado);
        }


     //(7.2) Realizamos una función que recibe como parametro un vector filtrado y genera las filas de la tabla 
    const fnGenerarFilasDeTabla = (pVector) =>
        {
            let objetoLiteral = {};

            const filasDeTabla = pVector.map(element => 
                {
                    let filaDeTabla = document.createElement("tr");
                    let celda1 = document.createElement("td");

                    let celda2 = document.createElement("td");

                    let celda3 = document.createElement("td");
                    let checkBox = document.createElement("input");
                    checkBox.type = "checkbox";
                    celda3.appendChild(checkBox);

                    let celda4 = document.createElement("td");        
                    
                    let imgDinamica = document.createElement("img");
                    imgDinamica.style.width = "24px";
                    imgDinamica.style.height = "24px";
                    imgDinamica.src = "./verdatos.png";
                    

                    imgDinamica.addEventListener("click",()=>
                        {
                            alert("aqui deberíamos abrir una pantalla popup y mostrar el resto de los datos del cliente");
                        })

                    celda4.appendChild(imgDinamica);

                    celda1.textContent = element.PadronAFIPCUIT;
                    celda2.textContent = element.PadronAFIPDenominacion;                

                    filaDeTabla.appendChild(celda1);
                    filaDeTabla.appendChild(celda2);
                    filaDeTabla.appendChild(celda3);
                    filaDeTabla.appendChild(celda4);

                    objetoLiteral = 
                    {
                        ... element,
                        filaDeTabla
                    }

                    return objetoLiteral;

                })

            return filasDeTabla;
        }



    //(7.4) Realizamos una función que toma las filas de la tabla y las dibuja en el cuerpo de la tabla 
    const fnAgregarFilasATabla = (pFilas,pCuerpoDeTabla) =>
        {
            fnLimpiarCuerpoDeTabla(pCuerpoDeTabla);
            pFilas.forEach(element => pCuerpoDeTabla.appendChild(element.filaDeTabla));
        }

    const fnLimpiarCuerpoDeTabla = (pCuerpoDeTabla)=>
        {
            pCuerpoDeTabla.innerHTML = "";
        }

    
    // (8.0) aqui realizamos una función para que valide el cuit //
    const fnValidarCuit = cuit =>
        {
            return cuit.length === 11 ? true:false
        }
    
    // (8.1) Realizamos una función para filtrar por Cuit //
    const fnFiltrarPorCuit = (pCuit) =>
    {
        const vectorFiltrado = vectorContribuyentes.filter(element => element.PadronAFIPCUIT === pCuit);
        return (vectorFiltrado);
    }


/*-------------------------------------------------------*/
/* (2do:) Manejo del Evento load, principal de la página */
/*--------------------------------------------------------*/

window.addEventListener("load",()=>
    {
        console.log("andando");

        /*----------------------------------------------------------------------*/
        /*(3ro:) Me vinculo a los elementos/objetos del DOM mediante constantes */
        /*----------------------------------------------------------------------*/

        // BLOQUE 01 - BUSQUEDA POR CUIT
            const idCuitIngresado = document.querySelector("#idCuitIngresado");
            const idBtnBuscarPorCuit = document.querySelector("#idBtnBuscarPorCuit");

        // BLOQUE 02 - BUSQUEDA POR NOMBRE
            const idNombreIngresado = document.querySelector("#idNombreIngresado");
            const idBtnBuscarPorNombre = document.querySelector("#idBtnBuscarPorNombre");
            const idCheckHabilitarBusquedaProgresiva = document.querySelector("#idCheckHabilitarBusquedaProgresiva");

        // BLOQUE 03 - LISTADO DE CLIENTES
            const idBtnVerClientesSeleccionados = document.querySelector("#idBtnVerClientesSeleccionados");
            const idCuerpoTabla = document.querySelector("#idCuerpoTabla");

        // visualizamos por consola los elementos/objetos //
        console.log(idCuitIngresado);
        console.log(idBtnBuscarPorCuit);
        console.log(idNombreIngresado);
        console.log(idBtnBuscarPorNombre);
        console.log(idCuerpoTabla);
        console.log(idCheckHabilitarBusquedaProgresiva);

        /*----------------------------------------------------------------------*/
        /* (5to:) Incorporación de Eventos del DOM a los botones ó elementos 
        con los que necesito interactuar. principalmente para obtener el estado
        de la aplicación */
        /*----------------------------------------------------------------------*/

            // cuando ingresen un cuit debo actualizar ese valor en el Estado de la aplicación //
            idCuitIngresado.addEventListener("input",()=>
                {
                    estadoAplicacion.setCuitIngresado(idCuitIngresado.value.trim());
                })

            // cuando ingresen un nombre debo actualizar ese valor en el Estado de la aplicación //
            idNombreIngresado.addEventListener("input",()=>
                {
                    estadoAplicacion.setNombreIngresado(idNombreIngresado.value);
                })

            // cuando presionen habilitar busqueda proegresiva, guardar ese valor en el Estado de la aplicación //
            idCheckHabilitarBusquedaProgresiva.addEventListener("change",()=>
                {
                    estadoAplicacion.sethabilitarBusquedaProgresiva(idCheckHabilitarBusquedaProgresiva.checked);
                })


        /*------------------------------------------------------------------------------*/
        /* (6to:) Vamos a dejar Presentados los Eventos y comportamiento de los Botones */
        /*------------------------------------------------------------------------------*/

            /*-------------------------------------------------------*/
            /* (7mo:) Vamos a Trabajar sobre la Busqueda por Nombre  */
            /*-------------------------------------------------------*/

              idBtnBuscarPorNombre.addEventListener("click",()=>
                {
                
                    console.log(estadoAplicacion);

                    if(estadoAplicacion.nombreIngresado.trim().length > 0)
                    {
                        //(7.1) Realizamos una función que busque y filtre en el vector los contribuyentes que contengan el nombre
                        const vectorFiltrado = fnFiltrarPorNombre(estadoAplicacion.nombreIngresado);

                        //(7.2) Realizamos una función que recibe como parametro un vector filtrado y genera las filas de la tabla 
                        const filasDeTabla = fnGenerarFilasDeTabla(vectorFiltrado);         
                        
                        //(7.3) Guardo esas filas seleccionadas en el estado de la aplicación 
                        estadoAplicacion.setfilasVisiblesDeTabla(filasDeTabla);

                        //(7.4) Realizamos una función que toma las filas de la tabla y las dibuja en el cuerpo de la tabla 
                        fnAgregarFilasATabla(filasDeTabla,idCuerpoTabla);                   
                    }
                    else
                    {
                        console.log("ingrese un nombre para buscar");
                    }
                })

            /*-------------------------------------------------------*/
            /* (8vo:) Vamos a Trabajar sobre la Busqueda por Nombre  */
            /*-------------------------------------------------------*/

            idBtnBuscarPorCuit.addEventListener("click",()=>
                {
                    console.log(estadoAplicacion);

                    // (8.0) aqui realizamos una función para que valide el cuit //
                    if(fnValidarCuit(estadoAplicacion.cuitIngresado))
                    {
                        console.log("El Cuit Ingresado es valido");

                        // (8.1) Realizamos una función para filtrar por Cuit //
                        const vectorFiltrado = fnFiltrarPorCuit(estadoAplicacion.cuitIngresado);          
                    
                        // (8.2) Se la pasamos a la función que genera las filas de la tabla //
                        const filasDeTabla = fnGenerarFilasDeTabla(vectorFiltrado);            
                        
                        // (8.3) Guardo esas filas seleccionadas en el estado de la aplicación 
                        estadoAplicacion.setfilasVisiblesDeTabla(filasDeTabla);
    
                        // (8.4) Invocamos la función que ya esta hecha y dibuja esas filas en la tabla */
                        fnAgregarFilasATabla(filasDeTabla,idCuerpoTabla); 

                    }
                    else
                    {
                        alert("el cuit ingresado es invalido");
                    }
                })        
        
       
            /*-------------------------------------------------------------------*/
            /*(9no) Busqueda Progresiva a medida que se va escribiendo el nombre */
            /*-------------------------------------------------------------------*/


             idNombreIngresado.addEventListener("input",()=>
                {               

                    if ((estadoAplicacion.habilitarBusquedaProgresiva) && (estadoAplicacion.nombreIngresado.trim().length > 0))
                    {
                      

                        //(7.1) Realizamos una función que busque y filtre en el vector los contribuyentes que contengan el nombre
                        const vectorFiltrado = fnFiltrarPorNombre(estadoAplicacion.nombreIngresado);

                        //(7.2) Realizamos una función que recibe como parametro un vector filtrado y genera las filas de la tabla 
                        const filasDeTabla = fnGenerarFilasDeTabla(vectorFiltrado);         
                          
                        //(7.3) Guardo esas filas seleccionadas en el estado de la aplicación 
                        estadoAplicacion.setfilasVisiblesDeTabla(filasDeTabla);
  
                        //(7.4) Realizamos una función que toma las filas de la tabla y las dibuja en el cuerpo de la tabla 
                        fnAgregarFilasATabla(filasDeTabla,idCuerpoTabla);                  

                }              

            })
          
            /*-------------------------------------------------------------------*/
            /*(10mo) Ver Clientes Seleccionados                                  */
            /*-------------------------------------------------------------------*/
            
            idBtnVerClientesSeleccionados.addEventListener("click",()=>
                {
                    // porque no me muestra esto ?. //
                    estadoAplicacion.filasVisiblesDeTabla.forEach(({filaDeTabla}) => 
                        {                       
                            // Acceder directamente al checkbox en la tercera celda (índice 2)
                            const checkBox = filaDeTabla.cells[2].children[0]; // El checkbox es el primer hijo de la celda

                            checkBox.checked ? console.log(filaDeTabla):'';

                        });
                })

    })