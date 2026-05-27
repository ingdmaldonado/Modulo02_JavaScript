document.getElementById("btnCalcular").addEventListener("click", function () {

    let A = parseFloat(document.getElementById("numA").value);
    let B = parseFloat(document.getElementById("numB").value);

    let contenedor = document.getElementById("resultado");

  
    if (isNaN(A) || isNaN(B)) {
        contenedor.innerHTML = "<p class='text-red-600'>Ingresá ambos números</p>";
        return;
    }

    let suma = A + B;
    let resta = A - B;
    let producto = A * B;
    let cociente = B !== 0 ? A / B : "No se puede dividir por 0";

    contenedor.innerHTML = `
        <p><strong>Suma:</strong> ${suma}</p>
        <p><strong>Resta:</strong> ${resta}</p>
        <p><strong>Producto:</strong> ${producto}</p>
        <p><strong>Cociente:</strong> ${cociente}</p>
    `;
});