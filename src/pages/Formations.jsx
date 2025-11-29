import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Formations.css'
import Logo from '../components/Logo'
import ProfessionalFooter from '../components/ProfessionalFooter'

const Formations = () => {
  const [theme, setTheme] = useState('light')
  const [activeCategory, setActiveCategory] = useState('indices')
  const [expandedFormation, setExpandedFormation] = useState(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const toggleFormation = (formationId) => {
    setExpandedFormation(expandedFormation === formationId ? null : formationId)
  }

  // Données des catégories avec possibilité d'images ou d'emojis
  const categories = [
    { 
      id: 'indices', 
      name: 'Indices Synthétiques', 
      icon: '📊', // Remplacer par "/src/assets/icons/indices.png" si vous avez une image
      image: null, // Mettre le chemin vers l'image ici si disponible
      description: 'Maîtrisez les indices de volatilité, Boom/Crash et Step Index',
      color: 'var(--color-primary)'
    },
    { 
      id: 'forex', 
      name: 'Forex', 
      icon: '💱', // Remplacer par "/src/assets/icons/forex.png"
      image: null,
      description: 'Devenez expert du trading des devises avec des techniques éprouvées',
      color: 'var(--color-gold)'
    },
    { 
      id: 'crypto', 
      name: 'Crypto', 
      icon: '₿', // Remplacer par "/src/assets/icons/crypto.png"
      image: null,
      description: 'Profitez de la volatilité des cryptomonnaies avec des stratégies modernes',
      color: 'var(--color-success)'
    }
  ]

  // Données des formations
  const formationsData = {
    indices: [
      {
        id: 1,
        title: "Fondamentaux Indices Synthétiques",
        level: "Débutant",
        duration: "2h",
        lessons: 8,
        students: "1,200+",
        rating: "4.9",
        image: "/icons/indices-basics.jpg",
        icon: "📊", // Remplacer par image si disponible
        description: "Apprenez les bases essentielles pour trader les indices synthétiques en toute confiance",
        price: "Gratuit",
        objectives: [
          "Comprendre le fonctionnement des indices synthétiques",
          "Maîtriser le Volatility 75 Index (V75)",
          "Analyser la volatilité en temps réel",
          "Développer une gestion de risque adaptée"
        ],
        modules: [
          { name: "Introduction aux indices", duration: "15min" },
          { name: "Volatility 75 Index", duration: "20min" },
          { name: "Boom & Crash indices", duration: "25min" },
          { name: "Step Index - Trading paliers", duration: "20min" },
          { name: "Stratégies de base", duration: "30min" },
          { name: "Gestion des risques", duration: "20min" }
        ],
        features: ["Support quotidien", "Communauté", "Analyses direct"],
        requirements: ["Aucun prérequis", "Connexion internet"]
      },
      {
        id: 2,
        title: "Stratégies Avancées Indices",
        level: "Intermédiaire",
        duration: "4h",
        lessons: 12,
        students: "850+",
        rating: "4.8",
        image: "/icons/indices-advanced.jpg",
        icon: "📊",
        description: "Perfectionnez vos techniques avec des stratégies avancées et outils professionnels",
        price: "Gratuit",
        objectives: [
          "Maîtriser le scalping sur V75",
          "Développer des stratégies personnalisées",
          "Analyser les patterns complexes",
          "Optimiser la gestion de capital"
        ],
        modules: [
          { name: "Analyse technique avancée", duration: "25min" },
          { name: "Scalping haute fréquence", duration: "30min" },
          { name: "Trading range et breakout", duration: "25min" },
          { name: "Indicateurs volatilité", duration: "30min" },
          { name: "Psychologie trading", duration: "20min" },
          { name: "Backtesting stratégies", duration: "35min" }
        ],
        features: ["Mentoring", "Signaux", "Webinaires"],
        requirements: ["Bases indices", "Expérience trading"]
      },
      {
        id: 3,
        title: "Expert Indices Synthétiques",
        level: "Expert",
        duration: "6h",
        lessons: 15,
        students: "450+",
        rating: "4.9",
        image: "/icons/indices-expert.jpg",
        icon: "📊",
        description: "Devenez un expert avec techniques professionnelles et systèmes automatisés",
        price: "Gratuit",
        objectives: [
          "Systèmes trading algorithmique",
          "Techniques d'arbitrage",
          "Analyse flux institutionnels",
          "Stratégies haut rendement"
        ],
        modules: [
          { name: "Trading algorithmique", duration: "40min" },
          { name: "Flux institutionnels", duration: "35min" },
          { name: "Arbitrage complexe", duration: "45min" },
          { name: "Risk management pro", duration: "30min" },
          { name: "Optimisation performance", duration: "35min" },
          { name: "Croissance capital", duration: "40min" }
        ],
        features: ["Coaching VIP", "Outils pro", "Sessions privées"],
        requirements: ["Niveau intermédiaire", "Expérience solide"]
      }
    ],
    forex: [
      {
        id: 1,
        title: "Introduction au Forex",
        level: "Débutant",
        duration: "3h",
        lessons: 10,
        students: "2,100+",
        rating: "4.8",
        image: "/icons/forexb.jpg",
        icon: "💱",
        description: "Découvrez le marché des changes et bases du trading Forex",
        price: "Gratuit",
        objectives: [
          "Comprendre paires devises",
          "Bases analyse technique",
          "Passer ordres sécurité",
          "Gestion capital solide"
        ],
        modules: [
          { name: "Fondamentaux Forex", duration: "20min" },
          { name: "Paires majeures/mineures", duration: "25min" },
          { name: "Sessions trading", duration: "30min" },
          { name: "Analyse technique", duration: "35min" },
          { name: "Money Management", duration: "30min" },
          { name: "Psychologie trader", duration: "25min" }
        ],
        features: ["Support", "Communauté", "Analyses"],
        requirements: ["Aucun prérequis", "Compte démo"]
      },
      {
        id: 2,
        title: "Stratégies Forex Avancées",
        level: "Intermédiaire",
        duration: "5h",
        lessons: 14,
        students: "1,500+",
        rating: "4.9",
        image: "/icons/forexb2.jpg",
        icon: "💱",
        description: "Approfondissez avec stratégies Forex professionnelles",
        price: "Gratuit",
        objectives: [
          "Price action structures",
          "Stratégies trading rentables",
          "Analyse flux marché",
          "Gestion risques avancée"
        ],
        modules: [
          { name: "Price Action", duration: "40min" },
          { name: "Supply/Demand", duration: "35min" },
          { name: "Fibonacci expert", duration: "30min" },
          { name: "Stratégies breakout", duration: "45min" },
          { name: "Swing trading", duration: "40min" },
          { name: "Risk management", duration: "45min" }
        ],
        features: ["Mentoring", "Signaux", "Outils"],
        requirements: ["Bases Forex", "Expérience"]
      }
    ],
    crypto: [
      {
        id: 1,
        title: "Fondamentaux Crypto",
        level: "Débutant",
        duration: "2.5h",
        lessons: 9,
        students: "1,800+",
        rating: "4.8",
        image: "/icons/btcltc.jpg",
        icon: "₿",
        description: "Initiez-vous au trading crypto approche structurée",
        price: "Gratuit",
        objectives: [
          "Comprendre blockchain",
          "Plateformes échange",
          "Analyse technique crypto",
          "Sécuriser actifs"
        ],
        modules: [
          { name: "Introduction crypto", duration: "20min" },
          { name: "Bitcoin & Ethereum", duration: "25min" },
          { name: "Altcoins analyse", duration: "30min" },
          { name: "Analyse technique", duration: "35min" },
          { name: "Sécurité wallets", duration: "30min" },
          { name: "Régulation", duration: "15min" }
        ],
        features: ["Support", "Communauté", "Alertes"],
        requirements: ["Aucun prérequis", "Intérêt crypto"]
      },
      {
        id: 2,
        title: "Expert Crypto Trading",
        level: "Expert",
        duration: "4h",
        lessons: 12,
        students: "950+",
        rating: "4.9",
        image: "/icons/bit.jpg",
        icon: "₿",
        description: "Devenez expert trading crypto stratégies avancées",
        price: "Gratuit",
        objectives: [
          "Trading algorithmique",
          "Métriques on-chain",
          "Stratégies DeFi",
          "Gestion portefeuille pro"
        ],
        modules: [
          { name: "Algorithmique crypto", duration: "40min" },
          { name: "On-chain analysis", duration: "35min" },
          { name: "Stratégies DeFi", duration: "45min" },
          { name: "NFT trading", duration: "30min" },
          { name: "Gestion portefeuille", duration: "35min" },
          { name: "Risk management", duration: "30min" }
        ],
        features: ["Coaching", "Outils analytics", "Réseau"],
        requirements: ["Bases crypto", "Expérience trading"]
      }
    ]
  }

  // Composant pour afficher les icônes (support images et emojis)
  const IconDisplay = ({ icon, image, alt, className = "" }) => {
    if (image) {
      return (
        <img 
          src={image} 
          alt={alt}
          className={`icon-image ${className}`}
          onError={(e) => {
            e.target.style.display = 'none';
            // Fallback sur l'emoji si l'image ne charge pas
            e.target.nextSibling.style.display = 'flex';
          }}
        />
      )
    }
    return <span className={`icon-emoji ${className}`}>{icon}</span>
  }

  return (
    <div className="formations-page">
      {/* Header */}
      <header className="page-header">
        <div className="container">
          <nav className="page-nav">
            <Link to="/" className="nav-logo">
              <Logo size="medium" />
            </Link>
            <div className="nav-actions">
              <button className="theme-toggle" onClick={toggleTheme}>
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
              <Link to="/" className="btn btn-outline">
                ← Accueil
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="formations-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Formations Trading Expert</h1>
            <p>Développez vos compétences avec nos formations structurées par des professionnels</p>
          </div>
        </div>
      </section>

      {/* Navigation Catégories */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Domaines de Spécialisation</h2>
            <p>Choisissez votre parcours d'apprentissage</p>
          </div>
          
          <div className="categories-grid">
            {categories.map(category => (
              <div 
                key={category.id}
                className={`category-card ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                style={{ '--category-color': category.color }}
              >
                <div className="category-icon-wrapper">
                  <IconDisplay 
                    icon={category.icon}
                    image={category.image}
                    alt={category.name}
                    className="category-icon"
                  />
                </div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <div className="category-meta">
                  <span>{formationsData[category.id]?.length} formations disponibles</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formations Grid */}
      <section className="formations-section">
        <div className="container">
          <div className="section-header">
            <h2>Formations {categories.find(cat => cat.id === activeCategory)?.name}</h2>
            <p>Progressez à votre rythme avec nos parcours adaptés</p>
          </div>

          <div className="formations-grid">
            {formationsData[activeCategory]?.map(formation => (
              <div key={formation.id} className="formation-card">
                <div className="formation-badge-group">
                  <span className="formation-level">{formation.level}</span>
                  <span className="formation-price">{formation.price}</span>
                </div>
                
                <div className="formation-image-container">
                  <img 
                    src={formation.image} 
                    alt={formation.title}
                    className="formation-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="formation-image-fallback">
                    <IconDisplay 
                      icon={formation.icon}
                      image={null}
                      alt={formation.title}
                      className="fallback-icon"
                    />
                  </div>
                </div>

                <div className="formation-content">
                  <h3>{formation.title}</h3>
                  <p className="formation-description">{formation.description}</p>

                  <div className="formation-stats">
                    <div className="stat">
                      <span className="stat-icon">⏱️</span>
                      <span className="stat-value">{formation.duration}</span>
                    </div>
                    <div className="stat">
                      <span className="stat-icon">📚</span>
                      <span className="stat-value">{formation.lessons} leçons</span>
                    </div>
                    <div className="stat">
                      <span className="stat-icon">⭐</span>
                      <span className="stat-value">{formation.rating}/5</span>
                    </div>
                    <div className="stat">
                      <span className="stat-icon">👥</span>
                      <span className="stat-value">{formation.students}</span>
                    </div>
                  </div>

                  <div className="formation-features">
                    {formation.features.map((feature, index) => (
                      <span key={index} className="feature-tag">
                        <span className="feature-check">✓</span>
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button 
                    className={`btn-detail ${expandedFormation === formation.id ? 'active' : ''}`}
                    onClick={() => toggleFormation(formation.id)}
                  >
                    <span>{expandedFormation === formation.id ? '▲ Masquer' : '▼ Voir'} le programme</span>
                  </button>

                  {expandedFormation === formation.id && (
                    <div className="formation-details">
                      <div className="detail-section">
                        <h4>Objectifs d'apprentissage</h4>
                        <ul className="objectives-list">
                          {formation.objectives.map((objective, index) => (
                            <li key={index}>
                              <span className="objective-marker"></span>
                              {objective}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="detail-section">
                        <h4>Programme détaillé</h4>
                        <div className="modules-grid">
                          {formation.modules.map((module, index) => (
                            <div key={index} className="module-card">
                              <div className="module-number">{index + 1}</div>
                              <div className="module-content">
                                <div className="module-name">{module.name}</div>
                                <div className="module-duration">{module.duration}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="detail-section">
                        <h4>Prérequis</h4>
                        <div className="requirements-list">
                          {formation.requirements.map((req, index) => (
                            <span key={index} className="requirement-tag">• {req}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="formation-actions">
                    <button className="btn btn-primary btn-full">
                      Commencer la formation
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-content">
            <h2>Rejoignez notre communauté d'apprenants</h2>
            <p>Des résultats concrets grâce à notre méthode d'apprentissage éprouvée</p>
            
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">3,000+</div>
                <div className="stat-label">Étudiants actifs</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">96%</div>
                <div className="stat-label">Taux de réussite</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Heures de formation</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">4.9/5</div>
                <div className="stat-label">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProfessionalFooter />
    </div>
  )
}

export default Formations