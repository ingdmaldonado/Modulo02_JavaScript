export const calcularImporteAgua = (metrosCubicos)=>{

    let importe = 0;

    /* consumo menor o igual a 50 */

    if(metrosCubicos <= 50)
    {
        importe = 50 * 350;

        return importe;
    }

    /* consumo mayor a 50 y menor o igual a 70 */

    if(metrosCubicos > 50 && metrosCubicos <= 70)
    {
        importe =
        (50 * 350) +
        ((metrosCubicos - 50) * 555.20);

        return importe;
    }

    /* consumo mayor a 70 */

    if(metrosCubicos > 70)
    {
        importe =
        (50 * 350) +
        (20 * 555.20) +
        ((metrosCubicos - 70) * 1552.20);

        return importe;
    }

};