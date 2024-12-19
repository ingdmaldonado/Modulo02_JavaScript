
import PadronElectoral from "./PadronParte07.js";

const EstadoAplicacion =
    {
        dniBusqueda:"",
        ApellidoYNombre:""
    }

/* esta arrow function. recibe como parametros
el DNI y el PadronElectoral y se encarga de
buscar y filtrar los datos que le pasan por
parametro */

const fnFiltrarPorDni = (DNI,PadronElectoral)=>
    {
        const datosFiltrados 
            = PadronElectoral.filter(element => element.NUMDNI === DNI);

        return datosFiltrados;
    }


/* Esta funcion. es una arrow function.
recibe como parametro un vector filtrado
y a ese vector filtrado, le aplica map
que es una funcion de transformación sobre
esos elementos. es decir convierte datos => a filas

    datos de personas => filas de la tabla

    recorre persona x persona del padron => fila

    1 persona = 1 fila
*/

const fnGenerarFilas = (PadronElectoralFiltrado) =>
    {

        const FilasGeneradas = PadronElectoralFiltrado.map(element => 
            {
                // aqui genero la fila //
                let filaDeTabla = document.createElement("tr");

                // celda1 => (ID) //
                let celda1 = document.createElement("td");
                celda1.textContent = element.ID;

                // celda2 => (NUMDNI) //
                let celda2 = document.createElement("td");
                celda2.textContent = element.NUMDNI;

                // celda3 => (APELLIDOYNOMBRE) //

                let celda3 = document.createElement("td");
                celda3.textContent = element.APELLIDOYNOMBRE;

                // celda4 => CheckBox //

                let celda4 = document.createElement("td");
                let checkBoxDinamico = document.createElement("input");
                checkBoxDinamico.type = "checkbox";
                celda4.appendChild(checkBoxDinamico);

                // celda5 => Button //

                let celda5 = document.createElement("td");
                let botonDinamico = document.createElement("input");
                botonDinamico.type = "button";
                botonDinamico.value = "Ver Datos !";

                botonDinamico.addEventListener("click",()=>
                    {

                        alert(`Sr. Ud. Vota en la Mesa: ${element.MESA} de la Escuela ${element.ESCUELA} en el orden ${element.ORDEN}`);

                    })

                celda5.appendChild(botonDinamico);

                // vamos a agregar las celdas a la fila //
                filaDeTabla.appendChild(celda1);
                filaDeTabla.appendChild(celda2);
                filaDeTabla.appendChild(celda3);
                filaDeTabla.appendChild(celda4);
                filaDeTabla.appendChild(celda5);

                return filaDeTabla;

            })

        return FilasGeneradas;

    }

/* esta función recibe como parametro las filas
generadas por el proceso anterior. que se llama
fnGenerarFilas. y las recorre con un forEach
y mientras las recorre, las agrega a la tabla.
*/

const fnRenderizarFilas = (filasGeneradas,idCuerpoDeTabla)=>
    {
        idCuerpoDeTabla.innerHTML = "";// con esto limpio la tabla

        filasGeneradas.forEach(element => 
            {
                idCuerpoDeTabla.appendChild(element);
            })

    }

/* una función que reciba como parametro
un apellido y nombre, y el padron electoral.
y que filtre los datos que coincidan con 
el apellido y nombre que me estan pasando
por parametro */

const fnFiltrarPorApellidoYNombre = (ApellidoYNombre,PadronElectoral) =>
{
    const datosFiltrados = PadronElectoral.filter(element => element.APELLIDOYNOMBRE.includes(ApellidoYNombre));

    return datosFiltrados;
}


window.addEventListener("load",()=>
    {
        console.log("running");

        console.log(PadronElectoral);

        const idDniBusqueda = document.querySelector("#idDniBusqueda");
        const idBtnBuscar = document.querySelector("#idBtnBuscarPorDni");
        const idCuerpoDeTabla = document.querySelector("#idCuerpoDeTabla");
        const idApellidoYNombre = document.querySelector("#idApellidoYNombre");
        const idBtnBuscarPorApellidoYNombre = document.querySelector("#idBtnBuscarPorApellidoYNombre");

        const idNOMBRECIRCUITO = document.querySelector("#idNOMBRECIRCUITO")
        const idNOMBREMUNICIPIO = document.querySelector("#idNOMBREMUNICIPIO");
        const idMESA = document.querySelector("#idMESA");
        const idORDEN = document.querySelector("#idORDEN");
        const idESCUELA = document.querySelector("#idESCUELA");
        const idDIRECCIONESCUELA = document.querySelector("#idDIRECCIONESCUELA");

        const idPopup = document.querySelector("#idPopup");
        idPopup.style.display = "none";

        document.getElementById("popupOverlay").style.display = "block";

        // Para cerrar el popup y el overlay
        document.getElementById("popupOverlay").addEventListener("click", () => {
            idPopup.style.display = "none";
            document.getElementById("popupOverlay").style.display = "none";
        });

        idDniBusqueda.addEventListener("input",()=>
            {
                /* a medida que ingresa un valor guardarlo en el estado
                de la aplicacion */
                EstadoAplicacion.dniBusqueda = idDniBusqueda.value;
                console.log(EstadoAplicacion);

            })

        idApellidoYNombre.addEventListener("input",()=>
            {
                EstadoAplicacion.ApellidoYNombre = idApellidoYNombre.value;
                console.log(EstadoAplicacion);
            })


        // el click en el boton buscar por DNI
        idBtnBuscar.addEventListener("click",()=>
            {
                // mostrar el estado de la aplicacion
                console.log(EstadoAplicacion.dniBusqueda);

                // llamar a la funcion fnFiltrarPorDni
                let resultado = fnFiltrarPorDni(EstadoAplicacion.dniBusqueda,PadronElectoral);

                // visualizar el resultado de la función
                console.log(resultado);

                // llamar a la función que toma los datos filtrados
                // y los convierte en filas
                let filasDeTabla = fnGenerarFilas(resultado);

                console.log(filasDeTabla);

                // esta función se encarga de insertar las filas en la tabla 
                fnRenderizarFilas(filasDeTabla,idCuerpoDeTabla);

            })

        
        idBtnBuscarPorApellidoYNombre.addEventListener("click",()=>
            {
                // mostrar el apellido ingresado 
                console.log(EstadoAplicacion.ApellidoYNombre);

                // mostrar los datos filtrados
                let datosFiltrados = fnFiltrarPorApellidoYNombre(EstadoAplicacion.ApellidoYNombre,PadronElectoral);

                // a partir de los datos filtrados generamos las filas
                let filasDeTabla = fnGenerarFilas(datosFiltrados);

                console.log(filasDeTabla);

                // esta función se encarga de insertar las filas en la tabla 
                fnRenderizarFilas(filasDeTabla,idCuerpoDeTabla);

                //console.log(datosFiltrados);


            })

    })