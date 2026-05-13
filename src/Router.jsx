
//import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './views/home'
import Sidebar from './layouts/sidebar/sidebar.jsx'
import {Tracker1} from './views/Tracker1.jsx';
import { Tracker2 } from './views/tracker2.jsx';


export const Router = () => {
    return (
        <BrowserRouter>
            <div style={{ display: 'flex', width: '100vw', minHeight: '100vh' }}>

            <Sidebar /> 

            <main className="main-content">    
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/track1" element={<Tracker1 />} />
                    <Route path="/track2" element={<Tracker2 />} />
            </Routes>
            </main>

            </div>
    </BrowserRouter>  

)
}

export default Router;

