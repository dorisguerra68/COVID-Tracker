import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hola gente</h1>
      <a href='../src/assets/imagen/iconos/comment.svg'>icono</a>
      <p>Bienvenidos a nuestra aplicación de seguimiento de COVID-19</p>
    </>
  )
}

export default App
