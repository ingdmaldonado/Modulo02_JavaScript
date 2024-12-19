
import PadronElectoral from "./PadronParte07.js";

const EstadoAplicacion = 
{
    dniBusqueda:"",
    ApellidoYNombre:""
}

const fnFiltrarPorDni = (DNI,PadronElectoral)=>
    {
        const datosFiltrados = PadronElectoral.filter(element => element.NUMDNI === DNI);

        return datosFiltrados;
    }

const fnFiltrarPorApellidoYNombre = (ApellidoYNombre,PadronElectoral)=>
    {
        const datosFiltrados = PadronElectoral.filter(element => element.APELLIDOYNOMBRE.includes(ApellidoYNombre));

        return datosFiltrados;
    }

const fnGenerarFilas = PadronElectoralFiltrado =>
    {
        const filasGeneradas = PadronElectoralFiltrado.map(element => 
            {
                let filaDeTabla = document.createElement("tr");

                /* ID */
                let celda1 = document.createElement("td");
                celda1.textContent = element.ID;

                /* DNI */
                let celda2 = document.createElement("td");
                celda2.textContent = element.NUMDNI;

                /* APELLIDOS y NOMBRES*/
                let celda3 = document.createElement("td");
                celda3.textContent = element.APELLIDOYNOMBRE;

                /* SELECCIONAR */
                let celda4 = document.createElement("td");
                let checkBoxDinamico = document.createElement("input");
                checkBoxDinamico.type = "checkbox";
                celda4.appendChild(checkBoxDinamico);

                /* BOTON VER DATOS */
                let celda5 = document.createElement("td");
                let botonDinamico = document.createElement("input");
                botonDinamico.type = "button";
                botonDinamico.value = "Ver Datos !";

                botonDinamico.addEventListener("click",()=>
                    {
                        console.log(element);

                        console.log(element.NOMBRECIRCUITO);
                        console.log(element.NOMBREMUNICIPIO);
                        console.log(element.MESA);
                        console.log(element.ORDEN);
                        console.log(element.ESCUELA);
                        console.log(element.DIRECCIONESCUELA);

                        idNOMBREMUNICIPIO.textContent = `MUNICIPIO: ${element.NOMBREMUNICIPIO}`;
                        idNOMBRECIRCUITO.textContent = `CIRCUITO: ${element.NOMBRECIRCUITO}`;
                        idMESA.textContent = `MESA: ${element.MESA}`;
                        idORDEN.textContent = `ORDEN: ${element.ORDEN}`;
                        idESCUELA.textContent = `ESCUELA: ${element.ESCUELA}`;
                        idDIRECCIONESCUELA.textContent = `DIRECCION ESCUELA: ${element.DIRECCIONESCUELA}`;

                        idPopup.style.display = "block";
                    })

                celda5.appendChild(botonDinamico);

              
                
                filaDeTabla.appendChild(celda1);
                filaDeTabla.appendChild(celda2);
                filaDeTabla.appendChild(celda3);
                filaDeTabla.appendChild(celda4);
                filaDeTabla.appendChild(celda5);

                return filaDeTabla;


            })

        return filasGeneradas;

    }

const fnRenderizarFilas = (filasGeneradas,idCuerpoDeTabla) => 
    {
        idCuerpoDeTabla.innerHTML = "";
        filasGeneradas.forEach(element => 
            {
                idCuerpoDeTabla.appendChild(element);
            })

    }

window.addEventListener("load",()=>
    {
        console.log("running");

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


        console.log(idNOMBREMUNICIPIO);
        console.log(idNOMBRECIRCUITO);
        console.log(idMESA);
        console.log(idORDEN);
        console.log(idESCUELA);
        console.log(idDIRECCIONESCUELA);


        idDniBusqueda.addEventListener("input",()=>
            {
                EstadoAplicacion.dniBusqueda = (idDniBusqueda.value);

                console.log(EstadoAplicacion);
            })


        idBtnBuscar.addEventListener("click",()=>{

            let resultado = fnFiltrarPorDni(EstadoAplicacion.dniBusqueda,PadronElectoral);

            let filasDeTabla = fnGenerarFilas(resultado);

            fnRenderizarFilas(filasDeTabla,idCuerpoDeTabla);

            console.log(resultado);
            console.log(filasDeTabla);

        })

        idApellidoYNombre.addEventListener("input",()=>
            {
                EstadoAplicacion.ApellidoYNombre = idApellidoYNombre.value;
                console.log(EstadoAplicacion);
            })

        idBtnBuscarPorApellidoYNombre.addEventListener("click",()=>{

            let resultado = fnFiltrarPorApellidoYNombre(EstadoAplicacion.ApellidoYNombre,PadronElectoral);

            let filasDeTabla = fnGenerarFilas(resultado);

            fnRenderizarFilas(filasDeTabla,idCuerpoDeTabla);

            console.log(resultado);
            console.log(filasDeTabla);
            console.log(resultado);


        })


    })