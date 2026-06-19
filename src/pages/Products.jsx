import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import './Products.css'

const Products = () => {
  return (
    <div className="products-page">
      <section className="page-header" style={{ background: 'var(--gradient-green-light)' }}>
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="page-title">Our Products</motion.h1>
        </div>
      </section>

      <section className="section products-table-section">
        <div className="container">
          <div className="table-wrapper">
            <table className="products-table">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Product Image</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Short Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <motion.tr
                    key={product.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <td>{index + 1}</td>
                    <td>
                      <div className="product-image-cell">
                        <img src={product.image} alt={product.name} />
                      </div>
                    </td>
                    <td className="product-name-cell">{product.name}</td>
                    <td className="product-price-cell">{product.price}</td>
                    <td className="product-desc-cell">{product.shortDescription}</td>
                    <td>
                      <Link to={`/product/${product.id}`} className="view-details-btn">
                        View Details
                      </Link>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
