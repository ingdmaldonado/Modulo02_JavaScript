// Modelo: carga de datos locales desde countries.json
export const requestApi = async (url) => {
  const response = await fetch("./countries.json");

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} - ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};

export const getCountriesByRegion = async (region) => {
  const countries = await requestApi("./countries.json");
  return countries.filter((country) => String(country.region).toLowerCase() === region.toLowerCase());
};

export const getSimplifiedCountry = (country) => {
  const {
    name: { common } = {},
    capital = [],
    population = 0,
    flags: { png: flag } = {},
    region = "",
    cca3 = "",
  } = country;

  const firstCapital = capital[0] ?? "Sin capital";

  return {
    name: common || "Sin nombre",
    capital: firstCapital,
    population,
    flag,
    region,
    domain: "",
    code: cca3,
  };
};

export const filterOver20Million = (countries) =>
  countries.filter(({ population }) => population > 20000000);

export const filterSmallOrMedium = (countries) =>
  countries.filter(
    ({ population }) => population <= 5000000 || (population > 30000000 && population < 60000000)
  );
