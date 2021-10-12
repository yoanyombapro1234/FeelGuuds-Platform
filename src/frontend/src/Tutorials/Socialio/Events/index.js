import * as React from 'react';
import Icon from '@duik/icon';
import {
  ContainerVertical,
  ScrollArea,
  Widget,
  WidgetHeader,
  Button,
  Dropdown,
  DropdownItem,
  Avatar,
  TopBar,
  TopBarSection,
  TopBarTitle,
  ButtonGroup
} from '@duik/it';

import Calendar from './components/Calendar';

import cls from './social-events.module.scss';

const SocialProfile = () => (
  <ContainerVertical>
    <TopBar>
      <TopBarSection>
        <TopBarTitle>
          <Avatar
            avatarPlaceholder={{
              content: (
                <span role="img" style={{ fontSize: '.785rem' }}>
                  {'✈️'}
                </span>
              )
            }}
            className={cls['social-events-title-icon']}
            style={{
              marginRight: '15px'
            }}
          />
          Subscribed Businesses & Communities
        </TopBarTitle>
      </TopBarSection>
      <TopBarSection>
        <div>
          <Dropdown
            className={cls['social-events-dropdown-filter']}
            buttonText={<>Joined</>}
            menuPosition="bottom-left"
          >
            <DropdownItem>Something here</DropdownItem>
          </Dropdown>
          &nbsp; &nbsp;
          <Dropdown
            buttonText={
              <>
                <Icon mr>send_round</Icon>
                <span className={cls['social-events-dropdown-share-text']}>
                  Share
                </span>
              </>
            }
            menuPosition="bottom-left"
          >
            <DropdownItem>Send as message</DropdownItem>
            <DropdownItem>Share on sharestagram</DropdownItem>
          </Dropdown>
        </div>
      </TopBarSection>
    </TopBar>
    <ScrollArea className={cls['social-events-content']}>
      <Widget className={cls['social-events-widget-calendar']}>
        <WidgetHeader>
          <div>
            <h3 className={cls['social-events-calendar-title']}>Calendar</h3>
          </div>

          <div>
            <ButtonGroup>
              <Button square transparent>
                <Icon className={cls['calendar-btn-arrow']}>arrow_left</Icon>
              </Button>
              <Button transparent>
                June 2018
                <Icon ml>dropdown_arrow</Icon>
              </Button>
              <Button square transparent>
                <Icon className={cls['calendar-btn-arrow']}>arrow_right</Icon>
              </Button>
            </ButtonGroup>
            <Button
              className={cls['social-events-add-lg']}
              primary
              style={{
                marginLeft: '10px'
              }}
            >
              <Icon mr>add</Icon> Create Event
            </Button>
            <Button
              className={cls['social-events-add-sm']}
              primary
              square
              style={{
                marginLeft: '10px'
              }}
            >
              <Icon>add</Icon>
            </Button>
          </div>
        </WidgetHeader>
        <Calendar />
      </Widget>
    </ScrollArea>
  </ContainerVertical>
);

export default SocialProfile;
