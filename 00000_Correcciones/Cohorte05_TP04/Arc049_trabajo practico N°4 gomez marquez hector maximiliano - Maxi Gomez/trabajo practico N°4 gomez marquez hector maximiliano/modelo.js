// Unifica las cuatro cohortes en un solo arreglo
export function unificarCohortes(c1, c2, c3, c4) {
    return [...c1, ...c2, ...c3, ...c4];
}

// Devuelve solo los alumnos con nota_final >= 6
export function filtrarAprobados(alumnos) {
    return alumnos.filter(a => a.nota_final >= 6);
}

// Devuelve solo los alumnos con nota_final < 6
export function filtrarDesaprobados(alumnos) {
    return alumnos.filter(a => a.nota_final < 6);
}

// Busca un alumno por DNI (se compara como string)
export function buscarPorDni(alumnos, dni) {
    if (!dni) return null;
    return alumnos.find(a => String(a.dni) === String(dni)) || null;
}

// Cuenta aprobados usando if/else
export function contarAprobadosIf(alumnos) {
    let contador = 0;
    for (const a of alumnos) {
        if (a.nota_final >= 6) {
            contador++;
        } else {
            // nada para desaprobados
        }
    }
    return contador;
}

// Cuenta aprobados usando operador ternario
export function contarAprobadosTernario(alumnos) {
    return alumnos.reduce(
        (acc, a) => acc + (a.nota_final >= 6 ? 1 : 0),
        0
    );
}


