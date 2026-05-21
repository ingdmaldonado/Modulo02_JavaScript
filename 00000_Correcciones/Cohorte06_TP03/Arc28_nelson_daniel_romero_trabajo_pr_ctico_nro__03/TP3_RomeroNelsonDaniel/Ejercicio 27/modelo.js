export const contarVocales = (cadena) => {
    let cantidadesVocales = 0;
    for (let i = 0; i < cadena.length; i++) {
        switch (cadena[i])
        {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                cantidadesVocales++;
        }
    }
    return cantidadesVocales;
}