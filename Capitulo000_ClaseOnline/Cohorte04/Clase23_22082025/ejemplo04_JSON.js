
window.addEventListener("load",()=>
{
    console.log(`aplicacion`);

    /* JSON => JAVA SCRIPT OBJECT NOTATION */

    const Persona = {
        dni:2282828,
        apellido:"GUILLERMO"
    }

    /* ARQUITECTURA DESCENTRALIZADA 
    
        COMPARTIR DATOS => JSON

        <= RECIBIR DATOS EN FORMATO JSON
    
    */

 //   console.log(Persona);

    let PersonaEnFormatoJSON = JSON.stringify(Persona);

    /* OBJETO => STRING(JSON) CONVIERTO Y LO TENGO EN FORMATO STRING */
   // console.log(PersonaEnFormatoJSON);

    /* STRING(JSON) => OBJETO */

    let PersonaReconvertida = JSON.parse(PersonaEnFormatoJSON);

    console.log(Persona);
    console.log(PersonaEnFormatoJSON);
    console.log(PersonaReconvertida);







});