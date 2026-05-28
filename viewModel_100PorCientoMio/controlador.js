import clientes from "./clientes.js";
import {fnClienteToVM,fnClientesToVMs,fnRenderViewsModels} from "./vista.js";


window.onload = ()=>{

  const idCuerpoTabla = document.querySelector("#idCuerpoTabla");
  const idClientesSeleccionados = document.querySelector("#idClientesSeleccionados");
  const idNombre = document.querySelector("#idNombre");
  const idBtnBuscar = document.querySelector("#idBtnBuscar");

  /* (1ro) Invocar la función que 
  convierte un cliente en una vista */

  const clienteVM = fnClienteToVM(clientes[0]);

  console.log(clienteVM);

  /* (2do) Invoco a la función que toma
  a todos los clientes y los convierte en 
  sus respectivos viewModels */

  const ClientesVMs = fnClientesToVMs(clientes);
  console.log(ClientesVMs);

  /* (3ro) Renderizo los elementos en el DOM */
  fnRenderViewsModels(ClientesVMs,idCuerpoTabla);

  idClientesSeleccionados.onclick = ()=>{

    console.log(ClientesVMs);

  };

  idBtnBuscar.onclick = ()=>{

    let nombreIngresado = idNombre.value;

    if(nombreIngresado)
    {
      console.log(nombreIngresado);

      /* (a) Filtramos todas las personas que contengan 
      parte de ese nombre */

      let clientesBuscados = clientes.filter(cliente => cliente.nombre.toLocaleUpperCase().includes(nombreIngresado.toLocaleUpperCase()));

      console.log(clientesBuscados);

     // ClientesVMs[...fnClientesToVMs(clientesBuscados)] ;

      ClientesVMs.length = 0;
      ClientesVMs.push(...fnClientesToVMs(clientesBuscados))

      fnRenderViewsModels(ClientesVMs,idCuerpoTabla);
    }
  };
};