import { fnRecuperarUniversidades } from "./universidadmodelo.js";
import { fnUniversidadView,fnRender,fnUniversidadViews} from "./universidadvista.js"



window.onload = () => {
    const SelectPaises = document.querySelector("#idSelectPaises");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
    const idResultado = document.querySelector("#idResultado");
    const idTablaUniversidades = document.querySelector("#idTablaUniversidades");
 
    idBtnRecuperar.onclick = async () => {
        const paisElegido = Number(SelectPaises.value);
        
        console.log(`País elegido: ${paisElegido}`);

      

        const datos = await fnRecuperarUniversidades(paisElegido);
        console.log(datos); 

        console.log(datos[0]);

        const fila =  fnUniversidadView(datos[0]);

        console.log(fila);

        const filas = fnUniversidadViews(datos);

        console.log(filas);
        fnRender(filas, idTablaUniversidades);



    }
     
};