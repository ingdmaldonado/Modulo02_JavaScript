function calcular(){

let codigo = Number(document.getElementById("producto").value);
let cantidad = Number(document.getElementById("cantidad").value);

let precio = 0;

if (codigo == 1){

    if (cantidad >= 11){
        precio = 34000;
    }
    else if (cantidad >= 5){
        precio = 36000;
    }
    else{
        precio = 38000;
    }

}

else if (codigo == 2){

    if (cantidad >= 11){
        precio = 27000;
    }
    else if (cantidad >= 5){
        precio = 29000;
    }
    else{
        precio = 31000;
    }

}

else if (codigo == 3){

    if (cantidad >= 11){
        precio = 42000;
    }
    else if (cantidad >= 5){
        precio = 44000;
    }
    else{
        precio = 46000;
    }

}

let total = precio * cantidad;

document.getElementById("resultado").innerHTML =
"Precio por bolsa: $" + precio + "<br>Total a pagar: $" + total;

}
