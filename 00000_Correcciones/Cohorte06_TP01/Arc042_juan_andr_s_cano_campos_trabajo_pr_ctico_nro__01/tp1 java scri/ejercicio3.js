{
//Ejercicio 3 

let luz = 0
 luz = Number(prompt("Ingrese total pagado por luz eléctrica"));
let internet = 0
 internet = Number(prompt("Ingrese total pagado por comunicación (internet)"));
let agua = 0
 agua = Number(prompt("Ingrese total pagado por agua potable"));

 luzMas = (luz*12.5)/100;
 internetMas = (internet*7)/100;
 aguaMas = (agua*3)/100;

 importeLuz = luz + luzMas;

 importeInternet = internet + internetMas;

 importeAgua = agua + aguaMas;
 
importeTotal = importeAgua + importeInternet + importeLuz;

console.log(`el importe de la luz es:${luz} el aumento a futuro es${luzMas} lo total a pagar de luz es ${importeLuz} el importe del internet es ${internet} el aumento es ${internetMas} el total a pagar del internet es ${importeInternet} el importe del agua es ${agua} el aumento del agua es ${aguaMas} lo total a pagar del agua es ${importeAgua} lo total a pagar es ${importeTotal}`)

    
}