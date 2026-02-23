

/*

       $ 1 - 1500,00 ARGENTINA
        $ 2 - 1200,00 BRASIL
        $ 3 - 950,00 PARAGUAY
        $ 4 - 870,00 URUGUAY

*/

export const fnRetornePrecioViaje = (codigoPais)=>{

    let precio = 0; // creo una variable y la declaro en 0

    switch(codigoPais)
    {
        case 1:
            {
                precio = 1500;
                break;
            }
        case 2:
            {
                precio = 1200;
                break;
            }
        case 3:
            {
                precio = 950;
                break;

            }
        case 4:
            {
                precio = 870;
                break;

            }
        default:
            {
                precio = 0;
                break;
            }
    }

    return precio;

};