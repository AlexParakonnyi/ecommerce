import React from 'react'
import Link from 'next/link'

const ItemMenu = (props) => {
  const { href, Icon, text, itSideMenu, classList } = props

  return (
    <li
      className={`item-menu ${
        itSideMenu ? 'item-menu--block' : ''
      } ${classList}`}
    >
      <Link href={href}>
        <a className="item-menu__link" href={href}>
          <div className={`item-menu__icon-link`}>
            <div
              className={`icon-link ${itSideMenu ? 'icon-link--round' : ''}`}
            >
              <Icon
                className={`icon-link__image ${
                  itSideMenu ? 'icon-link__image--dark' : ''
                }`}
              />
            </div>
          </div>
          <span
            className={`item-menu__text ${
              itSideMenu ? '' : 'item-menu__text--hide'
            }`}
          >
            {text}
          </span>
        </a>
      </Link>
    </li>
  )
}

export default ItemMenu
