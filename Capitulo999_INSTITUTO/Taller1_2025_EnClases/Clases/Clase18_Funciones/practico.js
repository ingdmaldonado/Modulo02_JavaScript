/* hacer una funcion que reciba como parametro una temperatura y devuelva como 
valor si es "frio" si la temperatura es menor o igual a 15 , 
"templado" si es menor o igual a 25 ,
"calido" si es mayor a 25 */
const calcularLaTemperatura = (temperatura) => { 
    if (temperatura <= 15) {
        return "frio";
    } else if (temperatura <= 25) {
        return "templado";
    } else {
        return "calido";
    }
}

/* Que reciba como parámetro el porcentaje de humedad y como salida "seco" , "normal" o "humedo"
Si la humedad es menor a 30 "seco" 
Si el porcentaje de humedad es entre 30 y 60 es "normal" 
Y mayor a 60 es "humedo" */
const calcularHumedad = (porcentajeDeHumedad) => {
    if (porcentajeDeHumedad < 30) {
        return "seco";
    } else if (porcentajeDeHumedad <= 60) {
        return "normal";
    } else {
        return "humedo";
    }
}

/* Una función que reciba 2 parámetros: 
   - clasificación de la temperatura ("frio", "templado", "calido") 
   - clasificación de la humedad ("seco", "normal", "humedo") 
   Devuelve la probabilidad de lluvia: "alta", "media", "baja"
*/
const probabilidadLluvia = (temperatura, humedad) => {
    if (temperatura === "frio" && humedad === "humedo") {
        return "alta";
    } else if (temperatura === "templado" && humedad === "humedo") {
        return "alta";
    } else if (temperatura === "calido" && humedad === "humedo") {
        return "media";
    } else {
        return "baja";
    }
}
{ 
console.log(calcularLaTemperatura(10));
console.log(calcularLaTemperatura(24));  
console.log(calcularLaTemperatura(28));  

console.log(calcularHumedad(20)); 
console.log(calcularHumedad(45));  
console.log(calcularHumedad(75));  

console.log(probabilidadLluvia("frio", "humedo"));      
console.log(probabilidadLluvia("templado", "humedo"));  
console.log(probabilidadLluvia("calido", "humedo"));  
console.log(probabilidadLluvia("calido", "seco"));     
console.log(probabilidadLluvia("templado", "normal"));  

console.log("running");
}

