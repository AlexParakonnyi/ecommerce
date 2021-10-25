import React from 'react'
import ProductItem from '../ProductItem'

const ProductsContainer = ({ products }) => {
  // console.log(products[0])
  return (
    <>
      <div className="c-products">
        <div className="c-products__wrapper">
          {products.length === 0
            ? null
            : products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
        </div>
      </div>
    </>
  )
}

export default ProductsContainer
