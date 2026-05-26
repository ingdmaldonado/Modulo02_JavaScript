let rubro;

while (!["vestimenta","perfumeria","libreria","electrodomesticos","calzado"].includes(rubro)) {
    rubro = prompt("rubro:");
}

let monto = parseFloat(prompt("monto:"));

let desc = 0;
let tope = 0;

if (rubro === "libreria") {
    desc = monto * 0.30;
    tope = 90000;
} else if (rubro === "electrodomesticos") {
    desc = monto * 0.15;
    tope = 70000;
} else {
    desc = monto * 0.20;
    tope = 80000;
}

if (desc > tope) desc = tope;

alert("final: " + (monto - desc));