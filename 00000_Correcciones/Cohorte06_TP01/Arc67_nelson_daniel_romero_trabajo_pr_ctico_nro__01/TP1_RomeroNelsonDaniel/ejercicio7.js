let codigo = Number(prompt("Seleccione producto: 1-Dogui, 2-Tiernitos, 3-Dogpro"));
let cantidad = Number(prompt("Ingrese cantidad de unidades a comprar"));
let precio = 0;

switch (codigo) {
    //si llega a la asignación de precios debajo de los dos if, es porque la cantidad es menor a 5
    case 1:
        if(cantidad >= 11)
        {
            precio = 34000;
            break;
        }
        if (cantidad >=5){
            precio = 36000;
            break;
        }
        precio = 38000;
        break;
    case 2:
        if(cantidad >= 11)
        {
            precio = 27000;
            break;
        }
        if (cantidad >=5){
            precio = 29000;
            break;
        }
        precio = 31000;
        break;
    case 3:
        if(cantidad >= 11)
        {
            precio = 42000;
            break;
        }
        if (cantidad >=5){
            precio = 44000;
            break;
        }
        precio = 46000;
        break;
    default:
        console.log("Seleccione una opción válida");
        break;
}

if (codigo >=1 && codigo <=4) {
    console.log(`Importe total a pagar: ${precio * cantidad}`)
}