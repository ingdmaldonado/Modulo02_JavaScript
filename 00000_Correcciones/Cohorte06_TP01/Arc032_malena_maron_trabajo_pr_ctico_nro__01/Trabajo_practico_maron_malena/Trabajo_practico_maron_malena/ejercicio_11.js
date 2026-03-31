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
no haya que tocar la lógica del programa, ni ver todo el recorrido, sino simplemente cambiar los precios.*/

{
    let total=0;
    let importeCompra=0;
    let costoEnvio=0;
    let envioCentro=2500.00;
    let envioOeste=3750.00;
    let envioNorte=4225.00;
    let envioSur=5222.50;
    let envioEste=4288.50
    let zona=0;
    importeCompra= Number(prompt `Ingrese el importe de la compra`)
    zona= Number(prompt`Ingrese la zona (1. Zona centro)(2. Zona oeste)(3. Zona norte)(4. Zona sur)(5. Zona este)`)

    switch(zona){
        case 1: {
            costoEnvio= envioCentro;
            console.log(`Zona elegida centro`);
        }
        break;
        case 2: {
            costoEnvio=envioOeste;
            console.log(`Zona elegida oeste`);
        }
        break;
        case 3:{
            costoEnvio=envioNorte;
            console.log(`Zona elegida norte`);

        }
        break;
        case 4 : {
            costoEnvio=envioSur;
            console.log(`Zona elegida sur`);
        }
        break;
        case 5: {
            costoEnvio=envioEste;
            console.log(`Zona elegida este`);
        }
        break;
        default:
            console.log(`Zona incorrecta, intente nuevamente`)
        
        
    }
    total=costoEnvio+importeCompra;
    console.log(`Importe ingresado ${importeCompra}`);
    console.log(`Costo del envio ${zona}`);
    console.log(`Total a pagar ${total}`);

    
}