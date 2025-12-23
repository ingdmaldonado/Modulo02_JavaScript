// Mostrar listado por consola
export const mostrarListado = (alumnos) => {
    alumnos.forEach(a => {
        console.log(`${a.apellido} ${a.nombre}`);
    });
};

// Unir cohortes
export const fusionarCohortes = (...listas) => {
    return listas.flat();
};

// Aprobados
export const filtrarAprobados = (alumnos) => {
    return alumnos.filter(a => a.nota >= 6);
};

// Desaprobados
export const filtrarDesaprobados = (alumnos) => {
    return alumnos.filter(a => a.nota < 6);
};

// Ordenar notas
export const ordenarNotas = (alumnos) => {
    return [...alumnos].sort((a, b) => b.nota - a.nota);
};

// Buscar por DNI
export const buscarAlumnoDni = (alumnos, dni) => {
    return alumnos.find(a => a.dni === dni);
};

// Contar aprobados (if)
export const totalAprobadosIf = (alumnos) => {
    let total = 0;
    alumnos.forEach(a => {
        if (a.nota >= 6) total++;
    });
    return total;
};

// Contar aprobados (ternario)
export const totalAprobadosTernario = (alumnos) => {
    return alumnos.reduce(
        (acc, a) => a.nota >= 6 ? acc + 1 : acc,
        0
    );
};
