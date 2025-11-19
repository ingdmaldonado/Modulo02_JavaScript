export const calcularImporteAgua = (m3) => {
const precio1 = 350.0; 
const precio2 = 555.20; 
const precio3 = 1552.20; 
const consumo = Math.max(m3, 50); 
let importe = 0;
const primerBloque = Math.min(consumo, 50);
importe += primerBloque * precio1;
if (consumo > 50) {
const segundoBloque = Math.min(consumo - 50, 20);
importe += segundoBloque * precio2;
}
if (consumo > 70) importe += (consumo - 70) * precio3;
return Number(importe.valueOf());
};