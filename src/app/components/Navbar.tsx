'use client'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/watch', label: 'Watch' },
  { to: '/news', label: 'News' },
  { to: '/about', label: 'About Us' },
  { to: '/book-talent', label: 'Book Talent' },
  { to: '/Foundation', label: 'Foundation' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <svg width="180" height="50" viewBox="0 0 180 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="5" y="35" fill="#1a1a1a" fontSize="24" fontWeight="700" fontFamily="Poppins">OBTV STUDIOS</text>
          </svg>
        </Link>

        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </div>

        <Link to="/book-talent" className={styles.ctaButton}>
          Get Started
        </Link>

        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <Link 
              key={link.to} 
              to={link.to} 
              className={styles.mobileLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            to="/book-talent" 
            className={styles.mobileCta}
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}