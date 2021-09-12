import React, { useRef, useContext, useEffect } from 'react'
import { DataContext } from '../../Store/GlobalState'
import ACTIONS from '../../Store/Actions'

const ScrollLayout = ({ children }) => {
  const progress = useRef(null)
  const scroll = useRef(null)

  const { state, dispatch } = useContext(DataContext)
  const { scrollMarkPage, sideMenuActive } = state
  const isLock = () => (sideMenuActive ? 'lock' : '')

  useEffect(() => {
    if (scrollMarkPage !== '') {
      dispatch({ type: ACTIONS.CHANGE_PAGE, payload: '' })
      scroll.current.scrollTo(0, 0)
      progress.current.style.height = '0%'
    }
  }, [scrollMarkPage])

  const handleScroll = () => {
    const totalHeight =
      scroll.current?.scrollHeight - scroll.current?.clientHeight
    const scrollTop = scroll.current?.scrollTop
    const progressHeight = (scrollTop * 100) / totalHeight
    progress.current.style.height = progressHeight + '%'
  }

  return (
    <div
      className={`scrollLayout ${isLock()}`}
      onScroll={handleScroll}
      ref={scroll}
    >
      <div className="scrollLayout__progressbar" ref={progress}></div>
      <div className="scrollLayout__scrollPath"></div>
      <section className="c-container">{children}</section>
    </div>
  )
}

export default ScrollLayout
