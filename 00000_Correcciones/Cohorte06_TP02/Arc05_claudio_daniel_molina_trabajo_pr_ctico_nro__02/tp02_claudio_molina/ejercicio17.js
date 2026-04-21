
let totalHuevos = 0;
let huevosXL = 0;
let huevosL = 0;
let huevosM = 0;
let huevosDescartados = 0;

let continuar = true;

while (continuar) {
    let pesoHuevo = Number(prompt('Ingrese el peso del huevo en gramos (o S para salir):'));
    if (pesoHuevo < 0 || pesoHuevo === 'S') 
        {
        continuar = false;
        } 
    else 
        {
            totalHuevos = totalHuevos + 1;

            if (pesoHuevo >= 73) 
                {
                huevosXL = huevosXL + 1;
                } 
        else 
                if (pesoHuevo >= 63) 
                {
                huevosL = huevosL + 1;
                }
        else 
                if (pesoHuevo >= 53) 
                {
                huevosM = huevosM + 1;
                } 
        else    {
                huevosDescartados = huevosDescartados + 1;
                }
        }
}

console.log(`Cantidad total de Huevos: ${totalHuevos}`);
console.log(`Cantidad total de Huevos XL: ${huevosXL}`);
console.log(`Cantidad total de Huevos L: ${huevosL}`);
console.log(`Cantidad total de Huevos M: ${huevosM}`);
console.log(`Cantidad total de Huevos descartados: ${huevosDescartados}`);

if (totalHuevos > 0) 
    {
    let porcentajeXL = (huevosXL / totalHuevos) * 100;
    let porcentajeL = (huevosL / totalHuevos) * 100;
    let porcentajeM = (huevosM / totalHuevos) * 100;
    console.log(`% de Huevos XL sobre el Total: ${porcentajeXL}%`);
    console.log(`% de Huevos L sobre el Total: ${porcentajeL}%`);
    console.log(`% de Huevos M sobre el Total: ${porcentajeM}%`);
    }

