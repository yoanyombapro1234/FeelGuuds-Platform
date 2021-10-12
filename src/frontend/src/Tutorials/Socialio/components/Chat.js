import * as React from 'react';

import {
  NavSectionTitle,
  NavSection,
  Avatar,
  NavPanel,
  ScrollArea
} from '@duik/it';

import AvatarMenuContainer from './AvatarMenuContainer';
import people from '../assets/avatarPeople';
import avatarYourPages from '../assets/avatarYourPages';
import avatarGroups from '../assets/avatarGroups';

const SocialChat = () => (
  <NavPanel positionRight>
    <ScrollArea>
      <NavSection>
        <NavSectionTitle>Your Pages</NavSectionTitle>
        <AvatarMenuContainer>
          {avatarYourPages.map(avatar => (
            <Avatar key={avatar.name} {...avatar} />
          ))}
        </AvatarMenuContainer>
      </NavSection>
      <NavSection>
        <NavSectionTitle>Contacts</NavSectionTitle>
        <AvatarMenuContainer>
          {people.map(person => (
            <Avatar
              key={person.name}
              imgUrl={person.imgUrl}
              name={person.name}
              status={person.status}
            />
          ))}
        </AvatarMenuContainer>
      </NavSection>
      <NavSection>
        <NavSectionTitle>Groups</NavSectionTitle>
        <AvatarMenuContainer>
          {avatarGroups.map(avatar => (
            <Avatar key={avatar.name} {...avatar} />
          ))}
        </AvatarMenuContainer>
      </NavSection>
      <NavSection>
        <NavSectionTitle>More Contacts</NavSectionTitle>
        <AvatarMenuContainer>
          {people.map(({ name, imgUrl, status }) => (
            <Avatar
              key={name}
              {...{
                name,
                imgUrl,
                status
              }}
            />
          ))}
        </AvatarMenuContainer>
      </NavSection>
    </ScrollArea>
  </NavPanel>
);

export default SocialChat;
