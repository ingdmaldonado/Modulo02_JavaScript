
/* RestOperator => a Nivel de Definicion de
Funciones 

    estoy "definiendo una funcion" que
    recibe como parametro 2 numeros. 
    los tiene que sumar y los tiene que devolver


*/

/* definición de la función */
const fnSuma = (n1,n2,n3) => 
    {
        return (n1 + n2 + n3);
    }

/* realizar una función que reciba
múltiples parametros y los pueda sumar 
y hacerles un return
*/

/* cuando hay ...nombre en una definción
de función. se llama RestOperator.
sería como manejar múltiples valores 
con un solo nombre  */

const fnSumaMultiple = (...parametros) => 
    {
        let acumulador = 0;

        parametros.forEach(numero => acumulador = acumulador + numero);

        return acumulador;        
    }


window.addEventListener("load",()=>
{
    console.log("Running");

    /* Invocación de la función */

    console.log(fnSuma(2,8,4));

    /* Invocación de la función suma multiple */
    console.log(fnSumaMultiple(2,8,4,10,15,-8,-10));

})