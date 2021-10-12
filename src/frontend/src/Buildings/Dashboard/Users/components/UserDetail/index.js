import React from 'react';
import * as images from '@exampleAssets';
import { withRouter, Redirect } from 'react-router-dom';

import Icon from '@duik/icon';
import { IconText, StatusDot, Badge, BadgeContainer } from '@components';

import { Divider, ContentTitle, ScrollArea, Avatar, Button } from '@duik/it';

import cls from './buildings-users-detail.module.scss';

import buildings from '../../assets/buildings';
import teams from '../../assets/teams';
import users from '../../assets/users';

export const BuildingsUsersDetail = props => {
  const { user_id } = props.match.params;
  const { onMobileBack } = props;

  const flattenUsers = users.reduce((all, next) => [...all, ...next.users], []);
  const activeUser = flattenUsers.find(item => `${item.id}` === `${user_id}`);

  if (!user_id) {
    return <Redirect to={`${props.match.url}/1`} />;
  }

  return (
    <ScrollArea className={cls['buildings-users-detail']}>
      {!user_id ? (
        <div className={cls['conversation-empty']}>
          <h2>Select conversation to display</h2>
        </div>
      ) : (
        <>
          <Button
            className={cls['buildings-users-detail-back-btn']}
            clear
            square
            onClick={onMobileBack}
          >
            <Icon>arrow_left</Icon>
          </Button>
          <Avatar
            imgUrl={activeUser.imgUrl}
            name={
              <strong>
                {activeUser.name}
                <StatusDot className={cls['buildings-users-status']} />
              </strong>
            }
            jumbo
            textBottom={
              <React.Fragment>
                {activeUser.textBottom}
                <div className={cls['buildings-users-detail-reviews']}>
                  <span className={cls['buildings-users-detail-reviews-count']}>
                    9
                  </span>
                  {' Reviews'}
                </div>
              </React.Fragment>
            }
          />
          <div className={cls['buildings-users-detail-content']}>
            <ContentTitle>Basic Details</ContentTitle>
            <div className={cls['buildings-users-detail-content-basics']}>
              <IconText icon={<Icon>message_2</Icon>} textHighlight>
                me@angenewton.co
              </IconText>
              <IconText icon={<Icon>phone</Icon>} textHighlight>
                +44 (0) 7887 665 221
              </IconText>
              <IconText icon={<Icon>pin_rounded_circle</Icon>} textHighlight>
                United Kingdom
              </IconText>
            </div>
          </div>
          <div className={cls['buildings-users-detail-content-bio-wrapper']}>
            <ContentTitle>Bio</ContentTitle>
            <p>
              Working in automotive quality management for over 3 years. A
              passionate traveller, loves to spend time with her dog. Wine
              taster. Biggest dream is to travel the world with all the money I
              make from renting building to my dearest customers who pay well.
            </p>
          </div>
          <div className={cls['buildings-users-detail-content-tags-wrapper']}>
            <ContentTitle>Tags</ContentTitle>
            <BadgeContainer
              className={cls['buildings-users-detail-content-tags']}
            >
              <Badge color="green" fill>
                Office Management
              </Badge>
              <Badge color="orange" fill>
                Design
              </Badge>
              <Badge color="blue" fill>
                Developer
              </Badge>
            </BadgeContainer>
          </div>
          <Divider margin />
          <div className={cls['buildings-users-detail-section-header']}>
            <ContentTitle>Associated with buildings (45)</ContentTitle>
            <span
              className={cls['buildings-users-detail-section-header-see-all']}
            >
              See All
            </span>
          </div>
          <div className={cls['buildings-users-detail-associate-buildings']}>
            {buildings.map(b => (
              <div className={cls['buildings-users-detail-associate-building']}>
                <div
                  className={
                    cls['buildings-users-detail-associate-building-image']
                  }
                  style={{ backgroundImage: `url(${b.imgUrl})` }}
                />
                <h5
                  className={
                    cls['buildings-users-detail-associate-building-title']
                  }
                >
                  {b.name}
                </h5>
                <p
                  className={
                    cls['buildings-users-detail-associate-building-location']
                  }
                >
                  {b.location}
                </p>
              </div>
            ))}
          </div>
          <Divider margin />
          <div>
            <div className={cls['buildings-users-detail-section-header']}>
              <ContentTitle>Member of teams (5)</ContentTitle>
              <span
                className={cls['buildings-users-detail-section-header-see-all']}
              >
                See All
              </span>
            </div>
            <div className={cls['buildings-users-detail-teams']}>
              {teams.map(t => (
                <div className={cls['buildings-users-detail-team']}>
                  <div
                    className={cls['buildings-users-detail-team-image']}
                    style={{ backgroundImage: `url(${t.imgUrl})` }}
                  />
                  <div className={cls['buildings-users-detail-team-content']}>
                    {t.isOwner && (
                      <Badge color="white" fill>
                        OWNER
                      </Badge>
                    )}
                    <h5 className={cls['buildings-users-detail-team-title']}>
                      {t.name}
                    </h5>
                    <p
                      className={
                        cls['buildings-users-detail-team-members-count']
                      }
                    >
                      {t.membersCount}
                      {' members'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Divider margin />
          <div className={cls['buildings-users-detail-section-header']}>
            <ContentTitle>Reviews (18)</ContentTitle>
            <span
              className={cls['buildings-users-detail-section-header-see-all']}
            >
              See All
            </span>
          </div>

          <Avatar
            highlighted
            imgUrl={images.a02}
            name="Alice Townsend"
            textBottom="I've had the pleasure to work with Angelina on a number of projects requiring quality check. It's not easy communicating project requirements, especially aesthetics, when your design work is being done remotely. "
          />
        </>
      )}
    </ScrollArea>
  );
};

export default withRouter(BuildingsUsersDetail);
