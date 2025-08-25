
// ejemplo05_LocalStorage.js
window.addEventListener("load", () => {

  /*
    ==========================================
    1) Guardar y recuperar un dato ENTERO
    ==========================================
  */
  localStorage.setItem("numeroEntero", 123);
  const enteroRecuperado = localStorage.getItem("numeroEntero");
  console.log("Entero guardado:", enteroRecuperado, "tipo:", typeof enteroRecuperado);
  // IMPORTANTE: localStorage siempre guarda como string.


  /*
    ==========================================
    2) Guardar y recuperar un STRING
    ==========================================
  */
  localStorage.setItem("miTexto", "Hola Mundo");
  const textoRecuperado = localStorage.getItem("miTexto");
  console.log("String guardado:", textoRecuperado);


  /*
    ==========================================
    3) Guardar y recuperar un OBJETO
    ==========================================
  */
  const persona = { id: 1, nombre: "Ana", activo: true };
  localStorage.setItem("persona", JSON.stringify(persona));
  const personaRecuperada = JSON.parse(localStorage.getItem("persona"));
  console.log("Objeto recuperado:", personaRecuperada);


  /*
    ==========================================
    4) Guardar y recuperar un VECTOR simple
    ==========================================
  */
  const colores = ["Rojo", "Verde", "Azul"];
  localStorage.setItem("colores", JSON.stringify(colores));
  const coloresRecuperados = JSON.parse(localStorage.getItem("colores"));
  console.log("Vector recuperado:", coloresRecuperados);


  /*
    ==========================================
    5) Guardar y recuperar un OBJETO COMPLEJO
       (Objeto que dentro tiene atributos, 
        y uno de esos atributos es un vector)
    ==========================================
  */
  const cliente = {
    id: 10,
    nombre: "Carlos",
    domicilio: "Av. Siempre Viva 123",
    compras: [
      { id: 1, producto: "Notebook", precio: 1500 },
      { id: 2, producto: "Mouse", precio: 100 }
    ]
  };

  localStorage.setItem("cliente", JSON.stringify(cliente));
  const clienteRecuperado = JSON.parse(localStorage.getItem("cliente"));
  console.log("Objeto complejo recuperado:", clienteRecuperado);

});
