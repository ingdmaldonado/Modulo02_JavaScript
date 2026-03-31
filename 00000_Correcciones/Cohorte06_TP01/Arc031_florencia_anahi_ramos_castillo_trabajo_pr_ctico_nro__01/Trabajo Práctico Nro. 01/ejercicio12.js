/* Ejercicio Nro. 12: Estructuras Condicionales (if/else)
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


function calcularReintegro() {

    // Ingreso de datos
    let dia = prompt("Ingrese el día de la compra (viernes, sábado o domingo)");
    let importe = Number(prompt("Ingrese el importe de la compra"));

    let reintegro = 0;

    // Verifico si aplica el beneficio
    if (dia === "viernes" || dia === "sábado" || dia === "domingo") {

        // Calculo el 50% de reintegro
        reintegro = importe * 50 / 100;

        // Verifico el tope de 80.000
        if (reintegro > 80000) {
            reintegro = 80000;
        }

    } else {
        console.log("No corresponde el beneficio");
    }

    // Calculo el importe final
    let totalFinal = importe - reintegro;

    // Muestro resultados
    console.log(`Día de la compra: ${dia}`);
    console.log(`Importe de la compra: ${importe}`);
    console.log(`Reintegro obtenido: ${reintegro}`);
    console.log(`Importe final pagado: ${totalFinal}`);
}