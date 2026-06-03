/* Debe retornar el precio de costo más el margen de ganancia */
export const precioVenta = (importeCompra, margenGanancia) => {
    return importeCompra + ( importeCompra * margenGanancia / 100);
}
/* Debe retornar el promedio de 3 notas */
export const promedioNotas = (nota1,nota2,nota3) =>{
    return (nota1 + nota2 + nota3) / 3; 
}
/* Debe retornar la calificación de la nota */
export const calificacion = (nota) => {
    let calificacion = "";
     if (nota > 0 & nota <= 4){
        calificacion = "Desaprobado";
     } else if (nota > 4 & nota <= 7) {
        calificacion = "Aprobado"
     } else if (nota > 7 & nota <= 9 ){
        calificacion = "Muy Bueno"
     } else if (nota === 10){
        calificacion = "Excelente"
     }
    
     return calificacion;

    }

/* Debe retornar el impuesto según clasificación y tipo de bebida */

export const impuestoBebidas = (importe, opcionTipoBebida) => {
    let impuestoBebida = 0;
    switch(opcionTipoBebida) {

        /*  1 – Bebidas Agua en envases plásticos = 5 ‰ (cinco por mil)
            2 – Bebidas Agua en envases retornables = 1 ‰ (uno por mil)
            3 – Bebidas Gaseosas Azucaradas en envases plásticos = 7 ‰ (siete por mil)
            4 – Bebidas Gaseosas Azucaradas en envases retornables = 2 ‰ (dos por mil)
            5 – Bebidas Energéticas = 15 ‰ (quince por mil)
            6 – Cualquier otra bebida no clasificada = 1 ‰ (uno por mil).
        */

        case 1: impuestoBebida = 5;
                break;
        case 2: impuestoBebida = 1;
                break;
        case 3: impuestoBebida = 7;
                break;
        case 4: impuestoBebida = 2;
                break;
        case 5: impuestoBebida = 15;
                break;
        default: impuestoBebida = 1;
                break;
    }

    return importe * impuestoBebida / 100;
}

export const calcularImporteAgua = (metrosCubicos) => {

    if (metrosCubicos > 0 && metrosCubicos >=50){
        return metrosCubicos * 350;
    } else if (metrosCubicos > 50 && metrosCubicos <= 70){
        return (50 * 350) + ((metrosCubicos - 50)* 555.2);
    } else if (metrosCubicos > 70){
        return (50 * 350 ) + (20*555.2) + ((calcularImporteAgua - 70) * 1552.2 );
    }
}
