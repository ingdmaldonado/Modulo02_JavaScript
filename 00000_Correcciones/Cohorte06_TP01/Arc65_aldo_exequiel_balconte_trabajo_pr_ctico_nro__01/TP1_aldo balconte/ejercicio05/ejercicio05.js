function verificarParImpar() {
    const numero = parseInt(document.getElementById('numeroInput').value);
    const resultadoElement = document.getElementById('resultado');

    if (isNaN(numero)) {
        resultadoElement.textContent = "Por favor, introduce un número válido.";
    } else {
        if (numero % 2 === 0) {
            resultadoElement.textContent = `El número ${numero} es PAR.`;
        } else {
            resultadoElement.textContent = `El número ${numero} es IMPAR.`;
        }
    }
}