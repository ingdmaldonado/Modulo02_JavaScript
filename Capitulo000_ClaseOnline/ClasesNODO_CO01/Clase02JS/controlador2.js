
let capitalAEntregar = 190000;

console.log(capitalAEntregar);

/* calcular el 5% si el importe es mayor a 300.000 */

/* calcular el 10% si el importe es menor a 300.000 */

if(capitalAEntregar > 300000)
{ // es el lado verdadero o cuando la condición se cumple
    console.log("el importe es mayor a 300.000,00");

    let cincoPorCiento = capitalAEntregar * 5 /100;
    console.log("El 5% es igual a ",cincoPorCiento);
}
else
{ // lado false cuando la condición no se cumple
    console.log("el importe es menor a 300.000,00");

    let diezPorCinco = capitalAEntregar * 10/100;

    console.log("El 10% es igual a ",diezPorCinco);
}