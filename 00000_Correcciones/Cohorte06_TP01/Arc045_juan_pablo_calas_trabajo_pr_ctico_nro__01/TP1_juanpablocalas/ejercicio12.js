/*

Ejercicio Nro. 12: Estructuras Condicionales (if/else)
El programa One Shot Plus fue un beneficio implementado en la provincia de Catamarca en conjunto con el Banco Nación para incentivar el consumo en comercios locales.
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
    MontoDeCompra = 0;
    DiaDeLaSemana = 0;
    PorcDescuentoMarcaton = 50;
    TopeDeCompraMarcaton = 80000;
    MontoDescuento = 0;

    TotalAPagar = 0;
    TotalDescEfectuado = 0;

    DiaDeLaSemanaCorrecto = true;

    MontoDeCompra = Number(prompt(`Por favor ingrese el Monto de la Compra`));
    console.log(`El Monto de Compra ingresado es $ ${MontoDeCompra}`);
    DiaDeLaSemana = Number(prompt(`Por favor ingrese Dia de la Semana : 1- LUNES // 2-MARTES // 3-MIERCOLES .......`));

    switch(DiaDeLaSemana)
    {
        case 1:
            console.log(`El dia de la Semana Ingresado es 1 - LUNES - No hay descuento este dia`);
            break;
        case 2:
            console.log(`El dia de la Semana Ingresado es 2 - MARTES - No hay descuento este dia`);
            break;   
        case 3:
            console.log(`El dia de la Semana Ingresado es 3 - MIERCOLES - No hay descuento este dia`);
            break;
        case 4:
            console.log(`El dia de la Semana Ingresado es 4 - JUEVES - No hay descuento este dia`);
            break;
        case 5:
            console.log(`El dia de la Semana Ingresado es 5 - VIERNES - Descuento Marcaton 50% Tope $ 80000`);
            break;
        case 6:
            console.log(`El dia de la Semana Ingresado es 6 - SABADO - Descuento Marcaton 50% Tope $ 80000`);
            break; 
        case 7:
            console.log(`El dia de la Semana Ingresado es 7 - DOMINGO - Descuento Marcaton 50% Tope $ 80000`);
            break;
        default:
            console.log(`El dia de la Semana Ingresado incorrecto`);
            DiaDeLaSemanaCorrecto = false;
            break;                                               
    }
    if(DiaDeLaSemanaCorrecto === true)
    {
        if((DiaDeLaSemana >= 5) && (DiaDeLaSemana <=7 ))
        {
            console.log(`Ingreso un dia CON DESCUENTO MARCATON`);
            MontoDescuento = MontoDeCompra * (PorcDescuentoMarcaton / 100);
            MontoDescuento = MontoDescuento > TopeDeCompraMarcaton?TopeDeCompraMarcaton:MontoDescuento;
        }
        else
        {
            console.log(`Ingreso un dia DONDE NO HAY DESCUENTO MARCATON`);
            TotalAPagar = MontoDeCompra;
        }
        TotalAPagar = MontoDeCompra - MontoDescuento
        console.log(`El desuento aplicado es $ ${MontoDescuento} -- El total a Pagar es $ ${TotalAPagar}`);
    }
    else
    {
        console.log(`Vuelva a Ingresar el Dia - Dia Incorrecto`);
    }
}