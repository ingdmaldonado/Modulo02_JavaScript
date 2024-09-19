
window.addEventListener("load",()=>
    {


        /* 
        
            1. Intentar acceder a un elemento inexistente en el DOM

            Si intentas acceder a un elemento con 
            getElementById que no existe, elemento será null, 
            y si intentas manipularlo (por ejemplo, acceder a textContent),
            se producirá un error que puedes capturar naturalmente en el bloque catch.

            2. Intentar cambiar el valor de un atributo en un elemento no existente

            3 - Manipular un formulario antes de que los campos se hayan renderizado

            4. Intentar agregar un evento a un elemento que no existe

        */



        /**********************************************************************************/
        /******* EJEMPLO 01 - ACCEDER A ELEMENTOS DEL DOM INEXSITENTES  *******************/
        /**********************************************************************************/

        /*

        const elemento = document.getElementById('elementoInexistente');
        console.log(elemento.textContent);  // Esto lanzará un error si el elemento no existe
        */

        try 
            {
                const elemento = document.getElementById('elementoInexistente');
                console.log(elemento.textContent);  // Esto lanzará un error si el elemento no existe
            } catch (error) {
                // Captura el error cuando intentamos acceder a un elemento no existente en el DOM
              
                console.log(error.message);


        }

        /***************************************************************************************************/
        /******* EJEMPLO 02 - TRATAR DE CONVERTIR A FORMATO JSON DATOS MAL FORMATEADOS       ***************/
        /***************************************************************************************************/
    
        /*
            const datosFormatoString = '{"nombre": "Ana", "edad": 30';  // JSON malformado
            const datosFormatoObjeto = JSON.parse(datosFormatoString);
        */

        try {
           
            const datosFormatoString = '{"nombre": "Ana", "edad": 30';  // JSON malformado
            const datosFormatoObjeto = JSON.parse(datosFormatoString);
            
        } catch (error) {
            // Captura el error cuando el JSON es malformado
        
            console.log(error.message);
        }
    
        


    

    })