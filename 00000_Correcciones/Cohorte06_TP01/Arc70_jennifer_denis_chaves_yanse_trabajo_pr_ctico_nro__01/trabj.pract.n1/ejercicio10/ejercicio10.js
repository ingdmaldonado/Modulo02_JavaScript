switch (compra) {

    case "efectivo":
        desc = total * 0.10;
        alert("10% descuento");
        break;

    case "debito":
        desc = total * 0.05;
        alert("5% descuento");
        break;

    case "credito":
        alert("Sin descuento");
        break;

    default:
        alert("Método inválido");}