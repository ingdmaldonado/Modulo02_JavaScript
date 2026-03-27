/* Ejercicio Nro. 13: Estructuras Condicionales (if/else)
El programa Marcatón, realizado en Catamarca junto al Banco Nación, ofrece descuentos en distintos rubros comerciales.
Tabla de descuentos:
Rubro               Descuento    Tope máximo
Vestimenta          20%          $80.000
Perfumería          20%          $80.000
Librería            30%          $90.000
Electrodomésticos   15%          $70.000
Calzado             20%          $80.000
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
let codigoRubro = parseInt(prompt(`Ingrese el código del rubro: 1 = Vestimenta, 2 = Perfumería, 3 = Librería, 4 = Electrodomésticos, 5 = Calzado`));
let importeCompra = parseFloat(prompt(`Ingrese el importe de la compra:`));

let porcentaje = 0;
let tope = 0;
let rubro = ``;
let descuento = 0;
let importeDescuento = 0;

switch (codigoRubro) {
    case 1:{
        rubro = `Vestimenta`;
        porcentaje = 20;
        tope = 80000;
        break;
    }
    case 2:{
        rubro = `Perfumería`;
        porcentaje = 20;
        tope = 80000;
        break;
    }
    case 3:{
        rubro = `Librería`;
        porcentaje = 30;
        tope = 90000;
        break;
    }
    case 4:{
        rubro = `Electrodomésticos`;
        porcentaje = 15;
        tope = 70000;
        break;
    }
    case 5:{
        rubro = `Calzado`;
        porcentaje = 20;
        tope = 80000;
        break;
    }
    default:{
        console.log(`Código de rubro inválido.`);
        break;
    }
}

if (porcentaje > 0) {
    importeDescuento = (importeCompra * porcentaje)/100;
    descuento = importeDescuento > tope ? tope: importeDescuento;
    let importeFinal = importeCompra - descuento;

    console.log(`Rubro: ${rubro}`);
    console.log(`Importe de la compra: ${importeCompra}`);
    console.log(`Descuento aplicado: ${descuento}`);
    console.log(`Importe final a pagar: ${importeFinal}`);
}
}