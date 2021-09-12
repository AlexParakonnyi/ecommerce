import React, { useContext, useEffect } from 'react'
import Router from 'next/router'
import { DataContext } from '../../Store/GlobalState'
import Cookie from 'js-cookie'
import ACTIONS from '../../Store/Actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUserTimes } from '@fortawesome/free-solid-svg-icons'
import { faUserCog } from '@fortawesome/free-solid-svg-icons'

const Profile = () => {
  const { state, dispatch } = useContext(DataContext)
  const { auth } = state

  const headleLogout = () => {
    Cookie.remove('refreshtoken', { path: '/' })
    localStorage.removeItem('firstLogin')
    dispatch({ type: ACTIONS.AUTH, payload: {} })
  }

  useEffect(() => {
    if (!auth.user) Router.push('/signin')
  }, [auth])

  return (
    <div className="c-container">
      <div className="mx-auto my-4 border p-3">
        <div
          className="icon mb-3"
          style={{ fontSize: '2rem', textAlign: 'center' }}
        >
          <FontAwesomeIcon icon={faUser} />
          {'\n'} Мои данные
        </div>
        <p>Имя: {auth?.user?.name}</p>
        <p>Email: {auth?.user?.email}</p>
        <button className="btn btn-secondary me-4 fs-5">
          <FontAwesomeIcon icon={faUserCog} className="me-2" />
          Редактировать дынные
        </button>
        <button onClick={headleLogout} className="btn btn-danger fs-5">
          <FontAwesomeIcon icon={faUserTimes} className="me-2" />
          Выйти
        </button>
      </div>
    </div>
  )
}

export default Profile
