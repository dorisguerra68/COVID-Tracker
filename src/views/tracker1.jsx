import React, { useState } from 'react'
import './tracker1.css'
import GlobalTotal from '../components/global-total/global-total.jsx'
import SelectCountries from '../components/select-country/Select-countries'
import { dataTotalGlobal } from '../assets/data/data-totalGlobal'
import Img from '../assets/image/mapamundi.png'

export const Tracker1 = () => {
    const [selectedCountry, setSelectedCountry] = useState('')

    const countries = dataTotalGlobal.flatMap((item) => item.countries)

    return (
        <main className="tracker1-container">
            {/* PANEL IZQUIERDO: Resumen rápido y Top 10 */}
            <aside className="sidebar-panel">
                <header className="dashboard-header">
                    <h2>COVID-19 Tracker</h2>
                    <span className="updated-date">Updated: May 15, 2020</span>
                </header>

                <section className="summary-list" aria-label="Resumen rápido">
                    <div className="summary-card card-recovered-top">
                        <span>Recovered Case</span>
                        <strong className="counter-zero">0</strong>
                    </div>
                    <div className="summary-card card-deaths-top">
                        <span>Deaths Case</span>
                        <strong className="counter-zero">5660039</strong>
                    </div>
                </section>

                <section className="topo10">
                    <h3>Top 10 Country</h3>
                    <div className="topo10-list">
                        <div className="topo10-item">
                            <div className="country-info">
                                <img src="flagcdn.com" alt="USA Flag" />
                                <span>USA</span>
                            </div>
                            <strong>75578076</strong>
                        </div>
                        <div className="topo10-item">
                            <div className="country-info">
                                <img src="flagcdn.com" alt="Italy Flag" />
                                <span>Italy</span>
                            </div>
                            <strong>10983116</strong>
                        </div>
                    </div>
                </section>
            </aside>

            {/* PANEL DERECHO: Grid de estadísticas, Mapa y Footer */}
            <article className="stats-detail">

                <div className="main-dashboard-layout">
                    {/* Bloque Izquierdo del Layout Principal: Datos del país */}
                    <section className="detailed-grid-wrapper">
                        <div className="country-selector-wrapper">
                            <SelectCountries
                                countries={countries}
                                selectedCountry={selectedCountry}
                                onChangeCountry={setSelectedCountry}

                                
                            />
                          
                            <span className="global-update-text">Updated: January 31, 2022</span>
                        </div>

                        <div className="detailed-grid">
                            <div className="stat-box text-blue">
                                <span>Total Cases</span>
                                <strong>5871977</strong>
                            </div>
                            <div className="stat-box text-red">
                                <span>Total Deaths</span>
                                <strong>134079</strong>
                            </div>
                            <div className="stat-box text-green">
                                <span>Total Recovered</span>
                                <strong>5645142</strong>
                            </div>
                            <div className="stat-box text-blue-light">
                                <span>Total Active</span>
                                <strong>92756</strong>
                            </div>
                            <div className="stat-box text-orange">
                                <span>New Cases</span>
                                <strong>0</strong>
                            </div>
                            <div className="stat-box text-red-dark">
                                <span>New Deaths</span>
                                <strong>0</strong>
                            </div>
                        </div>
                    </section>

                    {/* Bloque Derecho del Layout Principal: Mapa */}
                    <figure className="map-container">
                        <div className="map-zoom-controls">
                            <button>+</button>
                            <button>-</button>
                        </div>
                        <img src={Img} alt="Distribución geográfica" className="mapamundi" />
                    </figure>
                </div>

                {/* Fila inferior de totales globales */}
                <footer className="tracker1-GlobalTotal">
                   <GlobalTotal selectedCountry={selectedCountry} />
                </footer>
            </article>
        </main>
    );
};
