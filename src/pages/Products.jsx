import FeaturedProducts from '../components/FeaturedProducts'
import './Products.css'

const Products = () => {
  return (
    <div className="products-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Our Products</h1>
        </div>
      </section>
      <FeaturedProducts />
    </div>
  )
}

export default Products
