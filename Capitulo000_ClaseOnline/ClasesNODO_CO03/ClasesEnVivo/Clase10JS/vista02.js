
/* 
    ECMAJS 15 => 
*/

/* crear y definir una funcion. utilizando
la palabra reservada function y ponerle un nombre
a esa funcion. en este caso se llama CuadradoDeUnNumero
y recibe como parametro de entrada  numero */

function CuadradoDeUnNumero(numero)
{
    let auxiliar = 0;
    auxiliar = numero * numero;

    /* termina la función. y como segunda medida te
    devuelvo este valor */

    return auxiliar; 
}

/* aqui voy a crear otra funcion que permita
recibir una cadena de texto, la recorra y 
determine si tiene la letra F ó f minuscula
y que devuelva una bandera o flag que me diga
si esa cadena la tiene ese caracter */

function CadenaTieneLetraF(cadenaDeEntrada)
{
    let encontreLetraF = false; // flags o bandera
    for(let i = 0;i < cadenaDeEntrada.length;i++)
    {
        let caracterExtraido = cadenaDeEntrada.charAt(i);

        if((caracterExtraido === 'F') || (caracterExtraido === 'f'))
        {
            encontreLetraF = true;  
            break;          
        }
    }

    return encontreLetraF;
}


{ // programa principal //
    console.log(`funcionando`);

    /* INVOCACIÓN de la FUNCIÓN */

    // ejemplo 01 //
    let resultado1 = CuadradoDeUnNumero(-6);
    console.log(resultado1);


    // ejemplo 02 //
    let resultado2 = 2 * CuadradoDeUnNumero(2) + 3 * CuadradoDeUnNumero(3+1) - 5;   
    console.log(resultado2);

    // ejemplo 03 //

    let resultado3 = CuadradoDeUnNumero(CuadradoDeUnNumero(CuadradoDeUnNumero(2)))
    console.log(resultado3);

    /* 
        2 al cuadrado => 4
        4 al cuadrado => 16
        16 al cuadrado => 256
    */


    /* Invocación de la función CadenaTieneLetraF */

    let resultado4 = CadenaTieneLetraF("hola soy Fernando");
    console.log(resultado4);
    
    let resultado5 = CadenaTieneLetraF("soy Daniel hincha de BOCA");
    console.log(resultado5);

    let cadenaDeEjemplo = `Riquelme F es hora que te vayas`;
    
    let resultado6 = CadenaTieneLetraF(cadenaDeEjemplo);
    console.log(resultado6);

    let cadena1 = `hola soy Fernando`;

    let cadena2 = `hola soy Juan Pablo hermano de Fernando`;

    let resultado7 = CadenaTieneLetraF(cadena1);
    console.log(resultado7);

    let resultado8 = CadenaTieneLetraF(cadena2);
    console.log(resultado8);

}   