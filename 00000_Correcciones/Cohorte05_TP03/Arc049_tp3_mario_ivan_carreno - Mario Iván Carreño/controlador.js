import { calcular_Precio_Venta, calcular_Promedio_Notas, condicion_Alumno, calcular_Tasa, calcularImporteAgua, calcular_Tasa_Subsuelo, calcular_Tasa_FiscalizacionENRE, calcular_Dosis_Insulina, cantidad_Vocales, cantidad_Consonantes, contieneSS, espacios_Blanco, contiene_Numero } from "./modelo.js"

/*
EJ 13
let precio_Compra = Number(prompt('INGRESAR EL PRECIO DE COMPRA (COSTO)'));
let margen_Ganancia = Number(prompt('INGRESAR EL MARGEN DE GANANCIA (%)'));

console.log(`PRECIO DE COMPRA: ${precio_Compra} - MARGEN DE GANANCIA ${margen_Ganancia}
    EL PRECIO DE VENTA ES: ${calcular_Precio_Venta(precio_Compra,margen_Ganancia)}`);
*/

/*
EJ 14
let nota1 = Number(prompt('INGRESAR LA NOTA 1'));
let nota2 = Number(prompt('INGRESAR LA NOTA 2'));
let nota3 = Number(prompt('INGRESAR LA NOTA 3'));

console.log(`EL PROMEDIO DE LAS 3 NOTAS ES: ${calcular_Promedio_Notas(nota1,nota2,nota3)}`);
*/

/*
EJ 15
let nota_Promedio = Number(prompt("INGRESAR LA NOTA PROMEDIO DEL ALUMNO"));
console.log(`SEGUN LA NOTA ${nota_Promedio} LA CONDICION DEL ALUMNO ES: ${condicion_Alumno(nota_Promedio)}`);
*/

/*
EJ 16
const tipo_Bebida = Number(prompt(`INGRESAR EL TIPO DE BEBIDA
    1 – Bebidas Agua en envases plásticos
    2 – Bebidas Agua en envases retornables
    3 – Bebidas Gaseosas Azucaradas en envases plásticos
    4 – Bebidas Gaseosas Azucaradas en envases retornables
    5 – Bebidas Energéticas
    6 – Cualquier otra bebida no clasificada`)
)

const importe_Base = Number(prompt("INGRESAR EL IMPORTE"))

console.log(`LA TASA ES: ${calcular_Tasa(tipo_Bebida,importe_Base)}`)
*/

/*
EJ 17
const m3_consumidos = Number(prompt("INGRESAR LOS METROS CUBICOS CONSUMIDOS"));
console.log(`EL IMPORTE DE LA FACTURA DEL SERVICIO PUBLICO DE AGUA POSTABLE ES: ${calcularImporteAgua(m3_consumidos)}`)
*/

/*
EJ 18
const importe_Factura_Agua = Number(prompt("INGRESAR EL IMPORTE DE LA FACTURA DEL SERVICIO PUBLICO DE AGUA"));
console.log(`EL IMPORTE DE LA TASA DE SUBSUELO ES: ${calcular_Tasa_Subsuelo(importe_Factura_Agua)}`);
*/

/*
EJ 19
const importe_Factura_Agua = Number(prompt("INGRESAR EL IMPORTE DE LA FACTURA DEL SERVICIO PUBLICO DE AGUA"));
console.log(`EL IMPORTE DE LA TASA DE FISCALIZACION ENRE ES: ${calcular_Tasa_FiscalizacionENRE(importe_Factura_Agua)}`);
*/

/*
EJ 20
const nivel_Glucosa_Sangre = Number(prompt("INGRESAR EL NIVEL DE GLUCOSA EN SANGRE"));
const peso_Corporal = Number(prompt("INGRESAR EL PESO CORPORAL"));
const tipo_Diabetes = Number(prompt(`INGRESAR EL TIPO DE DIABETES
    1- TIPO 1
    2- TIPO 2`
))

console.log(`LA DOSIS DE INSULINA RECOMENDADA PARA EL PACIENTE ES:${calcular_Dosis_Insulina(nivel_Glucosa_Sangre, peso_Corporal, tipo_Diabetes)}`);
*/

/*
EJ 21
const texto = prompt("INGRESAR UN TEXTO (CADENA DE CARACTERES)");
console.log(`LA CANTIDAD DE VOCALES EN EL TEXTO INGRESADO ES:${cantidad_Vocales(texto)}`);
*/

/*
EJ22
const texto = prompt("INGRESAR UN TEXTO (CADENA DE CARACTERES)");
console.log(`LA CANTIDAD DE CONSONANTES EN EL TEXTO INGRESADO ES:${cantidad_Consonantes(texto)}`);
*/

/*
EJ 23
const palabra = prompt("INGRESAR UNA PALABRA");
console.log(`LA PALABRA CONTIENE LA MENOS 2 LETRAS S:${contieneSS(palabra)}`);
*/

/*
EJ 24
const texto = prompt("INGRESAR UN TEXTO");
console.log(`EL TEXTO TIENE ${espacios_Blanco(texto)} ESPACIOS EN BLANCO`);
*/

/*
EJ 25
const texto = prompt("INGRESAR UN TEXTO");
console.log(`EL TEXTO CONTIENE CARACTERES (DIGITOS) NUMERICOS: ${contiene_Numero(texto)}`);
*/