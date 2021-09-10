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
          <div className="header__body c-container">
            <BurgerButton classList={'header__burger'} />
            <Logo classList={'header__logo'} />
            <NavBar classList="header__nav-bar nav-bar--list">
              <Catalog />
              <Search />
              <Menu
                classList="header__menu list-menu--hide-extra-small"
                menu={menuModel}
                hideItemtext={true}
              />
            </NavBar>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
