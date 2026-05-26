
let dia;

while (!["viernes","sabado","domingo"].includes(dia)) {
    dia = prompt("dia:");
}

let monto = parseFloat(prompt("monto:"));
let reintegro = monto * 0.5;

if (reintegro > 80000) {
    reintegro = 80000;
}

alert("final: " + (monto - reintegro));