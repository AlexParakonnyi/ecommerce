import React, { useContext, useEffect } from 'react'
import Header from './Header'
import Notify from './Notify'
import { DataContext } from '../Store/GlobalState'
import ScrollLayout from './ScrollLayout'
import ACTIONS from '../Store/Actions'
import SideMenu from './SideMenu'
import Loading from './Loading'

function Layout({ children, title, description }) {
  const { state, dispatch } = useContext(DataContext)
  const { sideMenuActive, loading } = state

  useEffect(() => {
    dispatch({ type: ACTIONS.RESET_SCROLL, payload: children.type.name })
  }, [children.type.name])

  return (
    <ScrollLayout>
      <Header />
      {/* {sideMenuActive ? <SideMenu /> : null} */}
      <SideMenu />
      <Notify />
      {loading && <Loading />}
      {children}
    </ScrollLayout>
  )
}

export default Layout
