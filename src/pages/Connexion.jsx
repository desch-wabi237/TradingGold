import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import './Connexion.css'
import Logo from '../components/Logo'
import ProfessionalFooter from '../components/ProfessionalFooter'

const Connexion = () => {
  const [theme, setTheme] = useState('light')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)

    // Vérifier si l'utilisateur vient de s'inscrire
    if (searchParams.get('message') === 'inscription-reussie') {
      // Afficher un message de succès (vous pouvez l'implémenter avec un state)
      console.log('Inscription réussie ! Vous pouvez maintenant vous connecter.')
    }
  }, [searchParams])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // Effacer l'erreur du champ quand l'utilisateur commence à taper
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Validation email
    if (!formData.email) {
      newErrors.email = 'L\'email est requis'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide'
    }

    // Validation mot de passe
    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    // Simulation d'authentification
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Ici, vous enverriez les données à votre API d'authentification
      console.log('Tentative de connexion:', {
        email: formData.email,
        rememberMe: formData.rememberMe
      })
      
      // En cas de succès, rediriger vers le tableau de bord
      // Pour l'instant, redirection vers l'accueil
      navigate('/')
      
    } catch (error) {
      setErrors({ 
        submit: 'Email ou mot de passe incorrect. Veuillez réessayer.' 
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleForgotPassword = (e) => {
    e.preventDefault()
    // Redirection vers la page de réinitialisation de mot de passe
    navigate('/mot-de-passe-oublie')
  }

  const handleSocialLogin = (provider) => {
    // Implémentation de la connexion via réseaux sociaux
    console.log(`Connexion avec ${provider}`)
    // Ici, vous intégreriez l'authentification sociale (Google, Facebook, etc.)
  }

  return (
    <div className="connexion-page">
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

      {/* Main Content */}
      <main className="connexion-main">
        <div className="container">
          <div className="connexion-grid">
            {/* Formulaire */}
            <div className="form-section">
              <div className="form-header">
                <h1>Connectez-vous</h1>
                <p>Accédez à votre espace personnel et continuez votre apprentissage</p>
                
                {searchParams.get('message') === 'inscription-reussie' && (
                  <div className="success-banner">
                    <div className="success-icon">✅</div>
                    <div className="success-text">
                      <strong>Inscription réussie !</strong>
                      <span>Vous pouvez maintenant vous connecter à votre compte.</span>
                    </div>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="connexion-form" noValidate>
                {/* Champ Email */}
                <div className="form-group">
                  <label htmlFor="email">Adresse email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="votre@email.com"
                    autoComplete="email"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                {/* Champ Mot de passe */}
                <div className="form-group">
                  <label htmlFor="password">Mot de passe</label>
                  <div className="password-input-container">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={errors.password ? 'error' : ''}
                      placeholder="Votre mot de passe"
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? '🙈' : '👁️'}
                    </button>
                  </div>
                  {errors.password && <span className="error-message">{errors.password}</span>}
                </div>

                {/* Options */}
                <div className="form-options">
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                      />
                      <span className="checkmark"></span>
                      Se souvenir de moi
                    </label>
                  </div>

                  <a 
                    href="/mot-de-passe-oublie" 
                    className="forgot-password"
                    onClick={handleForgotPassword}
                  >
                    Mot de passe oublié ?
                  </a>
                </div>

                {errors.submit && (
                  <div className="error-banner">
                    {errors.submit}
                  </div>
                )}

                <button 
                  type="submit" 
                  className="btn btn-primary btn-full btn-large"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="loading-spinner"></div>
                      Connexion...
                    </>
                  ) : (
                    'Se connecter'
                  )}
                </button>

                {/* Séparateur */}
                <div className="separator">
                  <span>Ou continuer avec</span>
                </div>

                {/* Connexion sociale */}
                <div className="social-login">
                  <button
                    type="button"
                    className="btn btn-social btn-google"
                    onClick={() => handleSocialLogin('google')}
                  >
                    <span className="social-icon">🔍</span>
                    <span className="social-text">Google</span>
                  </button>

                  <button
                    type="button"
                    className="btn btn-social btn-facebook"
                    onClick={() => handleSocialLogin('facebook')}
                  >
                    <span className="social-icon">📘</span>
                    <span className="social-text">Facebook</span>
                  </button>

                  <button
                    type="button"
                    className="btn btn-social btn-apple"
                    onClick={() => handleSocialLogin('apple')}
                  >
                    <span className="social-icon">🍎</span>
                    <span className="social-text">Apple</span>
                  </button>
                </div>

                <div className="form-footer">
                  <p>
                    Pas encore de compte ? <Link to="/inscription">S'inscrire gratuitement</Link>
                  </p>
                </div>
              </form>
            </div>

            {/* Sidebar avec avantages */}
            <div className="benefits-section">
              <div className="benefits-card">
                <h2>Bienvenue de retour !</h2>
                
                <div className="benefits-list">
                  <div className="benefit-item">
                    <div className="benefit-icon">📚</div>
                    <div className="benefit-content">
                      <h3>Reprenez votre formation</h3>
                      <p>Retrouvez votre progression et continuez d'apprendre</p>
                    </div>
                  </div>

                  <div className="benefit-item">
                    <div className="benefit-icon">🤝</div>
                    <div className="benefit-content">
                      <h3>Accédez à la communauté</h3>
                      <p>Échangez avec les autres traders et nos experts</p>
                    </div>
                  </div>

                  <div className="benefit-item">
                    <div className="benefit-icon">📈</div>
                    <div className="benefit-content">
                      <h3>Analyses en temps réel</h3>
                      <p>Consultez les dernières analyses de marché</p>
                    </div>
                  </div>

                  <div className="benefit-item">
                    <div className="benefit-icon">⚡</div>
                    <div className="benefit-content">
                      <h3>Support prioritaire</h3>
                      <p>Bénéficiez d'un accès prioritaire à notre équipe</p>
                    </div>
                  </div>

                  <div className="benefit-item">
                    <div className="benefit-icon">🎯</div>
                    <div className="benefit-content">
                      <h3>Contenu personnalisé</h3>
                      <p>Recevez des recommandations adaptées à votre niveau</p>
                    </div>
                  </div>
                </div>

                <div className="stats-badge">
                  <div className="stats-content">
                    <div className="stat">
                      <strong>3,000+</strong>
                      <span>Traders actifs</span>
                    </div>
                    <div className="stat">
                      <strong>96%</strong>
                      <span>De satisfaction</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ProfessionalFooter />
    </div>
  )
}

export default Connexion