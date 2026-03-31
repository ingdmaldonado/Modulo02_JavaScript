/*
Tabla de descuentos: 
Rubro                 
Vestimenta    1     
Perfumería    2       
Librería       3         
Electrodomésticos   4
Calzado             5  

El programa debe: 
Descuento   
20%        1    
20%        2    
30%        3    
15%            4
20%  5

Tope máximo;            
$80.000 1
$80.000 2
$90.000 3
$70.000 4
$80.000 5

1. Solicitar el rubro del comercio. 
2. Solicitar el importe de la compra. 
3. Calcular el descuento correspondiente. 
4. Verificar si el descuento supera el tope del rubro. Si lo supera, aplicar solo el tope. 

5. Mostrar: - rubro - importe de la compra - descuento aplicado - importe final a pagar.
*/

{
    let rubro = 0;
    let importeDeCompra = 0;
    let descuento = 0;
    let topeMaximo = 0;
    let reintegro = 0;
    let montoAPagar = 0;

    rubro = Number(prompt(`seleccione el rubro: 1- vestimenta, 2- perfumeria, 3- libreria, 4- electrodomestico, 5- calzado`))
    importeDeCompra = Number(prompt(`indique el monto de su compra`))

    switch(rubro)
    {
        case 1:
            {
                topeMaximo = 80000;
                descuento = (importeDeCompra*20)/100;
                reintegro = descuento > topeMaximo ? topeMaximo : descuento;
                break;
            }
        case 2:
            {
                topeMaximo = 80000;
                descuento = (importeDeCompra*20)/100;
                reintegro = descuento > topeMaximo ? topeMaximo : descuento;
                break;
            }
        case 3:
            {
                topeMaximo = 90000;
                descuento = (importeDeCompra*30)/100;
                reintegro = descuento > topeMaximo ? topeMaximo : descuento;
                break;
            }
        case 4:
            {
                topeMaximo = 70000;
                descuento = (importeDeCompra*15)/100;
                reintegro = descuento > topeMaximo ? topeMaximo : descuento;
                break;
            }
        case 5:
            {
                topeMaximo = 80000;
                descuento = (importeDeCompra*20)/100;
                reintegro = descuento > topeMaximo ? topeMaximo : descuento;
                break;
            }
        default:
            {
                console.log(`rubro no disponible`)
            }
    }

    montoAPagar = importeDeCompra - reintegro;
    console.log(`el monto a pagar es: $${montoAPagar}`)
}