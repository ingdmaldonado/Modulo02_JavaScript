
/*
    Dado un vector que contiene datos de clientes 
    de una empresa de servicios, cuyos atributos son dni, 
    apellido, nombre, codigo postal. y otro vector donde están
    todas las localidades con su nombre y cuyos atributos 
    son codigo postal y nombre de la localidad.
	Recorra el vector de clientes (usando forEach) y 
    para cada cliente, busque el nombre de la localidad usando el método find() sobre el vector de localidades.
	La idea es mostrar todos los datos de los clientes,
    incluyendo el código de la localidad y el nombre de la 
    localidad donde vive.

*/
const clientes = [
  { dni: "20456789", apellido: "Gómez", nombre: "Mariana", codigoPostal: "4700" },
  { dni: "30123456", apellido: "Pérez", nombre: "Carlos", codigoPostal: "4706" },
  { dni: "28456789", apellido: "López", nombre: "Andrea", codigoPostal: "4716" },
  { dni: "26543210", apellido: "Sosa", nombre: "Lucía", codigoPostal: "4700" },
  { dni: "33221100", apellido: "Rodríguez", nombre: "Tomás", codigoPostal: "4724" },
  { dni: "29887766", apellido: "Martínez", nombre: "Pedro", codigoPostal: "4716" }
];

const localidades = [
  { codigoPostal: "4700", nombreLocalidad: "San Fernando del Valle de Catamarca" },
  { codigoPostal: "4706", nombreLocalidad: "Valle Viejo" },
  { codigoPostal: "4716", nombreLocalidad: "Fray Mamerto Esquiú" },
  { codigoPostal: "4724", nombreLocalidad: "La Merced" },
  { codigoPostal: "4730", nombreLocalidad: "El Rodeo" }
];

window.addEventListener("load",()=>
    {
        

    })