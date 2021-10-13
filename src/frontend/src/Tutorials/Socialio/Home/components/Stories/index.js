import * as React from 'react';

import { Avatar } from '@duik/it';

import * as images from '../../../../../@exampleAssets';

import cls from './social-stories.module.scss';

const SocialStories = () => (
    <div className={cls['social-stories']}>
        <div className={cls['social-stories-content']}>
            <div
                className={cls['social-story']}
                style={{
                    backgroundImage: `url("${images.s01}")`
                }}
            >
                <div className={cls['social-story-avatar']}>
                    <Avatar imgUrl={images.a07} />
                    <span className={cls['social-story-name']}>Mario</span>
                </div>
            </div>
            <div
                className={cls['social-story']}
                style={{
                    backgroundImage: `url("${images.s07}")`
                }}
            >
                <div className={cls['social-story-avatar']}>
                    <Avatar imgUrl={images.a19} />
                    <span className={cls['social-story-name']}>Ralph</span>
                </div>
            </div>
            <div
                className={cls['social-story']}
                style={{
                    backgroundImage: `url("${images.s06}")`
                }}
            >
                <div className={cls['social-story-avatar']}>
                    <Avatar imgUrl={images.a25} />
                    <span className={cls['social-story-name']}>Ava</span>
                </div>
            </div>
            <div
                className={cls['social-story']}
                style={{
                    backgroundImage: `url("${images.s02}")`
                }}
            >
                <div className={cls['social-story-avatar']}>
                    <Avatar imgUrl={images.a14} />
                    <span className={cls['social-story-name']}>Jonathan</span>
                </div>
            </div>
        </div>
    </div>
);

export default SocialStories;
