export const evaluarTasa = (importe, categoria) => {
    //los porcentajes ya se encuentran divididos en mil
    let porcentaje = 0;
    switch (categoria) {
        case 1: //aguaPlastico
            porcentaje = 0.005;
            break;
        case 2: //aguaRetornable
        case 6: //bebidaSinClasificar
            porcentaje = 0.001;
            break;
        case 3: //gaseosaPlastico
            porcentaje = 0.007;
            break;
        case 4: //gaseosaRetornable
            porcentaje = 0.002;
            break;
        case 5: //bebidaEnergetica
            porcentaje = 0.015;
            break;
    }

    return importe * porcentaje;
}