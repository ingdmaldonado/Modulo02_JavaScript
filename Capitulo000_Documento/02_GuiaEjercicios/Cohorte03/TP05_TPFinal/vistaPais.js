

export const fnCompletarSelelector = (paises,idSelectorPais)=>
    {
       const paisesOpciones = paises.map(({id,nombrePais,continentePais})=>{

            console.log(id,nombrePais,continentePais);

            const optionDinamico = document.createElement("option");
            optionDinamico.value = id;
            optionDinamico.textContent = `${nombrePais} (${continentePais})`;
            return optionDinamico;         
        });

        paisesOpciones.forEach((opcion)=>{
            idSelectorPais.appendChild(opcion);
        });   
    }