
//import vectorContribuyentes from "./Datos/VectorContribuyentes_10000";
//import vectorContribuyentes from "./Datos/VectorContribuyentes_25000.js";
import vectorContribuyentes from "./Datos/VectorContribuyentes_50000.js";
//import vectorContribuyentes from ".Datos//VectorContribuyentes_100000.js";
//import vectorContribuyentes from ".Datos/VectorContribuyentes_200000.js";


window.addEventListener("load",()=>{

    console.log("andando");

  
    const idBtnMostrarTodos = document.querySelector("#idBtnMostrarTodos"); 
    const idBtnBuscarPorNombre = document.querySelector("#idBtnBuscarPorNombre");   
    const idBtnBuscarPorNombreyExentoEnIVA = document.querySelector("#idBtnBuscarPorNombreyExentoEnIVA");
    const idBtnFiltrarPorNombreYExentosEnIVA = document.querySelector("#idBtnFiltrarPorNombreYExentosEnIVA");
    const idBtnFiltrosVarios = document.querySelector("#idBtnFiltrosVarios");

    console.log(idBtnMostrarTodos);
    console.log(idBtnBuscarPorNombre);
    console.log(idBtnBuscarPorNombreyExentoEnIVA);
    console.log(idBtnFiltrarPorNombreYExentosEnIVA);

    /* (01) boton que me permite mostrar todos los elementos del vector */
    idBtnMostrarTodos.addEventListener("click",()=>{

        console.log(vectorContribuyentes);

    })

    /* (02) boton que me permite buscar por nombre */
    idBtnBuscarPorNombre.addEventListener("click",()=>{

       vectorContribuyentes.forEach(element => {
            if(element.PadronAFIPDenominacion.includes('ALBERTO'))
            {
                console.log(element);
            }
       })
    })

     /* (03) boton que me permite buscar por nombre y si se encuentra exento en el impuesto de IVA */
    idBtnBuscarPorNombreyExentoEnIVA.addEventListener("click",()=>{

        vectorContribuyentes.forEach(element => {

            if(element.PadronAFIPDenominacion.includes('ALBERTO') && (element.PadronAFIPImpIVA === 'EX'))
            {
                console.log(element);
            }
        })
    })

    /* (04) boton que me permite FILTRAR los "ALBERTO" que no INTEGRAN SOCIEDADES y ESTAN EXENTOS EN IVA */
    idBtnFiltrarPorNombreYExentosEnIVA.addEventListener("click",()=>{

        const vectorDeEmpleadores = vectorContribuyentes.filter(element => element.PadronAFIPEmpleador === 'S' && element.PadronAFIPIntegranteSoc ==='N' && element.PadronAFIPImpIVA ==='EX')
        console.log(vectorDeEmpleadores);


    })

 
    /* (05) Filtrar todas las Empresas que:
    
        - el Cuit termina en 9
        - cuyo nombre no contenga la palabra SUCESION
        - 
    
    cuyo Cuit termina en 9 */

    idBtnFiltrosVarios.addEventListener("click",()=>{

        const VectorResultado = vectorContribuyentes.filter(element => 
            {

                console.log(`PadronAFIPId: ${element.PadronAFIPId}`);
                console.log(`PadronAFIPCUIT: ${element.PadronAFIPCUIT}`);
                console.log(`PadronAFIPDenominacion: ${element.PadronAFIPDenominacion} `);
                console.log(`PadronAFIPImpGanancias: ${element.PadronAFIPImpGanancias}`);
                console.log(`PadronAFIPImpIVA: ${element.PadronAFIPImpIVA}`);
                console.log(`PadronAFIPMonotributo: ${element.PadronAFIPMonotributo}`);
                console.log(`PadronAFIPIntegranteSoc: ${element.PadronAFIPIntegranteSoc}`);
                console.log(`PadronAFIPEmpleador: ${element.PadronAFIPEmpleador}`);
                console.log(`PadronAFIPActividadMonotributo: ${element.PadronAFIPActividadMonotributo}`);           
                console.log(element.PadronAFIPCUIT.substring(10));// este me esta mostrando bien los datos                
                if((element.PadronAFIPCUIT.substring(10) === '9') && !(element.PadronAFIPDenominacion.includes('SUCESION')) && (element.PadronAFIPEmpleador === 'S'))
                    {
                        return true;
                    } 
            }
            )
        console.log(VectorResultado);

    })

  

})