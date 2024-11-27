
import {Suma} from "./vista01_poo_suma_modelo.js";
import {IMC} from "./vista01_poo_IMC_modelo.js";

window.addEventListener("load",()=>
    {

        console.log("running");


        /********************************************************/
        // EJEMPLO 01 => CREAMOS UN OBJETO DE LA CLASE SUMA
        /********************************************************/

            // 1ro. instancio el objeto y paso como parametros valores a su constructor 
                let objeto1 = new Suma(10,20);

            // 2do. muestro el objeto
                console.log(objeto1);
        
            // 3ro. Invocamos al método que me permite obtener la suma

                console.log(objeto1.sumar());

                let resultado = objeto1.sumar();
                console.log(resultado);

        /*****************************************************************************************/
        // EJEMPLO 02 => CREAMOS UN OBJETO DE LA CLASE SUMA y LE INVOCAMOS DIRECTAMENTE EL METODO
        /*****************************************************************************************/

                let objeto2 = new Suma(20,40).sumar();  

        
        /*******************************************************************************************/
        // EJEMPLO 03 => INSTANCIAMOS LA CLASE QUE RESUELVE EL I.M.C. 
        /*******************************************************************************************/

            let objeto3 = new IMC(80,1.65);

            console.log(objeto3.calcularIMC());

            console.log(objeto3.analizarIMC());




    })