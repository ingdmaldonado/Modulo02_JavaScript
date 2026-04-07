/*
    Ejercicio Nro. 11: Estructuras Condicionales (if/else)

    Un local de venta de comida rápida, lanza su aplicación online que le permite al cliente pagar por la misma
    y además aclara que se incluye en el precio total el costo del envío dependiendo la zona en la que vive el
    cliente.
        1) Zona Centro = $ 2500,00
        2) Zona Oeste = $ 3750,00
        3) Zona Norte = $ 4225,00
        4) Zona Sur = $ 5222,50
        5) Zona Este = $ 4288,50
    Debe ingresar el importe de la compra, sumarle el costo del envío en función de la zona del cliente.
    Recomendación: Es mejor guardar los costos de envío en variables, de tal forma que si en un futuro cambian,
    no haya que tocar la lógica del programa, ni ver todo el recorrido, sino simplemente cambiar los precios.
*/
{
    let importeTotalCompra = 0;
    let seleccionZona = 0;
    let zonaCentro = 2500;
    let zonaOeste = 3750;
    let zonaNorte = 4225;
    let zonaSur = 5222;
    let zonaEste = 4288.50;
    let zonaValida = true;

    importeTotalCompra = Number(prompt('Ingrese el importe total de la compra'));
    seleccionZona = Number(prompt('Seleccione la ubicación de la zona del cliente: 1- Zona Centro; 2- Zona Oeste; 3- Zona Norte; 4- Zona Sur; 5- Zona Este'));
    
    //Importe total de la compra si recargo de envío
    console.log(`Importe total de la compra sin recargo de envío: $${importeTotalCompra}`);

    switch(seleccionZona)
    {
        case 1:{
            console.log(`Usted seleccionó su zona de ubicación Centro, tiene un recargo de envío de $${zonaCentro}`);
            importeTotalCompra = importeTotalCompra + zonaCentro;
            break;
        }
        case 2:{
            cconsole.log(`Usted seleccionó su zona de ubicación Oeste, tiene un recargo de envío de $${zonaOeste}`);
            importeTotalCompra = importeTotalCompra + zonaOeste;
            break;
        }
        case 3:{
            console.log(`Usted seleccionó su zona de ubicación Norte, tiene un recargo de envío de $${zonaNorte}`);
            importeTotalCompra = importeTotalCompra + zonaNorte;
            break;
        }
        case 4:{
            console.log(`Usted seleccionó su zona de ubicación Sur, tiene un recargo de envío de $${zonaSur}`);
            importeTotalCompra = importeTotalCompra + zonaSur;
            break;
        }
        case 5:{
            console.log(`Usted seleccionó su zona de ubicación Este, tiene un recargo de envío de $${zonaEste}`);
            importeTotalCompra = importeTotalCompra + zonaEste;
            break;
        }
        default:{
            console.log('Zona de ubicación invalida');
            zonaValida = false;
            break;
        }
    }
    
    if( zonaValida )
    {
        console.log(`Importe total a pagar es: $${importeTotalCompra}`);
    }
}