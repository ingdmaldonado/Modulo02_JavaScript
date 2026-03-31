/* Ejercicio Nro. 13: Estructuras Condicionales (if/else)
El programa Marcatón, realizado en Catamarca junto al Banco Nación, ofrece descuentos en distintos
rubros comerciales.
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
 - importe final a pagar.
 */


 function calcularMarcaton() {

    // Ingreso de datos
    let rubro = prompt("Ingrese el rubro (vestimenta, perfumería, librería, electrodomésticos, calzado)");
    let importe = Number(prompt("Ingrese el importe de la compra"));

    let descuento = 0;
    let tope = 0;

    // Determino porcentaje y tope según rubro
    if (rubro === "vestimenta") {
        descuento = importe * 20 / 100;
        tope = 80000;

    } else if (rubro === "perfumería") {
        descuento = importe * 20 / 100;
        tope = 80000;

    } else if (rubro === "librería") {
        descuento = importe * 30 / 100;
        tope = 90000;

    } else if (rubro === "electrodomésticos") {
        descuento = importe * 15 / 100;
        tope = 70000;

    } else if (rubro === "calzado") {
        descuento = importe * 20 / 100;
        tope = 80000;

    } else {
        console.log("Rubro inválido");
        return;
    }

    // Verifico el tope
    if (descuento > tope) {
        descuento = tope;
    }

    // Calculo total final
    let totalFinal = importe - descuento;

    // Muestro resultados
    console.log(`Rubro: ${rubro}`);
    console.log(`Importe de la compra: ${importe}`);
    console.log(`Descuento aplicado: ${descuento}`);
    console.log(`Total a pagar: ${totalFinal}`);
}