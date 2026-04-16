'use client'

import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './page.module.css'
import images from '../assets'
const videoThumbnails = images.videoThumbnails

function Image({ src, alt, width, height }: { src: string, alt: string, width?: number, height?: number }) {
  return <img src={src} alt={alt} style={{ width, height, objectFit: 'cover' }} />
}

const videos = [
  { id: 1, title: 'Obinna Show Live - Latest Episode', thumbnail: videoThumbnails.latest, duration: '1:23:45', views: '15K' },
  { id: 2, title: 'Fridah and Lofty Interview', thumbnail: videoThumbnails.interview, duration: '45:30', views: '8K' },
  { id: 3, title: 'Mic Cheque Podcast', thumbnail: videoThumbnails.podcast, duration: '1:10:20', views: '12K' },
  { id: 4, title: 'Hoch Muhoro Comedy Special', thumbnail: videoThumbnails.comedy, duration: '32:15', views: '20K' },
  { id: 5, title: 'Willy Paul Performance', thumbnail: videoThumbnails.performance, duration: '15:45', views: '25K' },
  { id: 6, title: 'Entertainment News Update', thumbnail: videoThumbnails.studio, duration: '22:10', views: '5K' },
]

export default function Watch() {
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
          <h1>Watch</h1>
          <p>Catch all our latest shows, interviews, and content</p>
        </div>
      </section>

      <section className={styles.videos}>
        <div className={styles.container}>
          <div className={styles.videoGrid}>
            {videos.map((video) => (
              <div key={video.id} className={styles.videoCard}>
                <div className={styles.thumbnail}>
                  <Image 
                    src={video.thumbnail}
                    alt={video.title}
                    width={400}
                    height={250}
                  />
                  <span className={styles.duration}>{video.duration}</span>
                  <div className={styles.playButton}>▶</div>
                </div>
                <div className={styles.videoInfo}>
                  <h3>{video.title}</h3>
                  <span className={styles.views}>{video.views} views</span>
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