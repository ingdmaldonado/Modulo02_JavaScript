
//import PadronElectoral from "./PadronParte01.js";
//import PadronElectoral from "./PadronParte02.js";
import PadronElectoral from "./PadronParte03.js";
//import PadronElectoral from "./PadronParte04.js";
//import PadronElectoral from "./PadronParte05.js";
//import PadronElectoral from "./PadronParte06.js";
//import PadronElectoral from "./PadronParte07.js";
//import PadronElectoral from "./PadronParte08_Completo.js";


window.onload = function()
{

    /******************************************************/
    /* FORMA 01: QUEDARME CON UN SUBVECTOR                */
    /******************************************************/

    let subVectorConDniyNombre = PadronElectoral.filter(element => {

        let {NUMDNI,APELLIDOYNOMBRE} = element;

        let objetoNuevo = {NUMDNI,APELLIDOYNOMBRE};

        return objetoNuevo;

    })

    console.log("subvector");
    console.log(subVectorConDniyNombre);

    /****************************************************/
    /* FORMA 01: QUEDARME CON UN SUBVECTOR               */
    /*****************************************************/

    let SubVector1 = PadronElectoral.map(element => 
        {
            let {NUMDNI,APELLIDOYNOMBRE} = element;

            let objetoNuevo = {NUMDNI,APELLIDOYNOMBRE};

            return objetoNuevo;

        })

    console.log("subvector");
    console.log(SubVector1);

    /****************************************************/

    let apellidoynombre = 'MARIA ARANCIBIA';

    const palabras = apellidoynombre.split(" "); // Dividir por espacios
    if (palabras.includes("MARIANA")) {
        console.log("El nombre 'MARIA' está en la cadena.");
    } else {
        console.log("El nombre 'MARIA' no está en la cadena.");
    }


    /*********************************************************/
    
    const personasConMaria = PadronElectoral.filter(persona => 
        persona.APELLIDOYNOMBRE.split(" ").includes("MARIA")
    );
    
    console.log(personasConMaria);
 
    /************************************************************/

    /* MAP. MAP. MAP */

    /************* EJEMPLO 01: MAP  ***********************************************/

    const nombresCompletos = PadronElectoral.map(persona => persona.APELLIDOYNOMBRE);
    console.log(nombresCompletos);


    /************ EJEMPLO 02: MAP *************************************/

    const dniYNombre = PadronElectoral.map(persona => ({
        NUMDNI: persona.NUMDNI,
        APELLIDOYNOMBRE: persona.APELLIDOYNOMBRE
    }));
    
    console.log(dniYNombre);
    // Salida:
    // [
    //     { NUMDNI: "34031160", APELLIDOYNOMBRE: "CORDOBA ANA SOFIA" },
    //     { NUMDNI: "34031195", APELLIDOYNOMBRE: "ACOSTA JOSE VICENTE" },
    //     ...
    // ]
    

    const padronConGenero = PadronElectoral.map(persona => ({
        ...persona, // Copiar todas las propiedades originales
        GENERO: persona.SEXO === 'F' ? 'Femenino' : 'Masculino'
    }));
    
    console.log(padronConGenero);
    // Salida:
    // [
    //     { ID: "100001", SEXO: "F", ..., GENERO: "Femenino" },
    //     { ID: "100002", SEXO: "M", ..., GENERO: "Masculino" },
    //     ...
    // ]
    

    const PadronConGenero2 = PadronElectoral.map(element => 
        {
            const objetoliteral = {
                                    ...element,
                                    generoCompleto:element.SEXO === 'F' ? 'Femenino':'Masculino'
                                };


            return objetoliteral;

        })

    console.log(PadronConGenero2);

    



}