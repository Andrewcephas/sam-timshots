'use client'

import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './page.module.css'
import images from '../assets'
const heroImages = images.heroImages
const newsImages = images.newsImages
const videoThumbnails = images.videoThumbnails

function Image({ src, alt, width, height }: { src: string, alt: string, width?: number, height?: number }) {
  return <img src={src} alt={alt} style={{ width, height, objectFit: 'cover' }} />
}

const talentItems = [
  { id: 1, name: 'Oga Obinna', role: 'Host/MC', image: heroImages.obinnaProfile, category: 'Host' },
  { id: 2, name: 'Fridah Mwaka', role: 'Content Creator', image: newsImages.FridaLofty, category: 'Creator' },
  { id: 3, name: 'Lofty Matambo', role: 'Comedian', image: newsImages.FridaLofty, category: 'Comedy' },
  { id: 4, name: 'Hoch Muhoro', role: 'Comedian', image: newsImages.HochMuhoro, category: 'Comedy' },
  { id: 5, name: 'Mic Cheque', role: 'Podcaster', image: videoThumbnails.podcast, category: 'Podcast' },
  { id: 6, name: 'Willy Paul', role: 'Musician', image: heroImages.willyPaul, category: 'Music' },
]

export default function BookTalent() {
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
          <h1>Book Talent</h1>
          <p>Get the best talent for your events and projects</p>
        </div>
      </section>

      <section className={styles.talent}>
        <div className={styles.container}>
          <div className={styles.talentGrid}>
            {talentItems.map((person) => (
              <div key={person.id} className={styles.talentCard}>
                <div className={styles.talentImage}>
                  <Image 
                    src={person.image}
                    alt={person.name}
                    width={400}
                    height={400}
                  />
                </div>
                <div className={styles.talentInfo}>
                  <span className={styles.category}>{person.category}</span>
                  <h3>{person.name}</h3>
                  <span className={styles.role}>{person.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}