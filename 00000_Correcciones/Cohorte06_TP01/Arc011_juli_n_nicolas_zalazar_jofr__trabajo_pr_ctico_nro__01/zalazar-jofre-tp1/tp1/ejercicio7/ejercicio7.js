//ejercicio7

let codigo =  Number(prompt("Ingrese el código del producto 1dogui-2sabrositos-3dogpro: "));
let cantidad = Number(prompt("Ingrese la cantidad del producto"));

let precioUnitario = 0;


if (cantidad >= 5 && cantidad <= 10){
    if (codigo === 1) {
        precioUnitario = 36000;
    }
    else if (codigo === 2) {
        precioUnitario = 29000;
    }
    else if (codigo === 3) {
        precioUnitario = 44000;
    }
    else if (cantidad > 10) {
        if (codigo === 1) {
            precioUnitario = 34000;
        }
        else if (codigo === 2) {
            precioUnitario = 27000;
        }
        else if (codigo === 3) {
            precioUnitario = 42000;
        }
    }
}
else {
    if (codigo === 1) {
        precioUnitario = 38000;
    }
    else if (codigo === 2) {
        precioUnitario = 31000;
    }
    else if (codigo === 3) {
        precioUnitario = 46000;
    }
}

if (codigo === 1){
    console.log("Usted eligió la marca Dogui");
    console.log("La cantidad de bolsas a pagar son: ", cantidad);
    console.logo("El precio por bolsa es: ", precioUnitario);
    console.log("El precio total de la compra es: " , precioUnitario * cantidad);
}

else if (codigo === 2){
    console.log("Usted eligió la marca Sabrositos");
    console.log("La cantidad de bolsas a pagar son: ", cantidad);
    console.logo("El precio por bolsa es: ", precioUnitario);
    console.log("El precio total de la compra es: " , precioUnitario * cantidad);
}

else { 
    console.log("Usted eligió la marca Dogpro");
    console.log("La cantidad de bolsas a pagar son: ", cantidad);
    console.logo("El precio por bolsa es: ", precioUnitario);
    console.log("El precio total de la compra es: " , precioUnitario * cantidad);
}

