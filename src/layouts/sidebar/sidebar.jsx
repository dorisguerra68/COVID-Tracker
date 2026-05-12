<<<<<<< HEAD
import './sidebar.css'
import IconHome from '../../assets/imagen/iconos/coronavirus.svg';
import IconTracker1 from '../../assets/imagen/iconos/analitica.png';
import IconComment from '../../assets/imagen/iconos/comment.svg';
import IconTracker2 from '../../assets/imagen/iconos/barra-de-menus.png';
import IconTracker3 from '../../assets/imagen/iconos/layout-grid.svg';
import IconTracker4 from '../../assets/imagen/iconos/folder.svg';

const Sidebar= () =>{
    return(
        <div className='sidebar'>
            <div className='sidebar-item'> 
                <img src={IconHome} alt='icono-home' className='sidebar-icon'/>
                </div>
            <div className='sidebar-item'> 
                <img src={IconTracker1} alt='icono-tracker1' className='sidebar-icon'/> 
                </div>
            <div className='sidebar-item'> 
                <img src={IconComment} alt='icono-comment' className='sidebar-icon'/>           
                </div>
            <div className='sidebar-item'> 
                <img src={IconTracker2} alt='icono-tracker2' className='sidebar-icon'/>             
                </div>
            <div className='sidebar-item'> 
                <img src={IconTracker3} alt='icono-tracker3' className='sidebar-icon'/> 
                </div>
            <div className='sidebar-item'> 
                <img src={IconTracker4} alt='icono-tracker4' className='sidebar-icon'/>         
                </div>
        </div>
    )
}
=======
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
>>>>>>> cadd8b8d2d5546cb9259d2f68fdccd9d76c7d55b
