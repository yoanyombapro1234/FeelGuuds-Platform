import React from 'react';
import classnames from 'classnames';

import cls from './product-list.module.scss';

export const ProductList = ({ children, className, ...rest }) => (
  <div className={classnames(cls['product-list'], className)} {...rest}>
    {children}
  </div>
);

ProductList.defaultProps = {
  className: null
};

export default ProductList;
