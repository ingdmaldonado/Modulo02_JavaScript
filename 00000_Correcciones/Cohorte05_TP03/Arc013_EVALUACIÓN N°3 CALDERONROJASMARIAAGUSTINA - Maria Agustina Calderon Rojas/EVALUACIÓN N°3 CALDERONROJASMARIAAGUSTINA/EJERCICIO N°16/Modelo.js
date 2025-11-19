// =============================
// MODELO: Contiene todas las funciones lógicas
// =============================

// Arrow function que devuelve la tasa según el tipo de bebida
const obtenerTasa = (tipo) => {
    switch (tipo) {
        case 1: return 5;   // Agua plástica
        case 2: return 1;   // Agua retornable
        case 3: return 7;   // Gaseosa plástica
        case 4: return 2;   // Gaseosa retornable
        case 5: return 15;  // Energética
        default: return 1;  // Cualquier otra
    }
};

// Arrow function principal que calcula la sobre tasa (devuelve número)
export const calcularSobreTasa = (importeBase, tipo) => {
    const tasa = obtenerTasa(tipo);
    const sobreTasa = importeBase * (tasa / 1000);
    return sobreTasa; // Debe devolver un número
};