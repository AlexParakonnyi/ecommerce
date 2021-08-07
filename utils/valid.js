const valid = (name, email, password, cf_password) => {
  if (!name || !email || !password) {
    return 'Есть незаполненные поля'
  }

  if (!validateEmail(email)) return 'Некорректный имейл'

  if (password.length < 6) return 'Cлишком короткий пароль'

  if (password !== cf_password) return 'Подтверждающий пароль не совпадает'
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

export default valid
