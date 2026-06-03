/*
Nota:
Quise utilizar al principio un solo modelo para todos los ejercicios, 
pero cambié de opinión para que sea más sencillo realizar los ejercicios. 
Aún así dejé éste de ejemplo.


*/



/* Debe retornar el precio de costo más el margen de ganancia */
export const precioVenta = (importeCompra, margenGanancia) => {
    return importeCompra + ( importeCompra * margenGanancia / 100);
}


/* Ejercicio 22 */
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

    return importe * impuestoBebida / 1000;
}


