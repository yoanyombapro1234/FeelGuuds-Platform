import * as React from 'react';
import classnames from 'classnames';

import { Widget } from '@duik/it';

import cls from './widget-doc.module.scss';

const WidgetDoc = ({ children, className, ...rest }: WidgetDocProps) => (
  <Widget className={classnames(cls['card-doc'], className)} {...rest}>
    {children}
  </Widget>
);

WidgetDoc.defaultProps = {
  className: null,
  children: null
};

export default WidgetDoc;
