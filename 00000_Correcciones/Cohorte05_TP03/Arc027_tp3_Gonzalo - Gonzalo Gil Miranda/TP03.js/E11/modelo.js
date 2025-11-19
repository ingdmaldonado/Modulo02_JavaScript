export const tieneAlMenosDosS = (palabra) => {
let contador = 0;
for (let i = 0; i < palabra.length; i++) {
if (palabra[i].toLowerCase() === 's') {
contador++;
if (contador >= 2) return true;
}
}
return false;
};