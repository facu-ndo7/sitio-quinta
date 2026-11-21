import BarraNavegacion from "../componentes/BarraNavegacion/BarraNavegacion";
import './PaginaInicio.css'

export default function PaginaInicio()
{
    return(
        <>
        <BarraNavegacion />

        <div className="bannerPrincipal">
            <h1 className="bannerPrincipal_titulo">
                Viví el fútbol en su <span className="bannerPrincipal_tituloGradiente">Máximo Nivel</span>
            </h1>
            <p className="bannerPrincipal_descripcion">Canchas sintéticas premium de Fútbol 5, 7 y 11 con iluminación LED 500 Lux, vestuarios climatizados de primer nivel y quinchos con parrillas dobles para el tercer tiempo más esperado de la semana.</p>

            <div className="bannerPrincipal_acciones">
                <button className="bannerPrincipal_boton bannerPrincipal_boton--primario">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="9.5" />
                        <path d="M12 7.2l4.4 3.2-1.7 5.2H9.3L7.6 10.4z" />
                        <path d="M12 2.5v4.7M20.9 8.9l-4.5 1.5M18.6 20.5l-3.6-5.6M5.4 20.5l3.6-5.6M3.1 8.9l4.5 1.5" />
                    </svg>
                    Alquilar Turno Online
                </button>
                <button className="bannerPrincipal_boton bannerPrincipal_boton--secundario">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M8 3.5h8v5.5a4 4 0 0 1-8 0z" />
                        <path d="M8 5.5H5.5a2.5 2.5 0 0 0 0 5H8M16 5.5h2.5a2.5 2.5 0 0 1 0 5H16" />
                        <path d="M12 13v3.5M9 20.5h6M10 20.5v-2.5h4v2.5" />
                    </svg>
                    Ver Torneos Activos
                </button>
            </div>
        </div>
        </>
    )
}
