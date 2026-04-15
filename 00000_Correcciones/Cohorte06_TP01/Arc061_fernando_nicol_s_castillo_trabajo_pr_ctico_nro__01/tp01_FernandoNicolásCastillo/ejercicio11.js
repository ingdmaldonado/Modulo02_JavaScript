/*Un local de venta de comida rápida, lanza su aplicación online que le permite al cliente pagar por la misma 
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
let importeCompra = 0;
let zCentro = 2500.00;
let zOeste = 3750.00;
let zNorte = 4225.00;
let zSur = 5222.50;
let zEste = 4288.5;
let importeAPagar = 0;

importeCompra = Number(prompt(`Ingrese el Importe de su Compra:`));
importeAPagar = Number(prompt(`Ingrese su zona de envío:`));

switch (importeAPagar)
{
    case 1:
        {
        importeAPagar = (importeCompra + zCentro);
        console.log('Importe compra:',importeCompra),
        console.log('Envío:',zCentro)
        console.log('TOTAL A PAGAR:',importeAPagar);
        break;
        }

    case 2:
        {
        importeAPagar = (importeCompra + zOeste);
        console.log('Importe compra:',importeCompra),
        console.log('Envío:',zOeste)
        console.log('TOTAL A PAGAR:',importeAPagar);
        break;
        }
        
    case 3:
        {importeAPagar = (importeCompra + zNorte);
        console.log('Importe compra:',importeCompra),
        console.log('Envío:',zNorte)
        console.log('TOTAL A PAGAR:',importeAPagar);
        break;}

    case 4:
        {importeAPagar = (importeCompra + zSur);
        console.log('Importe compra:',importeCompra),
        console.log('Envío:',zSur)
        console.log('TOTAL A PAGAR:',importeAPagar);
        break;}

     case 5:
        {importeAPagar = (importeCompra + zEste);
        console.log('Importe compra:',importeCompra),
        console.log('Envío:',zEste)
        console.log('TOTAL A PAGAR:',importeAPagar);
        break;}
    
    default:
        {console.log('Ingrese una Zona Válida. Gracias'); 
        break;}
        
}

}