let cantidad, precio;

while (Number(cantidad)) {
    cantidad = parseInt(prompt("cantidad pasajes:"));
}

while (Number(precio)) {
    precio = parseFloat(prompt("precio:"));
}

let total = cantidad * precio;
let desc = 0;

if (cantidad > 3 && total > 500000) {
    desc = total * 0.15;
} else if (cantidad > 3 && total > 250000) {
    desc = total * 0.11;
}

alert("final: " + (total - desc));