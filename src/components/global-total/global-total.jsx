import React from 'react'
import TotalCard from './TotalCard'
import './global-total.css'

import {
  dataTotalGlobal,
  cardGlobalConfig
} from '../../assets/data/data-totalGlobal'

const GlobalTotal = ({ selectedCountry }) => {
  const countriesData = dataTotalGlobal.find((item) =>
    item.countries.includes(selectedCountry)
  )

  const cardsGlobal = cardGlobalConfig.map((config) => ({
    label: config.label,
    icon: config.icon,
   value: config.value ?? countriesData?.[config.key] ?? 0
    
  }))

  console.log('selectedCountry:', selectedCountry)
  console.log('countriesData:', countriesData)
  console.log('cardsGlobal:', cardsGlobal)


  return (
    <section className="total-global">
      {cardsGlobal.map((card) => (
        <TotalCard
          key={card.label}
          icon={card.icon}
          label={card.label}
          value={card.value}
        />
      ))}
     

    </section>
  )

}

export default GlobalTotal