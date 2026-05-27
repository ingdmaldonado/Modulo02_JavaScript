export const tieneDosS = (palabra) => {
    let contador = 0
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === 's' || palabra[i] === 'S') {
            contador++
        }
        if (contador >= 2) return true
    }
    return false
}
