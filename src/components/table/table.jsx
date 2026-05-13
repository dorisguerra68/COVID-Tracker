//import React from 'react';
import './table.css';
import { useState, useEffect } from 'react';

export const Table = () => {
    let api_url = "https://disease.sh/v3/covid-19/countries";
    
    // Hooks de datos
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    // Hooks de paginación
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; 

    useEffect(() => {
        const api = async () => {
            try {
                const fetchResult = await fetch(api_url);
                const covid_data = await fetchResult.json();
                setCountries(covid_data);
            } catch (error) {
                console.error("Error cargando datos:", error); // Corregido: sintaxis de consola
            } finally {
                setLoading(false);
            }
        }
        api();
    }, []);

    // Mientras se cargan los datos
    if (loading) {
        return <p>Cargando datos...</p>;
    }

    // LÓGICA DE PAGINACIÓN (Sencilla para Junior)
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    
    // Cortamos el array original para mostrar solo los 10 de la página actual
    const currentCountries = countries.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(countries.length / itemsPerPage);

    // Funciones para los botones
    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

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
                <tbody>
                    {/* CAMBIO: Ahora mapeamos 'currentCountries' en lugar de 'countries' */}
                    {currentCountries && currentCountries.map((country) => (
                        <tr key={country.countryInfo?._id || country.country}>
                            <td>
                                <img src={country.countryInfo?.flag} alt={country.country} style={{ width: "30px" }} />
                            </td>
                            <td>{country.country}</td>
                            <td>{country.cases?.toLocaleString()}</td>
                            <td>{country.todayCases?.toLocaleString()}</td>
                            <td>{country.deaths?.toLocaleString()}</td>
                            <td>{country.todayDeaths?.toLocaleString()}</td>
                            <td>{country.recovered?.toLocaleString()}</td>
                            <td>{country.active?.toLocaleString()}</td>
                            <td>{country.critical?.toLocaleString()}</td>
                            <td>{country.tests?.toLocaleString()}</td>
                        </tr>
                    ))}  
                </tbody>
                <tfoot>
                    <tr>
                        {/* Se muestran las estadísticas dinámicas usando tus variables */}
                        <td colSpan={5}>
                            Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, countries.length)} of {countries.length} entries
                        </td>
                        {/* Renderizado de los botones de control dentro del tfoot */}
                        <td colSpan={5} style={{ textAlign: "right" }}>
                            <button 
                                onClick={prevPage} 
                                disabled={currentPage === 1}
                                style={{ marginRight: '5px' }}
                            >
                                Anterior
                            </button>
                            <span style={{ margin: '0 10px' }}>
                                {currentPage} / {totalPages}
                            </span>
                            <button 
                                onClick={nextPage} 
                                disabled={currentPage === totalPages}
                            >
                                Siguiente
                            </button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};
