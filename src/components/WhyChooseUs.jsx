import { motion } from 'framer-motion';
import { FiAward, FiGlobe, FiHeart, FiBookOpen, FiStar, FiCheckCircle } from 'react-icons/fi';
import './WhyChooseUs.css';

const features = [
  {
    icon: <FiAward />,
    title: 'GMP Certified',
    description: 'Manufactured in GMP-certified facilities with strict quality control protocols'
  },
  {
    icon: <FiGlobe />,
    title: 'Export Quality',
    description: 'Products meet international standards and are exported to 20+ countries worldwide'
  },
  {
    icon: <FiHeart />,
    title: 'Premium Ingredients',
    description: '100% natural, organic, and ethically sourced herbal ingredients from trusted suppliers'
  },
  {
    icon: <FiBookOpen />,
    title: 'Research Based',
    description: 'Formulations backed by scientific research and traditional Ayurvedic knowledge'
  },
  {
    icon: <FiStar />,
    title: 'Ayurvedic Excellence',
    description: 'Traditional Ayurvedic expertise combined with modern manufacturing technology'
  },
  {
    icon: <FiCheckCircle />,
    title: 'Quality Assurance',
    description: 'Every product undergoes rigorous testing for purity, safety, and efficacy'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section why-choose-us" id="why-us">
      <div className="why-container">
        <div className="section-header">
          <span className="section-subhead">Why Choose Us</span>
          <h2 className="section-title">Excellence in Every Product</h2>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
