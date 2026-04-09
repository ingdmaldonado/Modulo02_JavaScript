/*
Un comercio que vende bolsas de alimentos para mascotas trabaja y comercializa únicamente con tres grandes marcas de alimentos para perros lo que le permite trabajar con descuentos muy interesantes para sus clientes. Las marcas con las que trabaja son: 
.........
Realice un programa en JavaScript que permita ingresar el código del producto y la cantidad de bolsas a comprar y que solo determine el importe total a pagar. 
*/


let codigo = 0;
let cantidadBolsas = 0;

let precioUnitario = 0;
let precioPorMayor = 0;

let total = 0;

codigo = Number (prompt (`ingrese el codigo del producto: 1 (Dogui), 2 (Tiernitos), 3 (Dogpro)`));

switch (codigo){

    case 1:
        precioUnitario = 38000;
        break
        
    case 2:
        precioUnitario = 31000;
        break

    case 3:
        precioUnitario = 46000;
        break

    default:
        alert("¡Codigo no Admitido!");
        process.exit();

}

cantidadBolsas = Number (prompt (`ingrese la cantidad de bolsas que va a llevar:`));

if (cantidadBolsas <= 0) {
    alert("No se compro ninguna bolsa")
    process.exit();
}

if (cantidadBolsas < 5) {
    total = cantidadBolsas * precioUnitario;
    console.log (`El total de su compra es de: $${total} precio por unidad $${precioUnitario}`);
}

if (cantidadBolsas >= 5 && cantidadBolsas <=11){
    precioPorMayor = precioUnitario - 2000;
    total = cantidadBolsas * precioPorMayor;
    console.log (`El total de su compra es de: $${total} precio por unidad $${precioPorMayor}`);

}

if (cantidadBolsas >11) {
    precioPorMayor = precioUnitario - 4000;
    total = cantidadBolsas * precioPorMayor;
    console.log (`El total de su compra es de: $${total} precio por unidad $${precioPorMayor}`);
    
}




