{
    let cantidadHuevos = 0;
    let CantidadHuevosXL = 0;
    let CantidadHuevosL = 0;
    let CantidadHuevosM = 0;
    let CantidadDescartados = 0;   
    
    let pesoHuevo = 0;

    alert("Para finalizar, ingrese un peso negativo o cero.");

    do {
        pesoHuevo = Number(prompt("Ingrese el peso del huevo (en gramos):"));

        if (pesoHuevo > 0) {
            cantidadHuevos++;
            if (pesoHuevo >= 73) {
                CantidadHuevosXL++;
            } else if (pesoHuevo >= 63 && pesoHuevo <= 73) {
                CantidadHuevosL++;
            } else if (pesoHuevo >= 53 && pesoHuevo < 63) {
                CantidadHuevosM++;
            } else {
                CantidadDescartados++;
            }            
        }        
    } while (pesoHuevo >= 0);
    
    console.log(`Cantidad total de huevos ingresados: ${cantidadHuevos}`);
    console.log(`Cantidad de huevos XL: ${CantidadHuevosXL}`);
    console.log(`Cantidad de huevos L: ${CantidadHuevosL}`);
    console.log(`Cantidad de huevos M: ${CantidadHuevosM}`);
    console.log(`Cantidad de huevos descartados: ${CantidadDescartados}`);

    console.log(`Porcentaje de huevos XL: ${(CantidadHuevosXL / cantidadHuevos) * 100}%`);
    console.log(`Porcentaje de huevos L: ${(CantidadHuevosL / cantidadHuevos) * 100}%`);
    console.log(`Porcentaje de huevos M: ${(CantidadHuevosM / cantidadHuevos) * 100}%`);
    
}