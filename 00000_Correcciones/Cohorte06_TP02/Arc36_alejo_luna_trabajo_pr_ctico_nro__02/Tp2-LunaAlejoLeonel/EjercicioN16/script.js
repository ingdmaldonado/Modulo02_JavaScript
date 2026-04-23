console.log(`Concesionaria 0km`);

let opcion = Number(prompt(`
    1) Amarok 65M
    2) TAOS 53M
    3) Polo 47M`));

while (opcion < 1 || opcion > 3) {
    opcion = Number(prompt(`Error. Ingrese opción válida (1-3)`));
}


let precio;

if (opcion === 1){
    console.log(`Seleccionó la opción 1: Amarok - Precio: $ 65.000.000`)
    precio = 65000000;
} else if (opcion === 2){
    console.log(`Seleccionó la opción 2: TAOS - Precio: $ 53.000.000`);
    precio = 53000000;
}
else{
    precio = 47000000;
    console.log(`Seleccionó la opción 3: Polo - Precio: $ 47.000.000`);

} 


let entrega = Number(prompt(`Ingrese dinero a entregar`));

while (entrega < precio * 0.30 || entrega >= precio) {
    entrega = Number(prompt(`Error. Debe ser mayor al 30% y menor al total`));
}

let saldo = precio - entrega;


let plan = Number(prompt(`
    1) 12 cuotas (9.9%)
    2) 24 cuotas (22%)
    3) 36 cuotas (33%)`));

while (plan < 1 || plan > 3) {
    plan = Number(prompt(`Error. Ingrese un plan válido`));
}

let interes;
let cuotas;

if (plan === 1) {
    interes = 0.099;
    cuotas = 12;
} else if (plan === 2) {
    interes = 0.22;
    cuotas = 24;
} else {
    interes = 0.33;
    cuotas = 36;
}


let total = saldo + (saldo * interes);
let cuota = total / cuotas;


// Resultados
console.log(`Precio: $` + precio);
console.log(`Entrega: $` + entrega);
console.log(`Saldo: $` + saldo);
console.log(`Total financiado: $` + total);
console.log(`Cuotas:` + cuotas);
console.log(`Valor de cuota: $` + cuota);