import Head from 'next/head'
import Link from 'next/link'

const Register = () => {
  return (
    <div>
      <Head>
        <title>Регистрация</title>
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
              <b>* Согласие на обработку данных</b>
              <p>
                Я выражаю согласие на обработку моих персональных данных в
                соответствии с частью 5 статьи 6 Закона Украины «О защите
                персональных данных»
              </p>
            </small>
          </label>
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Зарегистрироваться
        </button>
        <p className="my-2">
          Уже зарегестрированы ?{' '}
          <Link href="/register">
            <a style={{ color: 'crimson' }}>Войти</a>
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Register
