
import {vectorOpciones} from "./datos.js";

window.onload = function()
{
    const idBotonEstatico = this.document.querySelector("#idBotonEstatico");

    const idContenedor = this.document.querySelector("#idContenedor");

    const idSelector = this.document.querySelector("#idSelector");

    console.log(idBotonEstatico);
    console.log(idContenedor);

    idBotonEstatico.onclick = ()=>{

        this.alert("soy un boton estatico");

        /* DOS FORMAS DE GENERAR DINAMICAMENTE COMPONENTES */

        /* FORMA LITERAL - SIMPLE PERO INSEGURA */

        for(let i = 0;i <= 10;i++)
        {
            let botonDinamico1 = `<input type='button' value = 'soy un boton dinamico ${i}'>`;

            idContenedor.innerHTML = idContenedor.innerHTML + botonDinamico1;

        }


        vectorOpciones.forEach(opcion=>{

            let opcionDinamica = `<option>${opcion}</option>`;

            console.log(opcionDinamica);

            idSelector.innerHTML = idSelector.innerHTML + opcionDinamica;


        })


       

    }



}