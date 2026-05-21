export const tieneDosS = (palabra) => {

    let contador = 0;

    palabra = palabra.toLowerCase();

    for (let i = 0; i < palabra.length; i++) {

        if (palabra[i] === "s") {
            contador++;
        }

        if (contador >= 2) {
            return true; // 🔥 corta antes
        }
    }

    return false;

}