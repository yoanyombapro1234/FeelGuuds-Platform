import * as React from "react";
import Icon from "@duik/icon";
import * as images from "@exampleAssets";

import {
  NavSection,
  NavLink,
  NavSectionTitle,
  TopBar,
  TopBarSection,
  NavPanel,
  ContainerVertical,
  ScrollArea
} from "@duik/it";

import NavLinkAnalyticsContainer from "../NavLinkAnalyticsContainer";
import NavLinkAnalytics from "../NavLinkAnalytics";

import NavUser from "../NavUser";

import cls from "./analytics-navigation.module.scss";

const menuLinks = [
  {
    text: "Dashboard",
    icon: <Icon>gallery_grid_view</Icon>
  },

  {
    text: "Calendar",
    icon: <Icon>calendar</Icon>
  },

  {
    text: "Inbox",
    icon: <Icon>inbox_paper_round</Icon>
  },

  {
    text: "Invoicing",
    icon: <Icon>money_round</Icon>
  },

  {
    text: "Lab / Experimental",
    icon: <Icon>container</Icon>
  }
];

const AnalyticsNavigation = () => (
  <NavPanel className={cls["analytics-navigation"]}>
    {" "}
    <ContainerVertical>
      {" "}
      <TopBar className={cls["analytics-navigation-top-bar"]}>
        {" "}
        <TopBarSection>
          {" "}
          <Icon>home</Icon>{" "}
        </TopBarSection>{" "}
      </TopBar>{" "}
      <ScrollArea>
        {" "}
        <NavUser
          imgUrl={images.a21}
          name="Martha Blair"
          textTop="Art Director"
        />{" "}
        <NavLinkAnalyticsContainer>
          {" "}
          {menuLinks.map(link => (
            <NavLinkAnalytics
              key={link.text}
              className={link.text === "Dashboard" ? "active" : null}
              icon={link.icon}
            >
              {" "}
              <strong> {link.text}</strong>{" "}
            </NavLinkAnalytics>
          ))}
        </NavLinkAnalyticsContainer>{" "}
        <NavSection>
          {" "}
          <NavSectionTitle>Recently viewed</NavSectionTitle>{" "}
          <NavLink rightEl="→">Overall Performance</NavLink>{" "}
          <NavLink rightEl="→">Invoice #845</NavLink>{" "}
          <NavLink rightEl="→">Customer: Minerva Viewer</NavLink>{" "}
        </NavSection>{" "}
      </ScrollArea>{" "}
    </ContainerVertical>{" "}
  </NavPanel>
);

export default AnalyticsNavigation;
