import connectDB from '../../../utils/connectDB'
import Users from '../../../models/userModel'
import valid from '../../../utils/valid'
import bcrypt from 'bcrypt'
import {
  createAccessToken,
  createRefreshToken,
} from '../../../utils/generateToken'

connectDB()

export default async (req, res) => {
  switch (req.method) {
    case 'POST':
      await register(req, res)
      break
    case 'GET':
      res.send('It is work')
      break
  }
}

const register = async (req, res) => {
  try {
    const { name, email, password, cf_password } = req.body

    const errMsg = valid(name, email, password, cf_password)
    if (errMsg) return res.status(400).json({ err: errMsg })

    const user = await Users.findOne({ email })
    if (user)
      return res
        .status(400)
        .json({ err: 'Пользователь с таким имейлом уже существует' })

    const passwordHash = await bcrypt.hash(password, 12)

    const newUser = new Users({ name, email, password: passwordHash })

    await newUser.save()

    const access_token = createAccessToken({ id: newUser._id })
    const refresh_token = createRefreshToken({ id: newUser._id })

    res.json({
      msg: 'Регистрация прошла успешно',
      refresh_token,
      access_token,
      user: {
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        avatar: newUser.avatar,
        root: newUser.root,
      },
    })
  } catch (err) {
    if (err) return res.status(500).json({ err: err.message })
  }
}
