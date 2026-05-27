
window.onload = () => {

    
    const btnCalcular = document.querySelector("#calcular");
    const btnLimpiar = document.querySelector("#limpiar");

    btnCalcular.onclick = () => {

        const precioCosto = document.querySelector("#costo");
        const porcentajeVenta = document.querySelector("#ganancia");
        const MostrarResultado = document.querySelector("#resultado");

        let precio = Number(precioCosto.value);
        let porcentaje = Number(porcentajeVenta.value);
                
        MostrarResultado.innerHTML = `El precio de venta es: ${CalcualarPrecioVenta(precio, porcentaje)}`;

    }

const CalcualarPrecioVenta = (costo, ganancia) => {

    const precioVenta = costo / (1 - (ganancia /100));    
    return precioVenta.toFixed(2);

    }  
    
    btnLimpiar.onclick = () => {

        const precioCosto = document.querySelector("#costo");
        const porcentajeVenta = document.querySelector("#ganancia");
        const MostrarResultado = document.querySelector("#resultado");

        precioCosto.value = "";
        porcentajeVenta.value = "";
        MostrarResultado.innerHTML = "";

    }

}

