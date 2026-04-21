/* Ejercicio Nro. 17 */

function clasificarHuevos() {

    let peso;
    let continuar;

    // Contadores
    let total = 0;
    let xl = 0;
    let l = 0;
    let m = 0;
    let descartados = 0;

    do {
        // Ingreso del peso
        peso = Number(prompt("Ingrese el peso del huevo en gramos"));

        // Clasificación
        if (peso >= 73) {
            xl++;
            total++;

        } else if (peso >= 63 && peso < 73) {
            l++;
            total++;

        } else if (peso >= 53 && peso < 63) {
            m++;
            total++;

        } else {
            descartados++;
        }

        // Pregunto si desea continuar
        continuar = prompt("¿Desea ingresar otro huevo? (si/no)");

    } while (continuar === "si");

    // Cálculo de porcentajes
    let porcXL = (xl * 100) / total;
    let porcL = (l * 100) / total;
    let porcM = (m * 100) / total;

    // Muestro resultados
    console.log(`Total de huevos: ${total}`);
    console.log(`Huevos XL: ${xl}`);
    console.log(`Huevos L: ${l}`);
    console.log(`Huevos M: ${m}`);
    console.log(`Huevos descartados: ${descartados}`);

    console.log(`% XL: ${porcXL}`);
    console.log(`% L: ${porcL}`);
    console.log(`% M: ${porcM}`);
}