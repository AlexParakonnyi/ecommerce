import React, { useContext, useEffect } from 'react'
import Header from './Header'
import Notify from './Notify'
import { DataContext } from '../Store/GlobalState'
// import ScrollLayout from './ScrollLayout'
import ACTIONS from '../Store/Actions'
import SideMenu from './SideMenu'
import Loading from './Loading'
import Coverer from './Coverer'
import ScrollLayout from './ScrollLayout-copy'

function Layout({ children, title, description }) {
  const { state, dispatch } = useContext(DataContext)
  const { sideMenuActive, loading } = state

  useEffect(() => {
    dispatch({ type: ACTIONS.RESET_SCROLL, payload: children.type.name })
  }, [children.type.name])

  return (
    <Header>
      <ScrollLayout
        options={{
          progressBar: true,
          history: true,
          sliderWIdth: '8px',
          sliderPath: true,
          arrowUp: true,
        }}
      >
        <SideMenu />
        {sideMenuActive && <Coverer />}
        <Notify />
        {loading && <Loading />}
        {children}
      </ScrollLayout>
    </Header>
  )
}

export default Layout
