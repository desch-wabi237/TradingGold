import React from 'react'
import './VideoSection.css'

const VideoSection = () => {
  const videos = [
    {
      id: 1,
      title: "Analyse Marché Quotidienne",
      description: "Revue complète des opportunités trading du jour",
      duration: "15:30",
      thumbnail: "/src/assets/videos/tech.png",
      youtubeId: "ZYCw60V9PQk" // Exemple ID YouTube
    },
    {
      id: 2,
      title: "Session Live Trading",
      description: "Trading en direct avec explications en temps réel",
      duration: "45:22",
      thumbnail: "/src/assets/videos/osh.png",
      youtubeId: "dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Masterclass Gestion de Risque",
      description: "Techniques avancées de money management",
      duration: "28:15",
      thumbnail: "/src/assets/videos/fg.png",
      youtubeId: "tgpV6v-_BQg"
    }
  ]

  return (
    <section className="video-section">
      <div className="container">
        <div className="section-title">
          <h2>Contenu Vidéo Exclusif</h2>
          <p>Apprenez grâce à nos analyses et sessions de trading en direct</p>
        </div>
        
        <div className="video-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-card">
              <div className="video-thumbnail">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="thumbnail-placeholder">
                  <div className="play-icon">▶</div>
                  <span>Miniature vidéo</span>
                </div>
                <div className="video-duration">{video.duration}</div>
              </div>
              
              <div className="video-info">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <button className="btn btn-outline watch-btn">
                  ▶ Regarder
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="video-cta">
          <h3>Rejoignez notre chaîne YouTube</h3>
          <p>Accédez à +100 heures de contenu gratuit</p>
          <a href="https://www.youtube.com/@FonguiDollar" className="btn btn-primary">
            📺 Voir la chaîne
          </a>
        </div>
      </div>
    </section>
  )
}

export default VideoSection