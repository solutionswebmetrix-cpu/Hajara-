import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiSearch, FiMenu, FiX, FiPhone, FiMessageSquare } from 'react-icons/fi'
import './Navbar.css'
import logoImg from '../assets/logo.png'

const categories = [
  {
    name: 'Herbal Syrups'
  },
  {
    name: 'Ayurvedic Capsules & Tablets'
  },
  {
    name: 'Herbal Powders (Churna)'
  },
  {
    name: 'Health Tonic & Immunity Boosters'
  },
  {
    name: 'Liver Tonic & Blood Purifier'
  },
  {
    name: 'Women\'s Health Products'
  },
  {
    name: 'Men\'s Health Products'
  },
  {
    name: 'Herbal Cosmetics & Personal Care'
  },
  {
    name: 'Ayurvedic Oils'
  },
  {
    name: 'Herbal Toothpaste & Oral Care'
  },
  {
    name: 'Skin Care Products'
  },
  {
    name: 'Hair Care Products'
  }
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products', hasMegaMenu: true },
    { name: 'Export', path: '/export' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  // Split categories into 4 columns
  const getCategoriesColumns = () => {
    const columns = [[], [], [], []];
    categories.forEach((cat, idx) => {
      columns[idx % 4].push(cat);
    });
    return columns;
  }

  const categoriesColumns = getCategoriesColumns();

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/" className="logo">
            <img src={logoImg} alt="HAJARA MULTICARE" className="logo-img" />
          </Link>

          <div className="nav-links">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className={`nav-link-wrapper ${location.pathname === link.path ? 'active' : ''}`}
                onMouseEnter={() => link.hasMegaMenu && setMegaMenuOpen(true)}
                onMouseLeave={() => link.hasMegaMenu && setMegaMenuOpen(false)}
              >
                <Link to={link.path} className="nav-link">
                  {link.name}
                  {link.hasMegaMenu && <span className="mega-arrow">▼</span>}
                </Link>

                {link.hasMegaMenu && megaMenuOpen && (
                  <div className="mega-menu">
                    <div className="mega-menu-container">
                      <div className="mega-columns">
                        {categoriesColumns.map((column, colIdx) => (
                          <div key={colIdx} className="mega-column">
                            {column.map((cat, catIdx) => (
                              <Link to="/products" key={catIdx} className="mega-link">
                                {cat.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                      <div className="mega-footer">
                        <Link to="/products" className="view-all-link">
                          View All Products →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="nav-actions">
            <button className="nav-action-btn" aria-label="Search">
              <FiSearch />
            </button>
            <a href="https://wa.me/919897023005" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">
              <FiMessageSquare />
              WhatsApp
            </a>
            <Link to="/contact" className="btn-get-quote">
              Get Quote
            </Link>
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-container">
          <div className="mobile-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mobile-menu-buttons">
            <a href="https://wa.me/919897023005" className="btn-whatsapp-mobile" target="_blank" rel="noopener noreferrer">
              <FiMessageSquare /> WhatsApp
            </a>
            <Link to="/contact" className="btn-get-quote-mobile" onClick={() => setMobileMenuOpen(false)}>
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
