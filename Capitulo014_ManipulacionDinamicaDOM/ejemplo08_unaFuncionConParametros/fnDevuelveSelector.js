
/***********************************************************************/
/***************  Rest Operator                   **********************/
/***********************************************************************/

    const fnDevuelveSelector = (... Provincias)=>
        {
            let selectorDinamico = document.createElement("select");

            Provincias.forEach((element,indice)=>{

                let opcion = document.createElement("option");
                opcion.value = indice;
                opcion.textContent = element;

                selectorDinamico.appendChild(opcion);

            })

            return selectorDinamico;
        }

    export default fnDevuelveSelector;


