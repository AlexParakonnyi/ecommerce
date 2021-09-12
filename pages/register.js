import Head from 'next/head'
import Link from 'next/link'
import { useState, useContext, useEffect } from 'react'
import valid from '../utils/valid'
import { DataContext } from '../Store/GlobalState'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRegistered } from '@fortawesome/free-solid-svg-icons'
import { postData } from '../utils/fetchData'
import { useRouter } from 'next/router'
import rememberUser from '../utils/rememberUser'
import ACTIONS from '../Store/Actions'

const Register = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    cf_password: '',
  }
  const [userData, setUserData] = useState(initialState)
  const { name, email, password, cf_password } = userData
  const [checkAllow, setCheckAllow] = useState(false)
  const [checkRemember, setCheckRemember] = useState(false)
  const router = useRouter()

  const { state, dispatch } = useContext(DataContext)
  const { auth } = state

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
    dispatch({ type: ACTIONS.NOTIFY, payload: {} })
  }

  const handleCheckAllow = (e) => {
    setCheckAllow(() => {
      return !checkAllow
    })
  }

  const handleCheckRemember = (e) => {
    setCheckRemember(() => {
      return !checkRemember
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errMsg = valid(name, email, password, cf_password)
    if (errMsg)
      return dispatch({ type: ACTIONS.NOTIFY, payload: { error: errMsg } })

    dispatch({
      type: ACTIONS.NOTIFY,
      payload: { loading: true },
    })

    const res = await postData('auth/register', userData)

    if (res.err) {
      return dispatch({ type: ACTIONS.NOTIFY, payload: { error: res.err } })
    } else {
      dispatch({
        type: ACTIONS.AUTH,
        payload: { token: res.access_token, user: res.user },
      })

      checkRemember && rememberUser(res)

      return dispatch({
        type: ACTIONS.NOTIFY,
        payload: { success: `Регистрация прошла успешно` },
      })
    }
  }

  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push('/')
  }, [auth])

  return (
    <div className="c-container">
      <Head>
        <title>Регистрация</title>
      </Head>
      <form
        className="mx-auto my-4"
        style={{ maxWidth: '500px' }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="icon" style={{ fontSize: '2rem', textAlign: 'center' }}>
          <FontAwesomeIcon icon={faRegistered} />
          {'\n'} Регистрация
        </div>
        <div className="mb-3">
          <label htmlFor="InputName">Имя</label>
          <input
            type="text"
            className="form-control"
            id="InputName"
            autoComplete="nope"
            name="name"
            value={name}
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputEmail1">Email</label>
          <input
            autoComplete="nope"
            type="email"
            className="form-control"
            id="InputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputPassword">Пароль</label>
          <input
            type="password"
            className="form-control"
            id="InputPassword"
            autoComplete="new-password"
            name="password"
            value={password}
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Input-cf-password">Подтверждение пароля</label>
          <input
            type="password"
            className="form-control"
            id="Input-cf-password"
            name="cf_password"
            value={cf_password}
            onChange={handleChangeInput}
          />
        </div>
        <div className=" form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="Check1"
            name="check"
            value="false"
            onChange={handleCheckAllow}
          />
          <label
            className="form-check-label"
            htmlFor="Check1"
            style={{
              fontSize: '1.1rem',
              lineHeight: '1.2rem',
              fontFamily: 'Roboto, Nunito, Helvetica, Arial, sats-serif',
              cursor: 'pointer',
            }}
          >
            <small>
              <b>* Согласие на обработку данных</b>
              <p>
                Я выражаю согласие на обработку моих персональных данных в
                соответствии с частью 5 статьи 6 Закона Украины «О защите
                персональных данных»
              </p>
            </small>
          </label>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="Check2"
            name="checkRemember"
            value="false"
            onChange={handleCheckRemember}
          />
          <label
            className="form-check-label"
            htmlFor="Check2"
            style={{
              fontSize: '1.1rem',
              lineHeight: '1.8rem',
              fontFamily: 'Roboto, Nunito, Helvetica, Arial, sats-serif',
              cursor: 'pointer',
              display: 'block',
            }}
          >
            <small>
              <b>Запомнить меня</b>
            </small>
          </label>
        </div>
        <button
          type="submit"
          className="btn w-100 btn-outline-dark"
          disabled={!checkAllow}
        >
          Создать профиль
        </button>
        <p className="my-4 fs-5">
          Уже зарегестрированы ?{' '}
          <Link href="/signin">
            <a className="text-decoration-none" style={{ color: 'crimson' }}>
              Войти
            </a>
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Register
