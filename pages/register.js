import Head from 'next/head'
import Link from 'next/link'
import { useState, useContext } from 'react'
import valid from '../utils/valid'
import { DataContext } from '../Store/GlobalState'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRegistered } from '@fortawesome/free-solid-svg-icons'
import { postData } from '../utils/fetchData'

const Register = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    cf_password: '',
  }
  const [userData, setUserData] = useState(initialState)
  const { name, email, password, cf_password } = userData
  const [check, setCheck] = useState(false)

  const { state, dispatch } = useContext(DataContext)

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
    dispatch({ type: 'NOTIFY', payload: {} })
  }

  const handleCheck = (e) => {
    setCheck(() => {
      return !check
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errMsg = valid(name, email, password, cf_password)
    if (errMsg) return dispatch({ type: 'NOTIFY', payload: { error: errMsg } })

    dispatch({
      type: 'NOTIFY',
      payload: { loading: true },
    })

    const res = await postData('auth/register', userData)
    if (res.err) {
      return dispatch({ type: 'NOTIFY', payload: { error: res.err } })
    } else {
      return dispatch({
        type: 'NOTIFY',
        payload: { success: `Регистрация прошла успешно` },
      })
    }
  }

  return (
    <div>
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
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="Check1"
            name="check"
            value="false"
            onChange={handleCheck}
          />
          <label className="form-check-label" htmlFor="Check1">
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
        <button
          type="submit"
          className="btn w-100 btn-outline-dark"
          disabled={!check}
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
