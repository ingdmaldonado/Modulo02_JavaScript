{
    const rubros = {
    "Vestimenta": { descuento: 20, tope: 80000 },
    "Perfumeria": { descuento: 20, tope: 80000 },
    "Libreria": { descuento: 30, tope: 90000 },
    "Electrodomesticos": { descuento: 15, tope: 70000 },
    "Calzado": { descuento: 20, tope: 80000 }
};

let rubro = prompt("Ingrese el rubro (sin acentos) (Vestimenta, Perfumería, Librería, Electrodomésticos, Calzado):");
let importeCompra = Number(prompt("Ingrese el importe de la compra:"));

if (!rubros[rubro]) {
    console.log("Rubro no válido, verifique haberlo escrito bien u omitir las tildes ortográficas.");
} else {
    let descuentoPorcentaje = rubros[rubro].descuento;
    let tope = rubros[rubro].tope;
    
    let descuentoCalculado = (importeCompra * descuentoPorcentaje) / 100;
    let descuentoAplicado = (descuentoCalculado > tope) ? tope : descuentoCalculado;
    let importeFinal = importeCompra - descuentoAplicado;
    
    console.log(`Rubro: ${rubro}`);
    console.log(`Importe compra: $${importeCompra.toFixed(2)}`);
    console.log(`Descuento aplicado: $${descuentoAplicado.toFixed(2)}`);
    console.log(`Importe final: $${importeFinal.toFixed(2)}`);
}

}