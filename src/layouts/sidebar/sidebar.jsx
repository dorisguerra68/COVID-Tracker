
//import React from 'react';
import {NavLink} from 'react-router-dom';
import './sidebar.css'; 
//importar cada icono para usarlo en el menu
import home from '../../assets/icons/coronavirus.png';
import track1 from '../../assets/icons/analitica.png';
import track2 from '../../assets/icons/layoutgrid1.svg';
import track3 from '../../assets/icons/folder.svg';

const Sidebar = () => {
    return (
        <div className="sidebar">
        <NavLink to="/" className="logo-container">
        <img src={home} alt="Logo" className="sidebar-logo" />
        </NavLink>

        <nav className="menu-items">
        <NavLink to="/track1" className={({ isActive }) => isActive ? 'active' : ''}>
        <img src={track1} alt="Analítica" />
        </NavLink>

        <NavLink to="/track2" className={({ isActive }) => isActive ? 'active' : ''}>
        <img src={track2} alt="Grid" />
        </NavLink>

        <NavLink to="/track3" className={({ isActive }) => isActive ? 'active' : ''}>
        <img src={track3} alt="Folder" />
        </NavLink>
    </nav>
    </div>
);
};
export default Sidebar;
