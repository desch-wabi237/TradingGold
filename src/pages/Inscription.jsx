import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Inscription.css'
import Logo from '../components/Logo'
import ProfessionalFooter from '../components/ProfessionalFooter'

const Inscription = () => {
  const [theme, setTheme] = useState('light')
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    pays: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    newsletter: true
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

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

  const paysList = [
    'France', 'Belgique', 'Suisse', 'Canada', 'Maroc', 'Tunisie', 'Algérie',
    'Sénégal', "Côte d'Ivoire", 'Cameroun', 'États-Unis', 'Royaume-Uni',
    'Allemagne', 'Espagne', 'Italie', 'Portugal', 'Pays-Bas', 'Luxembourg',
    'Autre'
  ]

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

    // Validation prénom
    if (!formData.prenom.trim()) {
      newErrors.prenom = 'Le prénom est requis'
    } else if (formData.prenom.trim().length < 2) {
      newErrors.prenom = 'Le prénom doit contenir au moins 2 caractères'
    }

    // Validation nom
    if (!formData.nom.trim()) {
      newErrors.nom = 'Le nom est requis'
    } else if (formData.nom.trim().length < 2) {
      newErrors.nom = 'Le nom doit contenir au moins 2 caractères'
    }

    // Validation email
    if (!formData.email) {
      newErrors.email = 'L\'email est requis'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide'
    }

    // Validation téléphone
    if (formData.telephone && !/^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.telephone)) {
      newErrors.telephone = 'Numéro de téléphone invalide'
    }

    // Validation pays
    if (!formData.pays) {
      newErrors.pays = 'Veuillez sélectionner votre pays'
    }

    // Validation mot de passe
    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères'
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Le mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre'
    }

    // Validation confirmation mot de passe
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Veuillez confirmer votre mot de passe'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas'
    }

    // Validation conditions d'utilisation
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Vous devez accepter les conditions d\'utilisation'
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

    // Simulation d'envoi des données
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Ici, vous enverriez les données à votre API
      console.log('Données d\'inscription:', formData)
      
      // Redirection vers la page de succès ou connexion
      navigate('/connexion?message=inscription-reussie')
    } catch (error) {
      setErrors({ submit: 'Une erreur est survenue. Veuillez réessayer.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="inscription-page">
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
      <main className="inscription-main">
        <div className="container">
          <div className="inscription-grid">
            {/* Formulaire */}
            <div className="form-section">
              <div className="form-header">
                <h1>Créer votre compte</h1>
                <p>Rejoignez notre communauté de traders et accédez à toutes nos formations gratuitement</p>
              </div>

              <form onSubmit={handleSubmit} className="inscription-form" noValidate>
                {/* Informations personnelles */}
                <div className="form-section-group">
                  <h3>Informations personnelles</h3>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="prenom">Prénom *</label>
                      <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        className={errors.prenom ? 'error' : ''}
                        placeholder="Votre prénom"
                      />
                      {errors.prenom && <span className="error-message">{errors.prenom}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="nom">Nom *</label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        className={errors.nom ? 'error' : ''}
                        placeholder="Votre nom"
                      />
                      {errors.nom && <span className="error-message">{errors.nom}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Adresse email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                      placeholder="votre@gmail.com"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="telephone">Téléphone (optionnel)</label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className={errors.telephone ? 'error' : ''}
                      placeholder="+237 659 00 00 00"
                    />
                    {errors.telephone && <span className="error-message">{errors.telephone}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="pays">Pays de résidence *</label>
                    <select
                      id="pays"
                      name="pays"
                      value={formData.pays}
                      onChange={handleChange}
                      className={errors.pays ? 'error' : ''}
                    >
                      <option value="">Sélectionnez votre pays</option>
                      {paysList.map(pays => (
                        <option key={pays} value={pays}>{pays}</option>
                      ))}
                    </select>
                    {errors.pays && <span className="error-message">{errors.pays}</span>}
                  </div>
                </div>

                {/* Sécurité */}
                <div className="form-section-group">
                  <h3>Sécurité du compte</h3>
                  
                  <div className="form-group">
                    <label htmlFor="password">Mot de passe *</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={errors.password ? 'error' : ''}
                      placeholder="Minimum 8 caractères"
                    />
                    {errors.password && <span className="error-message">{errors.password}</span>}
                    <div className="password-requirements">
                      <span>Doit contenir au moins :</span>
                      <ul>
                        <li className={formData.password.length >= 8 ? 'valid' : ''}>8 caractères</li>
                        <li className={/(?=.*[a-z])/.test(formData.password) ? 'valid' : ''}>1 minuscule</li>
                        <li className={/(?=.*[A-Z])/.test(formData.password) ? 'valid' : ''}>1 majuscule</li>
                        <li className={/(?=.*\d)/.test(formData.password) ? 'valid' : ''}>1 chiffre</li>
                      </ul>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirmer le mot de passe *</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={errors.confirmPassword ? 'error' : ''}
                      placeholder="Retapez votre mot de passe"
                    />
                    {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                  </div>
                </div>

                {/* Préférences */}
                <div className="form-section-group">
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        className={errors.acceptTerms ? 'error' : ''}
                      />
                      <span className="checkmark"></span>
                      J'accepte les <Link to="/conditions-utilisation" target="_blank">conditions d'utilisation</Link> et la <Link to="/politique-confidentialite" target="_blank">politique de confidentialité</Link> *
                    </label>
                    {errors.acceptTerms && <span className="error-message">{errors.acceptTerms}</span>}
                  </div>

                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                      />
                      <span className="checkmark"></span>
                      Je souhaite recevoir les analyses de marché et les opportunités de trading par email
                    </label>
                  </div>
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
                      Création du compte...
                    </>
                  ) : (
                    'Créer mon compte gratuitement'
                  )}
                </button>

                <div className="form-footer">
                  <p>
                    Déjà inscrit ? <Link to="/connexion">Se connecter</Link>
                  </p>
                </div>
              </form>
            </div>

            {/* Sidebar avec avantages */}
            <div className="benefits-section">
              <div className="benefits-card">
                <h2>Pourquoi nous rejoindre ?</h2>
                
                <div className="benefits-list">
                  <div className="benefit-item">
                    <div className="benefit-icon">🎯</div>
                    <div className="benefit-content">
                      <h3>Formations Gratuites</h3>
                      <p>Accédez à toutes nos formations trading sans frais</p>
                    </div>
                  </div>

                  <div className="benefit-item">
                    <div className="benefit-icon">👨‍🏫</div>
                    <div className="benefit-content">
                      <h3>Expertise Professionnelle</h3>
                      <p>Apprenez avec des traders expérimentés et rentables</p>
                    </div>
                  </div>

                  <div className="benefit-item">
                    <div className="benefit-icon">🤝</div>
                    <div className="benefit-content">
                      <h3>Communauté Active</h3>
                      <p>Échangez avec des milliers de traders passionnés</p>
                    </div>
                  </div>

                  <div className="benefit-item">
                    <div className="benefit-icon">⚡</div>
                    <div className="benefit-content">
                      <h3>Support Réactif</h3>
                      <p>Notre équipe vous accompagne 7j/7</p>
                    </div>
                  </div>

                  <div className="benefit-item">
                    <div className="benefit-icon">📈</div>
                    <div className="benefit-content">
                      <h3>Résultats Concrets</h3>
                      <p>96% de nos étudiants améliorent leurs performances</p>
                    </div>
                  </div>
                </div>

                <div className="security-badge">
                  <div className="security-icon">🔒</div>
                  <div className="security-text">
                    <strong>Vos données sont sécurisées</strong>
                    <span>Chiffrement SSL 256-bit</span>
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

export default Inscription