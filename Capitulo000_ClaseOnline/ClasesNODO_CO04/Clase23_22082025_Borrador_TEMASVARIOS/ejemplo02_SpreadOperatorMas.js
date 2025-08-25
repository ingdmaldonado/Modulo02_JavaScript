
// ejemplo02_SpreadOperatorMas.js
window.addEventListener("load", () => {

  /* 
    Objetivo: fusionar datos de dos vectores por CUIT
    Herramientas: map (recorrer), find (buscar coincidencia), spread (...) (unir objetos)
  */

  const clientes = [
    { id: 1, cuit: "20-12345678-9", nombreCompleto: "Juan Pérez", domicilio: "Av. Siempre Viva 123" },
    { id: 2, cuit: "27-87654321-0", nombreCompleto: "María Gómez", domicilio: "Calle Falsa 456" },
    { id: 3, cuit: "23-11223344-5", nombreCompleto: "Pedro Martínez", domicilio: "Ruta 34 Km 5" }
  ];

  const contactos = [
    { cuit: "20-12345678-9", telefono: "3834-111111", email: "juanperez@mail.com" },
    { cuit: "27-87654321-0", telefono: "3834-222222", email: "mariagomez@mail.com" }
  ];

  const clientesCompletos = clientes.map((cliente) => {
    const contacto = contactos.find((c) => c.cuit === cliente.cuit);
    return contacto ? { ...cliente, ...contacto } : { ...cliente };
  });

  console.log("Clientes fusionados:", clientesCompletos);
});

