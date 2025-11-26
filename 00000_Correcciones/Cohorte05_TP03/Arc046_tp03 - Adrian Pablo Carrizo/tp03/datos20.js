// Datos para el ejercicio 20
export const calculos = [];

export const validarNumero = (numero) => {
    return !isNaN(numero) && numero > 0;
};

export const validarTipo = (tipo) => {
    return tipo === "1" || tipo === "2";
};

export const agregarCalculo = (nuevoCalculo) => {
    calculos.push(nuevoCalculo);
    return calculos;
};
