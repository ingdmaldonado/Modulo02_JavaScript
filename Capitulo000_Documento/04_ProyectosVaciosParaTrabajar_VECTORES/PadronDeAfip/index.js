
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

        setCuitIngresado(newValue)
        {
            this.cuitIngresado = newValue;
        } ,

        setNombreIngresado(newValue)
        {
            this.nombreIngresado = newValue.toUpperCase();
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


const fnGenerarFilasDeTabla = (pVector) =>
    {
        const filasDeTabla = pVector.map(element => 
            {
                let filaDeTabla = document.createElement("tr");

                let celda1 = document.createElement("td");
                let celda2 = document.createElement("td");

                celda1.textContent = element.PadronAFIPCUIT;
                celda2.textContent = element.PadronAFIPDenominacion;

                filaDeTabla.appendChild(celda1);
                filaDeTabla.appendChild(celda2);

                return filaDeTabla;

            })

        console.log(filasDeTabla);

        return filasDeTabla;
    }


const fnAgregarFilasATabla = (pFilas,pCuerpoDeTabla) =>
    {
        pCuerpoDeTabla.innerHTML = "";
        pFilas.forEach(element => pCuerpoDeTabla.appendChild(element));
    }


/* (01) Manejo del Evento load, principal de la página */
window.addEventListener("load",()=>
    {

        /* (02) Captura de los elementos/objetos del Documento HTML */
        const idCuitIngresado = document.querySelector("#idCuitIngresado");
        const idBtnBuscarPorCuit = document.querySelector("#idBtnBuscarPorCuit");

        const idNombreIngresado = document.querySelector("#idNombreIngresado");
        const idBtnBuscarPorNombre = document.querySelector("#idBtnBuscarPorNombre");

        const idCuerpoTabla = document.querySelector("#idCuerpoTabla");


        console.log(idCuitIngresado);
        console.log(idBtnBuscarPorCuit);
        console.log(idNombreIngresado);
        console.log(idBtnBuscarPorNombre);
        console.log(idCuerpoTabla);

        /* (03) Incorporación de Eventos del DOM a los botones ó elementos 
        con los que necesito interactuar */

        idCuitIngresado.addEventListener("input",()=>
            {
                estadoAplicacion.setCuitIngresado(idCuitIngresado.value);
            })

        idBtnBuscarPorCuit.addEventListener("click",()=>
            {
                console.log(estadoAplicacion);

                if(fnValidarCuit(estadoAplicacion.cuitIngresado))
                {
                    console.log("El Cuit Ingresado es valido");
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
        

        idBtnBuscarPorNombre.addEventListener("click",()=>
            {
               
                if(estadoAplicacion.nombreIngresado.trim().length > 0)
                {
                    const vectorFiltrado = fnFiltrarPorNombre(estadoAplicacion.nombreIngresado);

                    const filasDeTabla = fnGenerarFilasDeTabla(vectorFiltrado);

                    fnAgregarFilasATabla(filasDeTabla,idCuerpoTabla);

                   // console.log(filasDeTabla);
                }
                else
                {
                    console.log("ingrese un nombre para buscar");
                }
            })
        

        console.log("andando");

    })