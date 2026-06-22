// Vista: se encarga de renderizar datos en el DOM y mostrar mensajes.
export const renderCountriesTable = (countries) => {
  const tbody = document.querySelector("#countries-tbody");

  if (!tbody) {
    return;
  }

  tbody.innerHTML = countries
    .map(
      ({ name, capital, population, flag, region, domain }) => `
        <tr>
          <td>
            <img class="flag-image" src="${flag}" alt="Bandera de ${name}" />
          </td>
          <td>${name}</td>
          <td>${capital}</td>
          <td>${population.toLocaleString()}</td>
          <td>${region}</td>
          <td>${domain}</td>
        </tr>
      `
    )
    .join("");
};

export const renderStatus = (message, type = "info") => {
  const status = document.querySelector("#status");
  if (!status) return;

  status.textContent = message;
  status.className = `status-message ${type}`;
};

export const renderStats = ({ total, over20, smallMedium, region }) => {
  const results = document.querySelector("#filter-results");
  if (!results) return;

  results.innerHTML = `
    <div class="filter-card">
      <strong>Región seleccionada:</strong> ${region}
      <br />
      <strong>Países recuperados:</strong> ${total}
    </div>
    <div class="filter-card">
      <strong>Países con más de 20 millones de habitantes:</strong> ${over20}
    </div>
    <div class="filter-card">
      <strong>Países con población 0-5 millones u 30-60 millones:</strong> ${smallMedium}
    </div>
  `;
};
