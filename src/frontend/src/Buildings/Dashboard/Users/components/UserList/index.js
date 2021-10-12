import React from 'react';
import { NavLink } from 'react-router-dom';
import { StatusDot } from '@components';

import Icon from '@duik/icon';
import {
  TextField,
  ContainerVertical,
  ScrollArea,
  TopBar,
  Avatar
} from '@duik/it';

import cls from './buildings-users-list.module.scss';

import users from '../../assets/users';

const BuildingsUserList = props => {
  const { onMobileDetail } = props;
  return (
    <ContainerVertical className={cls['buildings-users-list']}>
      <TopBar className={cls['buildings-users-list-top-bar']}>
        <TextField
          clear
          rightEl={<Icon>search_left</Icon>}
          placeholder="Search users"
        />
      </TopBar>
      <ScrollArea>
        {users.map(group => (
          <React.Fragment key={group.letter}>
            <div className={cls['buildings-users-list-letter']}>
              {group.letter}
            </div>
            {group.users.map(user => (
              <NavLink
                key={user.name}
                className={cls['buildings-users-list-user-item']}
                to={`/buildings/users/${user.id}`}
                onClick={onMobileDetail}
              >
                <Avatar
                  imgUrl={user.imgUrl}
                  name={
                    user.online ? (
                      <strong>
                        {`${user.name} `}
                        <StatusDot className={cls['buildings-users-status']} />
                      </strong>
                    ) : (
                      <strong>{user.name}</strong>
                    )
                  }
                  textBottom={user.textBottom}
                />
              </NavLink>
            ))}
          </React.Fragment>
        ))}
      </ScrollArea>
    </ContainerVertical>
  );
};

export default BuildingsUserList;
