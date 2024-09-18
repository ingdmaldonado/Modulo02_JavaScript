
import {getCliente,getClientePorId,getClientePorCuit,postCliente} from "./apicliente.js";

window.addEventListener("load",()=>{

    /* Recuperar todos los clientes */
    const btnClienteGet = document.querySelector("#btnClienteGet");

    /* Recuperar cliente por ID */
    const txtClienteId = document.querySelector("#txtClienteId");
    const btnBuscarClientePorId = document.querySelector("#btnBuscarClientePorId");

    /* Recuperar cliente por Cuit */
    const btnBuscarClientePorCuit = document.querySelector("#btnBuscarClientePorCuit");
  

    /* Agregar cliente */
    const idClienteCuit = document.querySelector("#idClienteCuit");
    const idClienteNombre = document.querySelector("#idClienteNombre");
    const idClienteDomicilio = document.querySelector("#idClienteDomicilio");
    const idLocalidadId = document.querySelector("#idLocalidadId");
    const btnAgregarCliente = document.querySelector("#btnAgregarCliente");
    

    console.log(idClienteCuit);
    console.log(idClienteNombre);
    console.log(idClienteDomicilio);
    console.log(idLocalidadId);
    console.log(btnAgregarCliente);

    /* Boton para recuperar todos los clientes */
    btnClienteGet.addEventListener("click",async ()=>
        {
            let resultadoAPI = await getCliente();
            console.log(resultadoAPI.result_data);
        })

    /* Boton para recuperar un cliente por (id) */
    btnBuscarClientePorId.addEventListener("click",async ()=>
        {
            let resultadoAPI = await getClientePorId(10);
            console.log(resultadoAPI.result_data);
        })
    
    /* Boton para recuperar un cliente por (cuit) */
    btnBuscarClientePorCuit.addEventListener("click", async ()=>
        {
            let resultadoAPI = await getClientePorCuit(23240106639);
            console.log(resultadoAPI.result_data);
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


})