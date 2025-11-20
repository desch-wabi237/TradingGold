import React from 'react'
import './StrategySection.css'

const StrategySection = () => {
  const strategies = [
    {
      id: 1,
      title: "Trading de Momentum",
      level: "Intermédiaire",
      image: "/src/assets/strategies/momentum.jpg",
      description: "Capturez les mouvements directionnels forts du marché",
      features: ["Breakout trading", "Volume analysis", "Timeframe confluence"]
    },
    {
      id: 2,
      title: "Price Action Pure",
      level: "Avancé",
      image: "/src/assets/strategies/price-action.jpg",
      description: "Maîtrisez l'analyse des chandeliers japonais et des structures de marché",
      features: ["Support/Resistance", "Pattern recognition", "Market structure"]
    },
    {
      id: 3,
      title: "Swing Trading",
      level: "Tous niveaux",
      image: "/src/assets/strategies/swing.jpg",
      description: "Positionnez-vous sur les mouvements à moyen terme",
      features: ["Position sizing", "Risk management", "Weekly analysis"]
    }
  ]

  return (
    <section className="strategy-section">
      <div className="container">
        <div className="section-title">
          <h2>Stratégies de Trading</h2>
          <p>Découvrez les méthodes qui génèrent des résultats constants</p>
        </div>
        
        <div className="strategies-grid">
          {strategies.map((strategy) => (
            <div key={strategy.id} className="strategy-card">
              <div className="strategy-image">
                <img 
                  src={strategy.image} 
                  alt={strategy.title}
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="image-placeholder">
                  <span>📈 {strategy.title}</span>
                </div>
                <div className="strategy-level">{strategy.level}</div>
              </div>
              
              <div className="strategy-content">
                <h3>{strategy.title}</h3>
                <p>{strategy.description}</p>
                
                <div className="strategy-features">
                  {strategy.features.map((feature, index) => (
                    <span key={index} className="feature-tag">✓ {feature}</span>
                  ))}
                </div>
                
                <div className="strategy-actions"><a href='/Formations'>
                  <button className="btn btn-outline">En savoir plus</button></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StrategySection