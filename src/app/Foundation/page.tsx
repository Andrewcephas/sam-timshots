'use client'

import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './page.module.css'

const initiatives = [
  { title: 'Education Support', desc: 'Providing educational resources and support to underprivileged communities.', icon: '📚' },
  { title: 'Youth Empowerment', desc: 'Empowering young people with skills and opportunities for growth.', icon: '🌟' },
  { title: 'Healthcare Access', desc: 'Improving access to healthcare services for those in need.', icon: '🏥' },
  { title: 'Community Development', desc: 'Building stronger communities through sustainable programs.', icon: '🏘️' },
]

export default function Foundation() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className={styles.main}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>OBTV Foundation</h1>
          <p>Making a difference in communities across Kenya</p>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <h2>About Our Foundation</h2>
              <p>At OBTV Foundation, we believe in giving back to the community that has supported us. Our mission is to create positive change and improve the lives of those in need through various social initiatives.</p>
              <p>Since our inception, we've been committed to making a lasting impact in education, healthcare, youth empowerment, and community development.</p>
            </div>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>5000+</span>
                <span className={styles.statLabel}>Students Supported</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>100+</span>
                <span className={styles.statLabel}>Communities Reached</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Programs Run</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>Ksh 10M+</span>
                <span className={styles.statLabel}>Funds Raised</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.initiatives}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Our Initiatives</h2>
            <p>The areas we focus on</p>
          </div>
          <div className={styles.initiativesGrid}>
            {initiatives.map((initiative, index) => (
              <div key={index} className={styles.initiativeCard}>
                <span className={styles.initiativeIcon}>{initiative.icon}</span>
                <h3>{initiative.title}</h3>
                <p>{initiative.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Partner With Us</h2>
          <p>Join us in making a difference. Your support can change lives.</p>
          <a href="mailto:foundation@obtvstudios.com" className="btn btn-primary">Get In Touch</a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
