import { motion } from 'framer-motion';
import './Certifications.css';
import gmpCert from '../assets/Certifications/GMP Certified.png';
import isoCert from '../assets/Certifications/ISO Certified.png';
import whoGmpCert from '../assets/Certifications/WHO-GMP.png';
import fssaiCert from '../assets/Certifications/FSSAI Approved.png';
import ayushCert from '../assets/Certifications/AYUSH Licensed.png';
import halalCert from '../assets/Certifications/Halal Certified.png';

const certifications = [
  { 
    name: 'GMP Certified', 
    description: 'Good Manufacturing Practices certification',
    image: gmpCert
  },
  { 
    name: 'ISO Certified', 
    description: 'International Organization for Standardization',
    image: isoCert
  },
  { 
    name: 'WHO-GMP', 
    description: 'World Health Organization standards',
    image: whoGmpCert
  },
  { 
    name: 'FSSAI Approved', 
    description: 'Food Safety and Standards Authority of India',
    image: fssaiCert
  },
  { 
    name: 'AYUSH Licensed', 
    description: 'Ayurveda, Yoga & Naturopathy, Unani, Siddha, Homoeopathy',
    image: ayushCert
  },
  { 
    name: 'Halal Certified', 
    description: 'Halal certification for global markets',
    image: halalCert
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
