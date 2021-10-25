import React from 'react'
import Link from 'next/link'
import Icon from '../../public/img/icons/home.svg'

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <nav aria-label="c-breadcrumb">
      <ul className="c-breadcrumb">
        {breadcrumbs.map((el, i, arr) => {
          return (
            <li key={`${el.id} ${el.chpu}`} className="c-breadcrumb__item">
              <Link href={el.chpu}>
                <a
                  className={`c-breadcrumb__link ${
                    i === arr.length - 1 ? ' active' : ''
                  }`}
                >
                  {el.name === 'home' ? (
                    <div className="breadcrumb__home home">
                      <Icon className="home__icon" />
                    </div>
                  ) : (
                    el.name
                  )}
                </a>
              </Link>
              <span className="c-bredcrumb___divider">
                {i < arr.length - 1 ? '>' : ''}
              </span>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Breadcrumbs
