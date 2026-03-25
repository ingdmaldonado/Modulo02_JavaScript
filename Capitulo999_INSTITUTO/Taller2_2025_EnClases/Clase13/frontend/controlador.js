
import {fnRecuperarClientes} from "./modelo.js";

export const fnClickBotonRecuperar = async ()=>
    {
        console.log("click en el boton");


        let datos = await fnRecuperarClientes();

        if(datos.result_estado ==='ok')
        {
            console.log(datos.result_data);
        }
        else
        {
            alert(`se produjo un error ${datos.result_message}`);
        }

        
    }
