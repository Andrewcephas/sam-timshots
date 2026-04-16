'use client'

import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './page.module.css'

function Image({ src, alt, width, height }: { src: string, alt: string, width?: number, height?: number }) {
  return <img src={src} alt={alt} style={{ width, height, objectFit: 'cover' }} />
}

export default function About() {
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
          <h1>About Us</h1>
          <p>Learn more about Obinnatv Studios and our mission</p>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImage}>
              <Image 
                src="https://i0.wp.com/obinnatvstudios.com/wp-content/uploads/2025/01/studio-bts-scaled.jpg?fit=2560%2C1440&ssl=1"
                alt="About Us"
                width={800}
                height={600}
              />
            </div>
            <div className={styles.aboutContent}>
              <h2>Who We Are</h2>
              <h3>Creating Content That Inspires and Engages</h3>
              <p>At Obinnatv Studios, we bring ideas to life. With a state-of-the-art facility and a passionate team, we deliver exceptional results for content creators, brands, and businesses. From studio rentals to full-scale production and talent management, we're your one-stop destination for creative excellence.</p>
              <ul className={styles.features}>
                <li>Cutting-edge equipment and facilities</li>
                <li>Experienced production team</li>
                <li>Flexible studio spaces</li>
                <li>Customized solutions for every project</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Our Values</h2>
          </div>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>Creativity</h3>
              <p>We push boundaries and explore new ideas to deliver unique content.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Professionalism</h3>
              <p>We maintain the highest standards in everything we do.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Innovation</h3>
              <p>We embrace new technologies and techniques to stay ahead.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Collaboration</h3>
              <p>We work closely with our clients to achieve shared goals.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Our Team</h2>
            <p>Meet the talented individuals behind our success</p>
          </div>
          <div className={styles.teamGrid}>
            <div className={styles.teamCard}>
              <Image 
                src="https://i0.wp.com/obinnatvstudios.com/wp-content/uploads/2025/01/obinna-profile.jpg?fit=1059%2C1059&ssl=1"
                alt="Oga Obinna"
                width={300}
                height={300}
              />
              <h3>Oga Obinna</h3>
              <span>Founder & CEO</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
