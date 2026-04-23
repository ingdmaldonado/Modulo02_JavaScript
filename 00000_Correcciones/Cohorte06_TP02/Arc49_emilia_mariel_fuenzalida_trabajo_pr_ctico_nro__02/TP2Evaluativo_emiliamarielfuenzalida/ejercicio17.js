/*

-------Ejercicio Nro. 17--------

Una Frigorífico posee una cinta transportadora y clasificadora
de huevos para consumo humano. La cinta 
no tan solo los transporta sino también 
los clasifica según su peso. es decir, 
al final de la cinta existe una balanza 
electrónica de alta precisión 
que evalúa su peso y los clasifica. 

a) XL, súper grandes: peso ≥ 73 gramos.  
b) L, grandes: peso ≥ 63 gramos y < 73 gramos.  
c) M, medianos: peso ≥ 53 gramos y < 63 gramos. 

Nota: considere como descartados aquellos 
que no estén dentro del rango de valores aceptables. 
Determinar lo siguiente: 

1) Cantidad total de Huevos (Todas las categorías) 
2) Cantidad total de Huevos XL 
3) Cantidad total de Huevos L 
4) Cantidad total de Huevos M 
5) Cantidad total de Huevos descartados 
6) Determinar el % de Huevos XL sobre el Total 
7) Determinar el % de Huevos L sobre el Total 
8) Determinar el % de Huevos M sobre el Total

*/
{
    let pesoDeHuevo = 0;

    let cantidadM = 0;
    let cantidadL = 0;
    let cantidadXL = 0;
    let cantidadDescartes = 0;

    let seguir = `s`;

    while ((seguir === `S`) || (seguir === `s`)) {

        pesoDeHuevo = Number(prompt(`Ingrese Peso(gr) de los huevos:`));
        
        if (pesoDeHuevo >= 73) {
            cantidadXL++;
        }
        else if (pesoDeHuevo >= 63 && pesoDeHuevo < 73) {
            cantidadL++;
        }
        else if (pesoDeHuevo >= 53 && pesoDeHuevo < 63) {
            cantidadM++;
        }
        else {
            cantidadDescartes++;
        }

        seguir = prompt(`Quiere seguir agregando huevos? (S/N)`);
    }


    let cantidadTotalHuevos = cantidadM + cantidadL + cantidadXL + cantidadDescartes;

    console.log(`Cantidad total`, cantidadTotalHuevos);

    let porcentajeM = cantidadTotalHuevos - (cantidadL + cantidadXL + cantidadDescartes);
    let porcentajeL = cantidadTotalHuevos - (cantidadM + cantidadXL + cantidadDescartes);
    let porcentajeXL = cantidadTotalHuevos - (cantidadM + cantidadL + cantidadDescartes);
    let porcentajeDescartes = cantidadTotalHuevos - (cantidadL + cantidadXL + cantidadM);

    console.log(`Huevos M ${porcentajeM}% de ${cantidadTotalHuevos}`);
    console.log(`Huevos L ${porcentajeL}% de ${cantidadTotalHuevos}`);
    console.log(`Huevos XL ${porcentajeXL}% de ${cantidadTotalHuevos}`);
    console.log(`Huevos Descartados ${porcentajeDescartes}% de ${cantidadTotalHuevos}`);



}