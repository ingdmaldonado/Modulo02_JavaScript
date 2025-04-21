
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
        // Recorrido con forEach + búsqueda con find
        clientes.forEach(({ dni, apellido, nombre, codigoPostal }) => 
            {

                
        // Buscar la localidad correspondiente
            const localidadEncontrada = localidades.find(loc => loc.codigoPostal === codigoPostal);
  
            // Verificar si se encontró una localidad (por si hay código mal cargado)
            if (localidadEncontrada) 
                {
                    console.log(`Cliente: ${apellido}, ${nombre}`);
                    console.log(`DNI: ${dni}`);
                    console.log(`Código Postal: ${codigoPostal}`);
                    console.log(`Localidad: ${localidadEncontrada.nombreLocalidad}`);
                    console.log("────────────────────────────");
                } else 
                {
                    console.log(`Cliente con DNI ${dni} tiene un código postal no registrado (${codigoPostal})`);
                    console.log("────────────────────────────");
                }
            });
    })