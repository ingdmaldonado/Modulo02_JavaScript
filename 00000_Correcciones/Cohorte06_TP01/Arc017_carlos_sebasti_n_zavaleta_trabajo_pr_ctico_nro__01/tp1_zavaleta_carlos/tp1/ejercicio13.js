let importeCompra = 0;
let rubro = 0;
nombreRubro = "";
let descuento = 0;
let totalaPagar = 0;

importeCompra = Number(prompt("Ingrese el importe de la compra"));
rubro = Number(prompt("Ingrese el Rubro: 1-Vestimenta | 2-Perfumeria | 3-Libreria | 4-Electrodomésticos | 5-Calzado"));

switch (rubro){
    case 1:
        nombreRubro = "Vestimenta";
        descuento = importeCompra * 20 / 100;
        if (descuento > 80000){
            descuento = 80000;
        }
        break;
    case 2:
        nombreRubro = "Perfumería";
        descuento = importeCompra * 20 / 100;
        if (descuento > 80000){
            descuento = 80000;
        }
        break;
        case 3:
            nombreRubro = "Libreria";
            descuento = importeCompra * 30 / 100;
            if (descuento > 90000){
                descuento = 90000;
            }
        break;
        case 4:
            nombreRubro="Electrodomésticos";
            descuento = importeCompra * 15 / 100;
            if (descuento > 70000){
                descuento = 70000;
            }
        break;
        case 5:
            nombreRubro="Calzado";
            descuento = importeCompra * 20 / 100;
            if (descuento > 80000){
                descuento = 80000;
            }
}

totalaPagar = importeCompra - descuento;

console.log("Rubro: " + nombreRubro);
console.log("Importe de Compra: " + importeCompra);
console.log("Descuento aplicado: " + descuento);
console.log("Importe final: " + totalaPagar);