import React from 'react';
import classnames from 'classnames';

import { ContainerVertical, ContainerHorizontal } from '@duik/it';

import TopBar from './components/TopBar';

import cls from './buildings-conversation.module.scss';
import Conversation from './components/Conversation';
import ConversationList from './components/ConversationList';

const BuildingsMessages = props => {
    const [isMobileDetailVisible, setMobileDetailVisible] = React.useState(false);

    const mobileNavigateToList = () => {
        setMobileDetailVisible(false);
    };
    const mobileNavigateToDetail = () => {
        setMobileDetailVisible(true);
    };

    return (
        <ContainerVertical>
            <TopBar />
            <ContainerHorizontal
                className={classnames(cls['buildings-conversations'], {
                    [cls['container-active-conversation']]: isMobileDetailVisible
                })}
            >
                <ConversationList onMobileDetail={mobileNavigateToDetail} />
                <Conversation onMobileBack={mobileNavigateToList} />
            </ContainerHorizontal>
        </ContainerVertical>
    );
};

export default BuildingsMessages;
