let xl = 0;
let l = 0;
let m = 0;
let descartados = 0;
let total = 0;

let continuar = "SI";

while (continuar == "SI") {

    let peso = parseFloat(prompt("ingrese peso del huevo"));

    total++;

    if (peso >= 73) {
        xl++;
    }
    else if (peso >= 63 && peso < 73) {
        l++;
    }
    else if (peso >= 53 && peso < 63) {
        m++;
    }
    else {
        descartados++;
    }

    continuar = prompt("¿desea continuar? si / no");
}

let porcentajeXL = (xl * 100) / total;
let porcentajeL = (l * 100) / total;
let porcentajeM = (m * 100) / total;

alert(
    "total huevos: " + total + "\n" +
    "XL: " + xl + "\n" +
    "L: " + l + "\n" +
    "M: " + m + "\n" +
    "descartados: " + descartados + "\n\n" +

    "% XL: " + porcentajeXL + "\n" +
    "% L: " + porcentajeL + "\n" +
    "% M: " + porcentajeM
);