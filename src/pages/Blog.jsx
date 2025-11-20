import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Blog.css'
import Logo from '../components/Logo'
import ProfessionalFooter from '../components/ProfessionalFooter'

const Blog = () => {
  const [theme, setTheme] = useState('light')
  const [activeCategory, setActiveCategory] = useState('tous')
  const [searchTerm, setSearchTerm] = useState('')

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

  // Catégories du blog
  const categories = [
    { id: 'tous', name: 'Tous les articles', count: 12 },
    { id: 'analyses', name: 'Analyses Marché', count: 5 },
    { id: 'strategies', name: 'Stratégies Trading', count: 4 },
    { id: 'formations', name: 'Conseils Formation', count: 3 },
    { id: 'psychologie', name: 'Psychologie Trading', count: 2 }
  ]

  // Données des articles (simulées - seront remplacées par l'API admin)
  const articles = [
    {
      id: 1,
      title: "Analyse Forex : Les paires majeures sous pression cette semaine",
      excerpt: "Découvrez notre analyse technique des principales paires de devises et les niveaux clés à surveiller pour les prochains jours...",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
      image: "/src/assets/blog/forex-analysis.jpg",
      category: "analyses",
      author: "Jean Trader",
      date: "15 Jan 2024",
      readTime: "5 min",
      featured: true,
      tags: ["Forex", "Analyse Technique", "Devises"]
    },
    {
      id: 2,
      title: "Stratégie de Scalping sur Indices Synthétiques",
      excerpt: "Apprenez une méthode de scalping efficace sur le Volatility 75 Index avec des exemples concrets et des backtests...",
      content: "Cette stratégie de scalping a été testée sur plus de 1000 trades avec un taux de réussite de 72%. Les points d'entrée sont basés sur...",
      image: "/src/assets/blog/scalping-strategy.jpg",
      category: "strategies",
      author: "Marie ProTrader",
      date: "12 Jan 2024",
      readTime: "8 min",
      featured: true,
      tags: ["Scalping", "V75", "Stratégie"]
    },
    {
      id: 3,
      title: "Comment Gérer ses Émotions en Trading",
      excerpt: "La psychologie représente 80% du succès en trading. Découvrez nos techniques pour maîtriser vos émotions...",
      content: "La gestion des émotions est cruciale pour tout trader. Voici 5 techniques éprouvées pour rester discipliné...",
      image: "/src/assets/blog/psychology-trading.jpg",
      category: "psychologie",
      author: "Dr. Sophie Mind",
      date: "10 Jan 2024",
      readTime: "6 min",
      featured: false,
      tags: ["Psychologie", "Discipline", "Gestion"]
    },
    {
      id: 4,
      title: "Nouveautés Crypto : Bitcoin et Altcoins en vue",
      excerpt: "Analyse complète du marché crypto avec les tendances Bitcoin et les altcoins prometteurs à surveiller...",
      content: "Le marché crypto montre des signes de reprise intéressants. Bitcoin teste des niveaux clés tandis que...",
      image: "/src/assets/blog/crypto-update.jpg",
      category: "analyses",
      author: "Crypto Expert",
      date: "8 Jan 2024",
      readTime: "7 min",
      featured: false,
      tags: ["Crypto", "Bitcoin", "Altcoins"]
    },
    {
      id: 5,
      title: "Guide du Débutant : Les Bases du Money Management",
      excerpt: "Tout ce que vous devez savoir sur la gestion de capital pour protéger votre compte trading...",
      content: "Le money management est la clé de la survie à long terme. Découvrez les règles essentielles...",
      image: "/src/assets/blog/money-management.jpg",
      category: "formations",
      author: "Coach Trading",
      date: "5 Jan 2024",
      readTime: "4 min",
      featured: false,
      tags: ["Débutant", "Money Management", "Risque"]
    },
    {
      id: 6,
      title: "Webinaire Replay : Trading de Session Londres",
      excerpt: "Revivez notre webinaire sur les opportunités de trading durant la session de Londres avec analyses en direct...",
      content: "Dans ce webinaire, nous avons couvert les setups les plus profitables durant l'ouverture de Londres...",
      image: "/src/assets/blog/webinar-replay.jpg",
      category: "formations",
      author: "Équipe TradingGold",
      date: "3 Jan 2024",
      readTime: "12 min",
      featured: false,
      tags: ["Webinaire", "Londres", "Live Trading"]
    }
  ]

  // Articles vedettes
  const featuredArticles = articles.filter(article => article.featured)

  // Filtrage des articles
  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'tous' || article.category === activeCategory
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="blog-page">
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
      <section className="blog-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Blog TradingGold</h1>
            <p>Analyses de marché, stratégies trading et conseils experts pour booster votre performance</p>
            
          </div>
        </div>
      </section>

      <main className="blog-main">
        <div className="container">
          <div className="blog-layout">
            {/* Sidebar */}
            <aside className="blog-sidebar">
              {/* Catégories */}
              <div className="sidebar-widget">
                <h3>Catégories</h3>
                <div className="categories-list">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      <span className="category-name">{category.name}</span>
                      <span className="category-count">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Articles populaires */}
              <div className="sidebar-widget">
                <h3>Articles Populaires</h3>
                <div className="popular-articles">
                  {featuredArticles.slice(0, 3).map(article => (
                    <Link key={article.id} to={`/blog/${article.id}`} className="popular-article">
                      <div className="popular-image">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.nextSibling.style.display = 'flex'
                          }}
                        />
                        <div className="image-fallback">
                          <span>📝</span>
                        </div>
                      </div>
                      <div className="popular-content">
                        <h4>{article.title}</h4>
                        <div className="article-meta">
                          <span>{article.date}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="sidebar-widget newsletter-widget">
                <h3>Newsletter Trading</h3>
                <p>Recevez nos analyses et opportunités de trading directement dans votre boîte mail</p>
                <form className="newsletter-form">
                  <input 
                    type="email" 
                    placeholder="Votre email" 
                    className="newsletter-input"
                  />
                  <button type="submit" className="btn btn-primary btn-full">
                    S'abonner
                  </button>
                </form>
              </div>
            </aside>

            {/* Contenu principal */}
            <div className="blog-content">
              {/* Articles vedettes */}
              {featuredArticles.length > 0 && (
                <section className="featured-section">
                  <h2>Articles Vedettes</h2>
                  <div className="featured-grid">
                    {featuredArticles.map(article => (
                      <article key={article.id} className="featured-article">
                        <div className="article-image">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            onError={(e) => {
                              e.target.style.display = 'none'
                              e.target.nextSibling.style.display = 'flex'
                            }}
                          />
                          <div className="image-fallback">
                            <span>📊</span>
                          </div>
                          <div className="article-badge">Vedette</div>
                        </div>
                        <div className="article-content">
                          <div className="article-category">{categories.find(cat => cat.id === article.category)?.name}</div>
                          <h3>{article.title}</h3>
                          <p>{article.excerpt}</p>
                          <div className="article-meta">
                            <div className="author-info">
                              <span className="author-avatar">👤</span>
                              <span>{article.author}</span>
                            </div>
                            <div className="meta-info">
                              <span>{article.date}</span>
                              <span>•</span>
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                          <div className="article-tags">
                            {article.tags.map(tag => (
                              <span key={tag} className="tag">{tag}</span>
                            ))}
                          </div>
                          <Link to={`/blog/${article.id}`} className="read-more">
                            Lire l'article →
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              )}

              {/* Tous les articles */}
              <section className="articles-section">
                <div className="section-header">
                  <h2>
                    {activeCategory === 'tous' ? 'Tous les Articles' : 
                     categories.find(cat => cat.id === activeCategory)?.name}
                  </h2>
                  <span className="results-count">{filteredArticles.length} article(s)</span>
                </div>

                <div className="articles-grid">
                  {filteredArticles.map(article => (
                    <article key={article.id} className="article-card">
                      <div className="article-image">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.nextSibling.style.display = 'flex'
                          }}
                        />
                        <div className="image-fallback">
                          <span>📝</span>
                        </div>
                      </div>
                      <div className="article-content">
                        <div className="article-category">{categories.find(cat => cat.id === article.category)?.name}</div>
                        <h3>{article.title}</h3>
                        <p>{article.excerpt}</p>
                        <div className="article-meta">
                          <div className="author-info">
                            <span className="author-avatar">👤</span>
                            <span>{article.author}</span>
                          </div>
                          <div className="meta-info">
                            <span>{article.date}</span>
                            <span>•</span>
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                        <div className="article-tags">
                          {article.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="tag">{tag}</span>
                          ))}
                          {article.tags.length > 2 && (
                            <span className="tag-more">+{article.tags.length - 2}</span>
                          )}
                        </div>
                        <Link to={`/blog/${article.id}`} className="read-more">
                          Lire la suite
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>

                {filteredArticles.length === 0 && (
                  <div className="no-results">
                    <div className="no-results-icon">🔍</div>
                    <h3>Aucun article trouvé</h3>
                    <p>Essayez de modifier vos critères de recherche ou de sélectionner une autre catégorie</p>
                    <button 
                      className="btn btn-outline"
                      onClick={() => {
                        setSearchTerm('')
                        setActiveCategory('tous')
                      }}
                    >
                      Voir tous les articles
                    </button>
                  </div>
                )}
              </section>
            </div>
          </div>
        </div>
      </main>

      <ProfessionalFooter />
    </div>
  )
}

export default Blog