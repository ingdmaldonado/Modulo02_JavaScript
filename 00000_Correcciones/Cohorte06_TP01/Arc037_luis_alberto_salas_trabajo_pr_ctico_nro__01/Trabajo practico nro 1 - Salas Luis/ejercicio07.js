{
    let codigoProducto = 0;
    let cantidadBolsas = 0;

    codigoProducto = Number(prompt(`Ingrese el codigo del producto
        1 - Dogui 21 kg
        2 - Tiernitos 21 kg
        3 - DogPro 21 kg`))
        
    cantidadBolsas = Number(prompt(`Ingrese la cantidad de bolsas deseadas`))

    let precio = 0;
    let alimentoElegido = ``;

    switch(codigoProducto)
    {
        case 1: // DOGUI
        {
            alimentoElegido = `Alimento Dogui 21 kg`

            if(cantidadBolsas < 5)
            {
                precio = 38000;
            }
            else
            {
                if((cantidadBolsas >= 5) && (cantidadBolsas <= 10))
                {
                    precio = 36000;
                }
                else
                {
                    precio = 34000;
                }
            }

            break;
        }
        case 2: // TIERNITOS
        {
            alimentoElegido = `Alimento Tiernitos 21 kg`

            if(cantidadBolsas < 5)
            {
                precio = 31000;
            }
            else
            {
                if((cantidadBolsas >= 5) && (cantidadBolsas <= 10))
                {
                    precio = 29000;
                }
                else
                {
                    precio = 27000;
                }
            }
            break;
        }
        case 3: // DOGPRO
        {
            alimentoElegido = `Alimento DogPro 21 kg`

            if(cantidadBolsas < 5)
            {
                precio = 46000;
            }
            else
            {
                if((cantidadBolsas >= 5) && (cantidadBolsas <= 10))
                {
                    precio = 44000;
                }
                else
                {
                    precio = 42000;
                }
            }
            break;
        }
        default:
        {
            console.log(`Numero incorrecto, por favor reintente nuevamente`)
            break
        }
    }

    let totalAPagar = precio * cantidadBolsas

    console.log(`Usted eligio: ${alimentoElegido} cantidad de bolsas: ${cantidadBolsas} total a pagar: ${totalAPagar}`)
}