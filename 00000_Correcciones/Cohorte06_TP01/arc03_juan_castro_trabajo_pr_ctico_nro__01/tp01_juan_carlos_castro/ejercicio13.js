/*

Ejercicio Nro. 13: Estructuras Condicionales (if/else) 
El programa Marcatón, realizado en Catamarca junto al Banco Nación, ofrece descuentos en distintos 
rubros comerciales. 
Tabla de descuentos: 
 
Rubro                 Descuento      Tope máximo 
Vestimenta            20%            $80.000 
Perfumería            20%            $80.000 
Librería              30%            $90.000 
Electrodomésticos     15%            $70.000 
Calzado               20%            $80.000 
El programa debe: 
 
1. Solicitar el rubro del comercio. 
2. Solicitar el importe de la compra. 
3. Calcular el descuento correspondiente. 
4. Verificar si el descuento supera el tope del rubro. Si lo supera, aplicar solo el tope. 
 
5. Mostrar: 
    - rubro 
    - importe de la compra 
    - descuento aplicado 
    - importe final a pagar. 

*/

{

    let rubro = 0;
    let importeCompra = 0;
    let descuento = 0;
    let totalCompra = 0;

    rubro = Number(prompt(`Ingrese el rubro: 1-Vestimenta 2-Perfumeria 3-Libreria 4-Electronicos 5-Calzado:`));
    importeCompra = Number(prompt(`Ingrese el importe de la compra:`));

    switch (rubro) {
        case 1:
            rubro = `Vestimenta`;
            descuento = (importeCompra * 20) / 100;
            if (descuento > 80000) {
                descuento = 80000;
                totalCompra = importeCompra - descuento;
            } else {
                totalCompra = importeCompra - descuento
            }
            break;
        case 2:
            rubro = `Perfumeria`;
            descuento = (importeCompra * 20) / 100;
            if (descuento > 80000) {
                descuento = 80000;
                totalCompra = importeCompra - descuento;
            } else {
                totalCompra = importeCompra - descuento
            }
            break;
        case 3:
            rubro = `Libreria`;
            descuento = (importeCompra * 30) / 100;
            if (descuento > 90000) {
                descuento = 90000;
                totalCompra = importeCompra - descuento;
            } else {
                totalCompra = importeCompra - descuento
            }
            break;
        case 4:
            rubro = `Electronica`;
            descuento = (importeCompra * 15) / 100;
            if (descuento > 70000) {
                descuento = 70000;
                totalCompra = importeCompra - descuento;
            } else {
                totalCompra = importeCompra - descuento
            }
            break;
        case 5:
            rubro = `Calzado`
            descuento = (importeCompra * 20) / 100;
            if (descuento > 80000) {
                descuento = 80000;
                totalCompra = importeCompra - descuento;
            } else {
                totalCompra = importeCompra - descuento
            }
            break;
        default:
            console.log(`Ingrese una opcion valida.`)
            break;
    }

    console.log(`El rubro es ${rubro}, el importe es ${importeCompra}, el descuento es ${descuento}, el importe total es ${totalCompra}.`)

}