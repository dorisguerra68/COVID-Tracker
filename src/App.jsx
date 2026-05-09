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
}

export default App
