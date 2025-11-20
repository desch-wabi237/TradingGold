import React, { useState } from 'react';
import './Coaching.css';

const Coaching = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const coachingPrograms = [
    {
      id: 1,
      name: "Coaching Starter",
      price: "497",
      duration: "1 mois",
      sessions: "4 sessions",
      bestFor: "Débutants qui veulent éviter les erreurs coûteuses",
      features: [
        "Analyse complète de votre trading",
        "4 sessions de 1h en visio",
        "Plan de trading personnalisé",
        "Accès au groupe privé Starter",
        "Support email prioritaire",
        "Review de 10 de vos trades"
      ],
      popular: false,
      color: "blue"
    },
    {
      id: 2,
      name: "Coaching Pro",
      price: "1,297",
      duration: "3 mois",
      sessions: "12 sessions",
      bestFor: "Traders intermédiaires voulant passer au niveau supérieur",
      features: [
        "Tout du Coaching Starter",
        "12 sessions de 1h en visio",
        "Analyse psychologique approfondie",
        "Accès direct à moi par WhatsApp",
        "Review illimitée de vos trades",
        "Strategies avancées exclusives",
        "Gestion de risque sur mesure",
        "Certification TradingGold Pro"
      ],
      popular: true,
      color: "gold"
    },
    {
      id: 3,
      name: "Coaching Elite",
      price: "2,997",
      duration: "6 mois",
      sessions: "24 sessions",
      bestFor: "Traders sérieux visant le trading à temps plein",
      features: [
        "Tout du Coaching Pro",
        "24 sessions de 1h en visio",
        "Mentoring individuel intensif",
        "Accès à mes propres trades en direct",
        "Développement de stratégie exclusive",
        "Support 24/7 en période de marché",
        "Session de trading en direct ensemble",
        "Optimisation fiscale et comptable",
        "Accès vie à la communauté Elite"
      ],
      popular: false,
      color: "premium"
    }
  ];

  const successStories = [
    {
      name: "Marc L.",
      result: "+215% en 6 mois",
      text: "Le coaching Pro a transformé ma approche. J'ai enfin une méthode systématique et je suis rentable depuis 4 mois consécutifs !",
      before: "Perdant régulier",
      after: "Trader professionnel"
    },
    {
      name: "Sophie D.",
      result: "De 0 à 3,500€/mois",
      text: "Grès au coaching, j'ai quitté mon job et je vis maintenant du trading. La discipline apprise a tout changé.",
      before: "Salariée",
      after: "Trader indépendante"
    },
    {
      name: "Thomas P.",
      result: "-75% d'erreurs",
      text: "L'accompagnement personnalisé m'a permis d'identifier mes faiblesses psychologiques. Mon taux de réussite est passé de 45% à 68%.",
      before: "Trading émotionnel",
      after: "Trading discipliné"
    }
  ];

  const coaches = [
    {
      name: "Alexandre Mercure",
      expertise: "Expert Forex & Indices",
      experience: "12 ans de trading",
      specialty: "Psychologie du trader & gestion de risque",
      students: "850+ traders coachés",
      image: "/src/assets/coaches/alexandre.jpg"
    },
    {
      name: "Dr. Sarah Benoit",
      expertise: "PhD en Finance Comportementale",
      experience: "8 ans de coaching",
      specialty: "Mindset & performance trading",
      students: "620+ traders transformés",
      image: "/src/assets/coaches/sarah.jpg"
    },
    {
      name: "Michael Goldstein",
      expertise: "Prop Trading Veteran",
      experience: "15 ans en salle de marché",
      specialty: "Stratégies institutionnelles",
      students: "450+ traders professionnels",
      image: "/src/assets/coaches/michael.jpg"
    }
  ];

  const openModal = (program) => {
    setSelectedProgram(program);
    setShowModal(true);
  };

  return (
    <div className="coaching-page">
      {/* Hero Section */}
      <section className="coaching-hero">
        <div className="container">
          <div className="coaching-hero-content">
            <h1>
              Coaching Trading <span className="hero-gold">Personnalisé</span>
            </h1>
            <p className="coaching-subtitle">
              Transformez votre trading avec un accompagnement <strong>sur mesure</strong> par des experts ayant formé des milliers de traders rentables
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">94%</span>
                <span className="stat-label">de réussite</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1,920+</span>
                <span className="stat-label">traders coachés</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2.7x</span>
                <span className="stat-label">performance moyenne</span>
              </div>
            </div>
            <div className="hero-actions">
              <button 
                className="btn btn-primary"
                onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })}
              >
                📈 Découvrir les programmes
              </button>
              <a href="#success" className="btn btn-outline">
                👁️ Voir les réussites
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="container">
          <h2>Vous reconnaissez-vous dans ces situations ?</h2>
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon">😫</div>
              <h3>Vous stagnez malgré les formations</h3>
              <p>Vous avez suivi des formations mais vous n'arrivez pas à être constant dans vos résultats</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">😰</div>
              <h3>L'émotion prend le dessus</h3>
              <p>Peur, greed, frustration... Vos émotions sabotent votre stratégie</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">🤔</div>
              <h3>Vous doutez de votre méthode</h3>
              <p>Vous changez constamment de stratégie sans trouver celle qui vous convient</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">💸</div>
              <h3>Les mêmes erreurs coûtent cher</h3>
              <p>Vous répétez les mêmes patterns perdants sans comprendre pourquoi</p>
            </div>
          </div>
          <div className="solution-cta">
            <h3>La solution : Un coaching <span className="gold-text">100% personnalisé</span></h3>
            <p>Nous identifions vos blocages spécifiques et créons un plan d'action sur mesure</p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="programs-section">
        <div className="container">
          <div className="section-title">
            <h2>Choisissez Votre Programme de Coaching</h2>
            <p>Des solutions adaptées à chaque niveau et objectif</p>
          </div>
          
          <div className="programs-grid">
            {coachingPrograms.map((program) => (
              <div 
                key={program.id} 
                className={`program-card ${program.popular ? 'popular' : ''} ${program.color}`}
              >
                {program.popular && <div className="popular-badge">⭐ PLUS POPULAIRE</div>}
                
                <div className="program-header">
                  <h3>{program.name}</h3>
                  <div className="program-price">
                    <span className="price">{program.price}€</span>
                    <span className="duration">/{program.duration}</span>
                  </div>
                  <p className="sessions">{program.sessions}</p>
                </div>

                <div className="program-bestfor">
                  <strong>Idéal pour :</strong> {program.bestFor}
                </div>

                <ul className="program-features">
                  {program.features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>

                <div className="program-actions">
                  <button 
                    className="btn btn-primary full-width"
                    onClick={() => openModal(program)}
                  >
                    Réserver maintenant
                  </button>
                  <button className="btn btn-outline full-width">
                    📞 Demander un appel découverte
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="coaches-section">
        <div className="container">
          <div className="section-title">
            <h2>Vos Experts Coachs</h2>
            <p>Des professionnels expérimentés pour vous guider vers l'excellence</p>
          </div>
          
          <div className="coaches-grid">
            {coaches.map((coach, index) => (
              <div key={index} className="coach-card">
                <div className="coach-image">
                  <div className="coach-image-placeholder">
                    <span className="placeholder-icon">👨‍🏫</span>
                  </div>
                </div>
                <div className="coach-info">
                  <h3>{coach.name}</h3>
                  <p className="coach-expertise">{coach.expertise}</p>
                  <p className="coach-experience">{coach.experience}</p>
                  <p className="coach-specialty"><strong>Spécialité :</strong> {coach.specialty}</p>
                  <p className="coach-students">{coach.students}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success" className="success-section">
        <div className="container">
          <div className="section-title">
            <h2>Ils ont transformé leur trading</h2>
            <p>Des résultats concrets grâce à notre accompagnement personnalisé</p>
          </div>
          
          <div className="success-grid">
            {successStories.map((story, index) => (
              <div key={index} className="success-card">
                <div className="success-result">{story.result}</div>
                <p className="success-text">"{story.text}"</p>
                <div className="success-author">
                  <strong>{story.name}</strong>
                  <div className="success-transformation">
                    <span className="before">{story.before}</span>
                    <span className="arrow">→</span>
                    <span className="after">{story.after}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <h2>Prêt à écrire votre propre success story ?</h2>
          <p>Rejoignez les traders qui ont déjà transformé leur carrière grâce à notre coaching personnalisé</p>
          <div className="cta-actions">
            <button className="btn btn-primary large">
              🚀 Commencer mon coaching
            </button>
            <button className="btn btn-outline large">
              📅 Réserver un appel diagnostic gratuit
            </button>
          </div>
          <div className="guarantee">
            <strong>✅ Garantie Satisfait ou Remboursé 30 jours</strong>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && selectedProgram && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
            <h2>Inscription au {selectedProgram.name}</h2>
            <div className="modal-program-info">
              <div className="modal-price">{selectedProgram.price}€</div>
              <p className="modal-duration">{selectedProgram.duration} • {selectedProgram.sessions}</p>
            </div>
            <form className="coaching-form">
              <div className="form-group">
                <label>Nom complet</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" required />
              </div>
              <div className="form-group">
                <label>Téléphone</label>
                <input type="tel" required />
              </div>
              <div className="form-group">
                <label>Niveau de trading actuel</label>
                <select required>
                  <option value="">Sélectionnez...</option>
                  <option value="debutant">Débutant</option>
                  <option value="intermediaire">Intermédiaire</option>
                  <option value="avance">Avancé</option>
                </select>
              </div>
              <div className="form-group">
                <label>Vos objectifs principaux</label>
                <textarea rows="3" placeholder="Ex: Devenir rentable, gérer mes émotions, développer une stratégie solide..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary full-width">
                📋 Finaliser mon inscription - {selectedProgram.price}€
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Coaching;