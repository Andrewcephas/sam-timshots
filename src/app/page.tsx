'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import styles from './page.module.css'

function Image({ src, alt, width, height, className }: { src: string, alt: string, width?: number, height?: number, className?: string }) {
  return <img src={src} alt={alt} className={className} style={{ width, height, objectFit: 'cover' }} />
}

const newsItems = [
  {
    id: 1,
    category: 'Uncategorized',
    title: 'Fridah and Lofty on Obinna Show Live',
    date: 'February 24, 2026',
    image: 'https://i0.wp.com/obinnatvstudios.com/wp-content/uploads/2026/02/IMG_9197-scaled.jpg?fit=768%2C1152&ssl=1'
  },
  {
    id: 2,
    category: 'Entertainment',
    title: 'The Epic Showdown: Majembe vs. Mbavu Destroyer',
    date: 'February 9, 2026',
    image: 'https://i0.wp.com/obinnatvstudios.com/wp-content/uploads/2026/02/Vurugu-Design.jpg-1.jpeg?fit=768%2C921&ssl=1'
  },
  {
    id: 3,
    category: 'Uncategorized',
    title: 'Hoch Muhoro on Obinna Show Live',
    date: 'February 9, 2026',
    image: 'https://i0.wp.com/obinnatvstudios.com/wp-content/uploads/2026/02/IMG_4305-scaled.jpg?fit=768%2C512&ssl=1'
  }
]

const services = [
  { icon: '🎬', title: 'Content Production', desc: 'From scripting to shooting, we create content that resonates with your audience and drives engagement.' },
  { icon: '🏠', title: 'Studio Rentals', desc: 'Flexible, fully-equipped studio space for all your production needs, from shoots to events.' },
  { icon: '🎤', title: 'Event Coverage', desc: 'Professional live or recorded coverage for events, ensuring every moment is captured beautifully.' },
  { icon: '⭐', title: 'Talent Management', desc: 'Access a roster of exceptional talent, including Oga Obinna, to bring charisma and energy to your project.' }
]

const features = [
  'Cutting-edge equipment and facilities',
  'Experienced production team',
  'Flexible studio spaces',
  'Customized solutions for every project'
]

const whyUs = [
  { title: 'Professional Expertise', desc: 'Our team combines years of experience in media production and storytelling to create impactful and memorable content.' },
  { title: 'Tailored Solutions', desc: 'We understand that every brand is unique. That\'s why we work closely with you to craft personalized strategies that align with your goals.' },
  { title: 'Wide Audience Reach', desc: 'Collaborate with us to connect with diverse audiences through compelling content that amplifies your brand\'s visibility and impact.' }
]

const brands = [
  'Hash Grill', 'Raha Premium', 'Zinco Mabati', 'Mozzart Bet', 
  'KCB', 'Wrap & Drive', 'Ride Wrap', 'Tsuku Tsuku',
  'Fervent Properties', 'Barber Kings', 'Cake City', 'Dignity Furniture',
  'Steam Energy', 'HLM Kenya', 'Chicking', 'Malaki Creamery',
  'Freez Kenya', 'KUPA', 'Safaricom', 'Sarova Hotels', 'Khetia Drapers'
]

const faqItems = [
  { q: 'How do I book talent through your platform?', a: 'Browse or contact us for our extensive talent catalog, choose the profile that best matches your needs, and fill out the booking form. We\'ll connect you with the talent to finalize details.' },
  { q: 'What types of talent can I book?', a: 'We offer a wide range of professionals, including musicians, comedians, speakers, MCs, influencers, dancers, and more. Whether you need entertainment for events or creative professionals for a campaign, we\'ve got you covered.' },
  { q: 'How much does it cost to book talent?', a: 'The cost varies depending on the talent\'s experience, availability, and your event requirements. Each talent profile includes pricing details or an option to request a quote.' },
  { q: 'Can I request specific talents not listed on your platform?', a: 'Absolutely! Let us know your requirements, and we\'ll assist in sourcing talent that matches your needs.' },
  { q: 'How are talents vetted?', a: 'We thoroughly vet all talents to ensure professionalism, experience, and quality. Our team reviews portfolios, references, and past work.' }
]

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.7, 
            delay: delay * 0.1, 
            ease: [0.34, 1.56, 0.64, 1]
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

import React from 'react'

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero Section - White background with 4 images in square pattern */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your Premier Destination for <span>Quality Content</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where creativity meets professionalism, and stories come to life.
          </motion.p>
          <motion.div 
            className={styles.heroButtons}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/about" className={`btn btn-primary ${styles.btnPrimary}`}>Discover</Link>
          </motion.div>
        </div>
        
        {/* 4 Images in 2x2 grid with asymmetric border radius */}
        <div className={styles.heroImageGrid}>
          <motion.div
            className={`${styles.heroImageItem} ${styles.heroImageTopLeft}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Image 
              src="https://i0.wp.com/obinnatvstudios.com/wp-content/uploads/2025/01/obinna-profile.jpg?fit=1059%2C1059&ssl=1"
              alt="Obinna Profile"
              className={styles.heroImg}
            />
          </motion.div>
          <motion.div
            className={`${styles.heroImageItem} ${styles.heroImageTopRight}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Image 
              src="https://i0.wp.com/obinnatvstudios.com/wp-content/uploads/2025/02/ethic-ent.jpg?fit=850%2C550&ssl=1"
              alt="Gallery 1"
              className={styles.heroImg}
            />
          </motion.div>
          <motion.div
            className={`${styles.heroImageItem} ${styles.heroImageBottomLeft}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Image 
              src="https://i0.wp.com/obinnatvstudios.com/wp-content/uploads/2025/02/dem-wa-fb.jpg?fit=1440%2C1440&ssl=1"
              alt="Gallery 2"
              className={styles.heroImg}
            />
          </motion.div>
          <motion.div
            className={`${styles.heroImageItem} ${styles.heroImageBottomRight}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Image 
              src="https://i0.wp.com/obinnatvstudios.com/wp-content/uploads/2025/02/Willy-Paul-msafi.jpg?fit=962%2C630&ssl=1"
              alt="Gallery 3"
              className={styles.heroImg}
            />
          </motion.div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className={styles.news}>
        <div className={styles.container}>
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <h2>Latest News</h2>
            </div>
          </AnimatedSection>
          <div className={styles.newsGrid}>
            {newsItems.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.1}>
                <div className={styles.newsCard}>
                  <div className={styles.newsImage}>
                    <Image 
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className={styles.newsContent}>
                    <span className={styles.newsCategory}>{item.category}</span>
                    <h3>{item.title}</h3>
                    <span className={styles.newsDate}>{item.date}</span>
                    <Link to="/news" className={styles.newsLink}>Read More →</Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Watch Section CTA */}
      <section className={styles.watchCta}>
        <div className={styles.container}>
          <AnimatedSection>
            <h3>Catch the latest from <span style={{color: '#fff'}}>Obinna<span style={{color: '#fe7f02'}}>tv</span> Studios</span></h3>
            <p>Always something new to watch! Get a sneak peek from our latest YouTube content right here. Click to dive into the full collection of videos, shows, and highlights on our dedicated Watch page.</p>
            <Link to="/watch" className="btn btn-primary">Watch Now</Link>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <AnimatedSection>
              <div className={styles.aboutImage}>
                <Image 
                  src="https://i0.wp.com/obinnatvstudios.com/wp-content/uploads/2025/01/studio-bts-scaled.jpg?fit=2560%2C1440&ssl=1"
                  alt="About Us"
                  width={800}
                  height={600}
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className={styles.aboutContent}>
                <h2>Who We Are</h2>
                <h3>Creating Content That Inspires and Engages</h3>
                <p>At Obinna<span style={{color: '#fe7f02', fontWeight: 500}}>tv</span> Studios, we bring ideas to life. With a state-of-the-art facility and a passionate team, we deliver exceptional results for content creators, brands, and businesses. From studio rentals to full-scale production and talent management, we're your one-stop destination for creative excellence.</p>
                <ul className={styles.featuresList}>
                  {features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section - Same cards with same animations */}
      <section className={styles.services}>
        <div className={styles.container}>
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <h2>What We Offer</h2>
              <h3>Our Services</h3>
              <p>Elevate your creative projects with our world-class production and studio services. Whether you're a content creator, brand, or business, Obinna<span style={{color: '#fe7f02', fontWeight: 500}}>tv</span> Studios is your partner in crafting impactful stories.</p>
            </div>
          </AnimatedSection>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <Link to="/book-talent" className={styles.servicesLink}>Explore All →</Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder Section */}
      <section className={styles.founder}>
        <div className={styles.container}>
          <div className={styles.founderGrid}>
            <AnimatedSection>
              <div className={styles.founderContent}>
                <h2>Founder</h2>
                <h3>Meet Oga Obinna</h3>
                <p>Oga Obinna is a multi-talented Kenyan entertainer and media personality known for his dynamic presence both on and off the screen. With a vibrant career spanning several creative fields, he wears many hats — content creator, MC, comedian, influencer, show host, and motivational speaker.</p>
                <p>Whether lighting up stages, inspiring audiences, or sharing his art with the world, Obinna brings energy, authenticity, and humor to everything he does.</p>
                <a href="https://www.ogaobinna.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Oga Obinna</a>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className={styles.founderImage}>
                <Image 
                  src="https://i0.wp.com/obinnatvstudios.com/wp-content/uploads/2025/02/obtv-bts-1.jpg?fit=1438%2C809&ssl=1"
                  alt="Founder"
                  width={800}
                  height={450}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <AnimatedSection>
            <h2>Expand Your Reach, Connect with the Right Audience</h2>
            <p>Leverage the power of influential voices to captivate and engage a diverse audience.</p>
            <Link to="/book-talent" className="btn btn-outline" style={{ background: '#fff', color: '#fe7f02' }}>Discover More</Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.whyUs}>
        <div className={styles.container}>
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <h2>Why Choose Obinnatv Studios?</h2>
              <h3>What Sets Us Apart?</h3>
            </div>
          </AnimatedSection>
          <div className={styles.whyUsGrid}>
            {whyUs.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className={styles.whyUsCard}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className={styles.brands}>
        <div className={styles.container}>
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <h2>Featured Brands</h2>
              <p>Thank you for working with us</p>
            </div>
          </AnimatedSection>
          <div className={styles.brandsGrid}>
            {brands.map((brand, index) => (
              <motion.div 
                key={index}
                className={styles.brandCard}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.faqGrid}>
            <AnimatedSection>
              <div className={styles.faqImage}>
                <Image 
                  src="https://i0.wp.com/obinnatvstudios.com/wp-content/uploads/2025/01/content-creation.jpg?fit=1155%2C770&ssl=1"
                  alt="FAQ"
                  width={800}
                  height={600}
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className={styles.faqContent}>
                <h2>Frequently Asked Questions</h2>
                <div className={styles.faqList}>
                  {faqItems.map((item, index) => (
                    <div 
                      key={index} 
                      className={`${styles.faqItem} ${openFaq === index ? styles.active : ''}`}
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                      <div className={styles.faqQuestion}>
                        {item.q}
                        <span>{openFaq === index ? '−' : '+'}</span>
                      </div>
                      <div className={styles.faqAnswer}>{item.a}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}