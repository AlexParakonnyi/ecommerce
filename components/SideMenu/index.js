import React, { useContext, useState, useEffect, useRef } from 'react'
import Menu from '../Menu'
import { DataContext } from '../../Store/GlobalState'
import ACTIONS from '../../Store/Actions'
import menuModel from './menuModel'
import useOuterClick from '../../hooks/useOuterClick'
import ScrollSideMenu from '../ScrollSideMenu'
import NavBar from '../NavBar'

const SideMenu = () => {
  const { state, dispatch } = useContext(DataContext)
  const { sideMenuActive, burgerRef } = state
  // const [innerRef, setInnerRef] = useState()
  const [hoverItem, setHoverItem] = useState({ top: 0 })
  // const sideMenuWraper = useRef()

  const handlerHover = (e) => {
    if (!e.target) return
    const coords = e.getBoundingClientRect()
    setHoverItem({ top: coords.top })
  }

  const close = () => {
    dispatch({ type: ACTIONS.SIDE_MENU_CLOSE })
  }

  // const toggle = () => {
  //   dispatch({ type: ACTIONS.SIDE_MENU_TOGGLE })
  // }

  const isSideMenuActive = () => {
    return sideMenuActive ? 'active' : ''
  }

  const innerRef = useOuterClick({
    callback: close,
    exceptionArr: [burgerRef?.current],
  })

  return (
    <>
      <div
        className={`side-menu ${isSideMenuActive() ? 'active' : ''}`}
        ref={innerRef}
      ></div>
      <div
        className={`side-menu__wrapper  ${
          isSideMenuActive() ? 'side-menu__wrapper--show' : ''
        }`}
      >
        <ScrollSideMenu>
          <NavBar classList="nav-bar__list">
            <Menu
              classList={'list-menu--vertical'}
              menu={menuModel}
              closeSideMenu={close}
              itSideMenu={true}
              scroll={true}
            />
          </NavBar>
        </ScrollSideMenu>
        {/* </nav> */}
      </div>
    </>
  )
}

export default SideMenu
