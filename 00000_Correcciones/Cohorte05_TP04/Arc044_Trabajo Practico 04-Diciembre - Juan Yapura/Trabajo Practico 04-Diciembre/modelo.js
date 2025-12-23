

// 1) Mostrar alumnos con forEach //
export const mostrarAlumnos = (cohorte, contenedor) => {
    contenedor.innerHTML += `<ul>${cohorte.map(a => `<li>${a.apellido}, ${a.nombre}</li>`).join("")}</ul>`;
    cohorte.forEach(a => console.log(`${a.apellido}, ${a.nombre}`));
};

// 2) Unificar cohortes con spread operator
export const unificarCohortes = (c1, c2, c3, c4) => {
    const todos = [...c1, ...c2, ...c3, ...c4];
    console.log("Cohortes unificadas:", todos);
    return todos;
};

// 3) Filtrar aprobados y desaprobados //
export const separarAprobados = (alumnos, contenedor) => {
    const aprobados = alumnos.filter(a => a.nota_final > 5);
    const desaprobados = alumnos.filter(a => a.nota_final <= 5);

    contenedor.innerHTML = `
        <h3>Aprobados</h3>
        <ul>${aprobados.map(a => `<li class="aprobado">${a.apellido}, ${a.nombre} (${a.nota_final})</li>`).join("")}</ul>
        <h3>Desaprobados</h3>
        <ul>${desaprobados.map(a => `<li class="desaprobado">${a.apellido}, ${a.nombre} (${a.nota_final})</li>`).join("")}</ul>
    `;
    console.log("Aprobados:", aprobados);
    console.log("Desaprobados:", desaprobados);
};

// 4) Ordenar por nota //
export const ordenarPorNota = (alumnos, contenedor) => {
    const ordenados = [...alumnos].sort((a, b) => a.nota_final - b.nota_final);
    contenedor.innerHTML = `
        <h3>Ordenados por nota</h3>
        <ul>${ordenados.map(a => `<li>${a.apellido}, ${a.nombre} (${a.nota_final})</li>`).join("")}</ul>
    `;
    console.log("Ordenados:", ordenados);
};

// 5) Buscar alumno por DNI //
export const buscarPorDni = (alumnos, dni, contenedor) => {
    const resultado = alumnos.find(a => a.dni === dni);
    contenedor.innerHTML = resultado 
        ? `<p>Encontrado: ${resultado.apellido}, ${resultado.nombre} (Nota: ${resultado.nota_final})</p>`
        : `<p>No se encontró alumno con DNI ${dni}</p>`;
    console.log("Encontrado:", resultado);
};

// 6_a) Contabilizar aprobados con if/else //
export const contarAprobadosIfElse = (alumnos, contenedor) => {
    const total = alumnos.reduce((acc, a) => {
        if (a.nota_final > 5) return acc + 1;
        else return acc;
    }, 0);
    contenedor.innerHTML += `<p>Aprobados (if/else): ${total}</p>`;
    console.log("Aprobados (if/else):", total);
};

// 6_b) Contabilizar aprobados con operador ternario //
export const contarAprobadosTernario = (alumnos, contenedor) => {
    const total = alumnos.reduce((acc, a) => a.nota_final > 5 ? acc + 1 : acc, 0);
    contenedor.innerHTML += `<p>Aprobados (ternario): ${total}</p>`;
    console.log("Aprobados (ternario):", total);
};
