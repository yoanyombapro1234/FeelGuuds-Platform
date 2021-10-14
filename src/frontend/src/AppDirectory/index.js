import React from "react";
import { Link } from "react-router-dom";

import {
  Widget,
  ContainerVertical,
  ContainerHorizontal,
  ScrollArea
} from "@duik/it";

import cls from "./app-directory.module.scss";
import * as images from "./assets";
import { HomeTopBar } from "../@components";

const screens = [
  {
    title: "Social Network Conceptual App",
    hasMore: true,
    screens: [
      {
        text: "Homefeed",
        to: "/social",
        imgUrl: images.sHome,
        isNew: true
      },
      {
        text: "Profile",
        to: "/social/profile",
        imgUrl: images.socialProfile
      },
      {
        text: "Events",
        to: "/social/events",
        imgUrl: images.sCalendar,
        isNew: true
      }
    ]
  },
  {
    title: "Buildings Conceptual App",
    screens: [
      {
        text: "Signup",
        to: "/buildings/sign-up",
        imgUrl: images.bsignup
      },
      {
        text: "Listing",
        to: "/buildings/listing",
        imgUrl: images.blist
      },
      {
        text: "Listing Detail",
        to: "/buildings/listing/1",
        imgUrl: images.bdetail,
        isNew: true
      },
      {
        text: "Dashboard",
        to: "/buildings",
        imgUrl: images.bdashboard,
        isNew: true
      },
      {
        text: "Performance",
        to: "/buildings/performance",
        imgUrl: images.brevenue,
        isNew: true
      },
      {
        text: "User Settings",
        to: "/buildings/user/settings",
        imgUrl: images.bsettings,
        isNew: true
      },
      {
        text: "Conversations",
        to: "/buildings/conversations/1",
        imgUrl: images.bconversations,
        isNew: true
      },
      {
        text: "Users",
        to: "/buildings/users/1",
        imgUrl: images.bcontacts,
        isNew: true
      }
    ]
  },
  {
    title: "Other Screens",
    hasMore: true,
    screens: [
      {
        text: "Documentation",
        to: "/knowledge/doc",
        imgUrl: images.documentationDetail
      },
      {
        text: "Helpdesk",
        to: "/knowledge",
        imgUrl: images.documentationListHelp
      },
      {
        text: "Tutorials",
        to: "/tutorials",
        imgUrl: images.tutorials
      },
      {
        text: "Analytics",
        to: "/analytics",
        imgUrl: images.analytics
      }
    ]
  }
];

const Item = ({ item }) => (
  <Link key={item.to} to={item.to}>
    <Widget className={cls["app-directory-item"]} margin>
      {item.isNew && <div className={cls["app-directory-item-new"]}>NEW</div>}
      <span className={cls["app-directory-item-text"]}>{item.text}</span>
      <img
        alt={item.text}
        className={cls["app-directory-item-image"]}
        src={item.imgUrl}
      />
    </Widget>
  </Link>
);

export class AppDirectory extends React.PureComponent {
  render() {
    return (
      <ContainerVertical>
        <HomeTopBar />
        <ContainerHorizontal>
          <ScrollArea className={cls["app-directory-content"]}>
            <div className={cls["app-directory-content-inner"]}>
              <h1>FeelGuuds</h1>
              <p>
                {/* <span className={cls['app-directory-screen-count']}>
                  {totalScreens}
									</span>{' '}*/}
                We provide the most convenient way to connect mindful consumers
                and businesses together. Let’s make every purchase matter!
              </p>
              <br />
              <br />
              {screens.map(category => (
                <React.Fragment key={category.title}>
                  <h2>{category.title}</h2>
                  <div className={cls["app-directory-previews"]}>
                    {category.screens.map(item => (
                      <Item key={item.imgUrl} item={item} />
                    ))}
                  </div>
                  {category.hasMore && (
                    <p className={cls["app-directory-comming-soon"]}>
                      More coming soon.
                    </p>
                  )}
                </React.Fragment>
              ))}
            </div>
          </ScrollArea>
        </ContainerHorizontal>
      </ContainerVertical>
    );
  }
}

export default AppDirectory;
