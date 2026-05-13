//import React from 'react';

import { Table } from '../components/table/table.jsx'
import './tracker2.css'

export const Tracker2 = () => {
    return (
        <main className="tracker2-container">
            {/* Barra lateral izquierda */}
            <aside className="stats-aside">
                <header className="tracker2-header">
                    <h2>COVID-19 Tracker</h2>
                </header>

                {/* Bloque de Tarjetas de Resumen */}
                <section className="summary-list" aria-label="Resumen rápido">
                    <div className="summary-card card-total">
                        <span>Total Case</span>
                        <strong className="counter-zero">0</strong>
                    </div>
                    <div className="summary-card card-active">
                        <span>Active Case</span>
                        <strong className="counter-zero">0</strong>
                    </div>
                    <div className="summary-card card-recovered">
                        <span>Recovered Case</span>
                        <strong className="counter-zero">0</strong>
                    </div>
                    <div className="summary-card card-deaths">
                        <span>Deaths Case</span>
                        <strong className="counter-zero">0</strong>
                    </div>
                </section>
                
                {/* Bloque Top 10 */}
                <section className="topo10" aria-label="Top 10 países con más casos">
                    <h3>Top 10 Country</h3>
                    <div className="topo10-list">
                        {/* Aquí harás el .map() de tus datos. Ejemplo estático: */}
                        <div className="topo10-item">
                            <span className="country-info">🇺🇸 USA</span>
                            <span className="dot">•</span>
                        </div>
                        <div className="topo10-item">
                            <span className="country-info">🇮🇹 Italy</span>
                            <span className="dot">•</span>
                        </div>
                    </div>
                </section>
            </aside>

            {/* Contenedor derecho para la Tabla */}
            <div className="tracker2-table-wrapper">
                <Table />
            </div>
        </main>
    )
}
