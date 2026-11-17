import './Barra_Navegacion.css'

export default function Barra_Navegacion()
{
    return(
        <>
        <header className="navbar-container">
            <div className="nav-brand">
                <div className="nav-logo">
                </div>
                <div className="nav-titles">
                <h1>COMPLEJO LA QUINTA</h1>
                <span>EL PREDIO DONDE NACEN LOS CAMPEONES</span>
                </div>
            </div>

            <nav className="nav-links">
                <a href="#">INICIO</a>
                <a href="#">CANCHAS & PREDIO</a>
                <a href="#">ALQUILAR CANCHA</a>
                <a href="#">CONTACTO</a>
            </nav>

            <div className="nav-action">
                <a href="#" className="btn-reservar">RESERVAR AHORA</a>
            </div>
        </header>
        </>
    )
}
