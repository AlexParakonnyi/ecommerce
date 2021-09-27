import React from 'react'
import Icon from '../../public/img/icons/catalog2.svg'
import Link from 'next/link'

const Catalog = () => {
  return (
    <Link href="/catalog">
      <a className="catalog">
        <Icon className="catalog__icon" />
        <span className="catalog__text">Каталог</span>
      </a>
    </Link>
  )
}

export default Catalog
