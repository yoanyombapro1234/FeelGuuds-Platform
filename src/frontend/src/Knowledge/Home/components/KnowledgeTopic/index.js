import React from 'react';
import classnames from 'classnames';

import { Avatar, Widget, Dropdown, DropdownItem } from '@duik/it';
import { IconWrap, Badge } from '../../../../@components';

import cls from './knowledge-topic.module.scss';

const KnowledgeTopic = ({
    children,
    Component,
    className,
    icon: { className: iconClassName, ...icon },
    title,
    description,
    users,
    isAdmin,
    ...rest
}) => (
    <Component
        className={classnames(cls['knowledge-list-topic'], className)}
        padding
        {...rest}
    >
        <IconWrap
            {...icon}
            className={classnames(cls['knowledge-list-topic-icon'], iconClassName)}
        />
        <div className={cls['knowledge-list-topic-content']}>
            <h2 className={cls['knowledge-list-topic-title']}>
                <a className={cls['knowledge-list-topic-link']} href='/hater'>{title}</a>
                {isAdmin && (
                    <Badge className={cls['knowledge-list-topic-tag']} color="green">
                        Admin
                    </Badge>
                )}
            </h2>
            <p>{description}</p>
        </div>
        {users && (
            <div className={cls['knowledge-list-topic-users']}>
                {users.map(user => (
                    <Avatar key={user.imgUrl} {...user} />
                ))}
            </div>
        )}
        {isAdmin && (
            <Dropdown
                className={cls['knowledge-list-topic-action']}
                menuPosition="bottom-left"
            >
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem>Your Profile</DropdownItem>
                <DropdownItem>Help & Support center</DropdownItem>
                <DropdownItem>Logout</DropdownItem>
            </Dropdown>
        )}
    </Component>
);

KnowledgeTopic.defaultProps = {
    className: null,
    description: null,
    users: null,
    isAdmin: false,
    children: null,
    Component: Widget
};

export default KnowledgeTopic;
