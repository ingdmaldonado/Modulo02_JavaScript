
import vectorContribuyentes from "./Datos/VectorContribuyentes_10000.js";

/* (04) Declaro una arrow function 
y la almaceno en una constante para poder
llamarla posteriormente. como recibe un solo
parametro no necesita los parentesis () */

const fnValidarCuit = cuit =>
    {
        return cuit.length === 11 ? true:false
    }



/* (03) Defino el Estado de la aplicación. me
creo un objeto (LITERAL) que me permita almacenar el estado ó valor
de cada input de la interfaz. la idea es mantener un objeto
globalizado donde esté actualizado cada valor.
*/

const estadoAplicacion = 
    {
        cuitIngresado:"",
        nombreIngresado:"",
        habilitarBusquedaProgresiva:false,
        filasVisiblesDeTabla:[],

        setCuitIngresado(newValue)
        {
            this.cuitIngresado = newValue;
        } ,

        setNombreIngresado(newValue)
        {
            this.nombreIngresado = newValue.toUpperCase();
        },

        sethabilitarBusquedaProgresiva(newValue)
        {
            this.habilitarBusquedaProgresiva = newValue;
        },

        setfilasVisiblesDeTabla(newValue)
        {
            this.filasVisiblesDeTabla = newValue;
        }
    }


/* () Vamos a Realizar Busquedas por Nombre 
*/

const fnFiltrarPorNombre = (pNombre)=>
    {
        const vectorFiltrado = vectorContribuyentes.filter(element => element.PadronAFIPDenominacion.includes(pNombre));

        //console.log(vectorFiltrado);

        return (vectorFiltrado);
    }

const fnFiltrarPorCuit = (pCuit) =>
    {
        const vectorFiltrado = vectorContribuyentes.filter(element => element.PadronAFIPCUIT === pCuit);

        return (vectorFiltrado);

    }

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

const fnLimpiarCuerpoDeTabla = (pCuerpoDeTabla)=>
    {
        pCuerpoDeTabla.innerHTML = "";
    }

const fnAgregarFilasATabla = (pFilas,pCuerpoDeTabla) =>
    {
        fnLimpiarCuerpoDeTabla(pCuerpoDeTabla);
        pFilas.forEach(element => pCuerpoDeTabla.appendChild(element.filaDeTabla));
    }


/* (01) Manejo del Evento load, principal de la página */
window.addEventListener("load",()=>
    {

        /* (02) Captura de los elementos/objetos del Documento HTML */
        const idCuitIngresado = document.querySelector("#idCuitIngresado");
        const idBtnBuscarPorCuit = document.querySelector("#idBtnBuscarPorCuit");

        const idNombreIngresado = document.querySelector("#idNombreIngresado");
        const idBtnBuscarPorNombre = document.querySelector("#idBtnBuscarPorNombre");
        const idCheckHabilitarBusquedaProgresiva = document.querySelector("#idCheckHabilitarBusquedaProgresiva");

        const idBtnVerClientesSeleccionados = document.querySelector("#idBtnVerClientesSeleccionados");
        const idCuerpoTabla = document.querySelector("#idCuerpoTabla");

        console.log(idCuitIngresado);
        console.log(idBtnBuscarPorCuit);
        console.log(idNombreIngresado);
        console.log(idBtnBuscarPorNombre);
        console.log(idCuerpoTabla);
        console.log(idCheckHabilitarBusquedaProgresiva);

        /* (03) Incorporación de Eventos del DOM a los botones ó elementos 
        con los que necesito interactuar */

        idCuitIngresado.addEventListener("input",()=>
            {
                estadoAplicacion.setCuitIngresado(idCuitIngresado.value.trim());
            })


        idBtnBuscarPorCuit.addEventListener("click",()=>
            {
                console.log(estadoAplicacion);

                if(fnValidarCuit(estadoAplicacion.cuitIngresado))
                {
                    console.log("El Cuit Ingresado es valido");

                    const vectorFiltrado = fnFiltrarPorCuit(estadoAplicacion.cuitIngresado);          
                  
                    const filasDeTabla = fnGenerarFilasDeTabla(vectorFiltrado);                   
 
                    fnAgregarFilasATabla(filasDeTabla,idCuerpoTabla); 

                }
                else
                {
                    alert("el cuit ingresado es invalido");
                }
            })        
        
        idNombreIngresado.addEventListener("input",()=>
            {
                estadoAplicacion.setNombreIngresado(idNombreIngresado.value);
            })

        idCheckHabilitarBusquedaProgresiva.addEventListener("change",()=>
            {

                estadoAplicacion.sethabilitarBusquedaProgresiva(idCheckHabilitarBusquedaProgresiva.checked);
               
            })
        

        idBtnBuscarPorNombre.addEventListener("click",()=>
            {
               
                if(estadoAplicacion.nombreIngresado.trim().length > 0)
                {
                    const vectorFiltrado = fnFiltrarPorNombre(estadoAplicacion.nombreIngresado);

                    const filasDeTabla = fnGenerarFilasDeTabla(vectorFiltrado);         
                    
                    estadoAplicacion.setfilasVisiblesDeTabla(filasDeTabla);

                    fnAgregarFilasATabla(filasDeTabla,idCuerpoTabla);                   
                }
                else
                {
                    console.log("ingrese un nombre para buscar");
                }
            })

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

        idNombreIngresado.addEventListener("input",()=>
            {               

                if ((estadoAplicacion.habilitarBusquedaProgresiva) && (estadoAplicacion.nombreIngresado.trim().length > 0))
                {
                   
                    const vectorFiltrado = fnFiltrarPorNombre(estadoAplicacion.nombreIngresado);          
                  
                    const filasDeTabla = fnGenerarFilasDeTabla(vectorFiltrado);     
                    
                
 
                     fnAgregarFilasATabla(filasDeTabla,idCuerpoTabla); 

                }              

            })
        
        console.log("andando");

    })