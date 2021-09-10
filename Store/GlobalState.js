import { createContext, useReducer, useEffect } from 'react'
import { getData } from '../utils/fetchData'
import reducers from './Reducers'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const initialState = {
    notify: {},
    auth: {},
    sideMenuActive: false,
    scrollMarkPage: '',
    burgerRef: null,
  }
  const [state, dispatch] = useReducer(reducers, initialState)

  useEffect(async () => {
    const firstLogin = localStorage.getItem('firstLogin')
    if (firstLogin) {
      const res = await getData('auth/accessToken')
      if (res.err) return localStorage.removeItem('firstLogin')

      dispatch({
        type: 'AUTH',
        payload: {
          token: res.access_token,
          user: res.user,
        },
      })
    }
  }, [])

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  )
}
