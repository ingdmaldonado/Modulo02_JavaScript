{
    let numeroIngresado = Number(prompt("Ingrese un número cualquiera: "));

    if (numeroIngresado % 2){
        console.log(`El número ${numeroIngresado} es impar`);
    }else{
        console.log(`El número ${numeroIngresado} es par`);
    }
}