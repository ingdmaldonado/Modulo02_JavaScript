
{

    /* BLOQUE 1. NO SE PUEDE DIVIDIR POR CERO */

    let Numero = 0;

    let Capital = 200;

    if (Numero != 0)
    {
         /* No se puede dividir por cero. hay
        que validar el divisor. es decir
        */        

        let Resultado = Capital / Numero;
        console.log(Resultado);

    }
    else
    {
        console.log("No se puede dividir por cero");
    }


    
    /* BLOQUE 2 - No se puede sacar raiz cuadrada de numeros
    negativos */

    let Numero2 = -25;

    if(Numero > 0)
    {        
        let Raiz = Math.sqrt(Numero2);
        /* Nan => Not a Number */
        console.log(`La Raiz cuadrada de ${Numero2} es igual a ${Raiz}`);
    }
    else
    {
        console.log(`No se puede obtener raices de números negativos`);
    }




    /*
    
        numero = 5
        cuadrado = numero * numero => 25


        numero2 = -25

        raiz = 5

        5 * 5 = 25

        (-5) * (-5) => debería darme el radicando.













    
    */ 
       
}