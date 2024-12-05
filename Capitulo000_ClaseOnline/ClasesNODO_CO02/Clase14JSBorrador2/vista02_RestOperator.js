
// Vector con 10 vendedores ordenados por ventas de mayor a menor
const vendedores = [
    { nombre: "Luis", ventas: 500 },
    { nombre: "Ana", ventas: 450 },
    { nombre: "Juan", ventas: 400 },
    { nombre: "María", ventas: 350 },
    { nombre: "Pedro", ventas: 300 },
    { nombre: "Sofía", ventas: 250 },
    { nombre: "Carlos", ventas: 200 },
    { nombre: "Laura", ventas: 150 },
    { nombre: "Marta", ventas: 100 },
    { nombre: "Tomás", ventas: 50 },
  ];
  
  // Usamos destructuring con rest operator para separar a los 3 primeros
  const [primerLugar, segundoLugar, tercerLugar, ...resto] = vendedores;
  
  // Mostramos los ganadores del viaje
  console.log("🎉 Los ganadores del viaje al Caribe son:");
  console.log(`1er lugar: ${primerLugar.nombre} con ${primerLugar.ventas} ventas.`);
  console.log(`2do lugar: ${segundoLugar.nombre} con ${segundoLugar.ventas} ventas.`);
  console.log(`3er lugar: ${tercerLugar.nombre} con ${tercerLugar.ventas} ventas.`);
  
  // Mostramos los vendedores que siguen participando
  console.log("\n💼 Los demás vendedores siguen participando:");
  resto.forEach(vendedor => {
    console.log(`${vendedor.nombre} con ${vendedor.ventas} ventas.`);
  });
  