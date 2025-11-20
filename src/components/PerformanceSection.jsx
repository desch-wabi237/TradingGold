import React from 'react'
import './PerformanceSection.css'

const PerformanceSection = () => {
  const performances = [
    {
      id: 1,
      pair: "BTC",
      type: "Long",
      profit: "+15.4%",
      date: "15 Juin 2025",
      screenshot: "/src/assets/trades/trade-1.jpg", // Chemin pour image
      description: "Breakout trading sur support clé"
    },
    {
      id: 2,
      pair: "V75",
      type: "Short",
      profit: "+6.1%",
      date: "14 Fev 2025",
      screenshot: "/src/assets/trades/trade-2.jpg",
      description: "Retournement sur résistance majeure"
    },
    {
      id: 3,
      pair: "XAU/USD",
      type: "Long",
      profit: "+4.2%",
      date: "13 Jan 2025",
      screenshot: "/src/assets/trades/trade-3.jpg",
      description: "Position sur or suite à données économiques"
    }
  ]

  return (
    <section className="performance-section">
      <div className="container">
        <div className="section-title">
          <h2>Performances Réelles</h2>
          <p>Découvrez les trades et analyses qui démontrent notre expertise</p>
        </div>
        
        <div className="performance-grid">
          {performances.map((trade) => (
            <div key={trade.id} className="trade-card">
              <div className="trade-header">
                <div className="trade-pair">{trade.pair}</div>
                <div className={`trade-type ${trade.type.toLowerCase()}`}>
                  {trade.type}
                </div>
              </div>
              
              <div className="trade-screenshot">
                {/* Zone pour charger les captures de trades */}
                <img 
                  src={trade.screenshot} 
                  alt={`Trade ${trade.pair}`}
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
              </div>
              
              <div className="trade-info">
                <div className="trade-profit">{trade.profit}</div>
                <div className="trade-date">{trade.date}</div>
                <p className="trade-description">{trade.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="performance-stats">
          <div className="stat-item">
            <div className="stat-value">76%</div>
            <div className="stat-label">Taux de réussite</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">2.8</div>
            <div className="stat-label">Ratio Profit/Risque</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">15.2%</div>
            <div className="stat-label">Rendement mensuel moyen</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PerformanceSection