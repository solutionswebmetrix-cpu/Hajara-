import { motion } from 'framer-motion'
import './About.css'
import aboutImage from '../assets/hero.png'

const About = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="page-title">About Us</motion.h1>
        </div>
      </section>
      
      <section className="section about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2 className="section-title" style={{ textAlign: 'left' }}>Our Story</h2>
              <p className="about-desc">
                HAJARA MULTICARE is dedicated to bringing the ancient wisdom of Ayurveda to modern healthcare. 
                We combine traditional knowledge with scientific research to create premium wellness products.
              </p>
              <p className="about-desc">
                Our mission is to provide natural, effective, and safe healthcare solutions that promote 
                holistic wellness for people around the world.
              </p>
            </div>
            <div className="about-image">
              <img src={aboutImage} alt="About Us" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
