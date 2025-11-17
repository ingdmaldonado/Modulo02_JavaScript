import {calculoGanancia,calculoNota,calculoPromedio,calculoImpuesto,calculoAgua,calculoTasaSubsuelo,calculoTasaEnre,calculoInsulina,contarVocales,contarConsonantes,contarS,contarEspacios,contarNumeros} from './funciones.js';

window.onload = () => {


    console.log(`todo ok`);

    // Leo Indices
    let idIndice13 = document.querySelector("#idIndice13");
    let idIndice14 = document.querySelector("#idIndice14");
    let idIndice15 = document.querySelector("#idIndice15");
    let idIndice16 = document.querySelector("#idIndice16");
    let idIndice17 = document.querySelector("#idIndice17");
    let idIndice18 = document.querySelector("#idIndice18");
    let idIndice19 = document.querySelector("#idIndice19");
    let idIndice20 = document.querySelector("#idIndice20");
    let idIndice21 = document.querySelector("#idIndice21");
    let idIndice22 = document.querySelector("#idIndice22");
    let idIndice23 = document.querySelector("#idIndice23");
    let idIndice24 = document.querySelector("#idIndice24");
    let idIndice25 = document.querySelector("#idIndice25");
    


    // Leo Divs
    let divEj13 = document.querySelector("#divEj13");
    let divEj14 = document.querySelector("#divEj14");
    let divEj15 = document.querySelector("#divEj15");
    let divEj16 = document.querySelector("#divEj16");
    let divEj17 = document.querySelector("#divEj17");
    let divEj18 = document.querySelector("#divEj18");
    let divEj19 = document.querySelector("#divEj19");
    let divEj20 = document.querySelector("#divEj20");
    let divEj21 = document.querySelector("#divEj21");
    let divEj22 = document.querySelector("#divEj22");
    let divEj23 = document.querySelector("#divEj23");
    let divEj24 = document.querySelector("#divEj24");
    let divEj25 = document.querySelector("#divEj25");
    
    
    // Oculto todos los Div
    const ocultar = () => {
    divEj13.style.display = 'none'; 
    divEj14.style.display = 'none';
    divEj15.style.display = 'none';
    divEj16.style.display = 'none';
    divEj17.style.display = 'none';
    divEj18.style.display = 'none';
    divEj19.style.display = 'none';
    divEj20.style.display = 'none';
    divEj21.style.display = 'none';
    divEj22.style.display = 'none';
    divEj23.style.display = 'none';
    divEj24.style.display = 'none';
    divEj25.style.display = 'none';
    }
    // Oculto todos los DIV 
    ocultar();
    // Ejercicio Nro. 13 ----------------------------------------------------------------------------------------------

    let idPrecioVenta = document.querySelector("#idPrecioVenta");
    let idMargenGanancia = document.querySelector("#idMargenGanancia");
    let idBotonEj13 = document.querySelector("#idBotonEj13");    


    idBotonEj13.onclick = () => {
        let resultado = calculoGanancia(Number(idPrecioVenta.value),Number(idMargenGanancia.value));
        idResultadoEj13.textContent = `El precio de venta es : ${resultado}`;
        return resultado;
    };

    
    // Ejercicio Nro. 14  --------------------------------------------------------------------------------------------
    let idNotaPractico1 = document.querySelector("#idNotaPractico1");
    let idNotaPractico2 = document.querySelector("#idNotaPractico2");
    let idNotaPractico3 = document.querySelector("#idNotaPractico3");
    let idBotonEj14 = document.querySelector("#idBotonEj14");  
    
    idBotonEj14.onclick = () => {
        let resultado  = calculoPromedio(Number(idNotaPractico1.value),Number(idNotaPractico2.value),Number(idNotaPractico3.value));
        idResultadoEj14.textContent = `El Promedio de los 3 Practicos es : ${resultado}`;
        return resultado;
    };

    // Ejercicio Nro. 15  --------------------------------------------------------------------------------------------
    let idNota = document.querySelector("#idNota");
    let idBotonEj15 = document.querySelector("#idBotonEj15");  
    
    idBotonEj15.onclick = () => {
        let resultado  = calculoNota(Number(idNota.value));
        idResultadoEj15.textContent = `El Estado de la Nota es : ${resultado}`;
        return resultado;
        
    };


    // Ejercicio Nro. 16  --------------------------------------------------------------------------------------------
    let idTipoBebida = document.querySelector("#idTipoBebida");
    let idImporteBebida = document.querySelector("#idImporteBebida");
    let idBotonEj16 = document.querySelector("#idBotonEj16");  
    
    idBotonEj16.onclick = () => {
        let resultado  = calculoImpuesto(Number(idTipoBebida.value),Number(idImporteBebida.value));
        idResultadoEj16.textContent = `El Valor del Impuesto es  : ${resultado}`;
        return resultado;
    };

    // Ejercicio Nro. 17  --------------------------------------------------------------------------------------------
    let idMetros = document.querySelector("#idMetros");
    let idBotonEj17 = document.querySelector("#idBotonEj17");  
    
    idBotonEj17.onclick = () => {
        let resultado  = calculoAgua(Number(idMetros.value));
        idResultadoEj17.textContent = `Importe a Abonar es : ${resultado}`;
        return resultado;
    };

    // Ejercicio Nro. 18  --------------------------------------------------------------------------------------------
    let idImporteAgua = document.querySelector("#idImporteAgua");
    let idBotonEj18 = document.querySelector("#idBotonEj18");  
    
    idBotonEj18.onclick = () => {
        let resultado  = calculoTasaSubsuelo(Number(idImporteAgua.value));
        idResultadoEj18.textContent = `El Importe  de la Tasa de Subsuelo es: ${resultado}`;
        return resultado;
    };

    // Ejercicio Nro. 19  --------------------------------------------------------------------------------------------
    let idImporteServiciosPublicos = document.querySelector("#idImporteServiciosPublicos");
    let idBotonEj19 = document.querySelector("#idBotonEj19");  
    
    idBotonEj19.onclick = () => {
        let resultado  = calculoTasaEnre(Number(idImporteServiciosPublicos.value));
        idResultadoEj19.textContent = `El Importe  de la Tasa de Fiscalizacion ENRE (1,2%) es: ${resultado}`;
        return resultado;
    };

    // Ejercicio Nro. 20  --------------------------------------------------------------------------------------------
    let idNivelGlucosa = document.querySelector("#idNivelGlucosa");
    let idPesoCorporal = document.querySelector("#idPesoCorporal");
    let idTipoDiabetes = document.querySelector("#idTipoDiabetes");
    let idBotonEj20 = document.querySelector("#idBotonEj20");  
    
    idBotonEj20.onclick = () => {
        let resultado  = calculoInsulina(Number(idNivelGlucosa.value),Number(idPesoCorporal.value),Number(idTipoDiabetes.value));
        idResultadoEj20.textContent = `la dosis de insulina recomendada es: ${resultado}`;
        return resultado;
    };

    // Ejercicio Nro. 21  --------------------------------------------------------------------------------------------
    let idTexto = document.querySelector("#idTexto");
    let idBotonEj21 = document.querySelector("#idBotonEj21");  
    
    idBotonEj21.onclick = () => {
        let resultado  = contarVocales(idTexto.value);
        idResultadoEj21.textContent = `La cantidad de vocales es: ${resultado}`;
        return resultado;
    };

    // Ejercicio Nro. 22  --------------------------------------------------------------------------------------------
    let idTextoConsonantes = document.querySelector("#idTextoConsonantes");
    let idBotonEj22 = document.querySelector("#idBotonEj22");  
    
    idBotonEj22.onclick = () => {
        let resultado  = contarConsonantes(idTextoConsonantes.value);
        idResultadoEj22.textContent = `La cantidad de Consonantes es: ${resultado}`;
        return resultado;
    };

    // Ejercicio Nro. 23  --------------------------------------------------------------------------------------------
    let idTextoS = document.querySelector("#idTextoS");
    let idBotonEj23 = document.querySelector("#idBotonEj23");  
    
    idBotonEj23.onclick = () => {
        let resultado  = contarS(idTextoS.value);
        idResultadoEj23.textContent = `El Resultado del Conteo de (S) dio : ${resultado == true ? 'Verdadero' : 'Falso' }`;
        return resultado;
    };

    // Ejercicio Nro. 24  --------------------------------------------------------------------------------------------
    let idTextoEspacios = document.querySelector("#idTextoEspacios");
    let idBotonEj24 = document.querySelector("#idBotonEj24");  
    
    idBotonEj24.onclick = () => {
        let resultado  = contarEspacios(idTextoEspacios.value);
        idResultadoEj24.textContent = `El Resultado del Conteo de (Espacios) dio : ${resultado == true ? 'Verdadero' : 'Falso' }`;
        return resultado;
    };

    // Ejercicio Nro. 25  --------------------------------------------------------------------------------------------
    let idTextoNumeros = document.querySelector("#idTextoNumeros");
    let idBotonEj25 = document.querySelector("#idBotonEj25");  
    
    idBotonEj25.onclick = () => {
        let resultado  = contarNumeros(idTextoNumeros.value);
        idResultadoEj25.textContent = `El Texto Ingresado : ${resultado == true ? 'NO Contiene Numeros' : 'SI contiene Numeros' }`;
        return resultado;
    };

    

    // Oculta los DIV, para que cuando arranque este todo limpio 
    // Muestra o Oculta Ejercicio 13 ----------------------------------------------------------------------------------
    idIndice13.onclick = () => {
        ocultar();
        divEj13.style.display = divEj13.style.display == 'block' ? 'none' : 'block';
    };
    // Muestra o Oculta Ejercicio 14 ----------------------------------------------------------------------------------
    idIndice14.onclick = () => {
        ocultar();
        divEj14.style.display = divEj14.style.display == 'block' ? 'none' : 'block';
    };
    // Muestra o Oculta Ejercicio 15 ----------------------------------------------------------------------------------
    idIndice15.onclick = () => {
         ocultar();
        divEj15.style.display = divEj15.style.display == 'block' ? 'none' : 'block';
    };
    // Muestra o Oculta Ejercicio 16 ----------------------------------------------------------------------------------
    idIndice16.onclick = () => {
         ocultar();
        divEj16.style.display = divEj16.style.display == 'block' ? 'none' : 'block';
    };
    // Muestra o Oculta Ejercicio 17 ----------------------------------------------------------------------------------
    idIndice17.onclick = () => {
         ocultar();
        divEj17.style.display = divEj17.style.display == 'block' ? 'none' : 'block';
    };
    // Muestra o Oculta Ejercicio 18 ----------------------------------------------------------------------------------
    idIndice18.onclick = () => {
         ocultar();
        divEj18.style.display = divEj18.style.display == 'block' ? 'none' : 'block';
    };    
    // Muestra o Oculta Ejercicio 19 ----------------------------------------------------------------------------------
    idIndice19.onclick = () => {
         ocultar();
        divEj19.style.display = divEj19.style.display == 'block' ? 'none' : 'block';
    };    
    // Muestra o Oculta Ejercicio 20 ----------------------------------------------------------------------------------
    idIndice20.onclick = () => {
         ocultar();
        divEj20.style.display = divEj20.style.display == 'block' ? 'none' : 'block';
    };    
    // Muestra o Oculta Ejercicio 21 ----------------------------------------------------------------------------------
    idIndice21.onclick = () => {
         ocultar();
        divEj21.style.display = divEj21.style.display == 'block' ? 'none' : 'block';
    };    
    // Muestra o Oculta Ejercicio 22 ----------------------------------------------------------------------------------
    idIndice22.onclick = () => {
         ocultar();
        divEj22.style.display = divEj22.style.display == 'block' ? 'none' : 'block';
    };    
    // Muestra o Oculta Ejercicio 23 ----------------------------------------------------------------------------------
    idIndice23.onclick = () => {
         ocultar();
        divEj23.style.display = divEj23.style.display == 'block' ? 'none' : 'block';
    };    
    idIndice24.onclick = () => {
         ocultar();
        divEj24.style.display = divEj24.style.display == 'block' ? 'none' : 'block';
    };    
    idIndice25.onclick = () => {
         ocultar();
        divEj25.style.display = divEj25.style.display == 'block' ? 'none' : 'block';
    };    
    
}