import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'
import Logo from '../components/Logo'
import ProfessionalFooter from '../components/ProfessionalFooter'

const Contact = () => {
  const [theme, setTheme] = useState('light')
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: '',
    type: 'general',
    newsletter: true
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const typesContact = [
    { value: 'general', label: 'Question générale', icon: '💬' },
    { value: 'technique', label: 'Support technique', icon: '🛠️' },
    { value: 'formation', label: 'Formations', icon: '📚' },
    { value: 'coaching', label: 'Coaching', icon: '👨‍🏫' },
    { value: 'partenariat', label: 'Partenariat', icon: '🤝' },
    { value: 'autre', label: 'Autre', icon: '📋' }
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

    // Validation sujet
    if (!formData.sujet.trim()) {
      newErrors.sujet = 'Le sujet est requis'
    } else if (formData.sujet.trim().length < 5) {
      newErrors.sujet = 'Le sujet doit contenir au moins 5 caractères'
    }

    // Validation message
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères'
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

    // Simulation d'envoi du message
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Ici, vous enverriez les données à votre API
      console.log('Message de contact:', formData)
      
      // Réinitialiser le formulaire
      setFormData({
        nom: '',
        email: '',
        sujet: '',
        message: '',
        type: 'general',
        newsletter: true
      })
      
      setIsSubmitted(true)
      
      // Cacher le message de succès après 5 secondes
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
      
    } catch (error) {
      setErrors({ submit: 'Une erreur est survenue. Veuillez réessayer.' })
    } finally {
      setIsLoading(false)
    }
  }

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      description: 'Nous répondons sous 24h',
      value: 'support@tradinggold.com',
      action: 'mailto:support@tradinggold.com'
    },
    {
      icon: '📞',
      title: 'Téléphone',
      description: 'Du lundi au vendredi',
      value: '+237 659 00 00 00',
      action: 'tel:+237 659 00 00 00'
    },
    {
      icon: '💬',
      title: 'Chat en direct',
      description: 'Support instantané',
      value: 'Disponible 7j/7',
      action: '#chat',
      soon: true
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      description: 'Rapide et direct',
      value: '+237 659 00 00 00',
      action: 'https://wa.me/+237659000000'
    }
  ]

  const faqs = [
    {
      question: "Quel est le temps de réponse moyen ?",
      answer: "Nous répondons à tous les emails sous 24 heures ouvrées. Pour les questions urgentes, privilégiez le téléphone."
    },
    {
      question: "Proposez-vous des formations personnalisées ?",
      answer: "Oui, nous proposons du coaching personnalisé adapté à votre niveau et vos objectifs. Contactez-nous pour en discuter."
    },
    {
      question: "Les formations sont-elles vraiment gratuites ?",
      answer: "Absolument ! Tous nos contenus de formation sont 100% gratuits. Seul l'accompagnement personnalisé est payant."
    },
    {
      question: "Comment rejoindre la communauté ?",
      answer: "Après votre inscription, vous recevrez un lien d'invitation pour notre groupe privé Discord/Telegram."
    }
  ]

  return (
    <div className="contact-page">
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
      <main className="contact-main">
        <div className="container">
          {/* Hero Section */}
          <section className="contact-hero">
            <div className="hero-content">
              <h1>Contactez-nous</h1>
              <p>Nous sommes là pour vous accompagner dans votre parcours trading. N'hésitez pas à nous contacter !</p>
            </div>
          </section>

          <div className="contact-grid">
            {/* Formulaire de Contact */}
            <div className="form-section">
              <div className="form-header">
                <h2>Envoyez-nous un message</h2>
                <p>Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais</p>
                
                {isSubmitted && (
                  <div className="success-banner">
                    <div className="success-icon">✅</div>
                    <div className="success-text">
                      <strong>Message envoyé avec succès !</strong>
                      <span>Nous vous répondrons dans les plus brefs délais.</span>
                    </div>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                {/* Informations personnelles */}
                <div className="form-section-group">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="nom">Nom complet *</label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        className={errors.nom ? 'error' : ''}
                        placeholder="Votre nom complet"
                      />
                      {errors.nom && <span className="error-message">{errors.nom}</span>}
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
                        placeholder="votre@email.com"
                      />
                      {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="type">Type de demande *</label>
                    <div className="type-selector">
                      {typesContact.map(type => (
                        <label key={type.value} className="type-option">
                          <input
                            type="radio"
                            name="type"
                            value={type.value}
                            checked={formData.type === type.value}
                            onChange={handleChange}
                          />
                          <span className="type-card">
                            <span className="type-icon">{type.icon}</span>
                            <span className="type-label">{type.label}</span>
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="sujet">Sujet *</label>
                    <input
                      type="text"
                      id="sujet"
                      name="sujet"
                      value={formData.sujet}
                      onChange={handleChange}
                      className={errors.sujet ? 'error' : ''}
                      placeholder="Objet de votre message"
                    />
                    {errors.sujet && <span className="error-message">{errors.sujet}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? 'error' : ''}
                      placeholder="Décrivez votre demande en détail..."
                      rows="6"
                    />
                    {errors.message && <span className="error-message">{errors.message}</span>}
                    <div className="character-count">
                      {formData.message.length}/500 caractères
                    </div>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="form-section-group">
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                      />
                      <span className="checkmark"></span>
                      Je souhaite recevoir les analyses de marché et opportunités de trading par email
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
                      Envoi en cours...
                    </>
                  ) : (
                    'Envoyer le message'
                  )}
                </button>
              </form>
            </div>

            {/* Informations de Contact */}
            <div className="info-section">
              <div className="info-card">
                <h2>Autres moyens de contact</h2>
                
                <div className="contact-methods">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.action}
                      className={`contact-method ${method.soon ? 'soon' : ''}`}
                      onClick={method.soon ? (e) => e.preventDefault() : null}
                    >
                      <div className="method-icon">{method.icon}</div>
                      <div className="method-content">
                        <h3>{method.title}</h3>
                        <p>{method.description}</p>
                        <span className="method-value">{method.value}</span>
                        {method.soon && <span className="soon-badge">Bientôt disponible</span>}
                      </div>
                    </a>
                  ))}
                </div>

                {/* Horaires */}
                <div className="hours-section">
                  <h3>🕒 Horaires d'ouverture</h3>
                  <div className="hours-list">
                    <div className="hour-item">
                      <span>Lundi - Vendredi</span>
                      <span>9h00 - 18h00</span>
                    </div>
                    <div className="hour-item">
                      <span>Samedi</span>
                      <span>10h00 - 16h00</span>
                    </div>
                    <div className="hour-item">
                      <span>Dimanche</span>
                      <span>Fermé</span>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className="faq-section">
                  <h3>❓ Questions fréquentes</h3>
                  <div className="faq-list">
                    {faqs.map((faq, index) => (
                      <div key={index} className="faq-item">
                        <strong>{faq.question}</strong>
                        <p>{faq.answer}</p>
                      </div>
                    ))}
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

export default Contact