
/* las arrow function son otra forma
moderna, nueva. del javaScript ECMA15
y que tiene mejoras en la forma de expresar las
funciones */

function cuadradoDeUnNumero(numero)
{
    return (numero * numero);
}

/* 
    1ro) Se pueden guardar las funciones dentro de constantes
    2do) la forma de definir una función es la siguiente

        () para los parametros de la función
        => flecha que indica que a continuación viene el cuerpo de la función
        {} aqui dentro estaría el cuerpo de la función
*/

// definición de la función
const fnCuadradoDeUnNumero = (numero)=>
    {
        return numero * numero;
    };

/* aqui voy a hacer una función flecha que calcule el promedio de
las notas de alumnos. 4 */

const fnPromedioDe4Notas = (nota1,nota2,nota3,nota4)=>
    {
        let auxiliar = (nota1 + nota2 + nota3 + nota4)/4;

        return auxiliar;

    };

/* Vamos a Crear una función. que reciba como paramtro
una cadena de texto y cuente y retorne la cantidad
de vocales */


/* PROGRAMAR NO ES HACER UNA CARTA */

const fnContarCantidadDeVocales = (cadena)=>
    {
        // sacamos el largo y lo guardamos en una variable
        let largoCadena = cadena.length;

        // solamente lo muestro para ver que este funcionando bien
        console.log(largoCadena); 

        // me voy a crear un contador 
        let cantidadVocales = 0;

        // recorrido de la cadena
        for(let j = 0;j < largoCadena;j=j+1)
        {
            let caracter = cadena.charAt(j);

            console.log(`Caracter ${j} es : ${caracter}`);

            if((caracter === 'A') || (caracter === 'E') || (caracter === 'I') || (caracter === 'O') || (caracter === 'U'))
            {
                // cada vez que encuentro una vocal la cuento 
                cantidadVocales = cantidadVocales + 1;
            }        
        }

        return cantidadVocales;

    };

/* crear una función. que reciba como parametro una cadena
y determine con un valor true o false. si esa cadena
tiene algún espacio en blanco 

    registrar usuarios en una aplicacion

        nombre usuario => ing dmaldonado@gmail.com

        clave => soyDel Que Nunca Descendio
*/

const fnTieneEspacioEnBlanco = (cadena)=>
    {
        // aqui saco el largo de la cadena
        let largoCadena = cadena.length;

        // aqui inicializo una variable booleana y la pongo en false
        let tieneEspacioEnBlanco = false;

        // recorrido de la cadena
        for(let i = 0;i < largoCadena;i=i+1)
        {
            // saco caracter x caracter //
            let caracter = cadena.charAt(i);

            // lo muestro
            //console.log(caracter);

            if(caracter === ' ')
            {
                // flags o banderas //

                tieneEspacioEnBlanco = true;// cambio el estado de la variable.
                break; // salir del ciclo repetitivo

                //console.log(`Encontre un espacio en blanco en la posicion ${i}`);

            }
        }

        return tieneEspacioEnBlanco;

    }




/* aqui estaría el programa principal */
{
    console.log(`aplicación corriendo`);

    let resultado1 = cuadradoDeUnNumero(9);
    let resultado2 = cuadradoDeUnNumero(2+2);
    let resultado3 = fnCuadradoDeUnNumero(7);

    let promedioGuillermo = fnPromedioDe4Notas(9,10,8,9);

    let promedioEdilia = fnPromedioDe4Notas(10,7,8,6);

    console.log(`El resultado 1 es: ${resultado1}`);
    console.log(`El resultado 2 es: ${resultado2}`);
    console.log(`El resultado 3 es: ${resultado3}`);

    console.log(`El Promedio de Guillermo es: ${promedioGuillermo}`);

    console.log(`El promedio de Edilia es ${promedioEdilia}`);

    let domicilioDeGuillermo = `BarriO Villa Cubas 899 AAaaiiO`;

    console.log(domicilioDeGuillermo.length);

    console.log(domicilioDeGuillermo.toUpperCase());

    // aqui hare la invocacion de la funcion //
    let cantidadvocales1 = fnContarCantidadDeVocales(domicilioDeGuillermo.toUpperCase());

    console.log(`Cantidad vocales ${cantidadvocales1}`);

    let cantidadvocales2 = fnContarCantidadDeVocales("BOCA FUE ELIMINADO DE UNA MANERA BOCHORNOSA");

    console.log(`Cantidad vocales ${cantidadvocales2}`);

    // vamos a realizar una prueba de varias cadenas //

    let tieneAlgunEspacio1 = fnTieneEspacioEnBlanco("hola soy DANIEL  sufrido    hincha de BOCA");
    console.log(tieneAlgunEspacio1);

    let tieneAlgunEspacio2 = fnTieneEspacioEnBlanco("soyDeLaB");
    console.log(tieneAlgunEspacio2);


    if(fnTieneEspacioEnBlanco("soyDe LaB"))
    {
        console.log("señor esa clave que ud. intenta poner no cumple con los ")
    }
    else
    {

    }



}

/* 
    - vimos el concepto de función => caja negra => bloque de codigo
    especializado en algo que no entiende del contexto exterior.

    - vimos el concepto de arrow function

        const fnEjemplo = ()=> {}

    - vimos el concepto de cadenas y recorridos de cadenas

    - return => porque es el valor que devuelve al programa principal

    - la función encapsula una lógica que puede ser reutilizada.

    DOMINIO DE CONOCIMIENTO

        - matematica financiera
        - impositiva nacional y provincial + tasas municipales

    

*/


/* 

    guill ermoponce @soyDelMasGrande.com.ar

    guillermo ponce 

    22 444 772

    22.444.772

    23240112544542

*/