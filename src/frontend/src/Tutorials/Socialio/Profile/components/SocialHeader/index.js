import classnames from "classnames";
import * as React from "react";

import Icon from "@duik/icon";
import { Button, TabItem, Tabs, Avatar, Widget } from "@duik/it";

import cls from "./social-header.module.scss";

export const SocialProfileHeader = ({
  className,
  imgUrl,
  avatar,
  name,
  ...rest
}) => (
  <Widget
    className={classnames(cls["social-profile-header"], className)}
    {...rest}
  >
    <div
      className={cls["social-profile-header-cover"]}
      style={{
        backgroundImage: `url(${imgUrl})`
      }}
    >
      <Button className={cls["social-profile-header-cover-btn-update"]} dark>
        <Icon mr>camera</Icon>
        Edit Cover
      </Button>
      <Avatar
        className={cls["social-profile-header-avatar"]}
        jumbo
        {...avatar}
      />
      <h1 className={cls["social-profile-header-name"]}>{name}</h1>
    </div>
    <div className={cls["social-profile-header-content"]}>
      <div className={cls["social-profile-header-content-tabs"]}>
        <Tabs>
          {[
            {
              text: "Timeline",
              rightEl: null
            },
            {
              text: "About",
              rightEl: null
            },
            {
              text: "Friends",
              rightEl: "580"
            },
            {
              text: "Photos",
              rightEl: null
            }
          ].map(item => (
            <TabItem
              key={item.text}
              className={item.text === "About" && "active"}
              {...item}
            >
              {item.text}
            </TabItem>
          ))}
        </Tabs>
      </div>
    </div>
  </Widget>
);

SocialProfileHeader.defaultProps = {
  className: null,
  imgUrl: null
};

export default SocialProfileHeader;
