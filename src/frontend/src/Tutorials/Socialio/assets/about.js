import * as React from 'react';
import * as images from '../../../@exampleAssets';
import Icon from '@duik/icon';

export default [
    {
        avatarPlaceholder: {
            color: 'indigo',
            content: 'JR'
        },
        textBottom: 'Past: Lambo and BMW',
        name: (
            <span>
                <i>{'Designer at '}</i>

                <strong>Jeep Renegade</strong>
            </span>
        )
    },
    {
        imgUrl: images.a01,
        textBottom: 'Together since October 15, 2015',
        name: (
            <span>
                <i>Gender Inequality Community </i> <strong>Moderator</strong>
            </span>
        )
    },
    {
        avatarPlaceholder: {
            content: <Icon>add</Icon>
        },
        name: <i>Add a school</i>
    },
    {
        avatarPlaceholder: {
            content: <Icon>phone</Icon>
        },
        name: '+420 755 666 214',
        textBottom: '+44 (0) 7490 199 222'
    },
    {
        imgUrl: images.pl01,
        textBottom: 'Originally from Prague, Czech Republic',
        name: (
            <span>
                <i>Lives in</i> <strong>London, United Kingdom</strong>
            </span>
        )
    },
    {
        avatarPlaceholder: {
            content: <Icon>profile_round</Icon>
        },
        name: 'https://instagram.com/janlosert',
        textBottom: 'https://janlosert.com, https://dribbble.com/JanLosert'
    }
];
