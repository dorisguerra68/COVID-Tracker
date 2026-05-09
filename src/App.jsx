import React from 'react'
import { Router } from './router'
import './App.css'
import Sidebar from './layouts/sidebar/sidebar'


function App() {
  return (
    <div style={{ display: 'flex',width: '100vw', minHeight: '100vh' }}>
      <Sidebar />
      <main style={{ marginleft: '80px', flexGrow: 1, padding: '20px' }}>
      <Router/>
      </main>
    </div>
  );
    <>
      <h1>hola gente</h1>
      <a href='../src/assets/imagen/iconos/comment.svg'>icono</a>
      <p>Bienvenidos a nuestra aplicación de seguimiento de COVID-19</p>
    </>
  )
}

export default App
