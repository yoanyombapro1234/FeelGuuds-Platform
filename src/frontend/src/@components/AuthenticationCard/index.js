import React from 'react'
import classnames from 'classnames'
import Icon from '@duik/icon'

import cls from './authentication-card.module.scss'


export const AuthenticationCard = ({
    children,
    className,
    isSelected,

    ...rest
}) => (
    <button
        className={classnames(cls['login-card'], className, {
            [cls['login-card-selected']]: isSelected,
        })}
        type="button"
        {...rest}
    >
        {children}
        <Icon className={cls['login-card-check']}>
            check
        </Icon>
    </button>
)


AuthenticationCard.defaultProps = {
    className: null,
    isSelected: false,
}

export default AuthenticationCard
