export const fnContieneNumero = (cadena, digitosNumericos) => {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        let caracterActual = cadena.charAt(i).toLowerCase();

        for (let j = 0; j < digitosNumericos.length; j++) {
            if (caracterActual === digitosNumericos.charAt(j)) {
                return true;
                break
            }
        }
    }
    return false;
};