
/* encapuslar la generación de las opciones 
dentro de una función. que se encargue de eso */

export const fnTransformarPaises = (paises) =>
    {
        
            /* map, vectores, destructuring, renderización 
            dinámica del DOM, recorrido de vectores, */
    
            let opcionesDinamicas = paises.map(({nombrePais,capital,id})=>
                {
                    const opcionDinamica = document.createElement("option");
        
                    opcionDinamica.textContent = `Pais: ${nombrePais} - Cap:${capital}`;
        
                    opcionDinamica.value = id;

                    return opcionDinamica;
        
                });
    
            return opcionesDinamicas;
            
    }
    
    /* esta función recibe como parametro un vector de opciones
    y se encarga de meterlas en el contenedor */
    
export const fnCompletarSelector = (vectorDeOpciones,contenedor) =>
        {
            vectorDeOpciones.forEach(opcion => 
                {
                    contenedor.appendChild(opcion);
                })
        }
    
        /* PATRON MODELO VISTA CONTROLADOR 
        
        vista => html, css + codigo o funcionalidad
            que puede estar escrita en codigo javascript
            pero que se encarga de renderizar elementos
            en el DOM
    
                => view
                => react
    
        controlador => codigo javascript que se ejecuta y 
        se encarga de capturar los eventos y la interacción
        del usuario
    
    
        
        */