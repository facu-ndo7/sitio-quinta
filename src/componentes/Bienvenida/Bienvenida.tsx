import './Bienvenida.css'

export default function Bienvenida()
{
    return(
        <>
        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">
                VIVÍ EL FÚTBOL EN SU <span className="highlight">MÁXIMO NIVEL</span>
                </h1>
                <p className="hero-description">
                Canchas sintéticas premium de Fútbol 5, 7 y 11 con iluminación LED 500 Lux, vestuarios climatizados de primer nivel y quinchos con parrillas dobles para el tercer tiempo más esperado de la semana.
                </p>
                
                <div className="hero-buttons">
                <a href="#" className="btn-primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>
                    ALQUILAR TURNO ONLINE
                </a>
                <a href="#" className="btn-secondary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
                    VER TORNEOS ACTIVOS
                </a>
                </div>
            </div>

            <div className="stats-container">
                <div className="stat-item">
                <div className="stat-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                </div>
                <div className="stat-text">
                    <span className="stat-value">+4 Canchas</span>
                    <span className="stat-label">CÉSPED SINTÉTICO PRO</span>
                </div>
                </div>

                <div className="stat-item">
                <div className="stat-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
                </div>
                <div className="stat-text">
                    <span className="stat-value">500 Lux</span>
                    <span className="stat-label">ILUMINACIÓN LED NOCTURNA</span>
                </div>
                </div>

                <div className="stat-item">
                <div className="stat-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
                </div>
                <div className="stat-text">
                    <span className="stat-value">+150 Equipos</span>
                    <span className="stat-label">EN TORNEOS OFICIALES</span>
                </div>
                </div>

                <div className="stat-item">
                <div className="stat-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
                </div>
                <div className="stat-text">
                    <span className="stat-value">Parrillas VIP</span>
                    <span className="stat-label">QUINCHOS & PARKING CUSTODIADO</span>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}
