import React from 'react'
// import Icon from '../../public/static/img/icons/light_bulbs.svg'
// import Icon from '../../public/static/img/icons/ligh_bulbs-_1_.svg'
import Icon from '../../public/img/icons/house1.svg'
import Link from 'next/link'
import LogoText from '../../public/img/icons/logo-text.svg'

const Logo = ({ classList }) => {
  return (
    <div className={`logo ${classList}`}>
      <Link href="/">
        <a>
          <div className="logo__container">
            <Icon className="logo__icon" />
            <LogoText className="logo__text" />
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Logo
