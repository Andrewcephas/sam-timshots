'use client'

import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './page.module.css'

function Image({ src, alt, width, height }: { src: string, alt: string, width?: number, height?: number }) {
  return <img src={src} alt={alt} style={{ width, height, objectFit: 'cover' }} />
}

const talentRoster = [
  { id: 1, name: 'Oga Obinna', role: 'Host/MC', image: 'https://i0.wp.com/obinnatvstudios.com/wp-content/uploads/2025/01/obinna-profile.jpg?fit=1059%2C1059&ssl=1', category: 'Host' },
  { id: 2, name: 'Fridah Mwaka', role: 'Content Creator', image: 'https://i0.wp.com/obinnatvstudios.com/wp-content/uploads/2026/02/IMG_9197-scaled.jpg?fit=768%2C1152&ssl=1', category: 'Creator' },
  { id: 3, name: 'Lofty Matambo', role: 'Comedian', image: 'https://i0.wp.com/obinnatvstudios.com/wp-content/uploads/2026/02/IMG_9197-scaled.jpg?fit=768%2C1152&ssl=1', category: 'Comedy' },
  { id: 4, name: 'Hoch Muhoro', role: 'Comedian', image: 'https://i0.wp.com/obinnatvstudios.com/wp-content/uploads/2026/02/IMG_4305-scaled.jpg?fit=768%2C512&ssl=1', category: 'Comedy' },
  { id: 5, name: 'Mic Cheque', role: 'Podcaster', image: 'https://i0.wp.com/obinnatvstudios.com/wp-content/uploads/2026/01/IMG_3810-scaled.jpg?fit=768%2C512&ssl=1', category: 'Podcast' },
  { id: 6, name: 'Willy Paul', role: 'Musician', image: 'https://i0.wp.com/obinnatvstudios.com/wp-content/uploads/2025/02/Willy-Paul-msafi.jpg?fit=962%2C630&ssl=1', category: 'Music' },
]

const services = [
  { title: 'Content Production', desc: 'From scripting to shooting, we create content that resonates with your audience.' },
  { title: 'Studio Rentals', desc: 'Flexible, fully-equipped studio space for all your production needs.' },
  { title: 'Event Coverage', desc: 'Professional live or recorded coverage for events.' },
  { title: 'Talent Management', desc: 'Access a roster of exceptional talent to bring charisma to your project.' },
]

export default function BookTalent() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    talentNeeded: '',
    message: ''
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  if (!mounted) return null

  return (
    <main className={styles.main}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Book Talent</h1>
          <p>Connect with top Kenyan talent for your next event or project</p>
        </div>
      </section>

      <section className={styles.talent}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Our Talent Roster</h2>
            <p>Browse our extensive catalog of talented performers and creators</p>
          </div>
          <div className={styles.talentGrid}>
            {talentRoster.map((talent) => (
              <div key={talent.id} className={styles.talentCard}>
                <div className={styles.talentImage}>
                  <Image 
                    src={talent.image}
                    alt={talent.name}
                    width={300}
                    height={300}
                  />
                </div>
                <div className={styles.talentInfo}>
                  <span className={styles.category}>{talent.category}</span>
                  <h3>{talent.name}</h3>
                  <span className={styles.role}>{talent.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Our Services</h2>
            <p>What we offer</p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.form}>
        <div className={styles.container}>
          <div className={styles.formGrid}>
            <div className={styles.formContent}>
              <h2>Get In Touch</h2>
              <p>Fill out the form and we'll connect you with the perfect talent for your event.</p>
            </div>
            <form className={styles.bookingForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label>Name</label>
                <input 
                  type="text" 
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Email</label>
                <input 
                  type="email" 
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Phone</label>
                <input 
                  type="tel" 
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Event Type</label>
                <select 
                  value={formData.eventType}
                  onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                >
                  <option value="">Select event type</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="wedding">Wedding</option>
                  <option value="concert">Concert</option>
                  <option value="podcast">Podcast</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Talent Needed</label>
                <select 
                  value={formData.talentNeeded}
                  onChange={(e) => setFormData({...formData, talentNeeded: e.target.value})}
                >
                  <option value="">Select talent type</option>
                  <option value="host">Host/MC</option>
                  <option value="comedian">Comedian</option>
                  <option value="musician">Musician</option>
                  <option value="podcaster">Podcaster</option>
                  <option value="influencer">Influencer</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Message</label>
                <textarea 
                  placeholder="Tell us about your event..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <button type="submit" className="btn btn-primary">Submit Request</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
