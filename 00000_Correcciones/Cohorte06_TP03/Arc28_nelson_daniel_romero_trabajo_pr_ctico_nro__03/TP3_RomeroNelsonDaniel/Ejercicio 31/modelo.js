export const noContieneNumeros = (cadena) => {
    let noContieneNumeros = true;
    cadena = cadena.replaceAll(` `,``)
    for (let i = 0; i < cadena.length; i++) {
        if (!isNaN(cadena[i]))
        {
            noContieneNumeros = false;
            break;
        }
    }
    return noContieneNumeros;
}