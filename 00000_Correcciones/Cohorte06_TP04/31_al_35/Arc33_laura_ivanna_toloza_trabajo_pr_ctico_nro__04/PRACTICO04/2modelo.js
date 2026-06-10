
export const todos = (vector) => {
    return vector.filter(
    (alumno) => alumno.nota_final > 5);
};
