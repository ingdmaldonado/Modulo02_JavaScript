let peso = 0;

let superGrandes = 0;
let grandes = 0;
let medianos = 0;
let descartados = 0;

let cant = 0;

let continua = true;

let porcXL = 0;
let porcL = 0;
let porcM = 0;
let porDescartados = 0;

while (continua === true){

peso = Number(prompt("Ingrese peso"));

if ( peso >= 73){
    superGrandes ++;
}
if (peso >= 63 && peso < 73){
    grandes ++;
}
if (peso < 63 && peso >= 53){
    medianos++;
}

if (peso < 53 && peso > 0 ){
    descartados ++;
}

cant++;

    continua = prompt("Continua S/N");
    if (continua === "S" || continua === "s"){
        continua = true;
    }
}

porcXL = superGrandes * 100 / cant;
porcL = grandes * 100 / cant;
porcM = medianos * 100 / cant;
porDescartados = descartados * 100 / cant;

console.log(`Los totales fueron:
    Supergrandes: ${superGrandes}
    Grandes: ${grandes}
    Medianos: ${medianos}
    Descartados: ${descartados}

    Los porcentajes fueron:

    Supergrandes: ${porcXL}
    Grandes: ${porcL}
    Medianos: ${porcM}
    Descartados: ${porDescartados}

    `)