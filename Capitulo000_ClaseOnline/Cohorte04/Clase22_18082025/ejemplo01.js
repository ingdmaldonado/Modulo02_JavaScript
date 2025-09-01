
// importacion por defecto //
import {paises} from "./datos.js";

// importación nombrada //
import {constante1,constante2} from "./datos.js";

window.addEventListener("load",()=>{

    console.log("la apliación esta corriendo");

    const idSelectorDePaises = document.querySelector("#idSelectorDePaises");
    const idCuerpoDeTabla = document.querySelector("#idCuerpoDeTabla");
    const idContenedorPrincipal = document.querySelector("#idContenedorPrincipal");

    //idSelectorDePaises.innerHTML = "<option>ARGENTINA</option><option>FRANCIA</option>";

   // ()=>{return };

   /************************* ESTO ES DEL SELECTOR DE PAISES  ********************/

    // (1ro) => Transformar los elementos del Vector en Elementos HTML individuales //
    const opcionesDelSelector = paises.map(pais => `<option>${pais.nombre}</option>`);

    // (2do) => Recorrer los elementos de las opciones generadas y meterlas al DOM //
    opcionesDelSelector.forEach(opcion => idSelectorDePaises.innerHTML = idSelectorDePaises.innerHTML + opcion);

    console.log(opcionesDelSelector);

    /******************************************************************************/

   

    /**************************** ESTO ES DE LAS FILAS DE LA TABLA DINAMICA *******************/

    /* (1ro) => map => map aplicado sobre cada uno de los paises
    me va a generar por cada pais una fila

        1 pais => 1 fila
    */

    /* 
        <tr>
            <td>ARGENTINA</td>
            <td>BUENOS AIRES</td>
            <td>BANDERA1</td>
        </tr>
    */

    /* (1ro. hago map) */

    const filasPaises = paises.map(pais => {

        let fila = `<tr>
                        <td>${pais.nombre}<td>
                        <td>${pais.capital}</td>
                        <td><img src="${pais.bandera}"><td>
                    </tr>`;
        
        return fila;

    });

    /* (2do. sobre el vector transformado por map) */

    filasPaises.forEach(fila => idCuerpoDeTabla.innerHTML = idCuerpoDeTabla.innerHTML + fila);

    console.log(filasPaises);


    /************************* EJEMPLOS DE CONTENEDORES DINAMICOS  *****************/

    /*
      <div>
            <h2>Pais:ARGENTINA</h2>
            <h3>Capital:BUENOS AIRES</h3>
            <img src="">
        </div> 
    */

    /* (1ro) map */

    const contenedoresDinamicos = paises.map(pais => {

        let contenedor = `<div class='contenedor1'>
                            <h2>Pais:${pais.nombre}</h2>
                            <h3>Capital:${pais.capital}</h3>
                            <img src = '${pais.bandera}'>        
                        </div>`;

        return contenedor;

    })

    /* (2do) forEach */

    contenedoresDinamicos.forEach(contenedor => idContenedorPrincipal.innerHTML = idContenedorPrincipal.innerHTML + contenedor);




    



    /* innerHTML => le dice al navegador
    que lo que tiene que escribir
    es una etiqueta HTML y la tiene
    que tomar como tal y renderizarla */

    /* textContent => le dice al navegador
    que lo que tiene que escribir en el DOM
    es texto. */

 //   console.log(paises);

    // si quiero recorrerlo //



})

