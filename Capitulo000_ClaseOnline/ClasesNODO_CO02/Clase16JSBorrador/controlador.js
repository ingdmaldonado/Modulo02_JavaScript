import { vehiculos } from "./modelo.js";

// Función para completar el selector dinámico
const fnCompletarSelectorDinamico = (idSelector, vector) => {
    idSelector.innerHTML = "";
    vector.forEach((element) => {
        let opcionDinamica = document.createElement("option");
        opcionDinamica.value = `${element.vehiculoId}`;
        opcionDinamica.innerHTML = `${element.vehiculoNombre} - ${element.vehiculoPrecio}`;
        idSelector.appendChild(opcionDinamica);
    });
};

// Función para buscar un vehículo por su ID
const fnBuscarVehiculoPorId = (vector, id) => {
    let vehiculoDevuelto = vector.find(element => element.vehiculoId === id);        
    return vehiculoDevuelto;
};

// Función para completar las imágenes de un vehículo
const fnCompletarImagenes = (vehiculo, contenedorImagenes) => {
    contenedorImagenes.innerHTML = "";


    let imagenesCreadas = vehiculo.vehiculoImagenes.map(element => 
        {
          
            let imagenDinamica = document.createElement("img");
            imagenDinamica.width = 200; // Asignar como número
            imagenDinamica.height = 200; // Asignar como número
            imagenDinamica.src = element;
            imagenDinamica.loading = "lazy"; // Cargar diferidamente

            return imagenDinamica;

        })

    imagenesCreadas.forEach(element => 
        {
            let divDinamico = document.createElement("div");
            divDinamico.appendChild(element);
            contenedorImagenes.appendChild(divDinamico);

        })


    vehiculo.vehiculoImagenes.forEach(element => {
        let divDinamico = document.createElement("div");
        let imagenDinamica = document.createElement("img");
        imagenDinamica.width = 200; // Asignar como número
        imagenDinamica.height = 200; // Asignar como número
        imagenDinamica.src = element;
        imagenDinamica.loading = "lazy"; // Cargar diferidamente
        divDinamico.appendChild(imagenDinamica);
        contenedorImagenes.appendChild(divDinamico);
    });
};

const fnVerClientesRegistrados = (vector,cuerpoDeTabla)=>
    {

        let filasDinamicasDeTabla = vector.map(element => 
            {
                let filaDinamica = document.createElement("tr");
                let celda1 = document.createElement("td");
                celda1.textContent = element.telefono;

                let celda2 = document.createElement("td");
                celda2.textContent = element.email;

                filaDinamica.appendChild(celda1);
                filaDinamica.appendChild(celda2);

                return filaDinamica;

            })

        filasDinamicasDeTabla.forEach(element => {

            cuerpoDeTabla.appendChild(element);

        })

        //console.log(vector,cuerpoDeTabla);
    }

// Estado de la aplicación
let estadoAplicacion = {
    vehiculoElegido: 0,
    telefono: "",
    email: "",
    clientesRegistrados:[],
};

// Lógica principal al cargar la página
window.addEventListener("load", () => {
    // Cargar el estado desde el almacenamiento local

  

    console.log("running");
    console.log(vehiculos);

    // Referencias a elementos del DOM
    const idSelectorDinamico = document.querySelector("#idSelectorDinamico");
    const idImagenes = document.querySelector("#idImagenes");
    const idTelefono = document.querySelector("#idTelefono");
    const idEmail = document.querySelector("#idEmail");
    const idBtnRegistrarme = document.querySelector("#idBtnRegistrarme");
    const idPopupBackground = document.querySelector("#popupBackground");
    const idRegistracion = document.querySelector("#idRegistracion");
    const idCheckboxInteresado = document.querySelector("#idEstoyInteresado");
    const idBtnCerrar = document.querySelector("#idBtnCerrar");
    const idBtnVerRegistrados = document.querySelector("#idBtnVerRegistrados");
    const idCuerpoDeTabla = document.querySelector("#idCuerpoDeTabla");
    const idBtnBlanquearCookies = document.querySelector("#idBtnBlanquearCookies");


    fnCompletarSelectorDinamico(idSelectorDinamico, vehiculos);

    /* Agregar Comportamiento a los Elementos/Objetos HTML */

    // Evento para seleccionar un vehículo
    idSelectorDinamico.addEventListener("change", () => {
        let vehiculoIdElegido = Number(idSelectorDinamico.value);             
        let vehiculoElegido = fnBuscarVehiculoPorId(vehiculos, vehiculoIdElegido);
        if (vehiculoElegido) {
            console.log(vehiculoElegido);
            estadoAplicacion.vehiculoElegido = vehiculoElegido;
            fnCompletarImagenes(vehiculoElegido, idImagenes);
        }
    });

    // Eventos para capturar datos del formulario
    idTelefono.addEventListener("input", () => {
        console.log(idTelefono.value);
        estadoAplicacion.telefono = idTelefono.value;
    });

    idEmail.addEventListener("input", () => {
        console.log(idEmail.value);
        estadoAplicacion.email = idEmail.value;
    });

    idBtnRegistrarme.addEventListener("click", () => 
        {

            if(estadoAplicacion.telefono.length > 0)
            {
                if(estadoAplicacion.email.length > 0)
                {
                    let clienteNuevo = {telefono:estadoAplicacion.telefono,email:estadoAplicacion.email};
                    console.log(clienteNuevo);
                    estadoAplicacion.clientesRegistrados.push(clienteNuevo);
                }
                else
                {
                    alert("complete su e-mail");
                }
            }
            else
            {
                alert("complete su telefono");
            }

            let estadoAplicacionJSON = JSON.stringify(estadoAplicacion);
            console.log(estadoAplicacionJSON);
            localStorage.setItem("estado", estadoAplicacionJSON);

            idBtnCerrar.click();


    });

    // Mostrar el popup al marcar el checkbox
    idCheckboxInteresado.addEventListener("change", () => {
        if (idCheckboxInteresado.checked) {
            idRegistracion.style.display = "block";
            idPopupBackground.style.display = "block";
        } else {
            idRegistracion.style.display = "none";
            idPopupBackground.style.display = "none";
        }
    });

    // Cerrar el popup al hacer clic en el botón "Cerrar"
    idBtnCerrar.addEventListener("click", () => {
        idRegistracion.style.display = "none";
        idPopupBackground.style.display = "none";
        idCheckboxInteresado.checked = false; // Desmarcar el checkbox
    });


    idBtnVerRegistrados.addEventListener("click",()=>
        {
            
            let estado = localStorage.getItem("estado");
            if (estado) 
            {
                try {
                    estadoAplicacion = JSON.parse(estado);
                    console.log(estadoAplicacion);    
                    
                    fnVerClientesRegistrados(estadoAplicacion.clientesRegistrados,idCuerpoDeTabla);
                    
                } catch (error) 
                {
                    console.log(error);
                }            
            }
        });

    idBtnBlanquearCookies.addEventListener("click",()=>
        {
            localStorage.setItem("estado","");
            alert("datos limpios");
        })

});
