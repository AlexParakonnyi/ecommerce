import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  const router = useRouter()
  const isActive = (r) => {
    // return ''
    return r === router.pathname ? ' active' : ''
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link href={'/'}>
          <a className="navbar-brand">Мой свет</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href={'/cart'}>
                <a className={'nav-link' + isActive('/cart')}>
                  <FontAwesomeIcon icon={faShoppingCart} aria-hidden="true" />
                  {'\n'} Корзина
                </a>
              </Link>
            </li>

            <li className={'nav-item'}>
              <Link href={'/signin'}>
                <a className={'nav-link' + isActive('/signin')}>
                  <FontAwesomeIcon icon={faUser} aria-hidden="true" />
                  {'\n'} Войти
                </a>
              </Link>
            </li>

            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Пользователь
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item">Профиль</a>
                <a className="dropdown-item">Выйти</a>
              </div>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar
