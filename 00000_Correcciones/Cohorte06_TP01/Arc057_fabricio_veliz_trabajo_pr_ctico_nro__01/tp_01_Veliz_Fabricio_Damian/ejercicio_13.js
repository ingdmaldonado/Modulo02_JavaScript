/*
Ejercicio Nro. 13: Estructuras Condicionales (if/else)
Marcatón Catamarca. Descuentos por rubros y con topes.
Vestimenta/Perfumería/Calzado (20%, tope 80k), Librería (30%, tope 90k), Electro (15%, tope 70k).
*/
{
    let rubro = "";
    let importeCompra = 0;

    rubro = prompt("Ingrese el rubro (vestimenta, perfumeria, libreria, electrodomesticos, calzado):").toLowerCase();
    importeCompra = Number(prompt("Ingrese el importe de la compra:"));

    let descuento = 0;
    let topeMaximo = 0;
    let importeFinal = 0;

    if (rubro === "vestimenta" || rubro === "perfumeria" || rubro === "perfumería" || rubro === "calzado") {
        descuento = importeCompra * 0.20;
        topeMaximo = 80000;
    } else if (rubro === "libreria" || rubro === "librería") {
        descuento = importeCompra * 0.30;
        topeMaximo = 90000;
    } else if (rubro === "electrodomesticos" || rubro === "electrodomésticos") {
        descuento = importeCompra * 0.15;
        topeMaximo = 70000;
    }

    if (descuento > topeMaximo) {
        descuento = topeMaximo;
    }

    importeFinal = importeCompra - descuento;

    if (topeMaximo === 0) {
        console.log("Rubro ingresado inválido.");
    } else {
        console.log(`Rubro: ${rubro}. Importe de compra: $${importeCompra}. Descuento aplicado: $${descuento}. Importe final a pagar: $${importeFinal}`);
    }
}