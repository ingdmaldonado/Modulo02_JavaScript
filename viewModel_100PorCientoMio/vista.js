
/* (1) Función que toma un cliente y 
lo convierte en View Model */

export const fnClienteToVM = (cliente) =>{

  /* (1) - genero el elemento visual) */
  const view = document.createElement("tr");

  /* (2) - genero el view model, que es
  la vinculación del elemento visual con 
  el modelo */

  const viewModel = {cliente,view,elegido:false};

  /* (3) - genero las celdas de esa fila */
  const celda1 = document.createElement("td");
  const celda2 = document.createElement("td");
  const celda3 = document.createElement("td");
  const celda4 = document.createElement("td");
  const celda5 = document.createElement("td");

  /* (4) - a las Celdas le pongo los datos que correspondan */

  celda1.textContent = cliente.cuit;
  celda2.textContent = cliente.nombre;
  celda3.textContent = cliente.domicilio;
  celda4.textContent = cliente.condicion;

  /* (5) - genero el checkbox que va en la celda5 */
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  checkBox.onchange = ()=>{

    viewModel.elegido = checkBox.checked;

  };


  /* (6) - lo agrego a la celda 5 */
  celda5.appendChild(checkBox);

  /* (7) - agrego las celdas a la vista = view */
  view.appendChild(celda1);
  view.appendChild(celda2);
  view.appendChild(celda3);
  view.appendChild(celda4);
  view.appendChild(celda5);

  /* (8) - Retorno un objeto enriquecido
  que sería
    
    el elemento visual => view
    el objeto original => modelo

  */

  return viewModel;


}

/* (2) Función que toma todos los clientes
y los convierte a cada uno en viewModel. */

export const fnClientesToVMs = (clientes)=>{

  const viewModels = clientes.map(cliente => fnClienteToVM(cliente));

  return viewModels;

};

/* (3) Función que toma los viewModels
y los renderiza en el DOM. recordar
que es un objeto enriquecido el viewModel.
por lo tanto, solamente tiene que recorrer
todos los viewsModels y solamente inyecatar
al dom el elemento visual.
*/

export const fnRenderViewsModels = (viewsModels,contenedor) => {

  contenedor.innerHTML = "";
  viewsModels.forEach(viewModel => contenedor.appendChild(viewModel.view));

};
