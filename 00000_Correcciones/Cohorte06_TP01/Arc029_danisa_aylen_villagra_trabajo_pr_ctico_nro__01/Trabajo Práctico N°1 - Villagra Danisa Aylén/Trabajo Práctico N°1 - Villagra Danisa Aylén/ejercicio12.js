/*Ejercicio Nro. 12: Estructuras Condicionales (if/else) 
 
El programa One Shot Plus fue un beneficio implementado en la provincia de Catamarca en conjunto con el Banco Nación para incentivar el consumo en comercios locales. 
El beneficio consistía en: 
- 50% de reintegro sobre el monto de la compra 
- tope máximo de reintegro: $80.000 
- válido para compras realizadas los días viernes, sábado y domingo 
El programa debe: 
1. Solicitar al usuario: 
 - el día de la compra 
 - el importe de la compra
2. Verificar si la compra fue realizada un viernes, sábado o domingo. 
 - Si no fue uno de esos días, no se aplica el beneficio. 
3. Si corresponde el beneficio: 
 - calcular el 50% del importe de la compra 
 -verificar si el reintegro supera el tope de $80.000 
 - si lo supera, aplicar solamente el tope 
4. Mostrar: 
 - día de la compra 
 - importe de la compra 
 - reintegro obtenido 
 - importe final pagado por el cliente.*/

 {
    let diaDeCompra = Number(prompt(`Ingrese día de compra: 1 - Lunes; 2 - Martes; 3 - Miércoles; 4 - Jueves; 5 - Viernes; 6 - Sábado; 7 - Domingo.`));
    let importeDeCompra = Number(prompt(`Ingrese monto de la compra:`));
    
    switch(diaDeCompra)
    {
        case 1:
            {
                console.log(`Dia: Lunes`);
                descuento = 0;
                let totalAPagar = importeDeCompra - descuento;
                console.log(`Monto a pagar: ${totalAPagar}`);
                break;
            }
        case 2:
            {
                console.log(`Dia: Martes`);
                descuento = 0;
                let totalAPagar = importeDeCompra - descuento;
                console.log(`Monto a pagar: ${totalAPagar}`);
                break;
            }
        case 3:
            {
                console.log(`Dia: Miércoles`);
                descuento = 0;
                let totalAPagar = importeDeCompra - descuento;
                console.log(`Monto a pagar: ${totalAPagar}`);
                break;
            }
        case 4:
            {
                console.log(`Dia: Jueves`);
                descuento = 0;
                let totalAPagar = importeDeCompra - descuento;
                console.log(`Monto a pagar: ${totalAPagar}`);
                break;
            }
        case 5:
            {
                console.log(`Dia: Viernes`);
                descuento = (importeDeCompra * 50) / 100 >= 80000 ? 80000 : (importeDeCompra * 50) / 100;
                let totalAPagar = importeDeCompra - descuento;
                console.log(`Importe de compra: ${importeDeCompra}`);
                console.log(`Descuento: ${descuento}`);
                console.log(`Monto a pagar: ${totalAPagar}`);
                break;
            }
        case 6:
            {
                console.log(`Dia: Sábado`);
                descuento = (importeDeCompra * 50) / 100 >= 80000 ? 80000 : (importeDeCompra * 50) / 100;
                let totalAPagar = importeDeCompra - descuento;
                console.log(`Importe de compra: ${importeDeCompra}`);
                console.log(`Descuento: ${descuento}`);
                console.log(`Monto a pagar: ${totalAPagar}`);
                break;
            }
        case 7:
            {
                console.log(`Dia: Domingo`);
                descuento = (importeDeCompra * 50) / 100 >= 80000 ? 80000 : (importeDeCompra * 50) / 100;
                let totalAPagar = importeDeCompra - descuento;
                console.log(`Importe de compra: ${importeDeCompra}`);
                console.log(`Descuento: ${descuento}`);
                console.log(`Monto a pagar: ${totalAPagar}`);
                break;
            }
        default:
            {
                console.log(`Día de compra incorrecto. Ingrese nuevamente.`);
            }
    }
 }