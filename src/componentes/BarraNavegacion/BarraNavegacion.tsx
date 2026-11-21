import './BarraNavegacion.css'

export default function BarraNavegacion()
{
    return(
        <>
        <nav className="menu">
            <div className="menu_seccionMarca"> 
                <p className='seccionMarca_titulo'>Complejo la quinta</p>
                <p className='seccionMarca_descripcion'>El predio donde nacen los campeones</p>
            </div>
            <div className="menu_seccionOpciones">
                <a href="#" className='seccionOpciones_opcion seccionOpciones_opcion--activa' aria-current="page">Inicio</a>
                <a href="#" className='seccionOpciones_opcion'>Canchas & predio</a>
                <a href="#" className='seccionOpciones_opcion'>Alquilar cancha</a>
                <a href="#" className='seccionOpciones_opcion'>Contacto</a>

                <button className='seccionOpciones_boton'>Reservar ahora</button>
            </div>
        </nav>
        </>
    )
}
