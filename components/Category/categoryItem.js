import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CategoryItem = ({ category }) => {
  return (
    <Link href={`/${category.chpu}`}>
      <a className="link-block">
        <div className="c-category">
          <div className="c-category__image-wrapper">
            {category.image !== '' && (
              <Image
                className="c-category__image"
                src={`/img/products/${category.image}`}
                alt={category.name}
                width={168}
                height={168}
                // quality="1"
                objectFit="contain"
                layout="intrinsic"
              />
            )}
          </div>
          <div className="c-category__name">{category.name}</div>
        </div>
      </a>
    </Link>
  )
}

export default CategoryItem
