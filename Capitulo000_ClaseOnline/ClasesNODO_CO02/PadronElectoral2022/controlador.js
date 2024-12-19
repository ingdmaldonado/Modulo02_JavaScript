
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
    console.log("la aplicación web iniciada");

    
    /* find devuelve el primero que encuentra */

    let resultadoFind = PadronElectoral.find((element,indice)=>
        {
            if(element.NUMDNI === '24010663')
            {
                return true;
            }
        })

    /* find con una arrow function corta 
    
        1ro) si recibe un solo parametro
        2do) si el cuerpo de la función tiene una sola instrucción
        
        se pueden obviar los() de la arrow function
        las {} del cuerpo
        y la palabra return 
    
    */

    let resultadoFind2 = PadronElectoral.find(element => element.NUMDNI === '24010663');

    console.log(resultadoFind2);

    /* filter. me permite aislar o separar una
    parte del vector que cumpla con una condicion especifica
    y me devuelve un vector nuevo. 
    */

    let vectorDeMujeres = PadronElectoral.filter((element,indice) => 
        {
            if(element.SEXO === 'F')
            {
                return true;
            }
        })

    /* filter, con una arrow function corta */

    let vectorDeMujeres2 = PadronElectoral.filter(element => element.SEXO === 'F');
    console.log("vector de mujeres");

    console.log(vectorDeMujeres);
    console.log(vectorDeMujeres2);

    /* filter. con una arrow function corta */

    let vectorDeVarones = PadronElectoral.filter(element => element.SEXO === 'M');

    console.log(vectorDeVarones);


    /*
    1ro) Pantalla de busqueda. donde voto ?.

    2do) Estadisticamente, cuantas varones vs.
    mujeres o x hay en el Padron.

    3ro) Promedio de Edad donde Varones y Mujeres

    4to) La Cantidad de Votantes por Escuela
    */

    const vectorDeMujeresDe20a24 = PadronElectoral.filter((element,indice)=>
        {
            let claseNumerica = Number(element.CLASE);

            if((element.SEXO === 'F') && (claseNumerica >= 2000) && (claseNumerica <= 2004))
            {
                return true;
            }
        })

    
    console.log("mujeres de entre 20 a 24 las chicas del grupo");
    console.log(vectorDeMujeresDe20a24);
    

    const vectorDeMujeresDe20a24_2 = PadronElectoral.filter(element => element.SEXO === 'F' && Number(element.CLASE)>=2000 && Number(element.CLASE)<=2004)

    console.log(vectorDeMujeresDe20a24_2);


    /* codigo de ENZO */

    const vectorDeMujeresde2024BISENZO = PadronElectoral.filter((element, indice)=>
        {
            let claseNumerica = Number(element.CLASE);

            if((element.SEXO === 'F') && (claseNumerica >= 2000) && (claseNumerica <= 2004))
            {
                return true;
            }
        })
    
    console.log("este es codigo de enzo");

    console.log(vectorDeMujeresde2024BISENZO);

    
    let resultadoDeFilro2 = vectorDeMujeresde2024BISENZO.filter(element => element.NOMBRE.includes("MARIA"));

    console.log("las MARIAS del VECTOR DE ENZO");

    console.log(resultadoDeFilro2);

    /* Vamos en la proxima clase. como sacar información
    estadística. y también. vamos a ver, como
    hacer un vector con solamente atributos como

    DNI,NOMBRE Y APELLIDO usando destructuring

    */


    /*
    
        forEach()
        find()
        filter()

        map()
        reduce()

    */

   
    

}