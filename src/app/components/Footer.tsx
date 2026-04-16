'use client'

import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/book-talent', label: 'Book Talent' },
  { to: '/watch', label: 'Watch' },
  { to: '/Foundation', label: 'Foundation' },
  { to: '/about', label: 'About Us' },
]

const companyLinks = [
  { to: '/about', label: 'About' },
  { to: '/about', label: 'Careers' },
  { to: '/about', label: 'Contact' },
  { to: '/about', label: 'Policy' },
]

const socialLinks = [
  { href: 'https://facebook.com', label: 'Facebook', icon: 'facebook' },
  { href: 'https://youtube.com', label: 'YouTube', icon: 'youtube' },
  { href: 'https://instagram.com', label: 'Instagram', icon: 'instagram' },
  { href: 'https://tiktok.com', label: 'TikTok', icon: 'tiktok' },
  { href: 'https://twitter.com', label: 'X', icon: 'twitter' },
]

const SocialIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'facebook':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 0h-3C8.4 0 0 8.4 0 15v3c0 3.3 2.7 6 6 6h3V24h-6v-9h-3v-3h3v-3c0-3.9 2.2-6 5.4-6h3v3h-2.6C12.4 9 12 10.4 12 12v3h5v6h-5c-3.3 0-6-2.7-6-6v-3c0-3.7 3-6.7 6.7-6.7h3v3H18z"/>
        </svg>
      )
    case 'youtube':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 15l5-3-5-3v6zM19.1 5.6c2.5 1.5 4.9 4.7 4.9 8.4s-2.4 6.9-4.9 8.4c-2.5 1.5-5.9 1.5-8.2 0-.7-.4-1.8-1.3-1.8-2.9V6.5c0-1.6 1.1-2.4 1.8-2.9 2.3-1.5 5.7-1.5 8.2 0 .7.4.8 1.3.8 2.9 0 1.6-1.1 2.5-1.8 2.9-.7.4-1.8.4-2.6 0l-2.7-1.5c-.1-.3-.4-.6-.8-.6s-.6.3-.6.6v3c0 .3.3.6.6.6s.6-.3.6-.6V8c0-1.6 1.1-2.4 1.8-2.9 2.3-1.5 5.7-1.5 8.2 0z"/>
        </svg>
      )
    case 'instagram':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c2.7 0 3 0 4.1.1 3 .1 4.5 1.5 4.6 4.6.1 1.1.1 1.4.1 4.3s0 3.2-.1 4.3c-.1 3-1.5 4.5-4.6 4.6-1.1.1-1.4.1-4.3.1s-3.2 0-4.3-.1c-2.7-.1-4.5-1.5-4.6-4.6-.1-1.1-.1-1.4-.1-4.3s0-3.2.1-4.3c.1-3 1.5-4.5 4.6-4.6 1.1-.1 1.4-.1 4.3-.1M12 0c-2.9 0-3.2 0-4.4.1-4 0-6.6 2.6-6.7 6.6-.1 1.2-.1 1.6-.1 4.4s0 3.2.1 4.4c.1 4 2.6 6.6 6.7 6.6 1.2.1 1.6.1 4.4.1s3.2 0 4.4-.1c4-.1 6.6-2.6 6.7-6.6.1-1.2.1-1.6.1-4.4s0-3.2-.1-4.4c-.1-4-2.6-6.6-6.7-6.6-1.2-.1-1.6-.1-4.4-.1z"/>
          <path d="M12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8 3.8 1.7 3.8 3.8-1.7 3.8-3.8 3.8z"/>
          <circle cx="18" cy="6" r="1.5" fill="currentColor"/>
        </svg>
      )
    case 'tiktok':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.5.4C9.7.4 7.3 2.3 5.9 4.9.4 7.3 2.3 9.7 4.9 11.1c1.4.9 3.3 1.1 4.8.8v3.7c-.8-.2-1.6-.1-2.4.2C5.6 16.7 4 19 4 22h3c0-2.2 1.6-4 3.8-4.3v9.3h3v-9.3c2.2-.3 3.8-2.1 3.8-4.3 0-1.6-.9-3-2.3-3.8.5-.5 1.3-.8 2.1-.8v-3c-1.3 0-2.5.6-3.3 1.6C11.7 1.6 10.3.4 12.5.4z"/>
        </svg>
      )
    case 'twitter':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-4.297-5.73-4.94 5.73H2.196l6.632-8.235L2.06 2.25h6.613l3.894 5.197 4.628-5.197zM5.175 1.113h2.415L19.05 22.887h-2.415l-6.765-9.023L5.175 1.113z"/>
        </svg>
      )
    default:
      return null
  }
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="5" y="40" fill="#1a1a1a" fontSize="28" fontWeight="700" fontFamily="Poppins">OBTV STUDIOS</text>
              </svg>
            </div>
            <p className={styles.tagline}>Where Ideas Meet the Spotlight.</p>
            <div className={styles.social}>
              {socialLinks.map((social) => (
                <a 
                  key={social.label} 
                  href={social.href} 
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Company</h4>
            <ul>
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Get In Touch</h4>
            <ul>
              <li>Obinnatv Studios</li>
              <li>Nairobi, Kenya</li>
              <li>info@obtvstudios.com</li>
              <li>+254 798 663936</li>
              <li>Mon - Fri: 9AM - 4:30PM</li>
              <li>Sat: 10AM - 4PM</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; 2026 Obinnatv Studios. All rights reserved.</p>
          <a href="https://catech.co.ke" target="_blank" rel="noopener noreferrer" className={styles.powered}>
            Powered by Catech Solutions & Graphics
          </a>
        </div>
      </div>
    </footer>
  )
}