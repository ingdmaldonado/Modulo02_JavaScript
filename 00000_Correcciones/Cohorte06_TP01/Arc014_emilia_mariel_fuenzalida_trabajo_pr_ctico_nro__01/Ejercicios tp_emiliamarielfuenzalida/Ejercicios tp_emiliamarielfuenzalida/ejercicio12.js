/*
Ejercicio Nro. 12: Estructuras Condicionales (if/else)

El programa One Shot Plus fue un beneficio implementado 
en la provincia de Catamarca en
conjunto con el Banco Nación para incentivar 
el consumo en comercios locales.

El beneficio consistía en:

-50% de reintegro sobre el monto de la compra
-tope máximo de reintegro: $80.000
-válido para compras realizadas los días viernes, sábado y domingo

El programa debe:

1. Solicitar al usuario:
    - el día de la compra
    - el importe de la compra
2. Verificar si la compra fue realizada un viernes, sábado o domingo.
    - Si no fue uno de esos días, no se aplica el beneficio.
3. Si corresponde el beneficio:
    - calcular el 50% del importe de la compra
    - verificar si el reintegro supera el tope de $80.000
    - si lo supera, aplicar solamente el tope
4. Mostrar:
    - día de la compra
    - importe de la compra
    - reintegro obtenido
    - importe final pagado por el cliente

*/
{
    let dia =0;
    dia = Number (prompt(`Ingrese dia de compra:
        1-Lunes 
        2-Martes 
        3-Miercoles 
        4-Jueves 
        5-Viernes 
        6-Sabado 
        7-Domingo`));

    let importeDeCompra =0;
    importeDeCompra = Number (prompt(`Ingresar importe de su compra :`));

    let descuento= 0;
    let diaValido= true;

    switch (dia)
    {
        case 1: {
            console.log(`Día lunes`);
            descuento= 0;
            diaValido= false;
            break;
        }
        case 2: {
            console.log(`Día martes`);
            descuento= 0;
            diaValido= false;
            break;
        }
        case 3: {
            console.log(`Día miercoles`);
            descuento= 0;
            diaValido= false;
            break;
        }
        case 4: {
            console.log(`Día jueves`);
            descuento= 0;
            diaValido= false;
            break;
        }
        //*VIERNES SABADO Y DOMINGO DIAS DE ONE SHOT*//
        case 5: {
            console.log(`Día viernes`);
            descuento= (importeDeCompra * 50)/100;
            diaValido= true;
            break;
        }
        case 6: {
            console.log(`Día sabado`);
            descuento= (importeDeCompra * 50)/100;
            diaValido= true;
            break;
        }
        case 7: {
            console.log(`Día domingo`);
            descuento= (importeDeCompra * 50)/100;
            diaValido= true;
        
            break;
        }
        default:{
            console.log(`Dia incorrecto`);
            diaValido= false;
            break;
        }
    }
    if(diaValido){
        console.log(`Día de ONE SHOT!`);
        descuento=descuento > 80000 ? 80000:descuento;
        console.log(`Descuento final: ${descuento}`);
        
    }
    else
    {
        console.log(`Día sin promoción`);
    }
    let totalAPagar = 0;

    totalAPagar = importeDeCompra-descuento;

    console.log(`Importe de compra ${importeDeCompra} Descuento ${descuento} Total a pagar ${totalAPagar}`);

}