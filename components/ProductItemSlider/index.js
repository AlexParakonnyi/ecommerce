import React from 'react'

const ProductItemSlider = ({
  image,
  indexEl,
  setImageHref,
  activeIndex,
  setActiveIndex,
}) => {
  const isActive = (el) => {
    return el === activeIndex ? 'active' : ''
  }

  const mouseOverHandler = (image) => {
    setTimeout(() => {
      setImageHref(`/img/products/${image.name}`)
      setActiveIndex(indexEl)
    }, 50)
  }

  return (
    <div className={`image-slider__item`}>
      <div
        className={`image-slider__column ${isActive(indexEl)}`}
        data-index={indexEl}
        data-href={`/img/products/${image.name}`}
        onMouseOver={() => mouseOverHandler(image, indexEl)}
        onTouchStart={() => mouseOverHandler(image, indexEl)}
      ></div>
    </div>
  )
}

export default ProductItemSlider
