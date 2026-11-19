import './Infraestructura.css'

export default function Infraestructura()
{
    return(
        <>
        <section className="infrastructure-section" id="infraestructura">
            <div className="infra-header">
                <span className="infra-tag">INFRAESTRUCTURA DE ÉLITE</span>
                <h2>TODO PARA QUE SOLO TE PREOCUPES POR JUGAR</h2>
                <p>Diseñado por y para futbolistas. Instalaciones homologadas pensadas para rendir dentro de la cancha y celebrar con tu gente al terminar.</p>
            </div>

            <div className="infra-grid">
                
                <div className="infra-card card-tall">
                <div className="card-content-bottom">
                    <span className="card-badge">CÉSPED HOMOLOGADO</span>
                    <h3>CÉSPED FORBEX FIFA QUALITY PRO</h3>
                    <p>Hilado monofilamento de 60 mm con amortiguación ecológica anti-impacto. Cero raspaduras, bote perfecto y tracción superior para evitar lesiones.</p>
                </div>
                </div>

                <div className="infra-right-column">
                
                <div className="infra-row-duo">
                    
                    <div className="infra-card card-small">
                    <div className="card-icon-box">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                    </div>
                    <h3>500 LUX STADIUM LED</h3>
                    <p>Torres con ópticas antideslumbrantes para ver la pelota en cada rincón sin sombras molestas.</p>
                    </div>

                    <div className="infra-card card-small">
                    <div className="card-icon-box">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
                    </div>
                    <h3>QUINCHOS & PARRILLAS VIP</h3>
                    <p>Parrillas dobles techadas con vajilla, tablones y freezer para armar tu asado de fin de año o cumpleaños.</p>
                    </div>

                </div>

                <div className="infra-card card-banner">
                    <div className="card-content-bottom">
                    <span className="card-subtitle-tag">ESPACIO TERCER TIEMPO</span>
                    <h3>BAR CON PANTALLAS GIGANTES 4K</h3>
                    <p>Cerveza tirada helada, hamburguesas caseras, pizzas y transmisión en directo de todos los clásicos.</p>
                    </div>
                </div>

                <div className="infra-row-duo">
                    <div className="infra-card card-small">
                    <div className="card-icon-box">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                    <h3>VESTUARIOS & DUCHAS</h3>
                    <p>Agua caliente continua, lockers individuales con llave y limpieza permanente en cada turno.</p>
                    </div>

                    <div className="infra-card card-small">
                    <div className="card-icon-box parking-icon">P</div>
                    <h3>ESTACIONAMIENTO PROPIO</h3>
                    <p>Capacidad para más de 80 vehículos con cámaras de circuito cerrado y custodio en puerta.</p>
                    </div>

                </div>

                </div>

            </div>
        </section>
        </>
    )
}
