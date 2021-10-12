import * as React from 'react';

import { ScrollArea, WidgetContainer } from '@duik/it';

import SocialHeader from './components/SocialHeader';
import SocialProfileAboutWidget from './components/SocialProfileAboutWidget';
import SocialProfileFriendsWidget from './components/SocialProfileFriendsWidget';

import people from '../assets/avatarPeople';
import about from '../assets/about';

import CoverImage from '../assets/images/cover.jpg';
import * as images from '@exampleAssets';

import cls from './social-profile.module.scss';

const SocialProfile = () => (
  <ScrollArea>
    <WidgetContainer className={cls['social-profile-content']}>
      <SocialHeader
        avatar={{
          imgUrl: images.a10
        }}
        imgUrl={CoverImage}
        name="Rachel Rose"
      />
      <SocialProfileAboutWidget data={about} />
      <SocialProfileFriendsWidget
        data={people.map(({ name, imgUrl, textBottom }) => ({
          name,
          imgUrl,
          textBottom
        }))}
      />
    </WidgetContainer>
  </ScrollArea>
);

export default SocialProfile;
