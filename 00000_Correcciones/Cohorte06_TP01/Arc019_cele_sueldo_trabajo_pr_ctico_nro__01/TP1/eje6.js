{

    function calcular(){

let compra = Number(document.getElementById("compra").value);

let descuento = compra * 0.50;

if(descuento > 80000){
descuento = 80000;
}


let total = compra - descuento;

document.getElementById("resultado").innerHTML =
"Compra: $" + compra +
"<br>Descuento aplicado: $" + descuento +
"<br>Total a pagar: $" + total;

}

}