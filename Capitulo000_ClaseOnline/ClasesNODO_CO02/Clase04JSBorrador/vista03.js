/*
    Ejercicio Nro. 07:
    Dado los lados de un rectángulo (Base y Altura) determinar
    la superficie de los mismos.
*/
{
    let baseRectangulo = 0;
    let alturaRectangulo = 0;
    let superficieRectangulo = 0;

    baseRectangulo = Number(prompt("Ingrese la Base"));
   

    if(baseRectangulo > 0)
    {
        alturaRectangulo = Number(prompt("Ingrese la altura"));
        
        if(alturaRectangulo > 0)
        {

            superficieRectangulo = baseRectangulo * alturaRectangulo;

            console.log(`la base ingresada es ${baseRectangulo}`);
            console.log(`la altura ingresada es ${alturaRectangulo}`);
            console.log(`La Superficie es ${superficieRectangulo}`);

        }
        else
        {
            console.log(`Estimado usuario la altura debe ser positiva`);
        }
    }
    else
    {
        console.log(`Estimado usuario la base debe ser positiva`);
    }

    /*

    if((baseRectangulo > 0) && (alturaRectangulo > 0))
    {
        superficieRectangulo = baseRectangulo * alturaRectangulo;

        console.log(`la base ingresada es ${baseRectangulo}`);
        console.log(`la altura ingresada es ${alturaRectangulo}`);
        console.log(`La Superficie es ${superficieRectangulo}`);

    }
    else
    {
        console.log(`Datos incorrectos`);
    }

    */
  

}