

let imp = parseFloat(prompt("Ingrese importe de compra"));
let zona;
let env = 0;

// validar zona
while (zona !== "centro" &&
       zona !== "oeste" &&
       zona !== "norte" &&
       zona !== "sur" &&
       zona !== "este") {

    zona = prompt("Ingrese zona");
}

// switch
switch (zona) {

    case "centro":
        env = 2500;
        break;

    case "oeste":
        env = 3750;
        break;

    case "norte":
        env = 4225;
        break;

    case "sur":
        env = 5222.50;
        break;

    case "este":
        env = 4288.50;
        break;
}

let total = imp + env;

alert("Importe compra: $" + imp);
alert("Envio: $" + env);
alert("Total final: $" + total);

