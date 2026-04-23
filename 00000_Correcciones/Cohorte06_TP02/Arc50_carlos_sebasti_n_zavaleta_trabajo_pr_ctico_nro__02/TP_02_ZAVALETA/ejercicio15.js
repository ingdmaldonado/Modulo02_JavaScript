let cantDesaprobados = 0;
let cantAprobados = 0;
let cantBuenos = 0;
let cantExcelentes = 0;
let cantIncorrectos = 0;

let nota = 0;

let sigue = "S";

while (sigue === "S"){
    nota = Number(prompt(`Ingrese Nota`));
    nota >=0 && nota <= 4 ? cantDesaprobados++ : null
    nota >4 && nota <= 7 ? cantAprobados++ : null
    nota >7 && nota <= 9 ? cantBuenos++ : null
    nota === 10 ? cantExcelentes++ : null    
    nota < 0 || nota > 10 ? cantIncorrectos++ : null

    let estado = confirm("¿Seguir cargando notas?") ? sigue="S" : sigue="N";
    
}

console.log(`Los totales son:
    Desaprobados: ${cantDesaprobados}
    Aprobados: ${cantAprobados}
    Buenos: ${cantBuenos}
    Excelentes: ${cantExcelentes}
    Incorrectos: ${cantIncorrectos}
    
    `)

