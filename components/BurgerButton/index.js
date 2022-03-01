import React, { useRef, useContext, useEffect } from 'react'
import { DataContext } from '../../Store/GlobalState'
import ACTIONS from '../../Store/Actions'

const BurgerButton = ({ classList }) => {
  const burger = useRef()
  const { state, dispatch } = useContext(DataContext)
  const { sideMenuActive, burgerRef } = state

  useEffect(() => {
    dispatch({ type: ACTIONS.IT_IS_BURGER, payload: burger })
  }, [])

  const toggleBurger = (e) => {
    e.stopPropagation()
    dispatch({ type: ACTIONS.SIDE_MENU_TOGGLE })
  }

  const isActive = () => {
    return sideMenuActive ? 'active' : ''
  }

  return (
    <div
      className={`burger ${classList} ${isActive()}`}
      onClick={toggleBurger}
      ref={burgerRef}
    >
      <div className={`burger__wrapper`}>
        <span className="burger__bar"></span>
      </div>
    </div>
  )
}

export default BurgerButton
