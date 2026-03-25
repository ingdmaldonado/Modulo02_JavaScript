

/* Momento 1 => definición de la función 
esta función recibe como parametro paises
y a dentro debería renderizarlos en el DOM
*/

export const fnRenderizarPaises = (paises)=>
    {
        const idCuerpoDeTabla = document.querySelector("#idCuerpoDeTabla");

        //console.log(idCuerpoDeTabla);

        //console.log(paises);

        /* cuando dibujo listas de valores         
            1era. Etapa => Paises => Transformar en => map
            2da. Etapa => Tomar esos elementos transformados y meterlos al 
        
            nombrePais
            capitalPais
            poblacionPais
            banderaPais
        
        
        */

        /* (01) Generamos las Etiquetas */
        const filasDeLaTabla = paises.map(pais => 
            {
                let etiquetaHtml =  `<tr>
                                <td>${pais.nombrePais}</td>
                                <td>${pais.capitalPais}</td>
                                <td>${pais.poblacionPais}</td>
                                <td><img src=${pais.banderaPais} width='40px'></td>                
                                </tr>`;

                return etiquetaHtml;

            })
        
        /* (02) Unir todas las etiquetas en un solo String */

        let filas = filasDeLaTabla.join(" ");

        /* (03) Renderiza todas las etiquetas juntas */
        idCuerpoDeTabla.innerHTML = filas;

        //filasDeLaTabla.forEach(fila => idCuerpoDeTabla.innerHTML = idCuerpoDeTabla.innerHTML + fila);

    }


export const fnRenderizarPaises2 = (paises)=>
    {
        const idCuerpoDeTabla = document.querySelector("#idCuerpoDeTabla");
       
        /* (01) Generamos las Etiquetas */
        idCuerpoDeTabla.innerHTML = paises.map(pais => 
            {
                let etiquetaHtml =  `<tr>
                                <td>${pais.nombrePais}</td>
                                <td>${pais.capitalPais}</td>
                                <td>${pais.poblacionPais}</td>
                                <td><img src=${pais.banderaPais} width='40px'></td>                
                                </tr>`;

                return etiquetaHtml;

            }).join(" ");
    
    }