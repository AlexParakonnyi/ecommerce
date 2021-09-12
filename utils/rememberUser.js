import Cookie from 'js-cookie'

const rememberUser = (res) => {
  Cookie.set('refreshtoken', res.refresh_token, {
    path: 'api/auth/accessToken',
    expires: 7,
  })
  localStorage.setItem('firstLogin', true)
}

export default rememberUser
