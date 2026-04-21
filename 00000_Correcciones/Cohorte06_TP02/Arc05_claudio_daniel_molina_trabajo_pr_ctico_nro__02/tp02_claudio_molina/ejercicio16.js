
let precioAmarok = 65000000;
let precioTaos = 53000000;
let precioPolo = 47000000;
let dineroDisponible = 0;


let continuar = true;

while (continuar) 
{
        let opcion = Number(prompt('Seleccione el vehículo de interés (1: Amarok V6, 2: TAOS, 3: Polo Nuevo, 4: Salir):'));
        if (opcion === 4) 
            {
        continuar = false;
            } 
        else 
    {
        let precioSeleccionado;
        switch (opcion) 
        {
            case 1:
                precioSeleccionado = precioAmarok;
                break;
            case 2:
                precioSeleccionado = precioTaos;
                break;
            case 3:
                precioSeleccionado = precioPolo;
                break;
            default:
                alert('Opción no válida. Por favor seleccione un vehículo válido.');
                continue;
        }

            let dineroDisponible = prompt(`Ingrese el dinero disponible para la compra del vehículo 
                                            (debe ser mayor al 30% y menor al precio total de ${precioSeleccionado}):`);
        
            let entregaMinima = (precioSeleccionado * 30)/100;

            let esInvalido = Number(dineroDisponible) <= 0;

            let esInsuficiente = dineroDisponible < entregaMinima;
            let esExcesivo = dineroDisponible >= precioSeleccionado;

        {
            
        if (Number(dineroDisponible) <= 0)
            {
            console.log('Error: Por favor, ingresa un número válido para la entrega.');

            } 
        else 
            if (dineroDisponible < entregaMinima) 
            {
            console.log(`Error: La entrega mínima permitida es de ${entregaMinima} (30%).`);
            } 
        else 
            if (dineroDisponible >= precioSeleccionado) 
            {
            console.log('Error: El monto de entrega debe ser menor al valor total del vehículo para poder financiar.');
            } 
        else 
            {
                console.log('¡Monto aceptado! Procediendo al cálculo de la financiación.');
                
              /* Acá realizo el cálculo de la financiación, primero calculo la diferencia a financiar
               y luego aplico la tasa anual según la opción seleccionada por el cliente. Finalmente, 
               muestro el total a pagar por el vehículo seleccionado. */ 
                
                let diferencia = precioSeleccionado - dineroDisponible; 
                let opcionFinanciacion = prompt('Seleccione la opción de financiación (1: 12 cuotas - 9.9% ANUAL, 2: 24 cuotas - 22% ANUAL, 3: 36 cuotas - 33% ANUAL):');
                let tasaAnual;
        
                switch (opcionFinanciacion) 
                {
                    case '1':
                        tasaAnual = 0.099;
                        cuotaMensual = (diferencia + (diferencia * tasaAnual)) / 12;
                        break;
                    case '2':
                        tasaAnual = 0.22;
                        cuotaMensual = (diferencia + (diferencia * tasaAnual)) / 24;
                        break;
                    case '3':
                        tasaAnual = 0.33;
                        cuotaMensual = (diferencia + (diferencia * tasaAnual)) / 36;

                        break;
                    default:
                        console.log(`Opción de financiación no válida. Por favor seleccione una opción válida.`);
                        continue;
                }
                       
                    let interes = diferencia * tasaAnual;
                    let totalPagar = diferencia + interes;
                    console.log(`El vehículo seleccionado tiene un precio de: $${precioSeleccionado}`);
                    console.log(`El dinero disponible para la compra es:  $${dineroDisponible}`);
                    console.log(`La diferencia a financiar es: $${diferencia}`);
                    console.log(`La tasa anual aplicada es: ${tasaAnual * 100} %`);
                    console.log(`El interés total a pagar es: $${interes}`);
                    console.log(`La cuota Mensual a pagar es:  $${cuotaMensual}`);
                    console.log(`El total a pagar por el vehículo seleccionado es: $${totalPagar}`);
            }

        }

    }
       
}



