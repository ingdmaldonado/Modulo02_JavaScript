import { fndosisDeInsulina } from "./modulo01.js";


/* paso dos invocación de la función*/

{
console.log(`APLICACIÓN CALCULO DOSIS DE INSULINA`);

let resultado=fndosisDeInsulina(180,45,1);
let resultado1=fndosisDeInsulina(180,90.60,2);



console.log(`PRIMER RESULTADO`,resultado, `SEGUNDO RESULTADO` ,resultado1);

}