let rubro = Number(prompt("Seleccione rubro: 1-Vestimenta, 2-Perfumería, 3-Librería, 4-Electrodomésticos, 5-Calzado"));
let importe = Number(prompt("Ingerse importe de compra"));
let descuento = 0;
let topeMaximo = 0
let rubroValido = true;

if(rubro >= 1 && rubro <=5)
{
    if(importe > 0)
    {
        switch (rubro)
        {
            case 1:
            case 2:
            case 5:
                descuento = 20;
                topeMaximo = 80000;
                if (rubro == 1)
                {
                    console.log("Rubro: Vestimenta");
                }
                if (rubro == 2)
                {
                    console.log("Rubro: Perfumería");
                }
                if (rubro == 5)
                {
                    console.log("Rubro: Calzado");
                }
                break;
            case 3:
                console.log("Rubro: Librerías");
                descuento = 30;
                topeMaximo = 90000;
                break;
            case 4:
                console.log("Rubro: Electrodomésticos");
                descuento = 15;
                topeMaximo = 70000;
                break;
        }
        montoDescuento = (descuento * importe) / 100;
        if (montoDescuento > topeMaximo)
            montoDescuento = topeMaximo;
    
        console.log("Importe:", importe);
        console.log(`Descuento: ${descuento}% ($${montoDescuento})`);
        console.log("Importe final:", importe - montoDescuento);
    }
    else
        console.log("Ingrese un monto válido");
}
else
    console.log("Ingrese un rubro válido");
