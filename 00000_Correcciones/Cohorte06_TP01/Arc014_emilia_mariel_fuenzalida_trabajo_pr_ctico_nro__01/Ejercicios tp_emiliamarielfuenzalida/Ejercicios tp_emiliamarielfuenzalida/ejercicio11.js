/*
-----------Ejercicio Nro. 11-------- 

-------Estructuras Condicionales (if/else)---------

Un local de venta de comida rápida, 
lanza su aplicación online que le permite 
al cliente pagar por la misma
y además aclara que se incluye en el 
precio total el costo del envío 
dependiendo la zona en la que vive el
cliente.
1) Zona Centro = $ 2500,00
2) Zona Oeste = $ 3750,00
3) Zona Norte = $ 4225,00
4) Zona Sur = $ 5222,50
5) Zona Este = $ 4288,50
Debe ingresar el importe de la compra, 
sumarle el costo del envío en función 
de la zona del cliente.
Recomendación: Es mejor guardar 
los costos de envío en variables, 
de tal forma que si en un futuro cambian,
no haya que tocar la lógica del programa, 
ni ver todo el recorrido, 
sino simplemente cambiar los precios.

*/
{
    let importeCompra = 0;
    let zonaEnvio = 0;

    importeCompra = Number(prompt(`Ingresar importe de compra:`));
    zonaEnvio = Number(prompt(`Indique zona de envío:
        1) Zona Centro 
        2) Zona Oeste 
        3) Zona Norte 
        4) Zona Sur 
        5) Zona Este `));

    let totalPago = 0;
    let incrementoZona = 0;

    switch (zonaEnvio) {
        case 1: /*Zona Centro*/
            {
                incrementoZona = 2500;
                totalPago = importeCompra + incrementoZona;

                console.log(`Total a pagar: $${totalPago} incremento por la zona: $${incrementoZona}`);
                break;
            }
        case 2: /*Zona Oeste*/
            {
                incrementoZona = 3750;
                totalPago = importeCompra + incrementoZona;

                console.log(`Total a pagar: $${totalPago} incremento por la zona: $${incrementoZona}`);
                break;
            }
        case 3: /*Zona Norte*/
            {
                incrementoZona = 4225;
                totalPago = importeCompra + incrementoZona;

                console.log(`Total a pagar: $${totalPago} incremento por la zona: $${incrementoZona}`);
                break;
            }
        case 4: /*Zona Sur*/
            {
                incrementoZona = 5222,50;
                totalPago = importeCompra + incrementoZona;

                console.log(`Total a pagar: $${totalPago} incremento por la zona: $${incrementoZona}`);
                break;
            }
        case 5: /*Zona Este*/
            {
                incrementoZona = 4288,50;
                totalPago = importeCompra + incrementoZona;

                console.log(`Total a pagar: $${totalPago} incremento por la zona: $${incrementoZona}`);
                break;
            }
        default:
            {
                console.log(`Elegir una opcion válida`)
                break;
            }
    }

}