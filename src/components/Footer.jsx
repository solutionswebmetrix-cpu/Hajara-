import { Link } from 'react-router-dom';
import { FiGlobe, FiAward, FiPackage, FiStar } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column footer-about">
            <h2 className="footer-logo">HAJARA MULTICARE</h2>
            <p className="footer-desc">
              Leading manufacturer and exporter of premium Ayurvedic medicines and natural healthcare products since 2009.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link"><FiStar /></a>
              <a href="#" className="social-link"><FiAward /></a>
              <a href="#" className="social-link"><FiPackage /></a>
              <a href="#" className="social-link"><FiGlobe /></a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Our Products</h3>
            <ul className="footer-links">
              <li><Link to="/products">Herbal Powders</Link></li>
              <li><Link to="/products">Ayurvedic Tablets</Link></li>
              <li><Link to="/products">Herbal Oils</Link></li>
              <li><Link to="/products">Syrups & Tonics</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Contact Info</h3>
            <ul className="footer-contact">
              <li>
                <FiAward />
                <span>F-231, Sec-1, Tala Nagari, Ramghat Road [UPSIDC], Aligarh 202001 (U.P.), India</span>
              </li>
              <li>
                <FiPackage />
                <span>+91 98970 23005</span>
              </li>
              <li>
                <FiGlobe />
                <span>Info@herbalpowderexporter.com</span>
              </li>
              <li>
                <FiStar />
                <span>hajaramulticare17@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} HAJARA MULTICARE. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
