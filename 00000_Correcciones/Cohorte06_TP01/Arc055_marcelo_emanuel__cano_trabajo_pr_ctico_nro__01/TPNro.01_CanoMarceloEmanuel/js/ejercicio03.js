{
    let pagarLuz = 0;
    let pagarAgua = 0;
    let pagarInternet = 0;

    let apagarLuz = 0;
    let apagarAgua = 0;
    let apagarInternet = 0;

    pagarLuz = Number(prompt("Ingrese lo que tiene quw pagar de luz: "));
    pagarInternet = Number(prompt("Ingrese lo que tiene que pagar de internet: "));
    pagarAgua = Number(prompt("Ingrese lo que tiene que pagar  de agua: "));    

    apagarLuz = pagarLuz + ( pagarLuz * 0.125);
    apagarInternet = pagarInternet + (pagarInternet * 0.07);
    apagarAgua = pagarAgua + (pagarAgua * 0.03);
    
    console.log("El total a pagar de luz es: " + apagarLuz);
    console.log("El total a pagar de internet es: " + apagarInternet);
    console.log("El total a pagar de agua es: " + apagarAgua);
}
