import React from 'react'
import './Logo.css'

const Logo = ({ size = 'medium', className = '' }) => {
  const getLogoSize = () => {
    switch(size) {
      case 'small': return 'logo-small'
      case 'large': return 'logo-large'
      default: return 'logo-medium'
    }
  }

  return (
    <div className={`logo ${getLogoSize()} ${className}`}>
      <div className="logo-icon">
        <div className="logo-gold-bar"></div>
        <div className="logo-chart"></div>
      </div>
      <div className="logo-text">
        <span className="logo-primary">Trading</span>
        <span className="logo-accent">Gold</span>
      </div>
    </div>
  )
}

export default Logo