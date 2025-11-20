import React from 'react'
import './ProfessionalFooter.css'
import Logo from './Logo'

const ProfessionalFooter = () => {
  return (
    <footer className="professional-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <Logo size="large" />
              <p className="footer-description">
                Plateforme d'excellence en trading. Formations gratuites, 
                conseils experts et communauté active pour votre succès financier.
              </p>
              <div className="social-links">
                <a href="#youtube" className="social-link" aria-label="YouTube">
                  <span>📺</span> YouTube
                </a>
                <a href="#telegram" className="social-link" aria-label="Telegram">
                  <span>📢</span> Telegram
                </a>
                <a href="#tiktok" className="social-link" aria-label="TikTok">
                  <span>🎵</span> TikTok
                </a>
                <a href="#Facebook" className="social-link" aria-label="facbook">
                  <span>📘</span> Facebook
                </a>
              </div>
            </div>
            
            <div className="footer-links-grid">
              <div className="footer-column">
                <h4>Formations</h4>
                <ul>
                  <li><a href="#debutant">Débutant</a></li>
                  <li><a href="#intermediaire">Intermédiaire</a></li>
                  <li><a href="#avance">Avancé</a></li>
                  <li><a href="#masterclass">Masterclass</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4>Ressources</h4>
                <ul>
                  <li><a href="#analyses">Analyses Marché</a></li>
                  <li><a href="#signaux">Signaux Trading</a></li>
                  <li><a href="#outils">Outils Gratuits</a></li>
                  <li><a href="#blog">Blog Éducatif</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4>Accompagnement</h4>
                <ul>
                  <li><a href="#coaching">Coaching Personnalisé</a></li>
                  <li><a href="#communaute">Communauté</a></li>
                  <li><a href="#webinaires">Webinaires Live</a></li>
                  <li><a href="#reviews">Témoignages</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4>Entreprise</h4>
                <ul>
                  <li><a href="#apropos">À propos</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#mentions">Mentions légales</a></li>
                  <li><a href="#confidentialite">Confidentialité</a></li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              © 2025 TradingGold Académie. Tous droits réservés.
            </div>
            <div className="legal-links">
              <a href="#cgv">CGV</a>
              <a href="#cookies">Cookies</a>
              <a href="#mentions">Mentions légales</a>
            </div>
            <div className="risk-warning">
              <strong>Avertissement risque :</strong> Le trading comporte des risques de perte en capital.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default ProfessionalFooter