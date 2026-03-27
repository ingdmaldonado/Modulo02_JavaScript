//ejercicio13

let rubro = prompt("Ingrese el rubro para verificar si hay descuento (vestimenta, perfumeria, libreria, electrodomesticos, calzado)");
let importeCompra = parseFloat(prompt("Ingrese el importe total de la compra"));
let descuento = 0;

switch (rubro) {
    case 'vestimenta':{
        descuento = importeCompra * 0.20;
        if (descuento > 80000) {
            descuento = 80000;
            break
        }   
    }
    case 'perfumeria':{
        descuento = importeCompra * 0.20;
        if (descuento > 80000) {
            descuento = 80000; 
            break
        }
    }
    case 'libreria':{
        descuento = importeCompra * 0.30;
        if (descuento > 90000) {
            descuento = 90000;
            break
        }
    }
    case 'electrodomesticos':{
        descuento = importeCompra * 0.15;   
        if (descuento > 70000) {    
            descuento = 70000;
            break
        }   
    }
    case 'calzado':{
        descuento = importeCompra * 0.20;
        if (descuento > 80000) {
            descuento = 80000;
            break
        }
    }
    
    default:{
        console.log("Rubro no válido");
        break
    }
}
if (rubro === 'vestimenta' || rubro === 'perfumeria' || rubro === 'libreria' || rubro === 'electrodomesticos' || rubro === 'calzado'){console.log('El rubro de la compra', rubro);
    console.log("El total de la compra es: ", importeCompra);
    console.log("El descuento aplicado es: ", descuento); 
    console.log("El total a pagar es: ", (importeCompra - descuento));
}




