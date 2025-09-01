
/* programa principal de la pagina HTML 

delegar en una función la programación del evento load

    1 evento => 1 función

*/

/* EL EVENTO LOAD => onload se ejecuta
    una sola vez. 
    UNA SOLA VEZ
*/

window.onload = function()
{
    console.log(`la aplicación esta corriendo`);

    /* Por cada elemento que quiero controlar => voy
    a crearme una constante y esa constante tendra
    el mismo nombre que le puse al id. */

    const idBtn1 = document.querySelector("#idBtn1");
    const idBtn2 = document.querySelector("#idBtn2");

    console.log(idBtn1);
    console.log(idBtn2);

    /*  delegacion de eventos => cuando se dispara
    el evento click una función será la encargada
    de atender ese evento */

    idBtn1.onclick = function()
    {
       // alert(`Me estan haciendo click en el boton 1`);
        console.log(`Me estan haciendo click en el boton 1`);
    }

    /* delegacion del evento click */
    idBtn2.onclick = function()
    {
        let totalFacturado = 200000;

        console.log(`El total facturado es: ${totalFacturado}`);
    }

}

/* 
    LOAD => SE EJECUTA UNA SOLA VEZ. CUANDO LA PAGINA O
    EL DOCUMENTO HTML SE RENDERIZA POR PRIMERA VEZ 
    
    cuando alguien presion click en el boton 1 => 1 funcion delegada

    cuando alguien presione click en el boton 2 => 1 funcion delegada


*/