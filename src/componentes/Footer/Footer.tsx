import './Footer.css'

export default function Footer()
{
    return(
        <>
        <footer className="footer-container">
            <div className="footer-grid">
                
                <div className="footer-col brand-col">
                <div className="footer-brand">
                    <h2>COMPLEJO LA QUINTA</h2>
                </div>
                <p className="footer-desc">
                    Infraestructura deportiva de alta competencia. Canchas de césped sintético homologado, iluminación LED profesional y el mejor tercer tiempo de la zona.
                </p>
                <div className="footer-socials">
                    <a href="#" className="social-box" aria-label="Ubicación">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </a>
                    <a href="#" className="social-box" aria-label="Teléfono">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </a>
                    <a href="#" className="social-box" aria-label="Correo">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </a>
                </div>
                </div>

                <div className="footer-col">
                <h3 className="footer-heading">HORARIOS DEL CLUB</h3>
                <ul className="schedule-list">
                    <li>
                    <span>Lunes a Viernes</span>
                    <strong>08:00 a 02:00 hs</strong>
                    </li>
                    <li>
                    <span>Sábados y Domingos</span>
                    <strong>08:00 a 02:00 hs</strong>
                    </li>
                    <li>
                    <span>Feriados Nacionales</span>
                    <strong>09:00 a 01:00 hs</strong>
                    </li>
                </ul>
                <div className="night-shift-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <span>Turnos nocturnos con reserva previa</span>
                </div>
                </div>

                <div className="footer-col">
                <h3 className="footer-heading">ACCESO DIRECTO</h3>
                <ul className="quick-links">
                    <li><a href="#">Reglamento de Torneos</a></li>
                    <li><a href="#">Alquiler de Canchas F5 / F7 / F11</a></li>
                    <li><a href="#">Reserva de Salón y Parrillas</a></li>
                    <li><a href="#">Tabla de Posiciones y Goleadores</a></li>
                    <li><a href="#">Protocolo Médico y Seguros Deportivos</a></li>
                </ul>
                </div>

                <div className="footer-col">
                <h3 className="footer-heading">PREDIO & UBICACIÓN</h3>
                <p className="footer-desc">
                    Ruta Provincial & Acceso Deportivo. Estacionamiento privado con seguridad las 24 hs.
                </p>
                <a href="#" className="map-card">
                    <svg className="map-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
                    <span className="map-title">Ver ubicación en Google Maps</span>
                    <span className="map-subtitle">Coordenadas GPS y Cómo llegar</span>
                </a>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2024 Complejo La Quinta. Todos los derechos reservados.</p>
                <div className="legal-links">
                <a href="#">Términos y Condiciones</a>
                <a href="#">Políticas de Cancelación</a>
                <a href="#">Soporte</a>
                </div>
            </div>
        </footer>
        </>
    )
}
