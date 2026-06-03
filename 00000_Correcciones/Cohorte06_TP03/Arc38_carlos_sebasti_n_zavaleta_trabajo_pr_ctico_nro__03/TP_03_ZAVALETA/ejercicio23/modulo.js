/* Ejercicio 23 */

export const calcularImporteAgua = (metrosCubicos) => {

    if (metrosCubicos > 0 && metrosCubicos <=50){
        return metrosCubicos * 350;
    } else if (metrosCubicos > 50 && metrosCubicos <= 70){
        return (50 * 350) + ((metrosCubicos - 50)* 555.2);
    } else if (metrosCubicos > 70){
        return (50 * 350 ) + (20 * 555.2) + ((metrosCubicos - 70) * 1552.2 );
    }
}