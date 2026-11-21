import BarraItems from "../componentes/BarraItems/BarraItems";
import BarraNavegacion from "../componentes/BarraNavegacion/BarraNavegacion";
import './PaginaInicio.css'


const items = [
    {
        'titulo': '+4 canchas',
        'descripcion': 'Césped Sintético Pro'
    },
    {
        'titulo': '500 Lux',
        'descripcion': 'Iluminación LED Nocturna'
    },
    {
        'titulo': 'Parrillas VIP',
        'descripcion': 'Quinchos & Parking Custodiado'
    }
]

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
                    Alquilar Turno Online
                </button>
                <button className="bannerPrincipal_boton bannerPrincipal_boton--secundario">
                    Ver Torneos Activos
                </button>
            </div>

            <BarraItems items={items}/>
        </div>
        </>
    )
}
