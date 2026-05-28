import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';

export default function MapSection() {
  return (
    <section className="map-section section" style={{ background: 'var(--bg-navy)' }}>
      <div className="section-container">
        <motion.span
          className="label-mono"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
          Encuéntranos
        </motion.span>
        <RevealText tag="h2" className="section-title" style={{ color: '#FFFFFF' }}>
          UBICACIÓN
        </RevealText>

        <motion.div
          className="map-section__content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="map-section__info">
            <div className="map-section__detail">
              <span className="map-section__detail-label">Dirección</span>
              <span className="map-section__detail-value">Av. Rómulo Betancourt 1372, Bella Vista</span>
              <span className="map-section__detail-value" style={{ color: 'rgba(255,255,255,0.4)' }}>Santo Domingo, República Dominicana</span>
            </div>
            <div className="map-section__detail">
              <span className="map-section__detail-label">Horario</span>
              <span className="map-section__detail-value">Lunes - Viernes: 9:00 AM - 6:00 PM</span>
              <span className="map-section__detail-value">Sábados: 9:00 AM - 12:00 PM</span>
              <span className="map-section__detail-value" style={{ color: 'rgba(255,255,255,0.4)' }}>Domingos: Cerrado</span>
            </div>
            <div className="map-section__detail">
              <span className="map-section__detail-label">Contacto</span>
              <a href="https://instagram.com/dentalcenterstudio" target="_blank" rel="noopener noreferrer" className="map-section__detail-value map-section__link">@dentalcenterstudio</a>
              <a href="https://wa.me/18090000000" target="_blank" rel="noopener noreferrer" className="map-section__detail-value map-section__link">WhatsApp Directo</a>
            </div>
          </div>

          <div className="map-section__embed">
            <iframe
              src="https://www.google.com/maps?q=Av+Romulo+Betancourt+1372+Bella+Vista+Santo+Domingo&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Dental Center Studio"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
