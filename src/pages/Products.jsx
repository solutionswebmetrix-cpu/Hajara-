import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { products, categories } from '../data/products';
import './Products.css';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products
  let filteredProducts = products;
  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
  }
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)
    );
  }

  // Group products by category
  const productsByCategory = filteredProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="products-page">
      <section className="page-header" style={{ background: 'var(--gradient-green-light)' }}>
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="page-title">Our Products</motion.h1>
        </div>
      </section>

      {/* Search */}
      <section className="section search-section">
        <div className="container">
          <div className="search-wrapper">
            <input
              type="text"
              className="search-input"
              placeholder="Search products by name..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section categories-filter-section">
        <div className="container">
          <div className="categories-filter">
            <motion.button
              key="all"
              className={`category-btn ${!selectedCategory ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory(null);
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              All Products
            </motion.button>
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(category);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ delay: index * 0.02 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="section products-display-section">
        <div className="container">
          {Object.keys(productsByCategory).length === 0 ? (
            <div className="no-products">
              <p>No products found matching your search.</p>
            </div>
          ) : (
            Object.entries(productsByCategory).map(([category, categoryProducts]) => (
              <div key={category} className="category-section">
                <h2 className="category-title">{category}</h2>
                <div className="products-grid-page">
                  {categoryProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      className="product-card-page"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -10 }}
                    >
                      <div className="product-image-wrapper-page">
                        {product.image && (
                          <img src={product.image} alt={product.name} className="product-image-page" />
                        )}
                      </div>
                      <div className="product-info-page">
                        <span className="product-category-tag-page">{product.category}</span>
                        <h3 className="product-name-page">{product.name}</h3>
                        <p className="product-desc-page">{product.shortDescription}</p>
                        <div className="product-footer-page">
                          <Link to={`/product/${product.id}`} className="view-product-btn-page">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
