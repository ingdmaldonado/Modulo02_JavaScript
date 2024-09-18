

const fnRetornaElIVA = (importeBase,tipoArticulo)=>
    {
        /* si bla bla bal */
        if(tipoArticulo === 1)
        {
            return importeBase * 21/100;
        }
        if(tipoArticulo === 2)
        {
            return importeBase * 27/100;
        }
        if(tipoArticulo === 3)
        {
            return importeBase * 10.5/100;
        }
        if(tipoArticulo === 4)
        {
            return importeBase * 5/100;
        }
        if(tipoArticulo === 5)
        {
            return 0;
        }

        return 0;
    }


window.addEventListener("load",()=>
    {

        console.log("el ejercicio 6 esta funcionando");

        let baseDeFactura = 10000; /* lo capturaria desde un input */
        let tipoDeProducto = 3; /* podría sacarlo desde un select */

        let resultadoIVA = fnRetornaElIVA(baseDeFactura,tipoDeProducto);

        console.log(resultadoIVA);


    })
