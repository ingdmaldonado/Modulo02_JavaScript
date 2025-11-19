// =============================
// MODELO: Contiene todas las funciones lógicas
// =============================

// Arrow function principal que calcula el importe base del agua
export const calcularImporteAgua = (consumo) => {

    const tarifa1 = 350.00;     // hasta 50 m³
    const tarifa2 = 555.20;     // de 51 a 70 m³
    const tarifa3 = 1552.20;    // más de 70 m³

    let importe = 0;

    // Aplicar las condiciones del esquema tarifario
    if (consumo <= 50) {
        importe = 50 * tarifa1; // mínimo 50 m³
    } else if (consumo <= 70) {
        importe = (50 * tarifa1) + ((consumo - 50) * tarifa2);
    } else {
        importe = (50 * tarifa1) + (20 * tarifa2) + ((consumo - 70) * tarifa3);
    }

    return importe; // debe devolver un número
};