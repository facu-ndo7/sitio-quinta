import './Agenda.css'

export default function Agenda()
{
    return (
        <>
        <section className="availability-section" id="agenda">
            <div className="availability-card">

                <div className="card-header-top">
                    <div className="header-titles">
                        <span className="availability-tag">DISPONIBILIDAD EN TIEMPO REAL</span>
                        <h2>¿CUÁNDO QUERÉS JUGAR?</h2>
                        <p>Seleccioná fecha, tipo de cancha y horario para asegurar tu turno sin esperas.</p>
                    </div>

                    <div className="pitch-tabs">
                        <button className="tab-btn active">FÚTBOL 5 TECHADA</button>
                        <button className="tab-btn">FÚTBOL 7</button>
                        <button className="tab-btn">FÚTBOL 11 PRO</button>
                    </div>
                </div>
                <div className="card-controls">
                
                    <div className="control-group">
                        <label>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        FECHA DEL PARTIDO
                        </label>
                        <div className="select-wrapper">
                        <span>Hoy - Noche</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                    </div>

                    <div className="control-group">
                        <label>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                        CANCHA SELECCIONADA
                        </label>
                        <div className="select-wrapper">
                        <span>Cancha 1 (Techada - Cristal Pro)</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                    </div>

                    <div className="control-group">
                        <label>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        HORARIO SUGERIDO
                        </label>
                        <div className="select-wrapper">
                        <span>19:00 a 20:00 hs</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                    </div>

                    <button className="btn-consultar">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        CONSULTAR TURNO
                    </button>

                </div>

            </div>
        </section>
        </>
    )
}
