
import PadronElectoral from "./PadronParte07.js";

window.addEventListener("load",()=>{

    /* Clase 18. de javascript */

     /* Clase 18. tema 1 . como encontrar con 
    exactitud un nombre */

    let nombreCompleto = "MESSI LIONEL ANDRES";

    let vectorDePalabras = nombreCompleto.split(" ");

    console.log(vectorDePalabras.includes("LIO"));
    
    console.log("las palabras son");

    console.log(vectorDePalabras);

   

    let resultado1 = PadronElectoral.filter(persona => 
        {
            let palabras = persona.APELLIDOYNOMBRE.split(" ");

            if(palabras.includes("MARIA"))
            {
                return true;
            }
        })

    console.log(resultado1);


    let resultado2 = PadronElectoral.filter(persona => persona.APELLIDOYNOMBRE.split(" ").includes("MARIA"));
    
    console.log(resultado2);

    /********* MAP ********/

    const vector1 = [10,15,12,18,20,2];

    const vector1_mitad = vector1.map((element,indice) => 
        {

            return element/2;

        })

    console.log(vector1);
    console.log(vector1_mitad);

    /* ejemplo 02 */

    const persona1 = {NUMDNI:28828999,APELLIDOYNOMBRE:"ANGEL DI MARIA"};

    // destructuring //
    let {NUMDNI,APELLIDOYNOMBRE} = persona1;

    console.log(persona1);

    console.log(NUMDNI);
    console.log(APELLIDOYNOMBRE);



    const vector2 = PadronElectoral.map((element,indice)=>
        {
            // destructuring
            let {NUMDNI,APELLIDOYNOMBRE} = element;

            // vuelvo a crear un objeto nuevo
            let objetoNuevo = {NUMDNI,APELLIDOYNOMBRE};

            return objetoNuevo;

        }) 

    console.log("otra utilidad de map");

    console.log(vector2);

    /* ejemplo 03 - */

    const objeto1 = {nombreclub:"BOCA JUNIORS",copasInter:3};
    
    const objeto2 = objeto1;

    objeto2.nombreclub = "RIVER PLATE";
    objeto2.copasInter = 1;

    console.log(objeto1);
    console.log(objeto2);

    
    const vector3 = PadronElectoral.map(element=>
        {
            let objetoNuevo = 
            {
                ...element, // spread operator
                SEXOCOMPLETO:element.SEXO === 'M'?'masculino':'femenino', // completando con una logica de operador ternario
            }

            return objetoNuevo;

        })
    
    console.log(vector3);


})