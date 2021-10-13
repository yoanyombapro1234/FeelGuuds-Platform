import React from 'react';
import Icon from '@duik/icon';
import {
    TopBar,
    TopBarSection,
    TopBarTitle,
    DropdownItem,
    TextField,
    Button
} from '@duik/it';
import { NavBurger } from '../../@components';
import { UiContext } from '../../@context';

import * as images from '../../@exampleAssets';

import TopBarUserDropdown from './TopBarUserDropdown';
import cls from './knowledge-top-bar.module.scss';

const KnowledgeHeader = ({ isMenuOpen, toggleMenu }) => {
    const uiContext = React.useContext(UiContext);
    return (
        <TopBar className={cls['knowledge-top-bar']}>
            <Button
                className={cls['knowledge-top-bar-menu-btn']}
                onClick={uiContext.menu.handleToggle}
            >
                <NavBurger isOpen={uiContext.menu.isVisible} />
            </Button>
            <TopBarSection>
                <TopBarTitle>
                    <Icon>help</Icon>
                    Knowledge
                </TopBarTitle>
            </TopBarSection>
            <TopBarSection className={cls['knowledge-top-bar-actions']}>
                <TextField
                    clear
                    leftEl={<Icon>search_left</Icon>}
                    placeholder="Type to search..."
                />
                <TopBarUserDropdown
                    user={{
                        imgUrl: images.a10,
                        name: 'Minnie'
                    }}
                >
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem>Your Profile</DropdownItem>
                    <DropdownItem>Help & Support center</DropdownItem>
                    <DropdownItem>Logout</DropdownItem>
                </TopBarUserDropdown>
            </TopBarSection>
        </TopBar>
    );
};

export default KnowledgeHeader;
