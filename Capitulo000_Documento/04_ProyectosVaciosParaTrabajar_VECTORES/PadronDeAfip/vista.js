
//import vectorContribuyentes from "./Datos/VectorContribuyentes_10000";
//import vectorContribuyentes from "./Datos/VectorContribuyentes_25000.js";
import vectorContribuyentes from "./Datos/VectorContribuyentes_50000.js";
//import vectorContribuyentes from ".Datos//VectorContribuyentes_100000.js";
//import vectorContribuyentes from ".Datos/VectorContribuyentes_200000.js";

window.addEventListener("load",()=>
    {

        const idBtnMostrarTodas = document.querySelector("#idBtnMostrarTodas");        
        const idTextoABuscar = document.querySelector("#idTextoABuscar");
        const idBtnBuscarPorNombre = document.querySelector("#idBtnBuscarPorNombre");

        const idCuitABuscar = document.querySelector("#idCuitABuscar");
        const idBtnBuscarPorCuit = document.querySelector("#idBtnBuscarPorCuit");
        const idResultadoPorCuit = document.querySelector("#idResultadoPorCuit");

        const idSelectorImpGanancias = document.querySelector("#idSelectorImpGanancias");
        const idBtnFiltrarPorGanancias = document.querySelector("#idBtnFiltrarPorGanancias");



        /***************************************/
        /* (01) - Mostrar todos los Elementos  */
        /***************************************/

        idBtnMostrarTodas.addEventListener("click",()=>{

            vectorContribuyentes.forEach(element => console.log(element));

        })

        /********************************************/
        /* (02) Buscar por nombre                   */
        /********************************************/

        idBtnBuscarPorNombre.addEventListener("click",()=>
            {

            let textoABuscar = idTextoABuscar.value;
            if(textoABuscar.length != 0)
            {
                console.log(textoABuscar);

                vectorContribuyentes.forEach(element => {

                    if(element.PadronAFIPDenominacion.includes(textoABuscar.toUpperCase()))
                    {
                        console.log(element);
                    }

                });
            }
            else
            {
                alert("por favor ingrese un valor");
            }
        })

        /******************************************/
        /* (03) Busqueda por Cuit                 */
        /******************************************/

        idBtnBuscarPorCuit.addEventListener("click",()=>
            {
                let cuitABuscar = idCuitABuscar.value;
                if(cuitABuscar.length !=0)
                {
                    vectorContribuyentes.forEach(element => 
                        {
                            if(element.PadronAFIPCUIT === cuitABuscar)
                            {
                                idResultadoPorCuit.textContent = (`Cuit:= ${element.PadronAFIPCUIT} - ${element.PadronAFIPDenominacion}`);
                            }
                        })
                }
            })


        /************************************************/
        /* (04) - Filtrando por condición frente al IVA */
        /************************************************/

        idBtnFiltrarPorGanancias.addEventListener("click",()=>{

            let valorSelectorImpGanancias = idSelectorImpGanancias.value;
            if(valorSelectorImpGanancias.length !=0)
            {
                let vectorFiltrado = vectorContribuyentes.filter(element => element.PadronAFIPImpGanancias === valorSelectorImpGanancias);
                console.log(vectorFiltrado);
            }
        })



    /* Filtrado de datos con filter */

    let vectorResultante = vectorContribuyentes.filter((element,indice)=>
        {
            let denominacion = element.PadronAFIPDenominacion;

            if(denominacion.includes("SUCESION"))
            {
                return true;
            }

        })

    console.log(vectorResultante);

    vectorContribuyentes.forEach(element => 
        {
            console.log(element.PadronAFIPCUIT);
            console.log(element.PadronAFIPCUIT.substring(8,11))
    });



 //   let vectorResultante2 = vectorContribuyentes.filter(element=> element.PadronAFIPCUIT.includes('20') && element.PadronAFIPDenominacion.includes('FRANCHINI') && element.PadronAFIPCUIT.substring(8,11))==='373');

    let vectorResultado2 = vectorContribuyentes.filter(
            element => 
                    element.PadronAFIPCUIT.includes('30') //dentro de su cuit tiene el 30
                        && 
                    element.PadronAFIPDenominacion.includes('SUCESION') // dentro del nombre incluye la palabra sucesion
                        && 
                    element.PadronAFIPCUIT.substring(10,11) === '1' // su cuit termina en 1
                        && 
                    element.PadronAFIPImpGanancias === 'AC'); // esta activo en el impuesto a las ganancias

    console.log(vectorResultado2);
  
 //   console.log(vectorResultante);

 //   console.log(vectorResultante2);

    

})