/*
Un local de venta de comida rápida, lanza su aplicación online que le permite al cliente pagar por la misma y además aclara que se incluye en el precio total el costo del envío dependiendo la zona en la que vive el cliente. 

1) Zona Centro = $ 2500,00 
2) Zona Oeste = $ 3750,00 
3) Zona Norte = $ 4225,00 
4) Zona Sur = $ 5222,50 
5) Zona Este = $ 4288,50 

Debe ingresar el importe de la compra, sumarle el costo del envío en función de la zona del cliente.  

Recomendación: Es mejor guardar los costos de envío en variables, de tal forma que si en un futuro cambian, no haya que tocar la lógica del programa, ni ver todo el recorrido, sino simplemente cambiar los precios. 

*/

let totalCompra = 0;
let opcionRecorrido = 0;
let importeFinal = 0;

let centro = 2500;
let oeste = 3750;
let norte = 4225;
let sur = 5222.5;
let este = 4288.5;

totalCompra = Number(prompt(`Ingrese el monto total de la compra:`));
opcionRecorrido = Number(prompt(`Ingrese a donde es el envio: 1 (Centro), 2 (Oeste), 3 (Norte),4 (Sur),5 (Este)`));

console.log(`Su compra es de: $${totalCompra}`)

switch (opcionRecorrido) {
    case 1:
        console.log(`El precio del envio es de: $${centro}`);
        importeFinal = totalCompra + centro;
        break
    case 2:
        console.log(`El precio del envio es de: $${oeste}`);
        importeFinal = totalCompra + oeste;
        break
    case 3:
        console.log(`El precio del envio es de: $${norte}`);
        importeFinal = totalCompra + norte;
        break
    case 4:
        console.log(`El precio del envio es de: $${sur}`);
        importeFinal = totalCompra + sur;
        break
    case 5:
        console.log(`El precio del envio es de: $${este}`);
        importeFinal = totalCompra + este;
        break
    default:
        alert("Opcion de envio Invalida!");
        break
}

console.log(`El importe Final es: $${importeFinal}`);