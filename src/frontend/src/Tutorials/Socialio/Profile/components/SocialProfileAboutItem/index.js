import * as React from 'react';
import classnames from 'classnames';

import { Avatar } from '@duik/it';

import cls from './social-about-item.module.scss';

const SocialProfileAboutItem = ({ className, children, data, ...rest }) => (
  <div
    className={classnames(cls['social-profile-about-item'], className)}
    {...rest}
  >
    <Avatar key={data.name} {...data} />
  </div>
);

SocialProfileAboutItem.defaultProps = {
  className: null,
  children: null
};

export default SocialProfileAboutItem;
