// Controlador: orquesta los eventos de la vista con la lógica del modelo.
import {
  getCountriesByRegion,
  getSimplifiedCountry,
  filterOver20Million,
  filterSmallOrMedium,
} from "./Modelo.js";
import { renderCountriesTable, renderStatus, renderStats } from "./Funciones.js";

const regionSelect = document.querySelector("#region-select");
const fetchButton = document.querySelector("#fetch-button");

const saveLocalStorage = (key, value) => {
  if (!window.localStorage) return;
  localStorage.setItem(key, JSON.stringify(value));
};

// Ejemplos de destructuring con los datos devueltos por la API.
// Esto corresponde al Punto 2 de la consigna.
const showDestructuringExamples = (countries) => {
  console.log("PUNTO 2: Ejemplo A - destructuring dentro de forEach");
  countries.forEach((country) => {
    const {
      name: { common },
      capital = [],
      population,
      flags: { png } = {},
    } = country;

    const [firstCapital = "Sin capital"] = capital;
    console.log(`${common} | ${firstCapital} | ${population} | ${png}`);
  });

  console.log("PUNTO 2: Ejemplo B - alias en destructuring");
  countries.forEach((country) => {
    const {
      name: { common: nombre },
      capital: [capital = "Sin capital"] = [],
      population: habitantes,
      flags: { png: bandera } = {},
    } = country;

    console.log(`${nombre} | ${capital} | ${habitantes} | ${bandera}`);
  });

  console.log("PUNTO 2: Ejemplo C - destructuring en parámetros");
  countries.forEach(({ name: { common }, capital: [capital = "Sin capital"] = [], population, flags: { png } = {} }) => {
    console.log(`${common} | ${capital} | ${population} | ${png}`);
  });

  console.log("PUNTO 2: Ejemplo D - destructuring de arrays con valor por defecto");
  countries.forEach(({ name: { common }, capital: [capital = "Sin capital"] = [], population, flags: { png } = {} }) => {
    console.log(`${common} | ${capital} | ${population} | ${png}`);
  });
};

const handleFetchClick = async () => {
  if (!regionSelect) {
    renderStatus("No se encontró el selector de regiones.", "error");
    return;
  }

  const region = regionSelect.value;
  renderStatus(`Recuperando datos de ${region}...`, "info");

  try {
    const countries = await getCountriesByRegion(region);
    showDestructuringExamples(countries);

    const simplifiedCountries = countries.map((country) => getSimplifiedCountry(country));
    saveLocalStorage("paisesSimplificados", simplifiedCountries);

    const over20 = filterOver20Million(simplifiedCountries);
    const smallMedium = filterSmallOrMedium(simplifiedCountries);

    saveLocalStorage("paisesMas20Millones", over20);
    saveLocalStorage("paises0a5o30a60Millones", smallMedium);

    renderCountriesTable(simplifiedCountries);
    renderStats({
      total: simplifiedCountries.length,
      over20: over20.length,
      smallMedium: smallMedium.length,
      region,
    });

    renderStatus(`Se recuperaron ${simplifiedCountries.length} países de ${region}.`, "success");
  } catch (error) {
    console.error(error);
    const message = error?.message || "Error desconocido al procesar la solicitud.";
    renderStatus(message, "error");
  }
};

if (fetchButton) {
  fetchButton.addEventListener("click", handleFetchClick);
}
