
const fnRecuperarDatosClima = async ()=>{

    let datos = null;

     try {

            let response = await fetch(`https://ws.smn.gob.ar/map_items/weather`);

            /* primer paso - promesa recupera el fetch al servidor */
            console.log(response);

            /* segundo paso - convertir la respuesta = response a JSON => OBJETOS */
            datos = await response.json();

     }
     catch(error)
     {
        console.log(error);
     }

    return datos;

};

const fnMapearDatosDelClima = (climaCiudades)=>{

    const elementosVisuales = climaCiudades.map(climaCiudad => {

        const {name,province,weather} = climaCiudad;

        /* creo un div */

        const contenedorPrincipal = document.createElement("div");

        const titulo = document.createElement("h2");
        titulo.textContent = `Localidad: ${name} - Provincia: ${province}`;

        contenedorPrincipal.appendChild(titulo);

        console.log(contenedorPrincipal);

        return contenedorPrincipal;

    });

    return elementosVisuales;

};

const fnRenderizar = (elementosVisuales)=>{

    elementosVisuales.forEach(elemento => {});

    
};



window.onload = ()=>{

    const idBtnClima = document.querySelector("#idBtnClima");
    const idBtnClima2 = document.querySelector("#idBtnClima2");
    const idDivPrincipal = document.querySelector("#idDivPrincipal");

    idBtnClima.onclick = async ()=>{


        try {

            let response = await fetch(`https://ws.smn.gob.ar/map_items/weather`);

            /* primer paso - promesa recupera el fetch al servidor */
            console.log(response);

            /* segundo paso - convertir la respuesta = response a JSON => OBJETOS */
            let datos = await response.json();

            console.log(datos);

            /* recorrerlos uno x uno con forEAch */

            console.log(`------- Ejemplo 01: for each clasico ---------`);
            datos.forEach(climaCiudad => {console.log(climaCiudad)});

            /* recorrerlos haciendo destructuring */

            console.log(`------- Ejemplo 02: for each con destructuring en el encabezado de la función ------`);
         
            datos.forEach(({province,name})=>{
                console.log(province,name);

                console.log(`Provincia: ${province} - Localidad: ${name}`);
            });

            /* recorrerlos haciendo destructuring dentro del cuerpo de la función */

            console.log(`-------- Ejemplo 03: for each con destructuring en el cuerpo y renombrado de atributos`);

            datos.forEach(climaCiudad => {

                const {province:provincia,name:localidad,weather:clima} = climaCiudad;

                const {description,humidity,temp,tempDesc} = clima;

                if(temp < 10)
                {
                    console.log(`provincia: ${provincia} - localidad: ${localidad}`);
                    console.log(description,humidity,temp,tempDesc);
                
                    console.log(clima);
                }
            });
         
        } catch (error) {
            console.log(error);
        }


        console.log("consulta API");

    };

    idBtnClima2.onclick = async ()=>{

        let datos = await fnRecuperarDatosClima();

        console.log(datos);

        fnMapearDatosDelClima(datos);

    };


};