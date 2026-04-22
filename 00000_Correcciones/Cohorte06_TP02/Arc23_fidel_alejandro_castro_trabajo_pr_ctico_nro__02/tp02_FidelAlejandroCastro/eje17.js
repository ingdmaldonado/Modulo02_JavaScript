{
    let cantHuevoXL = 0;
    let cantHuevoL = 0;
    let cantHuevoM = 0;
    let cantHuevoDescart = 0;
    let entrada = 1;

    while (entrada === 1) {
        let pesoHuevo = Number(prompt(`Ingrese  el peso del huevo en gr`));

        if ((pesoHuevo >= 53) && (pesoHuevo < 63)) {
            cantHuevoM = cantHuevoM + 1;
        } else {
            if ((pesoHuevo >= 63) && (pesoHuevo < 73)) {
                cantHuevoL = cantHuevoL + 1;
            } else {
                if ((pesoHuevo >= 73)) {
                    cantHuevoXL = cantHuevoXL + 1;
                } else {
                    cantHuevoDescart++;
                }
            }
        }

        entrada = Number(prompt(`¿Quiere cargar un Huevo? 1. Si | 2. No`));
    }
    console.log(`Cantidad M: ${cantHuevoM}`);
    console.log(`Cantidad L: ${cantHuevoL} `);
    console.log(`Cantidad XL: ${cantHuevoXL}`);
    console.log(`Cantidad Descartes: ${cantHuevoDescart}`);

    let totalHuevos = cantHuevoM + cantHuevoL + cantHuevoXL + cantHuevoDescart;
    let porcHuevoM = (cantHuevoM/totalHuevos)*100;
    let porcHuevoL = (cantHuevoL/totalHuevos)*100;
    let porcHuevoXL = (cantHuevoXL/totalHuevos)*100;
    let porcHuevoDesc = (cantHuevoDescart/totalHuevos)*100;

    console.log(`----- Porcentaje de huevos -----`);
    console.log(`Huevos M: ${porcHuevoM}%`);
    console.log(`Huevos L: ${porcHuevoL}%`);
    console.log(`Huevos XL: ${porcHuevoXL}%`);
    console.log(`Huevos Descartados: ${porcHuevoDesc}%`);
}
