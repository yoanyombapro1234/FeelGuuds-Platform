import * as React from 'react';

import * as images from '../../../../../@exampleAssets';
import Icon from '@duik/icon';
import { Avatar } from '@duik/it';

import cls from './social-post-comment-write.module.scss';

const SocialPostWriteComment = () => (
    <div className={cls['social-post-comment-write']}>
        <Avatar imgUrl={images.a02} />
        <textarea placeholder="Write a comment..." rows="1" />
        <div className={cls['social-post-comment-write-actions']}>
            <Icon>camera</Icon>
            <Icon>smile</Icon>
        </div>
    </div>
);

export default SocialPostWriteComment;
