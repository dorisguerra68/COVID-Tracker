const BASE_URL = 'https://disease.sh/v3/covid-19';

// Función para obtener TODOS los países (para el Select)
export const getAllCountries = async () => {
  try {
    const response = await fetch(`${BASE_URL}/countries`);
    if (!response.ok) throw new Error('Error al conectar con la API');
    return await response.json();
  } catch (error) {
    console.error("Error en getAllCountries:", error);
    return [];
  }
};

// Función para obtener los datos de UN país específico (para tu Total Case)
export const getCountryData = async (countryName) => {
  try {
    const response = await fetch(`${BASE_URL}/countries/${countryName}`);
    if (!response.ok) throw new Error('País no encontrado');
    return await response.json();
  } catch (error) {
    console.error("Error en getCountryData:", error);
    return null;
  }
};
