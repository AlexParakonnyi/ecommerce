import React from 'react'
import ItemMenu from '../ItemMenu'

const Menu = ({ menu, classList, itSideMenu }) => {
  return (
    <>
      <ul className={`list-menu ${classList}`}>
        {menu.map((el, i) => {
          return (
            <ItemMenu
              href={el.href}
              Icon={el.Icon}
              text={el.text}
              key={i + el.href}
              itSideMenu={itSideMenu}
              classList={el.classList}
            />
          )
        })}
      </ul>
    </>
  )
}

export default Menu
