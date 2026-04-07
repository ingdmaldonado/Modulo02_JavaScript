/*Ejercicio Nro. 11: Estructuras Condicionales (if/else)
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
no haya que tocar la lógica del programa, ni ver todo el recorrido, sino simplemente cambiar los precios. */

{
let zonaCentro=2500;
let zonaOeste=3750;
let zonaNorte=4225;
let zonaSur=5222.50;
let zonaEste=4288.50

    importeDeCompra = Number(prompt(`Sr. Indique el Importe de Compra`));

    zonaEnvio = Number(prompt(`Indique zona de Envio 1 zona centro, 2 zona oeste, 3 zona norte, 4 zona sur, 5 zona este`));

    operacionCorrecta=false;
    let recargo=0;
    let totalAPagar=0;

 switch(zonaEnvio)
    {
        case 1://zona centro
            {
                console.log(`Ud. eligio zona centro`);

                operacionCorrecta = true;

                totalAPagar= (importeDeCompra+zonaCentro);
                console.log(`Importe Compra: ${importeDeCompra} Recargo ${zonaCentro} Total a Pagar: ${totalAPagar}`);

                break;
            }

        case 2:// 
            {
                console.log(`Ud. eligio zona oeste`);

                operacionCorrecta = true;

                totalAPagar= (importeDeCompra+zonaOeste);
                  console.log(`Importe Compra: ${importeDeCompra} Recargo ${zonaOeste} Total a Pagar: ${totalAPagar}`);


                break;
            }

        case 3:// 
            {
                console.log(`Ud. eligio zona norte`);

                operacionCorrecta = true;

                totalAPagar= (importeDeCompra+zonaNorte);
               console.log(`Importe Compra: ${importeDeCompra} Recargo ${zonaNorte} Total a Pagar: ${totalAPagar}`);

                break;
            }
        case 4:// 
            {
                console.log(`Ud. eligio zona sur`);

                operacionCorrecta = true;

                totalAPagar= (importeDeCompra+zonaSur);
               console.log(`Importe Compra: ${importeDeCompra} Recargo ${zonaSur} Total a Pagar: ${totalAPagar}`);

                break;
            }
        case 5:// 
            {
                console.log(`Ud. eligio zona este`);

                operacionCorrecta = true;

                totalAPagar= (importeDeCompra+zonaEste);
               console.log(`Importe Compra: ${importeDeCompra} Recargo ${zonaEste} Total a Pagar: ${totalAPagar}`);

                break;
            }
        default: // 
            {
                console.log(`Ingrese una opción correcta`);

                operacionCorrecta = false;

                descuento = 0;
                
                break;
            }  
    }


       
}