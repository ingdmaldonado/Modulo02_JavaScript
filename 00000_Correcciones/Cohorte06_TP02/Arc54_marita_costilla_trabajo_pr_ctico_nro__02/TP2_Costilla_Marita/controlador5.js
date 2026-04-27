{

    let atencion=`S`
    let producto =`S`
    let precio=0;
    let totalCompra=0;
    let ventaTotal=0;
    let descuento=0;
    let descuentoTotal=0;
    let importeFinalCliente=0;
    let importeTotal=0;
    let cantidadDescuentos=0;
    let cantidadNoDescuentos=0;


    let tipoPago=0;
    while(atencion===`S` || atencion===`s`)
    {

        while(producto===`s` || producto===`S`)
        {

            precio=Number(prompt(`Ingrese el precio del producto`));
            totalCompra=totalCompra+precio;
            producto=prompt(`continuar con otro producto S/N`);
            

        }
        ventaTotal=ventaTotal+totalCompra;
        tipoPago=Number(prompt(`Ingrese el metodo de pago: 1- Efectivo, 2-Targeta Visa BNA, 3- Targeta Master BNA, 4- Otro`));
        descuento=calcularDescuento(tipoPago, totalCompra)

        if(descuento===0)
        {
            cantidadNoDescuentos++;
        }else
        {
            cantidadDescuentos++;
        }

        descuentoTotal=descuentoTotal+descuento;
        importeFinalCliente=totalCompra-descuento;

        importeTotal=importeTotal+importeFinalCliente;

        console.log(`Total: $${totalCompra}`)
        console.log(`Descuento:$${descuento}`)
        console.log(`Total Final a pagar: $${importeFinalCliente}`)


 
       atencion=prompt(`desea seguir atendiendo? S/N`); 
       producto=`S`;
       totalCompra=0;

    }

    console.log(`VENTA TOTAL de todos los clientes:${ventaTotal}`)
    console.log(`DESCUENTO TOTAL: $${descuentoTotal}`)
    console.log(`IMPORTE A PAGAR TOTAL: $${importeTotal}`)
    console.log(`cantidad de clientes CON DESCUENTO${cantidadDescuentos}`)
    console.log(`cantidad de clientes SIN DESCUENTOS${cantidadNoDescuentos}`)


    function calcularDescuento(tipoPago, totalCompra)
    {
        switch(tipoPago)
        {
            case 1:
            {
                descuento=(10*totalCompra)/100;
                break;
            }
            case 2:
            {
                descuento=(7*totalCompra)/100;
                break;
            }
            case 3:
            {
                descuento=(7*totalCompra)/100;
                break;
            }
            case 4:
            {
                descuento=0;
                break;
            }

        }
        return descuento;
    }

}