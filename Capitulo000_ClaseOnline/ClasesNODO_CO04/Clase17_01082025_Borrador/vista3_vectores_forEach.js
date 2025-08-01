const facturasECSAPEM2024 = [
  95000, 120000, 85000, 110000, 55000, 130000, 475000,
];

window.addEventListener("load", () => {
  console.log("this application is loaded");

  /***********************************************************/
  /* Recorrido de todos los elementos del vector con forEach */
  /***********************************************************/
  console.log("ejemplo 01 -- ejemplo una funcion completa");

  facturasECSAPEM2024.forEach((element, indice) => {
    console.log(`elemento: ${element} posicion:${indice}`);
  });

  console.log("ejemplo 01 -- ejemplo una funcion reducida");
  facturasECSAPEM2024.forEach((element) => console.log(element));

  /***********************************************************/
  /* Recorrido de todos los elementos mostrando las facturas
    que son mayores a 100000 */
  /***********************************************************/
  console.log("ejemplo 02 -- ejemplo una funcion completa");

  facturasECSAPEM2024.forEach((element, indice) => {
    if (element > 100000) {
      console.log(`elemento: ${element} posicion:${indice}`);
    }
  });

  console.log("ejemplo 02 -- ejemplo una funcion reducida");
  facturasECSAPEM2024.forEach((element) =>
    element > 100000 ? console.log(element) : ""
  );

  /******************************************************************/
  /* Ejemplo 03 - Recorrido de todos los elementos mostrando las facturas
    que son mayores a 40000 y menores a 100000 */
  /******************************************************************/

  console.log("ejemplo 03 -- ejemplo una funcion completa ");

  facturasECSAPEM2024.forEach((element, indice) => {
    if (element > 40000 && element < 100000) {
      console.log(`elemento: ${element} posicion:${indice}`);
    }
  });

  console.log("ejemplo 03 -- ejemplo una funcion reducida");

  facturasECSAPEM2024.forEach((element) =>
    element > 40000 && element < 100000 ? console.log(element) : ""
  );
});
