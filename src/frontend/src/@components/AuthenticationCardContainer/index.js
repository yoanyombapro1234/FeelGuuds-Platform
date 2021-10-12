import React from 'react';
import classnames from 'classnames/dedupe';

import cls from './authentication-card-container.module.scss';

export const AuthenticationCardContainer = ({ children, className, ...rest }) => {
  return (
    <div
      className={classnames(cls['login-card-container'], className)}
      {...rest}
    >
      {children}
    </div>
  );
};

AuthenticationCardContainer.defaultProps = {
  className: null
};

export default AuthenticationCardContainer;
