
let cantidadDesaprobados = 0;
let cantidadAprobados = 0;
let cantidadMuyBuenos = 0;
let cantidadExcelentes = 0;
let vecesEquivocados = 0;

let continuar = true;

while (continuar) {
    let entrada = prompt('Ingrese la nota del trabajo final (0-10 o S para finalizar):');
    if (entrada === 'S' || entrada === 's') 
        {
        continuar = false;
        } 
    else 
    {
        let nota = Number(entrada);
        if (nota < 0 || nota > 10) 
            {
            vecesEquivocados = vecesEquivocados + 1;
            console.log('Nota incorrecta. Por favor ingrese una nota entre 0 y 10.');
            } 
        else 
            if (nota >= 0 && nota <= 4) 
            {
            cantidadDesaprobados = cantidadDesaprobados + 1;
            } 
        else 
            if (nota > 4 && nota <= 7) 
            {
            cantidadAprobados = cantidadAprobados + 1;
            } 
        else 
            if (nota > 7 && nota < 10) 
            {
            cantidadMuyBuenos = cantidadMuyBuenos + 1;
            } 
        else if (nota === 10) 
            {
            cantidadExcelentes = cantidadExcelentes + 1;
            }
    }
}

console.log(`Cantidad de trabajos desaprobados es: ${cantidadDesaprobados}`);
console.log(`Cantidad de trabajos aprobados es: ${cantidadAprobados}`);
console.log(`Cantidad de trabajos muy buenos es: ${cantidadMuyBuenos}`);
console.log(`Cantidad de trabajos excelentes es: ${cantidadExcelentes}`);
console.log(`Cantidad de veces que se ingresaron notas incorrectas es: ${vecesEquivocados}`);

