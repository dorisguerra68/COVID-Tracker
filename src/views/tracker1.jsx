//import React from 'react'
import './tracker1.css'
import GlobalTotal from '../components/global-total/global-total.jsx'
import Img from '../assets/image/mapamundi.png' 
export const Tracker1 = () => {
    return (
    <>
        
            
        <main className="tracker1-container">
            
            <header className="dashboard-header">
                <h1>COVID-19 Tracker</h1>
                <p>Updated: <time dateTime="2020-05-15">May 15, 2020</time></p>
            </header>

            <div className="dashboard-content">
                
                {/* Lado izquierdo: Resumen y Rankings */}
                <aside className="stats-aside">
                    {/* Aquí podrías llamar a un componente <CountryRank /> */}
                    <section className="summary-list" aria-label="Resumen rápido">
                        {/* Tarjetas de Total, Active, Recovered, Deaths */}
                    </section>
                </aside>

                {/* Zona central y derecha: Detalles y Mapa */}
                <article className="stats-detail">
                    <section className="detailed-grid">
                        {/* Selectores y tarjetas grandes de datos */}
                    </section>

                    <figure className="map-container">
                        <img src={Img} alt="Distribución geográfica de casos de COVID-19" className="mapamundi" />
                    </figure>

                    {/* Fila inferior de totales globales */}
                    <footer className="tracker1-GlobalTotal">
                        <GlobalTotal />
                    </footer>
                </article>

            </div>
        </main>
    </>
    );
};
