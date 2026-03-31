/* Ejercicio Nro. 11: 
Estructuras Condicionales (if/else)
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


function calcularEnvio() {

    // Ingreso de datos
    let importe = Number(prompt("Ingrese el importe de la compra"));
    let zona = Number(prompt("Ingrese la zona: 1-Centro, 2-Oeste, 3-Norte, 4-Sur, 5-Este"));

    // Costos de envío (como recomienda la consigna)
    let envioCentro = 2500;
    let envioOeste = 3750;
    let envioNorte = 4225;
    let envioSur = 5222.50;
    let envioEste = 4288.50;

    let costoEnvio = 0;

    // Determino el costo según la zona
    switch (zona) {

        case 1:
            costoEnvio = envioCentro;
            break;

        case 2:
            costoEnvio = envioOeste;
            break;

        case 3:
            costoEnvio = envioNorte;
            break;

        case 4:
            costoEnvio = envioSur;
            break;

        case 5:
            costoEnvio = envioEste;
            break;

        default:
            console.log("Zona inválida");
            return;
    }

    // Calculo total final
    let totalFinal = importe + costoEnvio;

    // Muestro resultados
    console.log(`Importe de la compra: ${importe}`);
    console.log(`Costo de envío: ${costoEnvio}`);
    console.log(`Total a pagar: ${totalFinal}`);
}