import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Cart from '../../public/img/icons/cart3.svg'
import ProductItemSlider from '../ProductItemSlider'
import Balance from '../../public/img/icons/Balance.svg'
import Heart from '../../public/img/icons/Heart.svg'

const ProductItem = ({ product }) => {
  const initialHref = () => `/img/products/${product?.images[0]?.name}`

  const [activeIndex, setActiveIndex] = useState(0)

  const [imageHref, setImageHref] = useState(() => {
    return initialHref()
  })

  const getFakePrice = () => {
    const price = product.price.value

    if (!price) {
      return ''
    }

    return Math.round(price * 1.1 * 100) / 100
  }

  return (
    <div className="c-product">
      <Link href={`/product/${product.chpu}`}>
        <a className="link-block">
          <div className="c-product__slider image-slider">
            {product.images.length > 1
              ? product.images.map((el, index) => {
                  if (index > 4) return null
                  return (
                    <ProductItemSlider
                      key={el._id}
                      indexEl={index}
                      image={el}
                      setImageHref={setImageHref}
                      activeIndex={activeIndex}
                      setActiveIndex={setActiveIndex}
                    />
                  )
                })
              : null}
          </div>
          <div className="c-product__image-wrapper">
            {product.sale ? (
              <div className="c-product__label-sale">Акция</div>
            ) : null}

            {product.guaranty ? (
              <div className="c-product__label-guaranty">
                <div>Гарантия</div>
                <div>{product.guaranty}</div>
              </div>
            ) : null}

            <div className="c-product__tool c-product__tool--compare">
              <div className="c-product__tool-icon">
                <Balance />
              </div>
            </div>

            <div className="c-product__tool c-product__tool--like">
              <div className="c-product__tool-icon">
                <Heart />
              </div>
            </div>

            {product.image !== '' && (
              <Image
                className="c-product__image"
                src={imageHref}
                alt={product.name}
                width={168}
                height={168}
                objectFit="contain"
                layout="intrinsic"
              />
            )}
          </div>
          <div className="c-product__title c-title">
            <span className="c-title__text">{product.name}</span>
          </div>
          <div className="c-product__inStock">Есть в наличии</div>
          <div className="c-product__price-info">
            <div className="c-product__price-wrapper">
              {product.sale && getFakePrice() ? (
                <div className="c-product__fake-price">{`${getFakePrice()} ${
                  process.env.BASE_CURRENCY
                }`}</div>
              ) : null}
              <div
                className={`c-product__price ${
                  product.sale ? 'c-product__price-sale' : ''
                }`}
              >
                {product.price.value
                  ? `${product.price.value} ${process.env.BASE_CURRENCY}`
                  : null}
              </div>
            </div>
            <div className="c-product__buy-wrapper">
              <button className="c-product__buy-button btn btn-outline-danger">
                <Cart className="c-product__buy-icon" /> Купить
              </button>
            </div>
          </div>

          <div className="c-product__attributes-wrapper">
            {product.attributes_arr.map((el, index) => {
              if (index > 2) return null
              return (
                <div
                  key={product.id + el.name + el.value}
                  className="c-product__attribute"
                >
                  <div>{el.name}</div>
                  <div>{el.value}</div>
                </div>
              )
            })}
          </div>

          {product.description ? (
            <div className="c-product__description-wrapper">
              <p className="c-product__description">{product.description}</p>
            </div>
          ) : null}
        </a>
      </Link>
    </div>
  )
}

export default ProductItem
