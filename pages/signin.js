import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Signin = () => {
  return (
    <div>
      <Head>
        <title>Вход в персональный кабинет</title>
      </Head>
      <form className="mx-auto my-4" style={{ maxWidth: '500px' }}>
        <div
          className="icon mb-3"
          style={{ fontSize: '2rem', textAlign: 'center' }}
        >
          <FontAwesomeIcon icon={faUser} />
          {'\n'} Вход в аккаунт
        </div>
        <div className="mb-3 form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-4 form-group">
          <label htmlFor="exampleInputPassword1">Пароль</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-4 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="Check1"
            name="check"
            value="false"
          />
          <label className="form-check-label" htmlFor="Check1">
            <small>
              <b>Запомнить меня</b>
            </small>
          </label>
        </div>
        <button type="submit" className="btn w-100 btn-outline-dark">
          Войти
        </button>
        <p className="my-4 fs-5">
          У вас еще нет аккаунта ?{' '}
          <Link href="/register">
            <a className="text-decoration-none" style={{ color: 'crimson' }}>
              Регистрация
            </a>
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Signin
