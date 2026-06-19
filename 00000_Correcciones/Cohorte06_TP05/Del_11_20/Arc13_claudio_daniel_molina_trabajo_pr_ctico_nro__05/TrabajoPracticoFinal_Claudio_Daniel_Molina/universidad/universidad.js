
import { fnRecuperarUniversidades } from "./universidadModelo.js";
import { fnUniversidadToView,fnUniversidadesToView,fnRender } from "./universidadVista.js";



window.onload = () => {
    
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
    const idSelectorPais = document.querySelector("#idSelectorPais");
    const idCuerpoDeTabla = document.querySelector("#idCuerpoDeTabla");


    
    idBtnRecuperar.onclick = async () => {

        // Acá se obtiene el valor del país elegido en el selector, y se guarda en la variable paisElegido//
        const paisElegido = Number(idSelectorPais.value);

        console.log(paisElegido);
        
        // Acá devuelve un listado de Universidades, dependiendo del país elegido, y lo guarda en la variable datos//
        const datos = await fnRecuperarUniversidades(paisElegido);

        //Aquí se muestra el listado de universidades en la consola, para verificar que se haya recuperado correctamente//
        console.log(datos);

        //Aquí le estoy diciendo que muestre la primera universidad del listado//

        console.log(datos[0]);

        /* aquí se la pasa sólo una univerdidad a la función fnUniversidadToView, 
          para que me devuelva una fila de tabla con los datos de esa universidad, y se guarda en la variable fila*/

        const fila = fnUniversidadToView(datos[0]);
        console.log(fila);

        /* aquí se le pasa el listado completo de universidades a la función fnUniversidadesToView, 
        para que me devuelva un vector de filas de tabla con los datos de todas las universidades, 
        y se guarda en la variable filas*/

        const filas = fnUniversidadesToView(datos);
        console.log(filas);

        /*Aqui se invoca a la función que renderiza las Views */

        fnRender(filas,idCuerpoDeTabla);


    };
}




/* Reglas

modelo.js: habla con el servidor (api.js)

vista.js: es el encargado de mostrar los datos en la pantalla, y de interactuar con el usuario, y
de llamar a las funciones del modelo para recuperar los datos de la API, y mostrarlos en la pantalla.

controlador.js: es el encargado de manejar la lógica de la aplicación, y de coordinar las acciones entre el modelo y la vista.

api.js: es el encargado de hacer las llamadas a la API, y de devolver los datos al modelo.*/

