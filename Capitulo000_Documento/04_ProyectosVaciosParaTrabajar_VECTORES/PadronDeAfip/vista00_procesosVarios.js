
import vectorContribuyentes from "./Datos/VectorContribuyentes_10000.js";
//import vectorContribuyentes from "./Datos/VectorContribuyentes_25000.js";
//import vectorContribuyentes from "./Datos/VectorContribuyentes_50000.js";
//import vectorContribuyentes from ".Datos//VectorContribuyentes_100000.js";
//import vectorContribuyentes from ".Datos/VectorContribuyentes_200000.js";


window.addEventListener("load",()=>{

    console.clear();
    console.log("andando");

  
    const idBtnLimpiarConsola = document.querySelector("#idBtnLimpiarConsola");
    const idBtnMostrarTodos = document.querySelector("#idBtnMostrarTodos"); 
    const idBtnBuscarPorNombre = document.querySelector("#idBtnBuscarPorNombre");   
    const idBtnBuscarPorNombreyExentoEnIVA = document.querySelector("#idBtnBuscarPorNombreyExentoEnIVA");
    const idBtnFiltrarPorNombreYExentosEnIVA = document.querySelector("#idBtnFiltrarPorNombreYExentosEnIVA");
    const idBtnFiltrosVarios = document.querySelector("#idBtnFiltrosVarios");
    const idBtnCantidadDeMonotributistas = document.querySelector("#idBtnCantidadDeMonotributistas");
    const idCantidadCuitsPorTerminacion = document.querySelector("#idCantidadCuitsPorTerminacion");

    console.log(idBtnMostrarTodos);
    console.log(idBtnBuscarPorNombre);
    console.log(idBtnBuscarPorNombreyExentoEnIVA);
    console.log(idBtnFiltrarPorNombreYExentosEnIVA);

    idBtnLimpiarConsola.addEventListener("click",()=>{

        console.clear();

    })

    /********************************************************************/
    /* (01) boton que me permite mostrar todos los elementos del vector */
    /********************************************************************/

    idBtnMostrarTodos.addEventListener("click",()=>{

        console.log(vectorContribuyentes);

    })

    /*********************************************************/
    /* (02) boton que me permite buscar por nombre (ALBERTO) */
    /*********************************************************/

    idBtnBuscarPorNombre.addEventListener("click",()=>{

       vectorContribuyentes.forEach(element => {
            if(element.PadronAFIPDenominacion.includes('ALBERTO'))
            {
                console.log(element);
            }
       })
    })

    /*********************************************************************************************/
    /* (03) boton que me permite buscar por nombre y si se encuentra exento en el impuesto de IVA */
    /**********************************************************************************************/

    idBtnBuscarPorNombreyExentoEnIVA.addEventListener("click",()=>{

        vectorContribuyentes.forEach(element => {

            if(element.PadronAFIPDenominacion.includes('ALBERTO') && (element.PadronAFIPImpIVA === 'EX'))
            {
                console.log(element);
            }
        })
    })

    /******************************************************************************************************/
    /* (04) boton que me permite FILTRAR los "ALBERTO" que no INTEGRAN SOCIEDADES y ESTAN EXENTOS EN IVA  */
    /******************************************************************************************************/
    /*
        - Son Empleadores
        - No integran Sociedades
        - Estan Exentos en IVA
    */

    idBtnFiltrarPorNombreYExentosEnIVA.addEventListener("click",()=>{

        const vectorDeEmpleadores = vectorContribuyentes.filter(element => element.PadronAFIPEmpleador === 'S' && element.PadronAFIPIntegranteSoc ==='N' && element.PadronAFIPImpIVA ==='EX')
        console.log(vectorDeEmpleadores);


    })

 
    /******************************************/
    /* (05) Filtrar todas las Empresas que:   */
    /******************************************/
    
    /*
        - el Cuit termina en 9
        - cuyo nombre no contenga la palabra SUCESION
        - que no integren sociedades.

        cuyo Cuit termina en 9 
    */

    idBtnFiltrosVarios.addEventListener("click",()=>
        {

        const VectorResultado = vectorContribuyentes.filter(element => 
            {
                if((element.PadronAFIPCUIT.substring(10) === '9') && !(element.PadronAFIPDenominacion.includes('SUCESION')) && (element.PadronAFIPEmpleador === 'S'))
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
                       // console.log(element.PadronAFIPCUIT.substring(10));// este me esta mostrando bien los datos                
                        return true;
                    } 
            }
            )
        console.log(VectorResultado);

    })

  
    idBtnCantidadDeMonotributistas.addEventListener("click",()=>
        {
          
            alert("arrancando");
            vectorContribuyentes.forEach(element => {

                /*
                console.log(`PadronAFIPId: ${element.PadronAFIPId}`);
                console.log(`PadronAFIPCUIT: ${element.PadronAFIPCUIT}`);
                console.log(`PadronAFIPDenominacion: ${element.PadronAFIPDenominacion} `);
                console.log(`PadronAFIPImpGanancias: ${element.PadronAFIPImpGanancias}`);
                console.log(`PadronAFIPImpIVA: ${element.PadronAFIPImpIVA}`);
                console.log(`PadronAFIPMonotributo: ${element.PadronAFIPMonotributo}`);
                console.log(`PadronAFIPIntegranteSoc: ${element.PadronAFIPIntegranteSoc}`);
                console.log(`PadronAFIPEmpleador: ${element.PadronAFIPEmpleador}`);
                console.log(`PadronAFIPActividadMonotributo: ${element.PadronAFIPActividadMonotributo}`);           
                */


                if(element.PadronAFIPMonotributo != 'NI' && element.PadronAFIPEmpleador ==='S')
                {
                    console.log(element);
                }

            })

            alert("terminando");


            let Resultado1 = vectorContribuyentes.reduce((contadorMonotributistas, element) => {
                if (element.PadronAFIPMonotributo != 'NI' && element.PadronAFIPEmpleador ==='S') {
                    return contadorMonotributistas + 1; // Incrementar el contador si cumple la condición
                } else {
                    return contadorMonotributistas; // Mantener el valor actual si no cumple la condición
                }
            }, 0); // Inicializar el contador en 0
            
            console.log(Resultado1); // Debería mostrar el número de monotributistas que cumplen la condición
            

            let Resultado2 = vectorContribuyentes.reduce((contador,element)=>{

                if(element.PadronAFIPMonotributo != 'NI' && element.PadronAFIPEmpleador ==='S')
                {
                    return contador + 1;
                }
                else
                {
                    return contador;
                }

            },0);

            console.log(Resultado2);


        
        })

    idCantidadCuitsPorTerminacion.addEventListener("click",()=>{

        console.log("funcionando");

       
        let Resultado = vectorContribuyentes.reduce((objetoAcumulador,element)=>{

            if(element.PadronAFIPCUIT.substring(10)==='1')
            {
                objetoAcumulador.cantidad1 = objetoAcumulador.cantidad1 + 1;
            }
            if(element.PadronAFIPCUIT.substring(10)==='2')
            {
                objetoAcumulador.cantidad2 = objetoAcumulador.cantidad2 + 1;
            }

            return objetoAcumulador;

        },{cantidad1:0,cantidad2:0});

        console.log(Resultado);


    })

})