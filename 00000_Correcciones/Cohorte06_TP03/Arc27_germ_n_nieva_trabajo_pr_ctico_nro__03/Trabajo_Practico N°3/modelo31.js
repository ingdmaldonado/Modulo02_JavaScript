export const sinDigitos = (texto) => {
    let tieneNumero = false
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] >= '0' && texto[i] <= '9') {
            tieneNumero = true
            break
        }
    }
    return !tieneNumero
}
