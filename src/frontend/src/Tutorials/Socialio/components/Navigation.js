import * as React from 'react';
import { NavLink as RNavLink } from 'react-router-dom';

import { NavSectionTitle, NavSection, NavLink, NavPanel } from '@duik/it';

import menuLinks from '../assets/menuLinks';
import menuFavourites from '../assets/menuFavourites';

const SocialNavigation = () => (
  <NavPanel>
    <NavSection>
      <NavSectionTitle>Menu</NavSectionTitle>
      {menuLinks.map(({ count, ...link }) => (
        <NavLink
          key={link.text}
          Component={RNavLink}
          highlighted
          rightEl={count ? <span>{count}</span> : null}
          {...link}
          to={`/social${link.to}`}
        >
          {link.text}
        </NavLink>
      ))}
    </NavSection>
    <NavSection>
      <NavSectionTitle>Causes You Care About</NavSectionTitle>
      {menuFavourites.map(({ count, ...link }) => (
        <NavLink key={link.text} highlighted {...link}>
          {link.text}
        </NavLink>
      ))}
    </NavSection>
  </NavPanel>
);

export default SocialNavigation;
