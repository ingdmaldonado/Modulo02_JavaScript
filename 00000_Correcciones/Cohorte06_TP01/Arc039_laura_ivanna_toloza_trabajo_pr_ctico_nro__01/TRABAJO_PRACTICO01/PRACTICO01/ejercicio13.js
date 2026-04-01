/* Ejercicio Nro. 13: Estructuras Condicionales (if/else)
El programa Marcatón, realizado en Catamarca junto al Banco Nación, ofrece descuentos en distintos rubros comerciales.
Tabla de descuentos:
Rubro Descuento Tope máximo
Vestimenta 20% $80.000
Perfumería 20% $80.000
Librería 30% $90.000
Electrodomésticos 15% $70.000
Calzado 20% $80.000
El programa debe:
1. Solicitar el rubro del comercio.
2. Solicitar el importe de la compra.
3. Calcular el descuento correspondiente.
4. Verificar si el descuento supera el tope del rubro. Si lo supera, aplicar solo el tope.
5. Mostrar:
- rubro
- importe de la compra
- descuento aplicado
- importe final a pagar. */

let topeVestimenta = 80000;
let topePerfumeria = 80000;
let topeLibreria = 90000;
let topeElectrodomesticos = 70000;
let topeCalzado = 80000;


let rubro = 0;
rubro = prompt("Ingrese el rubro del comercio: vestimenta, perfumería, librería, electrodomésticos o calzado");

let importeCompra = 0;
importeCompra = Number(prompt("Ingrese el importe de la compra:"));

let descuento = 0;

let importeFinal = 0;

switch (rubro) {
    case "vestimenta":
        descuento = (importeCompra * 20) / 100;
        if (descuento > topeVestimenta) {
            descuento = topeVestimenta;
        }
        importeFinal = importeCompra - descuento;
        break;
    case "perfumería":
        descuento = (importeCompra * 20) / 100;
        if (descuento > topePerfumeria) {
            descuento = topePerfumeria;
        }
        importeFinal = importeCompra - descuento;
        break;
    case "librería":
        descuento = (importeCompra * 30) / 100;
        if (descuento > topeLibreria) {
            descuento = topeLibreria;
        }
        importeFinal = importeCompra - descuento;
        break;
    case "electrodomésticos":
        descuento = (importeCompra * 15) / 100;
        if (descuento > topeElectrodomesticos) {
            descuento = topeElectrodomesticos;
        }
        importeFinal = importeCompra - descuento;
        break; 
    case "calzado":
        descuento = (importeCompra * 20) / 100;
        if (descuento > topeCalzado) {
            descuento = topeCalzado;
        }
        importeFinal = importeCompra - descuento;
        break;
    default:
        console.log("rubro no válido");
        break;
}
console.log(`El rubro es: ${rubro} el importe de la compra es: ${importeCompra} el descuento aplicado es: ${descuento} y el importe final a pagar es: ${importeFinal}`);
