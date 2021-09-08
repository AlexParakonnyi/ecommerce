import Login from '../../public/img/icons/cart3.svg'
import Cart from '../../public/img/icons/cart.svg'
import User from '../../public/img/icons/user.svg'

const menuModel = [
  {
    Icon: User,
    href: '/signin',
    text: `Вход`,
  },
  {
    Icon: Cart,
    href: '/cart',
    text: `Корзина`,
    classList: 'item-menu--extra-small',
  },
]

export default menuModel