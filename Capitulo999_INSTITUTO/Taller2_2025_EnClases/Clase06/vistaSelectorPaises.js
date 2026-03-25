

/* Todo codigo, que dibuja en el DOM 
es parte de la vista.
vista estática => HTML ESTATICO
+
vista dinamica => HTML DINAMICO
*/

/* esta función se encarga de recorrer
los paises y de generar para cada pais
su opcion */

export const fnGenerarOpcionesDinamicas = (paises)=>
    {
        // recorre pais x pais generando por cada pais => opcion
        const opcionesDelSelector = paises.map(pais => 
        {
            /* 1ro genero un option dinamico */
            const opcionDinamica = document.createElement("option");
            opcionDinamica.textContent = pais.nombrePais;
            opcionDinamica.value = pais.id;

            return opcionDinamica;
        });

        // retorna todas las opciones
        return opcionesDelSelector;
    }

/* Esta función recibe como parametro dos cosas. una 
es un vector de opciones y la otra es el contenedor
donde se tienen que dibujar las opciones */

export const fnAgregarOpcionesAlSelector = (opcionesDelSelector,contenedor) =>
    {
        /* (02) Recorremos las opciones 
        y se las cargamos al selector */

        opcionesDelSelector.forEach(opcion => 
            {
                contenedor.appendChild(opcion);
            })
    }

/* VECTOR => UNA FUNCION QUE HACE MAP => UNA FUNCION QUE AGREGA LAS OPCIONES AL CONENEDOR */
