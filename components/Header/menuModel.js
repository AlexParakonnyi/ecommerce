import Cart from '../../public/img/icons/cart.svg'
import User from '../../public/img/icons/user.svg'

const menuModel = [
  {
    Icon: User,
    href: '/profile',
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
