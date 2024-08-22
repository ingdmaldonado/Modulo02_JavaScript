/*
    Ejercicio Nro. 07:
    Dado los lados de un rectángulo (Base y Altura) determinar
    la superficie de los mismos.
*/
{
    let Base = 0;
    let Altura = 0;
    let Superfiecie = 0;

    Base = Number(prompt("Por favor ingrese la Base del rectangulo"));



    if(Base > 0)
    {
        // por aqui estariamos diciendo que respondio bien a la base
        
        Altura = Number(prompt("Por favor ingrese la Altura"));

        if(Altura > 0)
        {
            // por aqui ambas cosas estarian bien
            Superfiecie = Base * Altura;
            console.log(`Rectangulo con Base ${Base} y Altura igual a ${Altura} nos da una superficie ${Superfiecie}`);
        }
        else
        {
            // por aqui estaría mal ingresa la altura
            console.log(`Por favor ingrese un valor correcto de altura que sea mayor a 0`);
        }
    }
    else
    {
        // por aqui estariamos diciendo que se equivoco alingresar la base
        console.log(`Por favor ingrese un valor correcto de base. Base mayor a 0`);
    }

    /*
    if((Base > 0)&&(Altura > 0))
    {
        Superfiecie = Base * Altura;
        console.log(`Rectangulo con Base ${Base} y Altura igual a ${Altura} nos da una superficie ${Superfiecie}`);
    }
    else
    {
        console.log(`Sr. Usuario ingrese valores validos`);
    }
        */
   

   


}
