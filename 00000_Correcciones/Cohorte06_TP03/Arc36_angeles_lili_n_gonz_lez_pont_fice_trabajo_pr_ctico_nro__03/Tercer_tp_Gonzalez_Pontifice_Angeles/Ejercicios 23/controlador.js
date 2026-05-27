
import { calcularImporteAgua } from './modelo';

// Función principal que maneja la interacción con el usuario
const calcularFacturaAgua = () => {
    
   // valor ingresado//

    const metrosIngresados = parseFloat(document.getElementById('metros').value);
    const resultado = document.getElementById('resultado');

    
    if (isNaN(metrosIngresados) || metrosIngresados < 0) {
        resultado.textContent = "Por favor ingrese una cantidad válida de metros cúbicos";
        return;
    }

    
    const importeFinal = calcularImporteAgua(metrosIngresados);

    resultado.textContent = `Importe base a pagar: $${importeFinal.toFixed(2)}`;
};

// Limpiamos el resultado mientras el usuario escribe
document.getElementById('metros').addEventListener('input', () => {
    document.getElementById('resultado').textContent = '';
});