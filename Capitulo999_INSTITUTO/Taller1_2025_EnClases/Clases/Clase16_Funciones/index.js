
/* MOMENTO 1: MOMENTO DE LA DEFINICIÓN
DE LA FUNCIÓN */




/* forma 1 : mas tradicional de todas
*/
function sumaDeDos (numero1,numero2)
{
    return numero1 + numero2;
}

/* forma2: un poco mas moderna 
permite declarar funciones dentro
de variables o constantes. y 
es mejor. dentro de una constante
*/

const sumaDeDosV2 = function(valor1,valor2)
{
    return valor1 + valor2;
}

/* forma3: es la forma de
arrow function. o funciones flecha.
también lo guardo en una constante
pero tiene muchas particularidades
que la hacen de una manera excelente
para la PROGRAMACIÓN MODERNA.
*/

const sumaDeDosV3 = (x1,x2)=>
    {
        return x1 + x2;
    }


/* voy a declararlo como arrow function */

const calcularIVA = (tipo,base)=>
    {
        let resultado = 0;

        switch(tipo)
        {
            case 1:
                {
                    resultado = (base * 21)/100;
                    break;

                }

            case 2:
                 {
                    resultado = (base * 10.5)/100;
                    break;

                }

            case 3:
                {
                    resultado = (base * 27)/100;
                    break;
                }


        }

        return resultado;

    }




// programa principal //
{

    let numero1 = 50;
    let numero2 = 20;

    console.log("running");

    /* MOMENTO 2: momento de la invocación de la función */
    let resultado1 = sumaDeDos(10,20);

    console.log(resultado1);

    let resultado2 = sumaDeDosV2(10,20);
    console.log(resultado2);

    numero2 = sumaDeDos(numero2,15);
    console.log(numero2);

    let resultado3 = sumaDeDosV3(15,21);
    console.log(resultado3);

    /* vamos a invocarla a la función */

    let salida1 = calcularIVA(1,100);
    console.log(salida1);

    let salida2 = calcularIVA(2,100);
    console.log(salida2);

    let salida3 = calcularIVA(3,100);
    console.log(salida3);




}