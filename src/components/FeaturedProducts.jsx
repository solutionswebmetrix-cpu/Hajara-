import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHeart, FiStar, FiGlobe, FiArrowRight } from 'react-icons/fi';
import { products } from '../data/products';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const featuredProducts = products;

  return (
    <section className="section featured-products">
      <div className="container">
        <div className="section-header">
          <span className="section-subhead">Hot Products</span>
          <h2 className="section-title">Our Premium Ayurvedic Products</h2>
          <p className="section-subtitle">
            Loved by thousands of customers worldwide for their effectiveness and quality
          </p>
        </div>
        
        <div className="products-grid">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="product-image-wrapper">
                <div className="product-badge">Best Seller</div>
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-actions">
                  <button className="action-btn" aria-label="Add to wishlist">
                    <FiHeart />
                  </button>
                  <button className="action-btn" aria-label="Quick view">
                    <FiStar />
                  </button>
                  <button className="action-btn" aria-label="Add to cart">
                    <FiGlobe />
                  </button>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.shortDescription}</p>
                <div className="product-footer">
                  <p className="product-price">{product.price}</p>
                  <Link to={`/product/${product.id}`} className="view-product-btn">
                    View Details
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
