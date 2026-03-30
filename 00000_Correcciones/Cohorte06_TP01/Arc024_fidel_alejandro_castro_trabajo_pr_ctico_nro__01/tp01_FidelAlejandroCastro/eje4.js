{
    let numeroIngresado = Number(prompt("Ingrese un número cualquiera: "));

    if (numeroIngresado >= 0){
        console.log(`El número ${numeroIngresado} es positivo`);
    }else{
        console.log(`El número ${numeroIngresado} es negativo`);
    }

    //Operador ternario
    numeroIngresado >= 0 ? console.log(`El número ${numeroIngresado} es positivo`) : console.log(`El número ${numeroIngresado} es negativo`);

}