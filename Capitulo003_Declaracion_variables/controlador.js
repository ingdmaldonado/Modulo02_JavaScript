
{

    /***********************************************************/
    /*** PRIMERA PARTE - DECLARACION Y OPERACIONES BÁSICAS  ***/
    /***********************************************************/

        /* Particularidades para nombrar variables
        
            - Un identificador (nombre de la variable) debe comenzar con una letra (a-z, A-Z), un signo de dólar ($) o un guion bajo (_).
            - Los caracteres siguientes pueden ser letras, números (0-9), guiones bajos o signos de dólar.
            - No puede comenzar con un número.
            - No se pueden crear dos variables con el mismo nombre en un mismo bloque

            - No se pueden usar palabras reservadas de JavaScript como nombres de variables. 
                Algunas palabras reservadas incluyen 
                    let, 
                    const, 
                    var, 
                    if, 
                    else, 
                    while, 
                    for, 
                    function, 
                    return, 
                    class, 
                    try, 
                    catch, entre otras.

            - NO DEJAR ESPACIOS EN BLANCO entre el NOMBRE DE LA VARIABLE

                let Total de Ingresos = 0;

        */



    /* declaramos una variable y asignamos valor significa INICIALIZAR VARIABLES */

    let a = 20;

    let b = 30;

    /* podemos crear una tercera variable y realizar la suma de esas variables 
    algunas operaciones basicas = EXPRESIONES
        suma
        resta
        multiplicacion
        division
    */

    let suma = a + b; 
    console.log("El resultado de la suma es: ",suma);

    let resta = a - b;
    console.log("El resultado de la resta es: ",resta);

    let multiplicacion = a * b;
    console.log("el resultado de la multiplicación es ",multiplicacion);

    let division = a / b;
    console.log("el resultado de la división es : ",division);


    /* tambien se puede mostrar directamente el resultado de una operación */

    console.log(a * 2 + 3 * b - 1);


    /***********************************************************/
    /*** SEGUNDA PARTE - DIFERENTES TIPOS DE VARIABLES       ***/
    /***********************************************************/

        /* TIPO NUMERICO */

            let z = 200;

        /* TIPO STRING */

            let nombreJugador = "JUAN ROMAN RIQUELME";

            let nombreClub = "CLUB ATLETICO BOCA JUNIORS";

            // esto se llama interpolación de cadenas //
            let fraseCombinada = `El Jugador ${nombreClub} fue jugador de ${nombreClub}`;

        /* TIPO BOOLEAN */

            let AceptaElPago = true; // permite dos valores, true significa verdadero, false que significa falso

        /* VALORES NULOS */

            let unValorNulo = null

        /* VALORES INDEFINIDOS */

            let unValorIndefinido = undefined

        /* VALORES SYMBOL 
        
            Símbolos (Symbol) son únicos y se utilizan como 
            identificadores únicos para las propiedades de 
            los objetos.

            Son útiles para evitar colisiones de propiedades
            y para agregar propiedades ocultas que no se 
            enumeran en bucles o métodos como Object.keys().

            Se pueden crear utilizando Symbol() y opcionalmente
            pasar una descripción.Los Symbol proporcionan 
            una forma de garantizar
            que las propiedades del objeto no entren en conflicto,
            especialmente en contextos donde diferentes partes
            del código podrían usar los mismos nombres de propiedad.

        */


}


    /*************************************/
    /* TERCERA PARTE - BLOQUES DE CODIGO */
    /*************************************/

    /* esto es bloque 2 */
    {
        let nombreProgramador = "DANIEL";

    }

    /* esto es bloque 3 */
    {
        let nombreProgramador = "JORGE";
    }

    /* esto es bloque 4 */
    {
        let a = 20;
        //let a = 30;
    }

    /********************************************************/
    /* CUARTA PARTE - JAVASCRIPT LENGUAJE DÉBILMENTE TIPADO */
    /********************************************************/

    {

        let Numero1 = 100;
        console.log(Numero1);

        Numero1 = "JOSE DE SAN MARTIN";
        console.log(Numero1);

    }

     /********************************************************/
    /* QUINTA PARTE - case - Sensitive */
    /********************************************************/
    {
        let nombre = "Ana";
        let Nombre = "Carlos";

        console.log(nombre); // "Ana"
        console.log(Nombre); // "Carlos"
    }
   
    /********************************************************/
    /* SEXTA PARTE - Determinar el TIPO de una variable     */
    /********************************************************/

    {
        let variableEjemplo = 99.99;

        console.log ("el tipo de la variable es " + typeof variableEjemplo);

        variableEjemplo = true;

        console.log ("el tipo de la variable es " + typeof variableEjemplo);

        variableEjemplo = "ahora me convertí en String";

        console.log ("el tipo de la variable es " + typeof variableEjemplo);

        variableEjemplo = undefined;

        console.log ("el tipo de la variable es " + typeof variableEjemplo);

        variableEjemplo=null;

        console.log ("el tipo de la variable es " + typeof variableEjemplo);      

    }