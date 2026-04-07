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
    let nombreDia = "";
    let importeCompra = 0;
    let descuento = 0;
    let esDiaValido = true;
    let totalAPagar = 0;

    dia = Number(prompt(`Ingrese dia de compra, 1 = Lunes, 2 = Martes ...:`));
    importeCompra = Number(prompt(`Ingrese importe de compra`));

    switch(dia)
    {
        case 1:{  // LUNES
            nombreDia = "LUNES";
            descuento = 0;
            break;
        }
        case 2:{ // MARTES
            nombreDia = "MARTES";
            descuento = 0;
            break;
        }
        case 3:{
            nombreDia = "MIERCOLES";
            descuento = 0;
            break;
        }
        case 4:{
            nombreDia = "JUEVES";
            descuento = 0;
            break;
        }
        case 5:{ // VIERNES
            nombreDia = "VIERNES";
            descuento = (importeCompra*50)/100;
            break;
        }
        case 6:{ // SABADO
            nombreDia = "SÁBADO";
            descuento = (importeCompra*50)/100;
            break;
        }
       case 7:{ // DOMINGO
            nombreDia = "DOMINGO";
            descuento = (importeCompra*50)/100;
            break;
        }
        default:{
            esDiaValido = false;
            break;
        }
    }

    if (esDiaValido) {

        descuento = descuento > 80000 ? 80000:descuento;

        totalAPagar = importeCompra - descuento;
  
        console.log(`Día de la compra "${nombreDia}", Importe compra: ${importeCompra}, Descuento: ${descuento}, Total a Pagar: ${totalAPagar}`);

    } else {

        console.log(`ERROR, ingreso un dia Incorrecto`);
    }


}