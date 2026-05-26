
// Ejercicio 22//
export const calcularSobreTasa = (importeBase, tipo) => {
    
    let porcentaje = 0;

    if (tipo === "1") {
        porcentaje = 0.005;      // 5 por mil//
    } else if (tipo === "2") {
        porcentaje = 0.001;      // 1 por mil//
    } else if (tipo === "3") {
        porcentaje = 0.007;      // 7 por mil//
    } else if (tipo === "4") {
        porcentaje = 0.002;      // 2 por mil//
    } else if (tipo === "5") {
        porcentaje = 0.15;       // 15 por mil//
    } else {
        porcentaje = 0.001;      // 1 por mil (cualquier otra)//
    }

    return importeBase * porcentaje;
};