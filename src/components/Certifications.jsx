import { motion } from 'framer-motion';
import './Certifications.css';

const certifications = [
  { 
    name: 'GMP Certified', 
    description: 'Good Manufacturing Practices certification',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=200&fit=crop'
  },
  { 
    name: 'ISO Certified', 
    description: 'International Organization for Standardization',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=300&h=200&fit=crop'
  },
  { 
    name: 'WHO-GMP', 
    description: 'World Health Organization standards',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop'
  },
  { 
    name: 'FSSAI Approved', 
    description: 'Food Safety and Standards Authority of India',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop'
  },
  { 
    name: 'AYUSH Licensed', 
    description: 'Ayurveda, Yoga & Naturopathy, Unani, Siddha, Homoeopathy',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop'
  },
  { 
    name: 'Halal Certified', 
    description: 'Halal certification for global markets',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop'
  }
];

const Certifications = () => {
  return (
    <section className="section certifications">
      <div className="container">
        <div className="section-header">
          <span className="section-subhead">Certifications</span>
          <h2 className="section-title">Trusted Quality Standards</h2>
          <p className="section-subtitle">
            Our products meet the highest international quality and safety standards
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="cert-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="cert-image">
                <img src={cert.image} alt={cert.name} />
              </div>
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-desc">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      </section>
  );
};

export default Certifications;
