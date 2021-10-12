import * as React from 'react';
import { Link } from 'react-router-dom';

import * as images from '@exampleAssets';

import cls from './social-post-image-group.module.scss';

const SocialPostImageGroup = () => (
  <div className={cls['social-post-image-group']}>
    <Link
      className={cls['social-post-image-group-photo']}
      style={{
        backgroundImage: `url(${images.s01})`
      }}
      to="#"
    />
    <Link
      className={cls['social-post-image-group-photo']}
      style={{
        backgroundImage: `url(${images.s02})`
      }}
      to="#"
    />
    <Link
      className={cls['social-post-image-group-photo']}
      style={{
        backgroundImage: `url(${images.s03})`
      }}
      to="#"
    />
  </div>
);

export default SocialPostImageGroup;
