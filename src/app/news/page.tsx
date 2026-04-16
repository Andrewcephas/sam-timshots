'use client'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './page.module.css'

function Image({ src, alt, width, height }: { src: string, alt: string, width?: number, height?: number }) {
  return <img src={src} alt={alt} style={{ width, height, objectFit: 'cover' }} />
}

const newsItems = [
  {
    id: 1,
    category: 'Uncategorized',
    title: 'Fridah and Lofty on Obinna Show Live',
    date: 'February 24, 2026',
    excerpt: 'The dynamic duo of Fridah Mwaka and Lofty Matambo, affectionately known as "Mtu na Pacha Wake," lit up the screens on Obinna Show Live...',
    image: 'https://i0.wp.com/obinnatvstudios.com/wp-content/uploads/2026/02/IMG_9197-scaled.jpg?fit=768%2C1152&ssl=1'
  },
  {
    id: 2,
    category: 'Entertainment',
    title: 'The Epic Showdown: Majembe vs. Mbavu Destroyer – April 4, 2026',
    date: 'February 9, 2026',
    excerpt: 'Enter the much-anticipated showdown between Majembe Majembe and Mbavu Destroyer, set to unfold on April 4, 2026...',
    image: 'https://i0.wp.com/obinnatvstudios.com/wp-content/uploads/2026/02/Vurugu-Design.jpg-1.jpeg?fit=768%2C921&ssl=1'
  },
  {
    id: 3,
    category: 'Uncategorized',
    title: 'Hoch Muhoro on Obinna Show Live',
    date: 'February 9, 2026',
    excerpt: 'In a world where independence is often celebrated as the ultimate adult milestone, Kenyan comedian and content creator Hoch Muhoro is flipping the script...',
    image: 'https://i0.wp.com/obinnatvstudios.com/wp-content/uploads/2026/02/IMG_4305-scaled.jpg?fit=768%2C512&ssl=1'
  },
  {
    id: 4,
    category: 'Entertainment',
    title: 'Mic Cheque Podcast On Obinna Show Live',
    date: 'January 26, 2026',
    excerpt: 'The Mic Cheque Podcast crew lit up the Obinna Show Live screens in an episode that\'s pure fire - no scripts, no filters, just nonstop humour...',
    image: 'https://i0.wp.com/obinnatvstudios.com/wp-content/uploads/2026/01/IMG_3810-scaled.jpg?fit=768%2C512&ssl=1'
  }
]

export default function News() {
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
          <h1>News</h1>
          <p>Stay updated with the latest news and updates</p>
        </div>
      </section>

      <section className={styles.news}>
        <div className={styles.container}>
          <div className={styles.newsGrid}>
            {newsItems.map((item) => (
              <div key={item.id} className={styles.newsCard}>
                <div className={styles.newsImage}>
                  <Image 
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                  />
                </div>
                <div className={styles.newsContent}>
                  <span className={styles.category}>{item.category}</span>
                  <h3>{item.title}</h3>
                  <span className={styles.date}>{item.date}</span>
                  <p>{item.excerpt}</p>
                  <Link to="#" className={styles.readMore}>Read More →</Link>
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
