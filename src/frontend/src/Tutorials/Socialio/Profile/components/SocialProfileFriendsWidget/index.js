import * as React from "react";

import { TabItem, Tabs, WidgetHeader, Widget } from "@duik/it";

import SocialProfileFriendListItem from "../SocialProfileFriendListItem";
import SocialProfileFriendList from "../SocialProfileFriendList";

import cls from "./social-profile-friends.module.scss";

const SocialProfileFriendsWidget = ({
  imgUrl,
  avatar,
  name,
  data,
  ...rest
}) => (
  <Widget {...rest}>
    <WidgetHeader className={cls["social-profile-friends-card-header"]}>
      <h3>Friends</h3>
    </WidgetHeader>
    <Tabs>
      {[
        {
          text: "All Friends",
          extra: 580
        },
        {
          text: "Subscribed Communities",
          extra: 120
        },
        {
          text: "Friend Requests",
          extra: null
        }
      ].map(item => (
        <TabItem
          key={item.text}
          className={item.text === "All Friends" && "active"}
          {...item}
        >
          {item.text}
        </TabItem>
      ))}
    </Tabs>
    <SocialProfileFriendList>
      {data.map(item => (
        <SocialProfileFriendListItem key={item.name} data={item} />
      ))}
    </SocialProfileFriendList>
  </Widget>
);

SocialProfileFriendsWidget.defaultProps = {
  className: null,
  imgUrl: null,
  data: []
};

export default SocialProfileFriendsWidget;
