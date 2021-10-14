/* eslint-disable max-len */
import React from "react";
import { NavLink as RNavLink, Link } from "react-router-dom";
import classnames from "classnames";
import * as images from "../../../../@exampleAssets";
import Icon from "@duik/icon";
import {
  NavSection,
  NavLink,
  NavSectionTitle,
  Avatar,
  TopBar,
  TopBarSection,
  TopBarTitle,
  NavPanel,
  ContainerVertical,
  ScrollArea
} from "@duik/it";

import cls from "./buildings-navigation.module.scss";

const menuLinks = [
  {
    text: "Dashboard",
    to: "dashboard",
    exact: true,
    strict: true
  },
  {
    text: "Buildings",
    to: "listing"
  },
  {
    text: "Posts",
    to: "posts"
  },
  {
    text: "Conversations",
    to: "conversations",
    count: 2
  },
  {
    text: "Amenities",
    to: "amenities"
  },
  {
    text: "Tenants",
    to: "tenants"
  },
  {
    text: "Performance",
    to: "performance"
  },
  {
    text: "Users",
    to: "users"
  }
];

const supportLinks = [
  {
    text: "Need Help?",
    to: "help"
  },
  {
    text: "Contact Us",
    to: "contact"
  },
  {
    text: "Knowledge Base",
    to: "knowledge-base"
  }
];

const BuildingsNavigation = ({ className }) => {
  return (
    <NavPanel
      dark
      className={classnames(cls["buildings-navigation"], className)}
    >
      <ContainerVertical>
        <TopBar className={cls["buildings-nav-top-bar"]}>
          <TopBarSection>
            <TopBarTitle className={cls["buildings-nav-top-bar-title"]}>
              <Icon>building</Icon>
              <span>Buildings</span>
            </TopBarTitle>
          </TopBarSection>
        </TopBar>

        <ScrollArea>
          <NavSection>
            <NavSectionTitle>Menu</NavSectionTitle>
            {menuLinks.map(({ to, count, text, ...rest }) => (
              <NavLink
                key={to}
                pill
                Component={RNavLink}
                rightEl={
                  count ? (
                    <span className={cls["nav-link-count"]}>{count}</span>
                  ) : null
                }
                to={`/buildings/${to}`}
                {...rest}
              >
                {text}
              </NavLink>
            ))}
          </NavSection>
          <NavSection>
            <NavSectionTitle>Support</NavSectionTitle>
            {supportLinks.map(link => (
              <NavLink
                key={link.to}
                Component={RNavLink}
                to={`/buildings/${link.to}`}
              >
                {link.text}
              </NavLink>
            ))}
          </NavSection>
        </ScrollArea>
        <Link
          className={cls["nav-panel-user-container"]}
          to="/buildings/user/settings"
        >
          <Avatar
            imgUrl={images.a07}
            name="Kara Johnson"
            textBottom="HR Specialist"
          />
          <Icon className={cls["nav-panel-user-dropdown-icon"]}>
            dropdown_arrow
          </Icon>
        </Link>
        <div className={cls["nav-panel-about-container"]}>
          <div className={cls["nav-panel-about-copyright"]}>
            © Buildings Ltd. 2018
          </div>
          <div className={cls["nav-panel-about-about"]}>
            Created with love for the environment. By designers and develodivers
            who love to work together in offices!
          </div>
        </div>
      </ContainerVertical>
    </NavPanel>
  );
};

BuildingsNavigation.defaultProps = {
  className: null
};

export default BuildingsNavigation;
