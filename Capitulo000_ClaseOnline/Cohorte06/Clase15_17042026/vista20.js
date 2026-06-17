
import {fnPromedioDeTres,fnSobreTasa,fnSobreTasa2,dosisDeInsulina} from "./modelo.js";



window.onload = ()=>{

    console.log(`aplicacion corriendo`);

    // ejemplo invocación del ejercicio 20 //
    let resultado1 = fnPromedioDeTres(7,9,10);
    console.log(resultado1.toFixed(2));

    // ejemplo invocación del ejercicio 22//

    let resultado2 = fnSobreTasa(1,2500000);
    console.log(resultado2);

    let resultado3 = fnSobreTasa2(1,2500000);
    console.log(resultado3);



};