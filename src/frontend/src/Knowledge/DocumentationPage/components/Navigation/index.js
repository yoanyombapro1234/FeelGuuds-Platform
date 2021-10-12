import React from 'react';
import classnames from 'classnames';
import { NavSection, NavLink, NavPanel } from '@duik/it';

import { UiContext } from '@context';

import cls from './docs-navigation.module.scss';
import menuLinks from '../../assets/menuLinks';

const KnowledgeDocumentationNavigation = () => {
  const uiContext = React.useContext(UiContext);
  return (
    <NavPanel
      className={classnames(cls['docs-top-bar'], {
        [cls['docs-top-bar-open']]: uiContext.menu.isVisible
      })}
    >
      <NavSection>
        {menuLinks.map(link => (
          <React.Fragment key={link.text}>
            <NavLink
              key={link.text}
              className={link.text === 'Collections' ? 'active' : null}
              highlighted
            >
              {link.text}
            </NavLink>
            {link.items &&
              link.items.map(subLink => (
                <NavLink
                  secondary
                  key={subLink.text}
                  highlighted={subLink.text === 'Model' ? 'active' : null}
                >
                  {subLink.text}
                </NavLink>
              ))}
          </React.Fragment>
        ))}
      </NavSection>
    </NavPanel>
  );
};
export default KnowledgeDocumentationNavigation;
