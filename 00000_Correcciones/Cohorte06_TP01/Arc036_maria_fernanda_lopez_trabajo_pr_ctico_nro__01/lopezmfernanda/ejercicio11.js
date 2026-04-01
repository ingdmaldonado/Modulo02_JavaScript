/* Ejercicio Nro. 11: Estructuras Condicionales (if/else)
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
let importeCompra=0;
importeCompra= Number(prompt(`Ingrese importe de compra`));
console.log(`Importe de Compra`,importeCompra);

let zona= 0;
zona= Number(prompt(`Indique su zona 1-centro 2-oeste 3-norte 4-sur 5-este `));
console.log(`Zona`,zona);

let envioCentro= 2500;
let envioOeste= 3750;
let envioNorte= 4225;
let envioSur= 5222.50;
let envioEste= 4288.50;

let costoEnvio= 0;


switch(zona)
{
    case 1: costoEnvio= envioCentro;
        {
        console.log(`Su costo de envio a zona centro es $ ${envioCentro} `);
        break;
        }
            
    case 2: costoEnvio= envioOeste;
        {
        console.log(`Su costo de envio a zona oeste es $ ${envioOeste}`);
                break;
        }
         
    case 3: costoEnvio= envioNorte;
        {
        console.log(`Su costo de envio a zona norte es $${envioNorte}`);
        break;

        }
           
    case 4: costoEnvio= envioSur;
        {
        console.log(`Su costo de envio a zona sur es $ ${envioSur}`);
        break;
        }

    case 5: costoEnvio= envioEste;
        {
        console.log(`Su costo de envio a zona Este es $${envioEste}`);
        break;
        }

    default:
        {
        console.log(`Elija una zona correcta`);
        break;
        }

}
let totalAPagar= 0;

totalAPagar= importeCompra + costoEnvio;

console.log(`Tu compra es de $ ${importeCompra}, el costo de envio es de $ ${costoEnvio}. El importe total es de $ ${totalAPagar}`);
}