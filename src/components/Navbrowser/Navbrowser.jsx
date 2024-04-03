import { NavLink } from 'react-router-dom';

export default function Navbrowser(){
    return (
        <div className='container-all-nabvar'>
              
            <nav className="navbar navbar-expand-lg bg-body-tertiary py-0 text-center" >
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse container-links-navbar" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to={"/"}>Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/acerca-de"} className="nav-link">Acerca De</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/portfolio"} className="nav-link">Portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/contacto"} className="nav-link">Contacto</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </div>
    )
}