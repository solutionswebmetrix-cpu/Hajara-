import { motion } from 'framer-motion';
import { FiAward, FiGlobe, FiStar, FiPackage } from 'react-icons/fi';
import './AboutCompany.css';

const AboutCompany = () => {
  const achievements = [
    { icon: <FiAward />, title: 'GMP Certified', desc: 'Quality manufacturing standards' },
    { icon: <FiGlobe />, title: 'Global Exporter', desc: '20+ countries served' },
    { icon: <FiStar />, title: '500+ Dealers', desc: 'Strong distribution network' },
    { icon: <FiPackage />, title: '100+ Products', desc: 'Comprehensive product range' }
  ];

  const timeline = [
    { year: '2009', title: 'Company Founded', desc: 'Started with Ayurvedic medicine manufacturing' },
    { year: '2014', title: 'GMP Certification', desc: 'International quality standards achieved' },
    { year: '2018', title: 'Global Export', desc: 'Expanded to 10+ countries' },
    { year: '2024', title: 'Premium Brand', desc: 'Serving 20+ countries with 100+ products' }
  ];

  const facilities = [
    { img: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=500&h=400&fit=crop', title: 'Manufacturing Facility', desc: 'Advanced production unit' },
    { img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=400&fit=crop', title: 'Quality Testing Lab', desc: 'Rigorous quality checks' },
    { img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=400&fit=crop', title: 'Packaging Unit', desc: 'Premium packaging solutions' }
  ];

  return (
    <section className="section about-company" id="about">
      <div className="about-container">
        <div className="section-header">
          <span className="section-subhead">About Us</span>
          <h2 className="section-title">Pioneering Ayurvedic Excellence Since 2009</h2>
        </div>

        <div className="about-main">
          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1587384648348-941673165184?w=800&h=600&fit=crop"
              alt="Manufacturing Factory"
              className="about-main-img"
            />
          </motion.div>

          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="about-heading">Our Journey of Excellence</h3>
            <p className="about-text">
              HAJARA MULTICARE was established in 2009 with a vision to bring authentic Ayurvedic healthcare products to the global market. Over the years, we have grown from a small manufacturing unit to a trusted name in the Ayurvedic industry, known for quality, innovation, and commitment to wellness.
            </p>
            <p className="about-text">
              Our state-of-the-art manufacturing facility follows strict GMP guidelines, ensuring every product meets international quality standards. We use pure, natural herbs sourced from trusted suppliers, and our formulations are backed by both traditional Ayurvedic knowledge and modern scientific research.
            </p>

            <div className="achievements-grid">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  className="achievement-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="achievement-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="facilities-section">
          <div className="facilities-grid">
            {facilities.map((item, index) => (
              <motion.div
                key={index}
                className="facility-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <img src={item.img} alt={item.title} className="facility-img" />
                <div className="facility-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="timeline-section">
          <h3 className="timeline-heading">Our Milestones</h3>
          <div className="timeline">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
