import { Link } from "react-router-dom"
export default function Header(){
    return(
<>
<nav className="navbar navbar-expand-lg bg-secondary text-uppercase " id="mainNav">
            <div className="container">
                <Link to={"/"} className="navbar-brand" href="#page-top">PORTFOLIO</Link>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1"><Link to="/" className="nav-link py-3 px-0 px-lg-3 rounded" >Portfolio</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link to="/favorites" className="nav-link py-3 px-0 px-lg-3 rounded">Favoritos</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link to="/misCreaciones" className="nav-link py-3 px-0 px-lg-3 rounded">Mis Creaciones</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    
        

</>
    )


}