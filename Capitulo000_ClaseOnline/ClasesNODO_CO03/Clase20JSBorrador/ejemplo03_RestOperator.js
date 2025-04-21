

/*
    Destructuring: es la acción de extraer propiedades 
    de un objeto.

    Rest Operator: se usa dentro del destructuring 
    para capturar el resto de las propiedades 
    que no fueron nombradas explícitamente.
*/

/*************************************************
(1) Uso del operador Rest en objetos
Permite separar una propiedad específica
y agrupar el resto en un nuevo objeto.
*************************************************/

/*
Ejemplo:
Se tiene un objeto de usuario. Extraer la propiedad "email" y agrupar el resto en otro objeto.
*/
const usuario = {
    nombre: "Lucas",
    edad: 30,
    email: "lucas@example.com",
    rol: "admin"
  };
  const { email, ...otrosDatos } = usuario;
  console.log(email);       // "lucas@example.com"
  console.log(otrosDatos);  // { nombre: "Lucas", edad: 30, rol: "admin" }
  
  /*
  Ejercicio:
  Dado el siguiente objeto, extraé la propiedad "puesto" y agrupá el resto en un nuevo objeto llamado "infoPersonal". Mostralos por consola.
  (No mostrar la solución aquí).
  */
  const empleado = {
    nombre: "Marta",
    edad: 45,
    puesto: "Supervisora",
    sector: "Logística",
    activo: true
  };
  
  /***************************************************
  (2) Uso del operador Rest en parámetros de 
  funciones muy útil cuando se necesita capturar 
  un número variable de argumentos como objeto.
  ***************************************************/
  
/*
Ejemplo: creamos una función que recibe un número variable de argumentos 
*/

  const fnObtenerEdadPromedio = (...edades) => {

    let edadTotal = 0;
    edades.forEach(edad => {
        edadTotal = edadTotal 
    })

    return edadTotal / edades.length;   

  }

    console.log(fnObtenerEdadPromedio(20, 30, 40)); // 30
    console.log(fnObtenerEdadPromedio(25, 35, 45, 55)); // 40
    console.log(fnObtenerEdadPromedio(18, 22, 30, 40, 50)); // 32
    
