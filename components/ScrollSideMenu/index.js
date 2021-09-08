import React, { useContext, useEffect, useRef } from 'react'
import { DataContext } from '../../Store/GlobalState'

const ScrollSideMenu = ({ children }) => {
  const { state } = useContext(DataContext)
  const { sideMenuActive } = state
  const scrollMenu = useRef()

  useEffect(() => {
    if (!sideMenuActive) scrollMenu.current.scrollTo(0, 0)
  }, [sideMenuActive])

  return (
    <div className="scroll-menu" ref={scrollMenu}>
      {children}
    </div>
  )
}

export default ScrollSideMenu
