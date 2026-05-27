let importe = Number(prompt("Ingrese importe de la compra"));
let zona = Number(prompt("Seleccione zona de envío: 1-Centro, 2-Oeste, 3-Norte, 4-Sur, 5-Este"));
const precioZonaCentro = 2500;
const precioZonaOeste = 3750;
const precioZonaNorte = 4225;
const precioZonaSur = 5222.5;
const precioZonaEste = 4288.5;

if (zona > 0 && zona < 6)
{
    //Recordar para no meter la pata otra vez con la asignación
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_operators
    switch (zona) {
        case 1:
            importe += precioZonaCentro;
            break;
        case 2:
            importe += precioZonaOeste;
            break;
        case 3:
            importe += precioZonaNorte;
            break;
        case 4:
            importe += precioZonaSur;
            break;
        case 5:
            importe += precioZonaEste;
            break;
    }
    
    console.log("Importe total:", importe);
}
else
{
    console.log("Ingrese una zona válida")
}