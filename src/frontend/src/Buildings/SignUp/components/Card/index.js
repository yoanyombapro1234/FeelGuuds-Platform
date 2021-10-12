import React from 'react'
import classnames from 'classnames'
import Icon from '@duik/icon'

import cls from './buildings-signin-card.module.scss'


const LoginCard = ({
  children,
  className,
  isSelected,
  ...rest
}) => (
  <button
    className={ classnames(cls['login-card'], className, {
      [cls['login-card-selected']]: isSelected,
    }) }
    type="button"
    { ...rest }
  >
    {children}
    <Icon className={ cls['login-card-check'] }>
      check
    </Icon>
  </button>
)


LoginCard.defaultProps = {
  className: null,
  isSelected: false,
}

export default LoginCard
