import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiSearch, FiMenu, FiX, FiPhone, FiMessageSquare } from 'react-icons/fi'
import './Navbar.css'

const categories = [
  {
    name: 'Herbal Powders',
    image: 'https://images.unsplash.com/photo-1598349748134-7a9061320094?w=200&h=150&fit=crop',
    description: 'Pure herbal powders'
  },
  {
    name: 'Ayurvedic Tablets',
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=200&h=150&fit=crop',
    description: 'Convenient tablets'
  },
  {
    name: 'Herbal Oils',
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=200&h=150&fit=crop',
    description: 'Therapeutic oils'
  },
  {
    name: 'Syrups & Tonics',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=150&fit=crop',
    description: 'Health tonics'
  },
  {
    name: 'Herbal Capsules',
    image: 'https://images.unsplash.com/photo-1587854692910-95636f5e3c66?w=200&h=150&fit=crop',
    description: 'Standardized capsules'
  },
  {
    name: 'Herbal Teas',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=200&h=150&fit=crop',
    description: 'Wellness teas'
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

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/" className="logo">
            <span className="logo-main">HAJARA</span>
            <span className="logo-sub">MULTICARE</span>
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
                      <div className="mega-grid">
                        {categories.map((cat, idx) => (
                          <Link to="/products" key={idx} className="mega-item">
                            <div className="mega-item-image">
                              <img src={cat.image} alt={cat.name} />
                            </div>
                            <div className="mega-item-content">
                              <h4>{cat.name}</h4>
                              <p>{cat.description}</p>
                            </div>
                          </Link>
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
