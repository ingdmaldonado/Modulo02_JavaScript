

/* crearme un modulo y exportar
la funcion que tiene la logica
importante de negocios */

export const fnDescuentoDeCompra = (importeDeCompra)=>
    {
        let descuentoCalculado = 0; // aqui voy a calcular el descuento y lo voy a devolver

        if(importeDeCompra < 10000)
        {
           descuentoCalculado = 0; 
        }
        else
        {
            if((importeDeCompra >= 10000) && (importeDeCompra <= 50000))
            {
                descuentoCalculado = (importeDeCompra * 10)/100;
            }
            else // todos los valores que ingresen por aqui van a ser mayores a 50 mil
            {
                descuentoCalculado = (importeDeCompra * 20)/100;
            }
        }

        // retorno el descuento calculado //
        return descuentoCalculado;

    }