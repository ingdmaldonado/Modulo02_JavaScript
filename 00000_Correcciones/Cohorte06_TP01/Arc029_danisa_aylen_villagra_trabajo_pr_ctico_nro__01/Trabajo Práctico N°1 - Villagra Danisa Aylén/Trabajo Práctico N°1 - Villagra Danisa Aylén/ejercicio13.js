/*Ejercicio Nro. 13: Estructuras Condicionales (if/else) 
El programa Marcatón, realizado en Catamarca junto al Banco Nación, ofrece descuentos en distintos rubros comerciales. 
Tabla de descuentos: 
Rubro                Descuento      Tope Máximo
- Vestimenta            20%           $80.000
- Perfumería            20%           $80.000
- Librería              30%           $90.000
- Electrodomésticos     15%           $70.000 
- Calzado               20%           $80.000 
El programa debe:          
1. Solicitar el rubro del comercio. 
2. Solicitar el importe de la compra. 
3. Calcular el descuento correspondiente. 
4. Verificar si el descuento supera el tope del rubro. Si lo supera, aplicar solo el tope. 
5. Mostrar: - rubro - importe de la compra - descuento aplicado - importe final a pagar.*/

{
    let rubro = Number(prompt(`Ingrese el rubro de comercio: 1 - Vestimenta; 2 - Perfumería; 3 - Librería; 4 - Electrodomésticos; 5 - Calzado.`));
    let importeDeCompra = Number(prompt(`Ingrese el importe de compra:`));

    switch(rubro)
    {
        case 1:
            {
                console.log(`Rubro: Vestimenta`);
                descuento = (importeDeCompra * 20) / 100 >= 80000 ? 80000 : (importeDeCompra * 20) / 100;
                let totalAPagar = importeDeCompra - descuento;
                console.log(`Importe de compra: ${importeDeCompra}`);
                console.log(`Descuento: ${descuento}`);
                console.log(`Monto a pagar: ${totalAPagar}`);
                break;
            }
        case 2:
            {
                console.log(`Rubro: Perfumería`);
                descuento = (importeDeCompra * 20) / 100 >= 80000 ? 80000 : (importeDeCompra * 20) / 100;
                let totalAPagar = importeDeCompra - descuento;
                console.log(`Importe de compra: ${importeDeCompra}`);
                console.log(`Descuento: ${descuento}`);
                console.log(`Monto a pagar: ${totalAPagar}`);
                break;
            }
        case 3:
            {
                console.log(`Rubro: Librería`);
                descuento = (importeDeCompra * 30) / 100 >= 90000 ? 90000 : (importeDeCompra * 30) / 100;
                let totalAPagar = importeDeCompra - descuento;
                console.log(`Importe de compra: ${importeDeCompra}`);
                console.log(`Descuento: ${descuento}`);
                console.log(`Monto a pagar: ${totalAPagar}`);
                break;
            }
        case 4:
            {
                console.log(`Rubro: Electrodomésticos`);
                descuento = (importeDeCompra * 15) / 100 >= 70000 ? 70000 : (importeDeCompra * 15) / 100;
                let totalAPagar = importeDeCompra - descuento;
                console.log(`Importe de compra: ${importeDeCompra}`);
                console.log(`Descuento: ${descuento}`);
                console.log(`Monto a pagar: ${totalAPagar}`);
                break;
            }
        case 5:
            {
                console.log(`Rubro: Calzado`);
                descuento = (importeDeCompra * 20) / 100 >= 80000 ? 80000 : (importeDeCompra * 20) / 100;
                let totalAPagar = importeDeCompra - descuento;
                console.log(`Importe de compra: ${importeDeCompra}`);
                console.log(`Descuento: ${descuento}`);
                console.log(`Monto a pagar: ${totalAPagar}`);
                break;
            }
        default:
            {
                console.log(`Rubro incorrecto. Ingrese nuevamente.`)
            }
    }
}