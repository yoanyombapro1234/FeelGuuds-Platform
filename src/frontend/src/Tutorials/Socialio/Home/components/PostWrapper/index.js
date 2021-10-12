import * as React from 'react';

import { Widget } from '@duik/it';

import cls from './social-post-post.module.scss';

const Post = props => (
  <Widget className={cls['social-post']} margin {...props} />
);

export default Post;
