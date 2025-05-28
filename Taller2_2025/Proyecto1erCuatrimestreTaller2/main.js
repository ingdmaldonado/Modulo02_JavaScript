import {fnObtenerDepartamentos,fnObtenerProvincias} from './modelo.js';

import {fnObtenerUniversidades, fnObtenerPronosticoTiempo, obtenerPaisesYCapitales} from './modelo.js'; 


window.addEventListener('load', () => {
  const idBtnProvincias = document.querySelector('#idBtnProvincias');
  const idBtnDepartamentos = document.querySelector('#idBtnDepartamentos');
  const idBtnPruebas = document.querySelector('#idBtnPruebas');

  idBtnProvincias.addEventListener('click', async () => {
    try {
      const data = await fnObtenerProvincias();
      console.log('Provincias:', data);
    } catch (error) {
      console.error(error);
    }
  });

  idBtnDepartamentos.addEventListener('click', async () => {
    try {
      const data = await fnObtenerDepartamentos('10'); // Reemplaza '21' con el ID de la provincia que desees
      console.log('Departamentos:', data);
    } catch (error) {
      console.error(error);
    }
  });

  idBtnPruebas.addEventListener('click',async ()=>{

    try {
      const resultado1 = await fnObtenerUniversidades();     
      const resultado2 = await fnObtenerPronosticoTiempo();
      const resultado3 = await obtenerPaisesYCapitales(); 
     
      console.log(resultado1);
      console.log(resultado2);
      console.log(resultado3);

    } catch (error) {
      console.error(error);
    }
  })

});
