
window.onload = () => {

    const estadoAplicacion = {precioBase:0,tipoBebida:"",sobreTasa:0};

    const precioBase = document.querySelector("#precio");
    const btnCalcularTasa = document.querySelector("#calcularTasa");
    const tipoBebida = document.querySelector("#tipoBebida");
    const btnLimpiar = document.querySelector("#limpiar");

    btnCalcularTasa.onclick = () => {

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


    tipoBebida.onchange = () => {

        estadoAplicacion.tipoBebida = tipoBebida.options[tipoBebida.selectedIndex].text;
        estadoAplicacion.sobreTasa = Number(tipoBebida.value) * 100;
        console.log(estadoAplicacion);
    }

    precioBase.oninput = () => {

        estadoAplicacion.precioBase = Number(precioBase.value);
        console.log(estadoAplicacion);
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

