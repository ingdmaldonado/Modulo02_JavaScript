
import {getCliente,getClientePorId,getClientePorCuit,postCliente,putCliente} from "./apicliente.js";


const fnVisualizarCliente = (objetoCliente)=>
    {

        EstadoAplicacion.setClienteActivo(objetoCliente);

        idClienteId.textContent = objetoCliente.clienteid;
        idClienteCuit.value = objetoCliente.clientecuit;
        idClienteNombre.value = objetoCliente.clientenombre;
        idClienteDomicilio.value = objetoCliente.clientedomicilio;
        idLocalidadId.value = objetoCliente.localidadid;
    }

const fnRecuperarCliente = ()=>
    {
        EstadoAplicacion.clienteActivo.clientecuit = idClienteCuit.value;
        EstadoAplicacion.clienteActivo.clientenombre = idClienteNombre.value;
        EstadoAplicacion.clienteActivo.clientedomicilio = idClienteDomicilio.value;
        EstadoAplicacion.clienteActivo.localidadid = idLocalidadId.value;
    }

const EstadoAplicacion = 
    {
        clienteActivo:null,

        setClienteActivo(cliente)
        {
            this.clienteActivo = cliente;
        }
    }




window.addEventListener("load",()=>{

    /* Recuperar todos los clientes */
    const btnClienteGet = document.querySelector("#btnClienteGet");
    const idCuerpoDeTabla = document.querySelector("#idCuerpoDeTabla");

    /* Recuperar cliente por ID */
    const txtClienteId = document.querySelector("#txtClienteId");
    const btnBuscarClientePorId = document.querySelector("#btnBuscarClientePorId");

    /* Recuperar cliente por Cuit */
    const txtClienteCuit = document.querySelector("#txtClienteCuit");
    const btnBuscarClientePorCuit = document.querySelector("#btnBuscarClientePorCuit");
  
    /* Agregar cliente ó modificar cliente */
    const idClienteId = document.querySelector("#idClienteId");
    const idClienteCuit = document.querySelector("#idClienteCuit");
    const idClienteNombre = document.querySelector("#idClienteNombre");
    const idClienteDomicilio = document.querySelector("#idClienteDomicilio");
    const idLocalidadId = document.querySelector("#idLocalidadId");


    const btnAgregarCliente = document.querySelector("#btnAgregarCliente");
    const btnNuevoCliente = document.querySelector("#btnNuevoCliente");
    const idBtnGuardarCambios = document.querySelector("#idBtnGuardarCambios");



    console.log(idClienteCuit);
    console.log(idClienteNombre);
    console.log(idClienteDomicilio);
    console.log(idLocalidadId);
    console.log(btnAgregarCliente);

    /* Boton para recuperar todos los clientes */
    btnClienteGet.addEventListener("click",async ()=>
        {
            let resultadoAPI = await getCliente();

            if(resultadoAPI.result_estado === 'ok')
            {
                //console.log(resultadoAPI.result_data);

                resultadoAPI.result_data.forEach(element => {

                    console.log(element);

                    let Fila = document.createElement("tr");
                    
                    let celda1 = document.createElement("td");
                    celda1.textContent = element.clienteid;

                    let celda2 = document.createElement("td");
                    celda2.textContent = element.clientecuit;

                    let celda3 = document.createElement("td");
                    celda3.textContent = element.clientenombre;

                    let celda4 = document.createElement("td");
                    celda4.textContent = element.clientedomicilio;

                    let celda5 = document.createElement("td");
                    celda5.textContent = element.departamentonombre;

                    let celda6 = document.createElement("td");
                    celda6.textContent = element.localidadnombre;

                    let celda7 = document.createElement("input");
                    celda7.type = "button";
                    celda7.value = "Seleccionar";
                    celda7.addEventListener("click",()=>{

                        fnVisualizarCliente(element);

                    })

                    Fila.appendChild(celda1);
                    Fila.appendChild(celda2);
                    Fila.appendChild(celda3);
                    Fila.appendChild(celda4);
                    Fila.appendChild(celda5);
                    Fila.appendChild(celda6);
                    Fila.appendChild(celda7);

                    idCuerpoDeTabla.appendChild(Fila);

                });

            }
            else
            {
                alert(`Hubo un problema al intentar realizar la consulta ${resultadoAPI.result_message}`);
            }

            //console.log(resultadoAPI.result_data);
        })

    /* Boton para recuperar un cliente por (id) */
    btnBuscarClientePorId.addEventListener("click",async ()=>
        {
            let clienteId = Number(txtClienteId.value);
            if(clienteId > 0)
            {
                let resultadoAPI = await getClientePorId(clienteId);

                if(resultadoAPI.result_estado === 'ok')
                {  
                    console.log(resultadoAPI.result_data);

                    fnVisualizarCliente(resultadoAPI.result_data);
                }
                else
                {
                    alert(`Hubo un problema al intentar realizar la consulta ${resultadoAPI.result_message}`);
                }
            }
            else
            {
                alert("por favor ingrese el (id) a buscar");
            }
        })
    
    /* Boton para recuperar un cliente por (cuit) */
    btnBuscarClientePorCuit.addEventListener("click", async ()=>
        {
            let clienteCuit = Number(txtClienteCuit.value);
            if(clienteCuit > 0)
            {
                let resultadoAPI = await getClientePorCuit(clienteCuit);
                console.log(resultadoAPI.result_data);

                if(resultadoAPI.result_estado === 'ok')
                {  
                    console.log(resultadoAPI.result_data);

                    fnVisualizarCliente(resultadoAPI.result_data);

                }
                else
                {
                    alert(`Hubo un problema al intentar realizar la consulta ${resultadoAPI.result_message}`);
                }

            }

          
        })

    /* Boton para agregar un cliente */
    btnAgregarCliente.addEventListener("click",async ()=>{

        /* creo un objeto literal que tenga los atributos
        que necesito enviar para dar de alta */

        let NuevoCliente =
            {
                clientecuit:idClienteCuit.value,
                clientenombre:idClienteNombre.value,
                clientedomicilio:idClienteDomicilio.value,
                localidadid:idLocalidadId.value
            }

        console.log(NuevoCliente);     

        /* convierto a ese objeto en formato JSON */
        let NuevoClienteJSON = JSON.stringify(NuevoCliente);

        let resultadoAPI = await postCliente(NuevoClienteJSON);

        console.log(resultadoAPI);

    })

    /* Boton que permite limpiar los elementos del HTMl para generar
    un cliente nuevo. vacío */

    btnNuevoCliente.addEventListener("click",()=>
        {
            let clienteNuevo = 
            {
                clienteid:0,
                clientecuit:0,
                clientenombre:"",
                clientedomicilio:"",
                localidadid:0,
            }

            fnVisualizarCliente(clienteNuevo);

        })

    /* Boton que guardará los cambios. El botón tiene que determinar
    si agrega un nuevo cliente o si modifica uno que ya existe. para ello
    se dará cuenta si el ID es igual a cero significa que es un cliente 
    nuevo para dar de alta. si el ID es distinto de cero. significa que
    se debe modificar uno existente. */

    idBtnGuardarCambios.addEventListener("click",async ()=>
        {

            fnRecuperarCliente();

            if(EstadoAplicacion.clienteActivo.clienteid === 0)
            {
                // por aqui estoy agregando un cliente //

                console.log(EstadoAplicacion.clienteActivo);

                /* convierto a ese objeto en formato JSON */
                let NuevoClienteJSON = JSON.stringify(EstadoAplicacion.clienteActivo);

                let resultadoAPI = await postCliente(NuevoClienteJSON);

                if(resultadoAPI.result_estado === 'ok')
                    {  
                        console.log(resultadoAPI.result_data);
    
                        alert("cliente agregado");
    
                    }
                    else
                    {
                        alert(`Hubo un problema al intentar realizar la consulta ${resultadoAPI.result_message}`);
                    }
            }
            else
            {

                // por aqui estoy actualizando un cliente existente //

                  /* convierto a ese objeto en formato JSON */
                  let NuevoClienteJSON = JSON.stringify(EstadoAplicacion.clienteActivo);

                  let resultadoAPI = await putCliente(NuevoClienteJSON);
  
                  if(resultadoAPI.result_estado === 'ok')
                      {  
                          console.log(resultadoAPI.result_data);
      
                          alert("cliente agregado");
      
                      }
                      else
                      {
                          alert(`Hubo un problema al intentar realizar la consulta ${resultadoAPI.result_message}`);
                      }
                
            }

        })
})