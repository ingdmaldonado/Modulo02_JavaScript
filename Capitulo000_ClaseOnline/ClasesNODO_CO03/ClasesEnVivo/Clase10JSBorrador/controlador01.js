
/*


*/

{

    let cadenaDeTexto = `estamos fuera de la copa`;

    console.log(cadenaDeTexto);

    console.log(cadenaDeTexto.length);

    console.log(cadenaDeTexto[0]);
    console.log(cadenaDeTexto[1]);

    let caracter1 = cadenaDeTexto.charAt(0);
    let caracter2 = cadenaDeTexto.charAt(1);

    /* recorrido de la cadena texto a texto */
    for(let i = 0;i < cadenaDeTexto.length;i++)
    {
        let caracter = cadenaDeTexto.charAt(i);
        console.log(caracter);
    }

    /* recorremos y a la primera letra "f" que encontremos. salimos" */

    let encontramosLetraF = false;

    for(let j = 0;j < cadenaDeTexto.length;j++)
    {
        if(cadenaDeTexto.charAt(j) ==='F')
        {
            encontramosLetraF = true;
            break;
        }
    }

    if(encontramosLetraF)
    {
        console.log(`encontramos la letra F`);
    }

    


}