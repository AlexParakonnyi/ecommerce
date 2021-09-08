import { useState, useContext } from 'react'
import { DataContext } from '../Store/GlobalState'
import { postData } from '../utils/fetchData'
import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Cookie from 'js-cookie'
import ACTIONS from '../Store/Actions'

const Signin = () => {
  const initialState = {
    email: '',
    password: '',
  }

  const [userData, setUserData] = useState(initialState)
  const { email, password } = userData
  const [check, setCheck] = useState(false)

  const { state, dispatch } = useContext(DataContext)

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
    dispatch({ type: ACTIONS.NOTIFY, payload: {} })
  }

  const handleCheck = (e) => {
    setCheck(() => {
      return !check
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    dispatch({
      type: ACTIONS.NOTIFY,
      payload: { loading: true },
    })

    const res = await postData('auth/signin', userData)

    if (res.err)
      return dispatch({ type: ACTIONS.NOTIFY, payload: { error: res.err } })

    dispatch({
      type: ACTIONS.NOTIFY,
      payload: { success: `Успешный вход в систему` },
    })

    dispatch({
      type: ACTIONS.AUTH,
      payload: { token: res.access_token, user: res.user },
    })

    Cookie.set('refreshtoken', res.refresh_token, {
      path: 'api/auth/accessToken',
      expires: 7,
    })

    localStorage.setItem('firstLogin', true)
  }

  return (
    <div>
      <Head>
        <title>Вход в персональный кабинет</title>
      </Head>
      <form
        className="mx-auto my-4"
        style={{ maxWidth: '500px' }}
        onSubmit={handleSubmit}
      >
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
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-4 form-group">
          <label htmlFor="exampleInputPassword1">Пароль</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={password}
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-4 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="Check1"
            name="check"
            value="false"
            onChange={handleCheck}
          />
          <label className="form-check-label" htmlFor="Check1">
            <small style={{ lineHeight: '1.5rem' }}>
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        voluptatem quo corporis maxime ut, exercitationem perferendis fugiat
        ducimus! Odit totam natus tempora laudantium molestiae, laborum quod
        earum? Alias doloribus amet, dolor itaque excepturi corporis natus culpa
        ex incidunt tempora repellendus porro temporibus? Doloribus officiis est
        nulla id tempora quis laboriosam at eum delectus corrupti iste dolorem
        perspiciatis labore, omnis sapiente ratione iure expedita eius ab, quam,
        ea similique a. Quaerat repellat sit praesentium magni et aperiam,
        corporis numquam modi error iure libero veniam, vero obcaecati aliquid
        consequatur perferendis necessitatibus nobis in iusto labore? Id vitae
        rem nemo nostrum reiciendis nam exercitationem inventore est numquam
        laudantium, asperiores adipisci commodi aspernatur dicta consequuntur
        necessitatibus, officia deserunt dolorum optio quidem, enim odio dolor
        soluta ducimus! Pariatur porro aut excepturi quos soluta quaerat
        voluptatum odio eveniet libero? Nihil, omnis. Ad nisi sed harum
        consequatur possimus laboriosam qui doloribus fuga delectus laborum
        doloremque sit dolores facere, labore soluta dolorem ipsum, recusandae
        magni voluptates assumenda dolor! Labore tempora vitae voluptas rerum
        exercitationem unde dicta, minus mollitia quo laudantium dignissimos,
        perspiciatis a inventore dolorem voluptatum odio hic cupiditate sint
        quis corporis excepturi? Ratione, iste laboriosam. Aspernatur omnis
        minus vel neque eveniet dolorum iste illo placeat, dicta maiores
        voluptatum officiis nobis, et error adipisci nesciunt fugiat incidunt
        quia autem dolores obcaecati exercitationem impedit voluptas? Doloremque
        blanditiis cumque modi accusantium, saepe nobis veniam eum earum quod ea
        aut magni debitis repudiandae, ipsum inventore eaque incidunt. Autem
        consequuntur, deserunt totam sequi fugit, id eaque ut earum consectetur
        pariatur ipsum, non ea delectus doloremque sit nemo accusamus. Neque
        totam, eum quaerat perspiciatis accusamus minus eaque nostrum laboriosam
        necessitatibus at earum explicabo pariatur debitis sint voluptatibus in
        aliquid! Labore consequatur harum repellat veritatis. Eligendi,
        dignissimos reprehenderit libero fugiat tempora odit aliquid distinctio,
        deserunt illum officiis dolorum repellat quo nobis, et nesciunt aut.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam optio
        fugiat velit repellendus ullam quae, assumenda expedita quibusdam
        consectetur atque illum amet perferendis sint itaque excepturi
        doloremque adipisci dolorem, facilis rerum. Doloribus maiores id
        possimus quod unde voluptas a atque qui, corrupti voluptatum libero,
        laborum velit illo laudantium iure asperiores aperiam iusto non
        similique! Animi voluptates necessitatibus placeat cumque non nam error
        possimus a. Exercitationem, officia neque, iste eum, obcaecati aut ipsum
        fugit nobis libero labore id. Nemo, perferendis. Et, perferendis quos
        voluptatum voluptatibus dolores voluptate magni dolor? Enim impedit
        obcaecati eaque dolores, nemo accusantium! Quidem, excepturi. Laudantium
        omnis maxime veniam modi molestias natus officia architecto a, dolore
        eum fugiat obcaecati commodi earum voluptatem, consectetur sed assumenda
        expedita. Totam, accusantium nemo vitae explicabo nihil dolores
        provident eos veniam. Quidem, ut doloribus repellendus officiis ab ipsum
        similique possimus repellat aperiam nemo harum. Architecto assumenda
        maiores enim porro commodi soluta. Expedita alias architecto nihil cum
        saepe in doloribus consequuntur incidunt obcaecati blanditiis eligendi
        perspiciatis perferendis odio, veniam quae itaque delectus nesciunt
        minus iusto soluta id debitis. Eius in placeat facere quam non veritatis
        iure soluta consequatur. Cupiditate, praesentium esse. Fugiat ab,
        suscipit cum quasi iusto magni odit doloremque accusamus omnis
        asperiores quo tempore delectus, perferendis, et corrupti provident
        quisquam fuga. Architecto libero, voluptas recusandae quo rerum iste
        ullam animi error fugiat suscipit pariatur doloribus explicabo, nostrum
        repellat, nam atque eligendi veritatis officiis mollitia illum
        perferendis quasi sequi repellendus! Accusamus distinctio nisi iste
        magni dolorum exercitationem odio dolorem vel tenetur mollitia, error
        est et placeat nam animi vitae saepe amet eius, dolore deleniti repellat
        sunt! Quos temporibus beatae nulla eligendi distinctio odio suscipit,
        officia iusto, aliquam ad tempore accusamus aliquid deserunt quibusdam
        expedita ullam earum eius numquam similique minima. Odit, ut velit.
        Necessitatibus repellat et, id excepturi autem eius dolores atque
        tenetur obcaecati rem vel consectetur, officia possimus officiis
        repellendus modi, sapiente inventore magni harum ullam iste nihil! Aut,
        placeat iusto excepturi repudiandae dolores at officiis ex dignissimos,
        accusamus quos corporis saepe quaerat facilis cum numquam, quasi ducimus
        ipsam eligendi. Dolorem sit ab modi ipsam quaerat perspiciatis tempore
        cum esse sunt neque facere laudantium optio, error itaque a veritatis
        facilis. Provident aspernatur, fugiat fuga soluta earum laudantium
        dolorem aperiam ipsum in doloribus iste dolor magni obcaecati, nostrum
        nesciunt, vitae quod excepturi voluptas? Mollitia nemo nam accusamus,
        totam exercitationem architecto cum in tenetur pariatur obcaecati
        quibusdam officia nostrum suscipit accusantium eligendi expedita
        doloribus voluptatem.
      </p>
    </div>
  )
}

export default Signin
