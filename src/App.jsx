import React, { useState, useEffect } from 'react'
import './App.css'
import Logo from './components/Logo'
import PerformanceSection from './components/PerformanceSection'
import VideoSection from './components/VideoSection'
import TestimonialsSection from './components/TestimonialsSection' 
import StrategySection from './components/StrategySection'
import ProfessionalFooter from './components/ProfessionalFooter'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Formations from './pages/Formations'
import Inscription from './pages/Inscription'
import Connexion from './pages/Connexion'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Coaching from './pages/Coaching'
// Composant ThemeToggle
const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Changer le thème">
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}

// Composant MobileMenu
const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="mobile-menu active">
      <div className="mobile-menu-header">
       <a href="#" style={{ textDecoration: 'none' }}>
  <Logo size="medium" />
</a>
        <button className="mobile-menu-btn" onClick={onClose}>✕</button>
      </div>
      <ul className="mobile-nav-links">
        <li><a href="/formations" onClick={onClose}>Formations</a></li>
        <li><a href="/Coaching" onClick={onClose}>Coaching</a></li>
        <li><a href="#communaute" onClick={onClose}>Communauté</a></li>
        <li><a href="/Blog" onClick={onClose}>Blog</a></li>
        <li><a href="/Contact" onClick={onClose}>Contact</a></li>
      </ul>
      <div className="mobile-menu-actions">
        <a href="/Connexion" className="btn btn-outline" onClick={onClose}>Connexion</a>
        <a href="/Inscription" className="btn btn-primary" onClick={onClose}>S'inscrire gratuitement</a>
      </div>
    </div>
  )
}

// Composant Header
const Header = ({ theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              ☰
            </button>
            
            <a href="#" className="logo">
              Trading<span className="logo-gold">Gold</span> Académie
            </a>
            
            <ul className="nav-links">
              <li><a href="/formations">Formations</a></li>
              <li><a href="/Coaching">Coaching</a></li>
              <li><a href="#communaute">Communauté</a></li>
              <li><a href="/Blog">Blog</a></li>
              <li><a href="/Contact">Contact</a></li>
            </ul>
            
            <div className="nav-actions">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              <a href="/Connexion" className="btn btn-outline">Connexion</a>
              <a href="/Inscription" className="btn btn-primary">S'inscrire</a>
            </div>
          </nav>
        </div>
      </header>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  )
}

// Composant Hero
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            Devenez un trader rentable avec{' '} 
            <span className="hero-gold">TradingGold Académie</span>
          </h1>
          <p>
            Rejoignez la plateforme de formation trading la plus complète 
            et transformez votre passion en expertise rentable. Accédez à des 
            méthodes éprouvées, une communauté active et un accompagnement personnalisé.
          </p>
          <div className="hero-actions">
            <a href="/formations" className="btn btn-primary">
              🚀 Découvrir les formations
            </a>
            <a href="/Inscription" className="btn btn-secondary">
              📈 Essai gratuit 
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">5,000+</span>
              <span className="stat-label">Traders formés</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Heures de formation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Composant Features
// Composant Features avec images rectangulaires
const Features = () => {
  const features = [
    {
      image: "/src/assets/features/formations.jpg",
      title: "Formations Structurées par Niveau",
      description: "Parcours débutant à expert avec modules progressifs, exercices pratiques et études de cas réels"
    },
    {
      image: "/src/assets/features/analyses.jpg",
      title: "Analyses Marché Quotidiennes",
      description: "Accédez aux analyses techniques et fondamentales des principales paires de devises et indices"
    },
    {
      image: "/src/assets/features/coaching.jpg",
      title: "Coaching Individualisé",
      description: "Sessions de mentoring personnalisées avec retours sur vos trades et optimisation de votre stratégie"
    },
    {
      image: "/src/assets/features/certifications.jpg",
      title: "Certifications Reconnues",
      description: "Obtenez des certificats validant vos compétences et augmentez votre crédibilité en tant que trader"
    },
    {
      image: "/src/assets/features/communaute.jpg",
      title: "Communauté Exclusive",
      description: "Échangez avec des traders confirmés, participez aux challenges et développez votre réseau"
    },
    {
      image: "/src/assets/features/signaux.jpg",
      title: "Signaux Trading en Temps Réel",
      description: "Recevez des alertes de trading qualité avec gestion de risque intégrée et ratios risque/rendement optimisés"
    }
  ]

  return (
    <section className="features">
      <div className="container">
        <div className="section-title">
          <h2>Une Plateforme Complète pour Votre Succès en Trading</h2>
          <p>
            TradingGold Académie combine expertise, technologie et communauté 
            pour vous offrir l'environnement d'apprentissage ultime
          </p>
        </div>
        <div className="features-grid-rectangular">
          {features.map((feature, index) => (
            <div key={index} className="feature-card-rectangular">
              <div className="feature-image-container-rectangular">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="feature-image-rectangular"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="feature-image-placeholder-rectangular">
                  <span className="placeholder-icon-rectangular">
                    {index === 0 && "📚"}
                    {index === 1 && "📊"}
                    {index === 2 && "👨‍🏫"}
                    {index === 3 && "🏆"}
                    {index === 4 && "🤝"}
                    {index === 5 && "⚡"}
                  </span>
                  <span className="placeholder-text-rectangular">Image {feature.title.split(' ')[0]}</span>
                </div>
                <div className="feature-overlay"></div>
              </div>
              <div className="feature-content-rectangular">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Composant Stats
const Stats = () => {
  const stats = [
    { number: "92%", label: "Taux de réussite des étudiants" },
    { number: "15K+", label: "Membres dans la communauté" },
    { number: "4.9/5", label: "Note moyenne des formations" },
    { number: "24h", label: "Temps moyen de réponse du support" }
  ]

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Composant CTA
const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <h2>Prêt à Transformer Votre Parcours Trading ?</h2>
        <p>
          Rejoignez des milliers de traders qui ont déjà révolutionné leur approche 
          des marchés financiers. Commencez votre essai gratuit aujourd'hui.
        </p>
        <div className="hero-actions">
          <a href="/Inscription" className="btn btn-primary" style={{background: 'var(--color-gold)', color: 'var(--color-black)'}}>
            🚀 Commencer maintenant
          </a>
        </div>
      </div>
    </section>
  )
}

// Composant Footer
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
         <a href="#" style={{ textDecoration: 'none' }}>
  <Logo size="medium" />
</a>
          <ul className="footer-links">
            <li><a href="#formations">Formations</a></li>
            <li><a href="#coaching">Coaching</a></li>
            <li><a href="#tarifs">Tarifs</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#mentions">Mentions légales</a></li>
            <li><a href="#confidentialite">Confidentialité</a></li>
            <li><a href="#cgv">CGV</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <p className="copyright">
            © 2025 TradingGold Académie. Tous droits réservés. | 
            Le trading comporte des risques de perte en capital.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Composant principal
const HomePage = () => {
  const [theme, setTheme] = useState('light')

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

  return (
    <div className="app">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Features />
        <PerformanceSection />
        <VideoSection />
        <TestimonialsSection />
        <StrategySection />
        <Stats />
        <CTA />
      </main>
      <ProfessionalFooter />
    </div>
  )
}

// Composant principal avec Router
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="/coaching" element={<Coaching />} />
      </Routes>
    </Router>
  )
}

export default App