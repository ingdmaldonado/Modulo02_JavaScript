
// levantar todo el vector completo de clientes //
import vectorContribuyentes from "./Datos/VectorContribuyentes_10000.js";


window.addEventListener("load",()=>{

    console.log("aplicacion esta corriendo");

    const idBtn01 = document.querySelector("#idBtn01");
    const idBtn02 = document.querySelector("#idBtn02");

    /* boton 1 => consulta de clientes 
    mostrar id,cuit y denominacion
    */

    idBtn01.addEventListener("click",()=>{

        console.log(`aqui tengo que mostrar los clientes (id,cuit,denominacion)`);

        //console.log(vectorContribuyentes);

        vectorContribuyentes.forEach(cliente => 
            {
                console.log(`Id:${cliente.PadronAFIPId} Cuit:${cliente.PadronAFIPCUIT} Denominacion:${cliente.PadronAFIPDenominacion}`);
            })

    });

    /* Busqueda de una persona por Cuit */
    idBtn02.addEventListener("click",()=>{

        

    });

})