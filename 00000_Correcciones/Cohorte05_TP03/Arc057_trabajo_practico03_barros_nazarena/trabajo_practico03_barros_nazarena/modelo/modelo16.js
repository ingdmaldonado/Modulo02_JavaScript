/*Ejercicio Nro. 16:
El Gobierno Nacional desea aplicar un impuesto (Sobre Tasa) a las bebidas en función de la siguiente
clasificación y tipo.
1 – Bebidas Agua en envases plásticos = 5 ‰ (cinco por mil)
2 – Bebidas Agua en envases retornables = 1 ‰ (uno por mil)
3 – Bebidas Gaseosas Azucaradas en envases plásticos = 7 ‰ (siete por mil)
4 – Bebidas Gaseosas Azucaradas en envases retornables = 2 ‰ (dos por mil)
5 – Bebidas Energéticas = 15 ‰ (quince por mil)
6 – Cualquier otra bebida no clasificada = 1 ‰ (uno por mil).
La función debe recibir el Importe Base de la Bebida, debe calcular y retornar la sobre Tasa, la
recaudación de ese impuesto tendrá destino a la protección del medio ambiente.
Nota: Debe devolver un número.*/

//calcular la sobre tasa según el tipo de bebida
const calcularSobreTasa = (importeBase, tipo) => {
    let tasa = 0;

    if (tipo === 1) tasa = 5;        // Agua plástico
    else if (tipo === 2) tasa = 1;   // Agua retornable
    else if (tipo === 3) tasa = 7;   // Gaseosa azúcar plástico
    else if (tipo === 4) tasa = 2;   // Gaseosa azúcar retornable
    else if (tipo === 5) tasa = 15;  // Energéticas
    else tasa = 1;                   // Cualquier otra

    // cálculo: (tasa por mil) → tasa / 1000
    return importeBase * (tasa / 1000);
};