/*
Ejercicio Nro. 10: Estructuras Condicionales (if/else)
Un comercio aplica descuentos sobre el importe de compra según forma de pago:
1) Efectivo → 10% descuento
2) Débito → 5% descuento
3) Crédito → Sin descuento
Calcular el descuento y Mostrar total final. Utilizar estructura switch
*/

// Variables
let descuento=0;
let totalFinal=0;

// Ingreso importe de compra
let importeCompra=Number(prompt(`Ingresa tu importe de compra: `));
let formaPago=prompt(`Ingresa tu forma de pago: Efectivo, Debito o Credito`);

switch(formaPago.toLowerCase()) {
  
    // Calculo 10%
    case "efectivo":
    descuento = importeCompra * 0.10;
    totalFinal = importeCompra - descuento;
    break;
  
    // Calculo 5%
    case "debito":
    descuento = importeCompra * 0.05;
    totalFinal = importeCompra - descuento;
    break;
  
    // Sin descuento
    case "credito":
    descuento = 0;
    totalFinal = importeCompra - descuento;
    break;
  
  default:
    console.log("Forma de pago inválida");
}

// Mostrar resultado
console.log("Importe de compra: " + importeCompra);
console.log("Descuento: " + descuento);
console.log("Total final: " + totalFinal);