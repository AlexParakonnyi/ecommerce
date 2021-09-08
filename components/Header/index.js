import React from 'react'
import { DataContext } from '../../Store/GlobalState'
import ACTIONS from '../../Store/Actions'
import Menu from '../Menu'
import NavBar from '../NavBar'
import menuModel from './menuModel'
import BurgerButton from '../BurgerButton'
import Logo from '../Logo'
import Catalog from '../CatalogButton'
import Search from '../Search'

const Header = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__container">
          <div className="header__body container">
            <Logo classList={'header__logo'} />
            <Catalog />
            <NavBar classList="header__nav-bar nav-bar--list">
              <Search />
              <Menu
                classList="header__menu list-menu--hide-extra-small"
                menu={menuModel}
                hideItemtext={true}
              />
              <BurgerButton classList={'header__burger'} />
            </NavBar>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
