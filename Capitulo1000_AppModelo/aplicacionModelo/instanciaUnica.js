// instanciaUnica.js
export function inicializarInstanciaUnica(nombrePantalla) 
{
  // genero un id unico e irrepetible usando la biblioteca crypto //
  const instanciaId = crypto.randomUUID(); 
  
  // genero un id unico e irrepetible
  const claveStorage = `instanciaActiva_${nombrePantalla}`; // guardo esa pantalla combinada con el id

  console.log(instanciaId,claveStorage);



  localStorage.setItem(claveStorage, instanciaId);

  window.addEventListener("storage", (e) => {
    if (e.key === claveStorage && e.newValue !== instanciaId) {
      document.body.innerHTML = `
        <div style="text-align:center; padding:2rem;">
          <h1>⚠️ Pantalla Duplicada</h1>
          <p>Otra pestaña está usando esta pantalla actualmente.</p>
        </div>
      `;
      window.stop?.();
    }
  });

  window.addEventListener("beforeunload", () => {
    if (localStorage.getItem(claveStorage) === instanciaId) {
      localStorage.removeItem(claveStorage);
    }
  });
}
