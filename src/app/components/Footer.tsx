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
  { href: 'https://facebook.com', label: 'Facebook', icon: 'f' },
  { href: 'https://youtube.com', label: 'YouTube', icon: 'yt' },
  { href: 'https://instagram.com', label: 'Instagram', icon: 'ig' },
  { href: 'https://tiktok.com', label: 'TikTok', icon: 'tt' },
  { href: 'https://twitter.com', label: 'X', icon: 'x' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="5" y="40" fill="#ffffff" fontSize="28" fontWeight="700" fontFamily="Poppins">OBTV STUDIOS</text>
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
                >
                  {social.label}
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
          <p>© 2026 Obinnatv Studios. All rights reserved.</p>
          <p className={styles.powered}>Powered by Pruid Solutions KE</p>
        </div>
      </div>
    </footer>
  )
}
