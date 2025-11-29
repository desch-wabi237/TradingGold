import React from 'react'
import './TestimonialsSection.css'

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Marie Dubois",
      role: "Trader Indépendante",
      image: "/testimonials/client1.jpg",
      rating: 5,
      text: "Grâce à TradingGold, j'ai pu transformer ma passion en véritable activité professionnelle. Les formations sont exceptionnelles et le coaching m'a permis d'optimiser ma stratégie.",
      profit: "+15% mensuel"
    },
    {
      id: 3,
      name: "Sophie Lambert",
      role: "Gérante de Portefeuille",
      image: "/testimonials/client3.jpg",
      rating: 5,
      text: "La qualité des analyses et la réactivité de la communauté ont transformé ma manière d'investir. Une plateforme indispensable pour tout trader sérieux.",
      profit: "+42% sur 6 mois"
    },
    {
      id: 4,
      name: "Alexandre Petit",
      role: "Trader Forex",
      image: "/testimonials/client4.jpg",
      rating: 5,
      text: "Le suivi personnalisé et les retours constructifs m'ont aidé à corriger mes erreurs rapidement. Je recommande vivement !",
      profit: "Risque maîtrisé"
    },
    {
      id: 5,
      name: "Camille Rousseau",
      role: "Investisseuse Privée",
      image: "/testimonials/client5.jpg",
      rating: 5,
      text: "Des formations structurées et une communauté bienveillante. J'ai multiplié mon capital par 3 en un an grâce aux conseils avisés.",
      profit: "x3 capital"
    },
  ]

  const renderStars = (rating) => {
    return "⭐".repeat(rating)
  }

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-title">
          <h2>Ils Nous Font Confiance</h2>
          <p>
            Découvrez les retours d'expérience de nos traders accompagnés vers le succès
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="client-avatar">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="avatar-placeholder">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="client-info">
                  <h4 className="client-name">{testimonial.name}</h4>
                  <p className="client-role">{testimonial.role}</p>
                  <div className="client-rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                <div className="profit-badge">
                  {testimonial.profit}
                </div>
              </div>
              
              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
              
              <div className="testimonial-footer">
                <div className="social-proof">
                  <span className="verified-badge">✅ Vérifié</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonials-cta">
          <div className="cta-content">
            <h3>Rejoignez nos traders satisfaits</h3>
            <p>Commencez votre transformation dès aujourd'hui</p>
            <div className="cta-actions">
              <a href="/Formations" className="btn btn-primary">
                🚀 Commencer maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection