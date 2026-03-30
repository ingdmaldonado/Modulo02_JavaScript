/*El programa One Shot Plus fue un beneficio implementado en la provincia de Catamarca en
conjunto con el Banco Nación para incentivar el consumo en comercios locales.
El beneficio consistía en:
 50% de reintegro sobre el monto de la compra
 tope máximo de reintegro: $80.000
 válido para compras realizadas los días viernes, sábado y domingo

El programa debe:
    1. Solicitar al usuario:
 el día de la compra
 el importe de la compra .
     Verificar si la compra fue realizada un viernes, sábado o domingo.
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
let diaDeLaCompra = 0;
diaDeLaCompra= Number(prompt(`dia de la compra 1 lunes- 2 martes - 3 miercoles - 4 jueves`));

let importeCompra = 0;
importeCompra =Number(prompt(`ingrese el importe de la compra`));

let descuento = 0;
let esDiaValido = true;
switch (diaDeLaCompra)
    {  // lunes
        case 1:{
            console.log(`Ud ingreso dia lunes`);
            esDiaValido = true;
            break;
        }


        // martes
        case 2:{
            console.log(`Ud ingreso dia martees`);
            esDiaValido = true;
            break;
        }
        
        //miercoles
        case 3:{
            console.log(`Ud ingreso dia miercoles`);
            esDiaValido = true;
            break;
        }

        //jueves
        case 4:{
            console.log(`Ud ingreso dia dia jueves`);
            esDiaValido = true;
            break;
        }

        //viernes
        case 5:{ 
            console.log(`Ud ingreso dia viernes`);
              descuento = (importeCompra * 50)/100;
            esDiaValido = true;
            break;
        }

        // sabado
        case 6:{ 
            console.log(`Ud ingreso dia sabado`);
            descuento = (importeCompra * 50)/100;
            esDiaValido = true;
           
            break;
        }

        //domingo
        case 7:{
            console.log(`Ud ingreso dia domingo`);
            descuento = (importeCompra * 50)/100;
            esDiaValido = true;
            break;
        }

        //dia no habil
        default :{
            console.log(`Ud ingreso un dia incorrecto`);
            esDiaValido = false;
            break;
        }


    }
        
    
        if(esDiaValido)
            { 
                console.log(`Ud.ingreso un dia valido `);
             descuento = descuento > 80000 ? 80000 : descuento;  

            }  
        else{console.log(`Ud. ingreso un dia invalido`);


        }    
 
let totalApagar = importeCompra - descuento;
console.log(`Su importe de compra es ${importeCompra}`)
console.log(`El descuento que se aplico es ${descuento}`)
console.log(`el importe total a pagar es ${totalApagar}`);

}