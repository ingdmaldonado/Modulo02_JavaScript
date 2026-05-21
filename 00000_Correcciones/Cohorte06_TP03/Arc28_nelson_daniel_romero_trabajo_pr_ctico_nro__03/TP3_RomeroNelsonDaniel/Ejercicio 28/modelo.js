export const contarConsonantes = (cadena) => {
    let cantidadeConsonantes = 0;
    for (let i = 0; i < cadena.length; i++) {
        switch (cadena[i])
        {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                break;
            default:
                cantidadeConsonantes++;
        }
    }
    return cantidadeConsonantes;
}