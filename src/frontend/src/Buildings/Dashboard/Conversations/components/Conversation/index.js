import React from 'react';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import * as images from '@exampleAssets';
import Icon from '@duik/icon';

import {
  MessageContainer,
  MessageBubble,
  MessageImageContainer,
  MessageImage,
  MessageSender
} from '@components';

import {
  Button,
  Avatar,
  TopBar,
  TopBarSection,
  TopBarTitle,
  Divider,
  ContainerVertical
} from '@duik/it';

import cls from './conversation.module.scss';

import conversationsData from '../../assets/conversationList';

class BuildingsDashboard extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.scrollToBottom();
    }, 10);
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    const el = this.messagesScrollRef;
    if (this.messagesScrollRef) {
      el.scrollTop = Number.MAX_SAFE_INTEGER;
    }
  };

  render() {
    const { conversation_id } = this.props.match.params;
    const { onMobileBack } = this.props;

    const flattenConversations = conversationsData.reduce(
      (all, next) => [...all, ...next.conversations],
      []
    );

    const activeConversation = flattenConversations.find(
      item => `${item.id}` === `${conversation_id}`
    );

    return (
      <ContainerVertical>
        {!activeConversation ? (
          <div className={cls['conversation-empty']}>
            <h2>Select conversation to display</h2>
          </div>
        ) : (
          <React.Fragment>
            <TopBar>
              <TopBarSection>
                <TopBarTitle>
                  <Button
                    className={cls['conversation-back']}
                    clear
                    square
                    onClick={onMobileBack}
                  >
                    <Icon>arrow_left</Icon>
                  </Button>
                  {activeConversation.name}
                </TopBarTitle>
              </TopBarSection>
              <div className={cls['conversation-actions']}>
                <TopBarSection className={cls['conversation-avatars']}>
                  {activeConversation.users.map((u, index) => (
                    <Avatar
                      key={index} // eslint-disable-line
                      sm
                      {...u}
                    />
                  ))}
                </TopBarSection>
                <Divider vertical />
                <TopBarSection>
                  <Button clear square>
                    <Icon>phone_two</Icon>
                  </Button>
                  <Button clear square>
                    <Icon>video_camera</Icon>
                  </Button>
                  <Button clear square>
                    <Icon>settings</Icon>
                  </Button>
                </TopBarSection>
              </div>
            </TopBar>
            <div
              ref={e => {
                this.messagesScrollRef = e;
              }}
              className={cls['conversation-messages-container']}
            >
              <div className={cls['conversation-messages']}>
                <MessageContainer position="right">
                  <MessageSender
                    time={moment()
                      .subtract(60 * 39, 'seconds')
                      .calendar()}
                  >
                    <Avatar
                      imgUrl={images.a01}
                      name={<strong>Norman Hernandez</strong>}
                      sm
                    />
                  </MessageSender>
                  <MessageBubble position="right">
                    I always think teenagers must hate my place as there is
                    nothing to do but relax and enjoy the sea view and sunsets
                    and read books which is not a very teenagery thing to do (my
                    idea of paradise when I was a teen though). No shops or even
                    a park to hang out in. I had one lady stay with her young
                    daughter who wanted to come back at Xmas for a month with
                    husband and teenage daughter from over 1500km away but the
                    teen nixed it as the oldest girls who live here are only
                    about 10.
                  </MessageBubble>
                </MessageContainer>
                <MessageContainer position="left">
                  <MessageSender
                    time={moment()
                      .subtract(60 * 39, 'seconds')
                      .calendar()}
                  >
                    <Avatar
                      imgUrl={images.a12}
                      name={<strong>Carolyn Chandler</strong>}
                      sm
                    />
                  </MessageSender>
                  <MessageBubble position="left">
                    {' '}
                    {/* eslint-disable-line */}
                    Hey y’all! We own Hidden Lake Forest which is in a private
                    lake community. We wanted to see how others handle a waiver
                    of liability to use of Kayaks, boats, swimming. 🛶🏖
                  </MessageBubble>
                  <MessageBubble position="left">
                    {' '}
                    {/* eslint-disable-line */}
                    Btw want some chicken?
                  </MessageBubble>
                </MessageContainer>
                <MessageContainer position="right">
                  <MessageSender
                    time={moment()
                      .subtract(60 * 39, 'seconds')
                      .calendar()}
                  >
                    <Avatar
                      imgUrl={images.a01}
                      name={<strong>Norman Hernandez</strong>}
                      sm
                    />
                  </MessageSender>
                  <MessageBubble position="right">
                    {/* eslint-disable-line */}
                    Had considered making kayak available but 🤦🏻‍♂️
                    <br />
                    - will make people stay beyond checkout if they use them,
                    then want to change, shower etc :(
                    <br />
                    - if they get in trouble, you know who they will call...
                    <br />
                    - adds more work, need to brief guests on what to do, where
                    to go, life jackets in different sizes blah blah 😅
                    <br />
                  </MessageBubble>
                  <MessageImageContainer>
                    <MessageImage imgUrl={images.b11} />
                    <MessageImage imgUrl={images.b03} />
                    <MessageImage imgUrl={images.b04} />
                    <MessageImage imgUrl={images.b09} />
                  </MessageImageContainer>
                </MessageContainer>
                <MessageContainer position="left">
                  <MessageSender
                    time={moment()
                      .subtract(60 * 39, 'seconds')
                      .calendar()}
                  >
                    <Avatar
                      imgUrl={images.a05}
                      name={<strong>Callie Greene</strong>}
                      sm
                    />
                  </MessageSender>
                  <MessageBubble position="left">
                    {' '}
                    {/* eslint-disable-line */}
                    We have lake-front vacation rentals. No specific liability
                    waiver for that, but house rules stipulate risks, we assume
                    no liability, etc. We also offer SUP/kayaks; each guest must
                    e-sign liability waiver to get access to those. We also
                    stock PFDs in all sizes for guests. 💁🏻‍♂️
                  </MessageBubble>
                </MessageContainer>
              </div>
            </div>
            <div className={cls['conversation-textbar']}>
              <textarea placeholder="New message..." rows="1" />
              <div className={cls['conversation-textbar-actions']}>
                <Button clear square>
                  <Icon>picture</Icon>
                </Button>
                <Button clear square>
                  <Icon>attachment</Icon>
                </Button>
                <Button clear square>
                  <Icon>smile</Icon>
                </Button>
              </div>
            </div>
          </React.Fragment>
        )}
      </ContainerVertical>
    );
  }
}

export default withRouter(BuildingsDashboard);
