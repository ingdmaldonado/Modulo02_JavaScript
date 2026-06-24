import { useState } from "react";

const categorias = [
  { id: 1, nombre: "Electrónica" },
  { id: 2, nombre: "Hogar" },
  { id: 3, nombre: "Indumentaria" },
  { id: 4, nombre: "Deportes" },
];

const productos = [
  // Electrónica
  { id: 1, nombre: "Notebook", precio: 850000, categoriaId: 1 },
  { id: 2, nombre: "Auriculares", precio: 35000, categoriaId: 1 },
  { id: 3, nombre: "Mouse inalámbrico", precio: 18000, categoriaId: 1 },
  { id: 4, nombre: "Teclado mecánico", precio: 45000, categoriaId: 1 },
  { id: 5, nombre: "Monitor 24''", precio: 210000, categoriaId: 1 },

  // Hogar
  { id: 6, nombre: "Licuadora", precio: 42000, categoriaId: 2 },
  { id: 7, nombre: "Microondas", precio: 95000, categoriaId: 2 },
  { id: 8, nombre: "Pava eléctrica", precio: 22000, categoriaId: 2 },
  { id: 9, nombre: "Aspiradora", precio: 78000, categoriaId: 2 },

  // Indumentaria
  { id: 10, nombre: "Remera básica", precio: 12000, categoriaId: 3 },
  { id: 11, nombre: "Jean clásico", precio: 28000, categoriaId: 3 },
  { id: 12, nombre: "Campera de abrigo", precio: 55000, categoriaId: 3 },

  // Deportes
  { id: 13, nombre: "Pelota de fútbol", precio: 15000, categoriaId: 4 },
  { id: 14, nombre: "Zapatillas running", precio: 65000, categoriaId: 4 },
  { id: 15, nombre: "Mancuernas 5kg", precio: 30000, categoriaId: 4 },
];


const Ejercicio10 = ()=>{

  const [CategoriaId,SetCategoriaId] = useState(0);

  return (<>
    <h1>Ejemplo de dos selectores Combinados</h1>
    <h2>Seleccione el rubro</h2>
    <select onChange={(e)=>{console.log(e.target.value);SetCategoriaId(Number(e.target.value))}}>
      {categorias.map(categoria =>{return <option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>})}
    </select>
    <h2>Seleccione el Producto</h2>
    <select>
      {productos.filter(producto => producto.categoriaId === CategoriaId).map(producto => {return <option key={producto.id}>{producto.nombre}</option>})}      
    </select>
    </>)  
};


export default Ejercicio10;