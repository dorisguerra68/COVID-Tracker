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