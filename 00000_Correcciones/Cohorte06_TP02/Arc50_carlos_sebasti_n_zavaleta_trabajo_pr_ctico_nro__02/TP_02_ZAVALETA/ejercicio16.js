let amarok=65000000;
let taos = 53000000;
let polo = 47000000;

let precioauto = 0;

let importe = 0;

let totalAFinanciar = 0;


/*
Para calcular la cuota, según gemini IA, debo multipliar la cuota por los siguientes montos:
Para hacerlo tú mismo con el precio real del auto:

A 12 cuotas: Multiplica el monto del préstamo por 0.0878.

A 24 cuotas: Multiplica el monto por 0.0520.

A 36 cuotas: Multiplica el monto por 0.0440.
*/

let seleccion = 0;
seleccion = Number(prompt("Seleccione el vehículo: 1-Amarok 2-Taos 3-Polo"));

importe = Number(prompt("Ingrese el importe disponible para la compra"));
switch (seleccion){
    case 1: {
        precioauto = amarok;
        break;
    }
    case 2: { precioauto = taos;
        break;
    }
    case 3:
        {
            precioauto = polo;
            break;
        }
    default: {
        console.log("Ingresó una opción no contemplada");
        break;
    }
}

/*
if (importe <= (precioauto * 0.3)){
            console.log("El dinero no es suficiente.");
        } else{
            totalAFinanciar = precioauto - importe;
            console.log(` Precio del Auto: ${precioauto}
                          Dinero disponible: ${importe}                          
                          Total a Financiar: ${totalAFinanciar}
                         `);
            console.log(` 12 Cuotas con 9.9% de interes: ${totalAFinanciar * 0.0878 } => ${totalAFinanciar * 0.0878 * 12 }
                          24 Cuotas con 22% anual: ${totalAFinanciar * 0.520 } => ${ totalAFinanciar * 0.520 * 24 }
                          36 Cuotas con 33% anual: ${totalAFinanciar * 0.440 } => ${ totalAFinanciar * 0.440 * 36 }
                
                `)            
        }
*/

/*
Desde otra lógica, agregué el porcentaje de interés y dividí en la cantidad de cuotas del préstamo.

*/
if (importe <= (precioauto * 0.3)){
            console.log("El dinero no es suficiente.");
        } else{
            totalAFinanciar = precioauto - importe;
            console.log(` Precio del Auto: ${precioauto}
                          Dinero disponible: ${importe}                          
                          Total a Financiar: ${totalAFinanciar}
                         `);
            console.log(` 12 Cuotas con 9.9% de interes: ${totalAFinanciar * 1.099 / 12 } => ${totalAFinanciar * 1.099 }
                          24 Cuotas con 22% anual: ${totalAFinanciar * 1.22 / 24 } => ${ totalAFinanciar * 1.22 }
                          36 Cuotas con 33% anual: ${totalAFinanciar * 1.33 / 36 } => ${ totalAFinanciar * 1.33 }
                
                `)            
        }