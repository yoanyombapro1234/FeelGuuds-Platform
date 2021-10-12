import React from 'react';
import classnames from 'classnames/dedupe';

import cls from './login-card-container.module.scss';

export const LoginCardContainer = ({ children, className, ...rest }) => {
  return (
    <div
      className={classnames(cls['login-card-container'], className)}
      {...rest}
    >
      {children}
    </div>
  );
};

LoginCardContainer.defaultProps = {
  className: null
};

export default LoginCardContainer;
