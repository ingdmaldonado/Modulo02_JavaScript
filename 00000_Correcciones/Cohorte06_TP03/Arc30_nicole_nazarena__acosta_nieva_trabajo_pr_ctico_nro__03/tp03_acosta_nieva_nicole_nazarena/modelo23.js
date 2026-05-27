export const calcularImporteAgua = (metrosCubicos) => {
    let resultado = 0;
if (metrosCubicos < 50) {
    resultado = 50 * 350;
} else if (metrosCubicos < 70 && metrosCubicos > 50) {
    resultado = (50 * 350) + (5 * 555.20);
} else {
    resultado = (50 * 350) + (20 * 555.20) + (15 * 1552.20);
}

return resultado;
};

