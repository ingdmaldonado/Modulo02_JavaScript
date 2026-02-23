
{
    let numero1 = 0;
    let numero2 = 0;

    numero1 = Number(prompt("Ingrese el numero 1"));
    numero2 = Number(prompt("Ingrese el numero 2"));

    if(numero1 > numero2)
    {
        console.log(`El numero 1 es mayor`);
    }
    else
    {
        if(numero1 === numero2)
        {
            console.log(`El numero 1 es igual al numero 2`);
        }
        else
        {
            console.log(`El numero 1 es menor al numero 2`);
        }
    }

    console.log("fin del programa");

    /* 
    
        =  => se utiliza para asignar valores a variables 

        == => se utiliza para comparar dos variables pero que pueden llegar
        a ser de formatos distintos

        === => se utiliza para comparar dos variables que ademas
        de tener el mismo valor, tienen que ser del mismo tipo.



        let x1 = "10"
        let x2 = 10

        if(x1 === x2)
        {

        }
        else
        {
        
        }


    */

}