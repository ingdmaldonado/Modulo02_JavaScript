/*El programa One Shot Plus fue un beneficio implementado en la provincia de Catamarca en 
conjunto con el Banco Nación para incentivar el consumo en comercios locales.
El beneficio consistía en:
 50% de reintegro sobre el monto de la compra
 tope máximo de reintegro: $80.000
 válido para compras realizadas los días viernes, sábado y domingo
El programa debe:
1. Solicitar al usuario:
 el día de la compra
 el importe de la compra
Diplomatura Universitaria en Desarrollo Web
Full Stack con JavaScript 
Módulo: JavaScript
2. Verificar si la compra fue realizada un viernes, sábado o domingo.
 Si no fue uno de esos días, no se aplica el beneficio.
3. Si corresponde el beneficio:
 calcular el 50% del importe de la compra
 verificar si el reintegro supera el tope de $80.000
 si lo supera, aplicar solamente el tope
4. Mostrar:
 día de la compra
 importe de la compra
 reintegro obtenido
 importe final pagado por el cliente.
*/
{

let dia = 0;
let importeCompra = 0;
let reintegro = 0;
let importeAPagar = 0;

dia = Number(prompt(`Ingrese día de Compra: 1-Lunes, 2-Martes, 3-Miércoles, 4-Jueves, 5-Viernes, 6-Sábado, 7-Domingo`));

importeCompra = Number(prompt(`Ingrese el importe de compra:`));

let diaValido = true;

switch(dia)
{
    case 1:
    {
        console.log('Día Lunes');
        reintegro = 0;
        break;
    }
    case 2:
    {
        console.log('Día Martes');
        reintegro = 0;
        break;
    }
    case 3:
    {
        console.log('Día Miércoles');
        reintegro = 0;
        break;
    }
    case 4:
    {
        console.log('Día Jueves');
        break;
        reintegro = 0;
    }
    case 5:
    {
        console.log('Día Viernes');
        reintegro = (importeCompra * 50)/100;

        break;
    }
    case 6:
    {
        console.log('Día Sábado');
        reintegro = (importeCompra * 50)/100;
        break;
    }
    case 7:
    {
         console.log('Día Domingo');
         reintegro = (importeCompra * 50)/100;
         break;
    }
    default:
    {
        console.log('Ingrese un día válido del 1 al 7');
        diaValido = false;
    break;
    }
}
if(diaValido)
{
    console.log(`El usuario ingreso un día correcto`);
    
    reintegro = reintegro > 80000 ? 80000 :  reintegro;
    
    console.log(`Importe de Compra`, importeCompra);

    console.log('Reintegro:', reintegro);
    
    importeAPagar = (importeCompra - reintegro);

    console.log(`Total a Pagar:`, importeAPagar);
}
else
{
    console.log(`El usuario ingresó un día invalido`);
}    


}
