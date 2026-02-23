
{
    console.log("application is running");

    /* estructura condicional que vimos hasta
    ahora if/else */

    let descuento = 0;

    if((5 > 3) && (4 > 2))
    {
        console.log("la condición se cumple");
    }
    else
    {
        console.log("la condición no se cumple");
    }

}

/* no se puden 
crear dos variables con el mismo
nombre, en el mismo bloque de codigos 

el bloque de codigo define el ambito
de vida de la variable.

la variable nace y muere en ese ambito 
desde un bloque de codigos x, no
puedo acceder a variables que se definieron
en otro bloque.
*/

{
    let totalFacturadoEnEnero = 200000;
    console.log(totalFacturadoEnEnero);

    let miNombre = "DANIEL";
}

{
    let totalFacturadoEnEnero = -400000;
    console.log(totalFacturadoEnEnero);
   // console.log(miNombre);
}

console.log(totalFacturadoEnEnero);