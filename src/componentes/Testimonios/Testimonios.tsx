import './Testimonios.css'

export default function Testimonios()
{
    return(
        <>
        <section className="testimonials-section">
            <div className="testimonials-header">
                <span className="testimonials-tag">LA VOZ DE LOS CAPITANES</span>
                <h2>POR QUÉ ELIGEN COMPLEJO LA QUINTA</h2>
            </div>

            <div className="testimonials-grid">
                
                <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p className="testimonial-quote">
                    "El estado del césped sintético es de otro planeta. Jugamos el torneo de los martes hace 2 años y jamás se suspendió una fecha ni tuvimos problemas de árbitros. El tercer tiempo en el quincho es sagrado."
                </p>
                <div className="testimonial-author">
                    <div className="author-avatar mb-bg">MB</div>
                    <div className="author-info">
                    <h4>Martín Benítez</h4>
                    <span>Capitán "La Resaca FC" - Torneo F7</span>
                    </div>
                </div>
                </div>

                <div className="testimonial-card active-card">
                <div className="stars">★★★★★</div>
                <p className="testimonial-quote">
                    "La luz LED nocturna hace una diferencia abismal: no te encandila y se ve perfecto. Además, poder reservar por WhatsApp o desde la web en 1 minuto nos solucionó la organización de los jueves con los chicos de la oficina."
                </p>
                <div className="testimonial-author">
                    <div className="author-avatar lr-bg">LR</div>
                    <div className="author-info">
                    <h4>Lucas Rossi</h4>
                    <span>Cliente Fijo Turnos Fútbol 5 Techado</span>
                    </div>
                </div>
                </div>

                <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p className="testimonial-quote">
                    "Festejamos el cumpleaños con un triangular y alquilamos el salón con parrilla. Excelente atención de los chicos, vestuarios impecables con agua hirviendo y seguridad en el estacionamiento para dejar el auto tranquilo."
                </p>
                <div className="testimonial-author">
                    <div className="author-avatar ga-bg">GA</div>
                    <div className="author-info">
                    <h4>Gonzalo Albornoz</h4>
                    <span>Liga Senior +35</span>
                    </div>
                </div>
                </div>

            </div>
        </section>
        </>
    )
}
