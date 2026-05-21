export const promedio = (a, b, c) => {
    return ((a + b + c) / 3);
}

export const validar = (nota) => {
    return nota >= 0 && nota <= 10 ? true : false;
}