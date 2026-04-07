/* 

Ejercicio Nro. 11: Estructuras Condicionales (if/else) 
Un local de venta de comida rápida, lanza su aplicación online que le permite al cliente pagar por la misma 
y  además  aclara  que  se  incluye  en  el  precio  total  el  costo  del  envío  dependiendo  la  zona  en  la  que  vive  el 
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
    let opcionEnvio = 0;
    let zonaCentro = 2500.00; // opcion 1
    let zonaOeste = 3750.00; // opcion 2
    let zonaNorte = 4225.00; // opcion 3
    let zonaSur = 5222.50; // opcion 4
    let zonaEste = 4288.50 // opcion 5
    let importeCompra = 0;
    let operacionCorrecta = true;
    let totalCompra = 0;


    importeCompra = Number(prompt(`Ingrese importe de la compra:`));
    opcionEnvio = Number(prompt(`Ingrese opcion de envio (1-Zona Centro, 2-Zona Oeste, 3-Zona Norte, 4-Zona Sur, 5-Zona Este):`));


    switch (opcionEnvio) {
        case 1: // Opcion 1 -> Zona centro $2500
            {
                console.log(`Selecciono Zona Centro, con un coste de ${zonaCentro}`);
                totalCompra=importeCompra+zonaCentro;
                break;
            }
        case 2: // Opcion 2 -> Zona Oeste $3750
            {
                console.log(`Selecciono Zona Oeste, con un coste de ${zonaOeste}`);
                totalCompra=importeCompra+zonaOeste;
                break;
            }
        case 3: // Opcion 3 -> Zona Oeste $4225
            {
                console.log(`Selecciono Zona Norte, con un coste de ${zonaNorte}`);
                totalCompra=importeCompra+zonaNorte;
                break;
            }
        case 4: // Opcion 4 -> Zona Sur $5222.5
            {
                console.log(`Selecciono Zona Sur, con un coste de ${zonaSur}`);
                totalCompra=importeCompra+zonaSur;
                break;
            }
        case 5: // Opcion 5 -> Zona Este $4288.5
            {
                console.log(`Selecciono Zona Este, con un coste de ${zonaEste}`);
                totalCompra=importeCompra+zonaEste;
                break;
            }                                                
        default:
            {
                operacionCorrecta = false;
                break;
            }
            
    }

    if (operacionCorrecta) {

        console.log(`El importe total es: ${totalCompra}`);

    }else{

        console.log(`ERROR, Ingrese una opcion correcta!!!`);
    }




}