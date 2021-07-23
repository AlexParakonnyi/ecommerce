import Head from 'next/head'
import Link from 'next/link'

const Signin = () => {
  return (
    <div>
      <Head>
        <title>Вход в персональный кабинет</title>
      </Head>
      <form className="mx-auto my-4" style={{ maxWidth: '500px' }}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Пароль</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Пароль"
          />
        </div>
        <div className="form-check my-2">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            <small>
              <b>Запомнить меня</b>
            </small>
          </label>
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Войти
        </button>
        <p className="my-2">
          У вас еще нет аккаунта ?{' '}
          <Link href="/register">
            <a style={{ color: 'crimson' }}>Регистрация</a>
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Signin
