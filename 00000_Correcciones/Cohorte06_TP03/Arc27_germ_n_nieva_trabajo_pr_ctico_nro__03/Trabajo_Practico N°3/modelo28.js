export const contarConsonantes = (texto) => {
    let contador = 0
    for (let i = 0; i < texto.length; i++) {
        const char = texto[i].toLowerCase()
        if (char >= 'a' && char <= 'z') {
            if (char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u') {
                contador++
            }
        }
    }
    return contador
}
