import * as React from 'react';

import * as images from '../../../../../@exampleAssets';
import Icon from '@duik/icon';
import { Widget, Button, Divider, Avatar } from '@duik/it';

import cls from './social-post-create.module.scss';

const SocialPostCreate = () => (
    <Widget margin>
        <div className={cls['social-post-create']}>
            <Button transparent>
                <Icon mr className={cls['social-post-create-iconPost']}>
                    building
                </Icon>
                <span className={cls['social-post-create-actionDesc']}>Make Post</span>
            </Button>
            <Button transparent>
                <Icon mr className={cls['social-post-create-iconPhoto']}>
                    camera
                </Icon>
                <span className={cls['social-post-create-actionDesc']}>
                    Photo/Video Album
                </span>
            </Button>
            <Button transparent>
                <Icon mr className={cls['social-post-create-iconCamera']}>
                    video_camera
                </Icon>
                <span className={cls['social-post-create-actionDesc']}>Live Video</span>
            </Button>
        </div>
        <Divider />
        <div className={cls['social-post-create-message']}>
            <Avatar imgUrl={images.a02} />
            <textarea
                placeholder="Where you at? What are you doing? What’s your number? Share it!"
                rows="2"
            />
        </div>
        <div className={cls['social-post-create-footer']}>
            <Button transparent>
                <Icon mr className={cls['social-post-create-iconPhoto']}>
                    camera
                </Icon>
                Photo/Video
            </Button>
            <Button transparent>
                <Icon mr className={cls['social-post-create-iconPhoto']}>
                    smile
                </Icon>
                Feeling/Activity
            </Button>
        </div>
    </Widget>
);

export default SocialPostCreate;
