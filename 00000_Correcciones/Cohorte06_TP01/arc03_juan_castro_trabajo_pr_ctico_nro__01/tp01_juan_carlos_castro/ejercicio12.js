/*

Ejercicio Nro. 12: Estructuras Condicionales (if/else) 
 
El programa One Shot Plus fue un beneficio implementado en la provincia de Catamarca en 
conjunto con el Banco Nación para incentivar el consumo en comercios locales. 
El beneficio consistía en: 
 50% de reintegro sobre el monto de la compra 
 tope máximo de reintegro: $80.000 
 válido para compras realizadas los días viernes, sábado y domingo 
El programa debe: 

1. Solicitar al usuario: 
 el día de la compra 
 el importe de la compra 

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

    let diaCompra = 0;
    let importeCompra = 0;
    let totalCompra = 0;
    let descuento = 0;

    diaCompra = Number(prompt(`Ingrese el dia: 1-Lunes 2-Martes 3-Miercoles 4-Jueves 5-Viernes 6-Sabado 7-Domingo`))
    importeCompra = Number(prompt(`Ingrese el importe:`))

    switch (diaCompra) {
        case 1:
            diaCompra = `Lunes`
            totalCompra = importeCompra;
            break;
        case 2:
            diaCompra = `Martes`
            totalCompra = importeCompra;
            break;
        case 3:
            diaCompra = `Miercoles`
            totalCompra = importeCompra;
            break;
        case 4:
            diaCompra = `Jueves`
            totalCompra = importeCompra;
            break;
        case 5:
            diaCompra = `Viernes`
            descuento = (importeCompra * 50) / 100;
            if (descuento > 80000) {
                descuento = 80000;
                totalCompra = importeCompra - descuento;
            } else {
                totalCompra = importeCompra - descuento;
            }
            break;
        case 6:
            diaCompra = `Sabado`
            descuento = (importeCompra * 50) / 100;
            if (descuento > 80000) {
                descuento = 80000;
                totalCompra = importeCompra - descuento;
            } else {
                totalCompra = importeCompra - descuento;
            }
            break;
        case 7:
            diaCompra = `Domingo`
            descuento = (importeCompra * 50) / 100;
            if (descuento > 80000) {
                descuento = 80000;
                totalCompra = importeCompra - descuento;
            } else {
                totalCompra = importeCompra - descuento;
            }
            break;
        default:
            console.log(`Ingrese un dia valido`)
            break;
    }

    console.log(`Dia de compra: ${diaCompra}, el importe de la compra es: ${importeCompra}, el descuento obtenido es: ${descuento}, el import final es: ${totalCompra}`);

}