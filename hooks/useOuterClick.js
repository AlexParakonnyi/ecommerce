import { useEffect, useRef } from 'react'

const useOuterClick = ({ callback, exceptionArr }) => {
  const callbackRef = useRef() // initialize mutable ref, which stores callback
  const innerRef = useRef()

  // update cb on each render, so second useEffect has access to current value
  useEffect(() => {
    callbackRef.current = callback
  })

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)

    function handleClick(e) {
      if (innerRef?.current === e.target) return

      for (const i of exceptionArr) {
        if (i?.contains(e.target)) return
      }

      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target)
      )
        callbackRef.current(e)
    }
  }, [exceptionArr])

  return innerRef // convenience for client (doesn't need to init ref himself)
}

export default useOuterClick
