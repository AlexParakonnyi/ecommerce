import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'

const ScrollLayout = ({
  children,
  options = {
    progressBar: false,
    sliderWIdth: '8px',
    sliderPath: true,
    history: false,
    arrowUp: false,
  },
}) => {
  const progress = useRef(null)
  const scroll = useRef(null)
  const slider = useRef(null)
  const path = useRef(null)
  //const parent = useRef(null)
  const router = useRouter()

  const initialState = {
    sliderHeight: 0,
    totalHeight: 0,
    scrollTop: 0,
    sliderPosition: 0,
    historyRootScroll: {},
  }
  const [state, setState] = useState(initialState)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      const sliderHeight = computeSliderHeight()

      const findPreviousRoot = options.history
        ? state.historyRootScroll[router.asPath]
        : { scroll: 0, slider: 0 }

      if (findPreviousRoot) {
        setState((prevState) => ({
          ...prevState,
          findPreviousRoot,
          sliderPosition: findPreviousRoot.slider,
          sliderHeight,
        }))

        scroll.current.scrollTo(0, findPreviousRoot.scroll)
        slider.current.style.height = state.sliderHeight + 'px'
      } else {
        const newRoot = {
          scroll: 0,
          slider: 0,
        }

        setState((prevState) => ({
          ...prevState,
          historyRootScroll: {
            ...prevState.historyRootScroll,
            [router.asPath]: newRoot,
          },
          sliderPosition: 0,
          sliderHeight,
        }))

        scroll.current.scrollTo(0, 0)
        progress.current.style.width = '0%'
      }
    }, 50)
  }, [router.asPath])

  useEffect(() => {
    if (state.scrollTop > 0 && state.totalHeight > 0)
      progress.current.style.width =
        (state.scrollTop * 100) / state.totalHeight + '%'
    slider.current.style.top = getSliderPosition() + '%'
    slider.current.style.height = state.sliderHeight + 'px'
  }, [state])

  useEffect(() => {
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
  }, [])

  const handleScroll = () => {
    const sliderPosition = getSliderPosition()
    setState((prevState) => ({
      ...prevState,
      scrollTop: scroll.current?.scrollTop,
      totalHeight: scroll.current?.scrollHeight - scroll.current?.clientHeight,
      sliderHeeight: computeSliderHeight(),
      sliderPosition,
      historyRootScroll: {
        ...prevState.historyRootScroll,
        [router.asPath]: {
          scroll: scroll.current.scrollTop,
          slider: sliderPosition,
        },
      },
    }))
  }

  const computeSliderHeight = () => {
    const windowHeight = scroll.current.getBoundingClientRect().height
    const computedSliderHeight =
      ((windowHeight * 100) / scroll.current?.scrollHeight / 100) * windowHeight
    const res = computedSliderHeight < 40 ? 40 : computedSliderHeight

    if (computedSliderHeight === windowHeight) return 0

    return res
  }

  const getSliderPosition = () => {
    const pathHeight = path.current.getBoundingClientRect().height
    const sliderHeightToPercent = (state.sliderHeight * 100) / pathHeight
    const res =
      (state.scrollTop * (100 - sliderHeightToPercent)) / state.totalHeight

    return res
  }

  const shouldSliderPath = () => {
    if (!options.sliderPath) return false
    if (state.sliderHeight !== 0) return true
    return false
  }

  const scrollUp = () => {
    scroll.current.scrollTo(0, 0)
    setState((prevState) => ({
      ...prevState,
      scrollTop: 0.1,
      // totalHeight: scroll.current?.scrollHeight - scroll.current?.clientHeight,
      // sliderHeeight: computeSliderHeight(),
      // sliderPosition: 0,
    }))
  }

  const showArrowUp = () => {
    if (!options.arrowUp) return false
    if (state.sliderPosition > 20) return true
  }

  const handleMouseDown = (e) => {
    if (e.target === path.current) {
      console.log('PATH')

      const position = computePosition(e.pageY)
      // const position = computePosition(e.pageY)
      scroll.current.scrollTo(0, position)
    }

    if (e.target === slider.current) {
      console.log('DOWN')
      setOffset(e.offsetY)
      window.addEventListener('mousemove', handleMouseMove)
      e.preventDefault()
    }
  }

  const handleMouseMove = (e) => {
    console.log('MOVE')
    // scroll.current.scrollTo(0, computePosition(e.pageY))
  }

  const handleMouseUp = (e) => {
    console.log('UP')
    window.removeEventListener('mousemove', handleMouseMove)
  }

  const computePosition = (Y) => {
    console.log(offset)
    const rect = path.current.getBoundingClientRect()
    const slider = ((Y - rect.top) * 100) / rect.height
    const moveScroll = (state.totalHeight / 100) * slider

    return moveScroll
  }

  return (
    <div className="scroll-layout">
      <div
        className={`scroll-layout__wrapper`}
        ref={scroll}
        onScroll={handleScroll}
      >
        <section className="c-container">{children}</section>
      </div>
      <div
        className={`scroll-layout__progressbar ${
          options.progressBar ? ' active' : ''
        }`}
        ref={progress}
      ></div>
      <div
        className={`scroll-layout__scroll-path ${
          shouldSliderPath() ? ' active' : ''
        }`}
        ref={path}
        style={{ flexBasis: options.sliderWIdth }}
      >
        <div
          className="scroll-layout__slider"
          ref={slider}
          style={{ width: options.sliderWIdth }}
        ></div>
      </div>
      {showArrowUp() ? (
        <div className="arrow-up" onClick={scrollUp}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      ) : null}
    </div>
  )
}

export default ScrollLayout
