export const tieneTresEspacios = (cadena) => {
let espacios = 0;
for (let i = 0; i < cadena.length; i++) {
if (cadena[i] === ' ') {
espacios++;
if (espacios === 3) return true;
}
}
return false;
};