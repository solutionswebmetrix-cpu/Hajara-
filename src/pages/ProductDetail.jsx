import { useParams } from 'react-router-dom'
import { getProductById } from '../data/products'
import './ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams()
  const product = getProductById(id)

  if (!product) {
    return (
      <div className="product-detail-page">
        <section className="page-header">
          <div className="container">
            <h1 className="page-title">Product Not Found</h1>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="product-detail-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Product Details</h1>
        </div>
      </section>

      <section className="section product-hero">
        <div className="container">
          <div className="product-detail">
            <div className="product-detail-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-detail-info">
              <h2>{product.name}</h2>
              <p className="description">{product.shortDescription}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section product-details-section">
        <div className="container">
          <div className="product-details-grid">
            <div className="product-details-content">
              <div className="product-section">
                <h3 className="section-heading">Product Overview</h3>
                <p>{product.longDescription}</p>
              </div>

              <div className="product-section">
                <h3 className="section-heading">
                  {product.oralCareBenefits ? 'Oral Care Benefits' : 'Benefits'}
                </h3>
                <ul className="benefits-list">
                  {(product.benefits || product.oralCareBenefits).map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="product-section">
                <h3 className="section-heading">
                  {product.keyIngredients ? 'Key Ingredients' : (product.herbalIngredients ? 'Herbal Ingredients' : 'Ingredients')}
                </h3>
                <ul className="ingredients-list">
                  {(product.keyIngredients || product.herbalIngredients || product.ingredients).map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>

              <div className="product-section">
                <h3 className="section-heading">
                  {product.usageDirections ? 'Usage Directions' : (product.howToUse ? 'How to Use' : 'Usage Instructions')}
                </h3>
                <ul className="usage-list">
                  {(product.usageInstructions || product.howToUse || product.usageDirections).map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ul>
              </div>

              {product.suitableFor && (
                <div className="product-section">
                  <h3 className="section-heading">Suitable For</h3>
                  <p>{product.suitableFor}</p>
                </div>
              )}

              {product.precautions && (
                <div className="product-section">
                  <h3 className="section-heading">Precautions</h3>
                  <p>{product.precautions}</p>
                </div>
              )}

              {product.storageInformation && (
                <div className="product-section">
                  <h3 className="section-heading">Storage Information</h3>
                  <p>{product.storageInformation}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
