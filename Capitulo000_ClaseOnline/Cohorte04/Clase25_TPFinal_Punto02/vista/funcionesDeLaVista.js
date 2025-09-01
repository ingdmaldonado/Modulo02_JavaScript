/* FUNCION DE RENDERIZACION 1 */

export const fnRenderizarPaises = (Paises) => {
  const idCuerpoDeTabla = document.getElementById("idCuerpoDeTabla");

  const filasGeneradas = Paises.map((pais) => {
    return `
      <tr>
        <td>${pais.name.common}</td>
        <td>${pais.capital ? pais.capital[0] : "Sin dato"}</td>
        <td>${pais.population}</td>
        <td><img src="${pais.flags.png}" alt="Bandera de ${
      pais.name.common
    }" width="100"></td>
      </tr>
    `;
  });

  idCuerpoDeTabla.innerHTML = filasGeneradas.join("");
};

/* FUNCIÓN DE RENDERIZACION 2 */

export const fnRenderizarPaises2 = (Paises) => {
  const idCuerpoDeTabla = document.getElementById("idCuerpoDeTabla");

  const filasGeneradas = Paises.map((pais) => {
    // Destructuring directo de atributos importantes
    const { name, capital, population, flags } = pais;

    return `
      <tr>
        <td>${name.common}</td>
        <td>${capital ? capital[0] : "Sin dato"}</td>
        <td>${population}</td>
        <td><img src="${flags.png}" alt="Bandera de ${
      name.common
    }" width="100"></td>
      </tr>
    `;
  });

  idCuerpoDeTabla.innerHTML = filasGeneradas.join("");
};

/* FUNCIÓN DE RENDERIZACIÓN 3 */

export const fnRenderizarPaises3 = (Paises) => {
  const idCuerpoDeTabla = document.getElementById("idCuerpoDeTabla");

  const filasGeneradas = Paises.map(
    ({ name, capital = ["Sin dato"], population, flags }) => {
      return `
      <tr>
        <td>${name.common}</td>
        <td>${capital[0]}</td>
        <td>${population}</td>
        <td><img src="${flags.png}" alt="Bandera de ${name.common}" width="100"></td>
      </tr>
    `;
    }
  );

  idCuerpoDeTabla.innerHTML = filasGeneradas.join("");
};
