// modelo.js

// Muestra una lista de alumnos en formato texto HTML
export const listarAlumnos = (alumnos) => {
    let texto = "";
    for (let i = 0; i < alumnos.length; i++) {
        texto += `${alumnos[i].apellido} ${alumnos[i].nombre} - Nota: ${alumnos[i].nota_final}<br>`;
    }
    return texto;
};

// Devuelve solo los aprobados
export const obtenerAprobados = (alumnos) => {
    let aprobados = [];
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].nota_final > 5) {
            aprobados.push(alumnos[i]);
        }
    }
    return aprobados;
};

// Devuelve solo los desaprobados
export const obtenerDesaprobados = (alumnos) => {
    let desaprobados = [];
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].nota_final <= 5) {
            desaprobados.push(alumnos[i]);
        }
    }
    return desaprobados;
};

// Contar aprobados usando IF
export const contarAprobadosIf = (alumnos) => {
    let contador = 0;
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].nota_final > 5) {
            contador++;
        }
    }
    return contador;
};

// Contar aprobados usando operador ternario
export const contarAprobadosTernario = (alumnos) => {
    let contador = 0;
    for (let i = 0; i < alumnos.length; i++) {
        alumnos[i].nota_final > 5 ? contador++ : contador;
    }
    return contador;
};
