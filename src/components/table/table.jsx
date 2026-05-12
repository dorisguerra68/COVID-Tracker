//import React from 'react';
import './table.css';
import { useState, useEffect } from 'react';

export const Table = () => {
    {/* añadimos API para mostrar datos en la tabla */}
    let api_url= "https://disease.sh/v3/covid-19/countries";
    //Hook para almacenar los datos de la API
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true); // Es
    console.log(countries);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Número de filas por página

    useEffect(() => {
        const api = async () => {
            try {
                const fetchResult = await fetch(api_url);
                const covid_data = await fetchResult.json();
                setCountries(covid_data);
            } catch (error) {"Errror cargado datos:", error

            }
            finally {
                setLoading(false);
            }
        }
        api();
    }, []);
// mientras se cargan los datos
    if (loading) {
        return <p>Cargando datos...</p>;
    }

    // calcular índices para paginación y segmentar la array.
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCountries = countries.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(countries.length / itemsPerPage);


    return (
    
    <div className="table-container">
        <h3>Ajax Data Table - covid-19 Country Wise State</h3>
        <hr />
        <table className="covid-table">
        <thead>
            <tr>
            <th>Flag</th>
            <th>Country</th>
            <th>Cases</th>
            <th>New Cases</th>
            <th>Deaths</th> 
            <th>New Deaths</th>
            <th>Recovered</th>
            <th>Active</th>
            <th>Critical</th>
            <th>Tested</th>
            </tr>
        </thead>
         {/* Aquí se mapearían o consumo de los datos de la API para crear filas dinámicamente */}
    <tbody>
        {countries && countries.map((country) => (
            <tr key={country.countryInfo?._id || country.country}>
        
        <td><img src={country.countryInfo.flag} alt={country.country} style={{ width: "30px" }} />
        </td>
        <td>{country.country}</td>
        <td>{country.cases.toLocaleString()}</td>
        <td>{country.todayCases.toLocaleString()}</td>
        <td>{country.deaths.toLocaleString()}</td>
        <td>{country.todayDeaths.toLocaleString()}</td>
        <td>{country.recovered.toLocaleString()}</td>
        <td>{country.active.toLocaleString()}</td>
        <td>{country.critical.toLocaleString()}</td>
        <td>{country.tests.toLocaleString()}</td>
        </tr>
        ))}  

    </tbody>
    
    <tfoot>
        <tr>
            <td colSpan={5}>
            Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, countries.length)} of {countries.length}
            </td>
            <td colSpan={5} style={{ textAlign: "right" }}>
            {/* NUEVO: Botones de navegación interactivos */}
                <div style={{ display: 'inline-flex', gap: '8px', alignItems: 'center' }}>
                    <button 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        style={{ padding: '2px 8px', cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}>
                            Anterior
                    </button>
                    <span>Página {currentPage} de {totalPages}</span>
                    <button 
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            style={{ padding: '2px 8px', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}>
                            Siguiente
                    </button>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};
