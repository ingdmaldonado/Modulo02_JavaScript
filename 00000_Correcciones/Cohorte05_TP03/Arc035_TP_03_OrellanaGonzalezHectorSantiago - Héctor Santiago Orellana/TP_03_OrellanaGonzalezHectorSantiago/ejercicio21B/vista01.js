import { fncontidadVocal} from "./modulo01.js"; /* aqui me permite importar la arrow fuction del modulo01*/


/* invocación de la funcion*/

{
console.log(` APLICACIÓN CANTIDAD DE VOCALES EXTRAIDAS`);/* comprovación de que el programa este funcionando*/

 let resultado= fncontidadVocal(`hola santiago`); /* creacion de la variable que contendra el valor de la funcion, y el parametro solicitado*/
 let vocales=`LA CANTIDAD DE VOCALES ES:`

 console.log(vocales,resultado);
 
}