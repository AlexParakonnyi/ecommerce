import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  const router = useRouter()
  const isActive = (r) => {
    return r === router.pathname ? ' active' : ''
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand mx-2" href="/">
            Мой свет
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            style={{
              flexGrow: '0',
            }}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link href="/cart">
                  <a
                    className={`nav-link ${isActive('/cart')}`}
                    aria-current="page"
                  >
                    <FontAwesomeIcon icon={faShoppingCart} aria-hidden="true" />{' '}
                    {'\n'} Корзина
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/signin">
                  <a className={`nav-link ${isActive('/signin')}`}>
                    <FontAwesomeIcon icon={faUser} aria-hidden="true" />
                    {'\n'} Войти
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
