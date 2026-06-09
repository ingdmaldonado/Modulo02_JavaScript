
export const obtenerTodosLosAlumnos = (c1, c2, c3, c4) => [...c1, ...c2, ...c3, ...c4];


export const filtrarAprobados = (todosLosAlumnos) => {
    return todosLosAlumnos.filter(({ nota_final }) => nota_final > 4);
};


export const ordenarPorNotaAscendente = (todosLosAlumnos) => {
    return [...todosLosAlumnos].sort((a, b) => a.nota_final - b.nota_final);
};

