import React from 'react'
import './Select-countries.css'

const SelectCountries = ({countries, selectedCountry,onChangeCountry})=> {
    return(
        <select 
        value={selectedCountry}
        onChange={(e)=> onChangeCountry(e.target.value)}
        >

        
        <option value= "">Seleccione Pais</option>

        {countries.map((country) => (
            <option key={country} 
            value={country}>
                {country}
            </option>
        ))}
        </select>
    )
} 
export default SelectCountries