import * as React from 'react';
import Icon from '@duik/icon';
import {
    ContainerHorizontal,
    ScrollArea,
    Widget,
    WidgetHeader,
    Divider,
    Button,
    Dropdown,
    DropdownItem,
    Avatar
} from '@duik/it';

import * as images from '../../../@exampleAssets';

import PostCreate from './components/PostCreate';
import PostHeader from './components/PostHeader';
import PostWrapper from './components/PostWrapper';
import PostImageGroup from './components/PostImageGroup';
import PostActions from './components/PostActions';
import PostCommentWrite from './components/PostCommentWrite';
import Stories from './components/Stories';

import cls from './social-home.module.scss';

const SocialProfile = () => (
    <ContainerHorizontal className={cls['socialio-home']}>
        <ScrollArea className={cls['socialio-feed']}>
            <PostCreate />
            <PostWrapper>
                <PostHeader />
                <p>
                    Just bought these photos from @rion_photography! So happy with the results. They are your best option for nature photos. #nature #eco-friendly #small-business{' '}
                    <span role="img" aria-label="emoji">
                        💁🏼
                    </span>
                    <span role="img" aria-label="emoji">
                        🙋🏻‍
                    </span>
                    <span role="img" aria-label="emoji">
                        ♂️
                    </span>
                </p>
                <PostImageGroup />
                <Divider />
                <PostActions />
                <Divider />
                <PostCommentWrite />
            </PostWrapper>
            <PostWrapper>
                <PostHeader />
                <p>
                    Which store sells the best soaps and is part of the #eco-friendly community? #ineed #lookingforhelp #small-business
                </p>
                <Divider />
                <PostActions />
                <Divider />
                <PostCommentWrite />
            </PostWrapper>
        </ScrollArea>
        <ScrollArea className={cls['socialio-feed-secondary']}>
            <Widget margin>
                <WidgetHeader className={cls['socialio-feed-secondary-widget-header']}>
                    <div>
                        <h3>Trending Influencers</h3>
                    </div>
                    <div>
                        <Dropdown
                            buttonText={<Icon>more</Icon>}
                            menuPosition="bottomRight"
                            buttonProps={{
                                clear: true,
                                square: true,
                                className: cls['dropdown-btn-dots']
                            }}
                        >
                            <DropdownItem>Edit</DropdownItem>
                            <DropdownItem>Delete</DropdownItem>
                        </Dropdown>
                    </div>
                </WidgetHeader>
                <Stories />
            </Widget>
            <Widget className={cls['socialio-feed-secondary-events']} margin>
                <Button clear>
                    <Icon mr>calendar</Icon>
                    <strong className={cls['socialio-feed-secondary-events-text']}>
                        5 Event Invites
                    </strong>
                </Button>
                <Button clear>
                    <Icon mr>calendar</Icon>
                    <strong className={cls['socialio-feed-secondary-events-text']}>
                        Noah Frank
                    </strong>
                    {"'s birthday"}
                </Button>
            </Widget>

            <Widget margin>
                <WidgetHeader className={cls['socialio-feed-secondary-widget-header']}>
                    <div>
                        <h3>Suggested Small Businesses</h3>
                    </div>
                    <div>
                        <Dropdown
                            buttonText={<Icon>more</Icon>}
                            menuPosition="bottomRight"
                            buttonProps={{
                                clear: true,
                                square: true,
                                className: cls['dropdown-btn-dots']
                            }}
                        >
                            <DropdownItem>Edit</DropdownItem>
                            <DropdownItem>Delete</DropdownItem>
                        </Dropdown>
                    </div>
                </WidgetHeader>
                <div style={{ padding: '20px' }}>
                    <Avatar
                        imgUrl={images.s05}
                        name="Chilli Burgers"
                        textBottom="Restaurant"
                    />
                    <div
                        className={cls['socialio-feed-secondary-events-suggested-pages']}
                        style={{ backgroundImage: `url("${images.s04}")` }}
                    />
                </div>
                <div className={cls['socialio-feed-secondary-events-suggested-cta']}>
                    <Button Component="a" href="#" clear>
                        <Icon mr>love</Icon>
                        <strong>Like Page</strong>
                    </Button>
                </div>
            </Widget>
        </ScrollArea>
    </ContainerHorizontal>
);

export default SocialProfile;
