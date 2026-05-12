import React, { useState, useEffect } from 'react';
import { getAllCountries } from '../services/covidService';
import styles from './Select.module.scss';

const Select = ({ onCountryChange }) => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await getAllCountries();
      // Ordenamos alfabéticamente para mejor UX
      const sorted = data.sort((a, b) => a.country.localeCompare(b.country));
      setCountries(sorted);
    };
    fetchCountries();
  }, []);

  // Filtrado dinámico para cumplir con "búsquedas por palabras clave"
  const filteredCountries = countries.filter(c => 
    c.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.selectContainer}>
      <input
        type="text"
        placeholder="Buscar país..."
        className={styles.searchInput}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsOpen(true)}
      />
      
      {isOpen && (
        <ul className={styles.dropdown}>
          {filteredCountries.map((c) => (
            <li 
              key={c.countryInfo.iso3 || c.country} 
              className={styles.option}
              onClick={() => {
                onCountryChange(c.country);
                setSearchTerm(c.country);
                setIsOpen(false);
              }}
            >
              <img src={c.countryInfo.flag} alt="" className={styles.flag} />
              {c.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;