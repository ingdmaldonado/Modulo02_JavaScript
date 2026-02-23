
/* 

    ciclo for => ciclo para 

    ciclo while => mientras se cumpla una condición

*/

{

    /* desventaja que tiene es 
    que la condición de permanencia o fin, debe ser
    conocida */

    /*
    for(let iterador = 0; iterador <= 10; iterador=iterador +1)
    {
        console.log(`Esto es una prueba ${iterador}`);
    }
        */

    /* ciclo while = mientras 
    
    */

    let continuaElProceso = 'SI';

    let contadorDePasos = 0;

    while(continuaElProceso === 'SI')
    {

        contadorDePasos = contadorDePasos + 1;

        console.log(`Esto esta ejecutandose dentro del ciclo ${contadorDePasos}`);

        continuaElProceso = prompt(`Desea seguir dentro del cilco ? (SI=CONTINUA,NO=CANCELA)`);

    }




}