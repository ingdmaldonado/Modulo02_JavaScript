
import PadronElectoral from "./PadronParte03.js";

window.addEventListener("load",()=>
    {


        /****************************************************************/
        /* Introduccion Conceptual a la función reduce, sin inicializar */
        /****************************************************************/

        const edadDePersonas = [25,30,40,50,60,22,18,44];

        let resultado = edadDePersonas.reduce((acumulador,element)=>
            {
                if(element >=50)
                {
                    return acumulador = acumulador + element;
                }
                else
                {
                    return acumulador;
                }
            })

        console.log(resultado);

        /***********************************************************************/
        /* introduccion Conceptual a la función reduce, inicializando el valor */
        /***********************************************************************/

        let resultado2 = edadDePersonas.reduce((acumulador,element)=>
            {
                if(element >= 50)
                {
                    return acumulador + element;
                }
                else
                {
                    return acumulador;
                }

            },0);

        console.log(resultado2);

        /****************************************************/
        /* Contar la cantidad de Personas de la Clase 1989  */
        /****************************************************/

        let cantidadPersonasClase89 = PadronElectoral.reduce((contador,element)=>
            {

                if(element.CLASE === '1989')
                {
                    return contador + 1;
                }
                else
                {
                    return contador;
                }
            },0)

        console.log(cantidadPersonasClase89);

        let personasDeClase89 = PadronElectoral.filter(element => element.CLASE === '1989');

        console.log(personasDeClase89);


        /******************************************************************/
        /*                                                                */
        /******************************************************************/

        const conteoPorSexo = PadronElectoral.reduce((acumulador, persona) => {
            if (persona.SEXO === 'M') {
                acumulador.hombres += 1;
            } else if (persona.SEXO === 'F') {
                acumulador.mujeres += 1;
            }
            return acumulador;
        }, { hombres: 0, mujeres: 0 });
        
        console.log(conteoPorSexo);
        // Salida: { hombres: X, mujeres: Y }
        


        /**************************************************************/
        /* Contar la cantidad de Personas de la Clase 1989,1990,1991  */
        /**************************************************************/

        let personasClasesConsecutivas = PadronElectoral.reduce((objeto,element)=>{

            if(element.CLASE === '1989')
            {
                objeto.cant1989 = objeto.cant1989 + 1
            }
            if(element.CLASE === '1990')
            {
                objeto.cant1990 = objeto.cant1990 + 1;
            }
            return objeto;

        },{cant1989:0,cant1990:0});

        console.log(personasClasesConsecutivas);


        /* */

        const dniMasBajo = PadronElectoral.reduce((menor, persona) => {
            const dniActual = Number(persona.NUMDNI);
            return dniActual < menor ? dniActual : menor;
        }, Infinity);
        
        console.log(`El DNI más bajo es: ${dniMasBajo}`);
        // Salida: El DNI más bajo es: X
        



    })