import classnames from "classnames";
import * as React from "react";

import { Avatar } from "@duik/it";

import cls from "./social-friend-item.module.scss";

const SocialProfileFriendListItem = ({
  className,
  Component,
  children,
  data: { name, imgUrl, textBottom },
  ...rest
}) => (
  <div
    className={classnames(cls["social-profile-friend-list-item"], className)}
    {...rest}
  >
    <Avatar
      imgUrl={imgUrl}
      name={<strong>{name}</strong>}
      lg
      textBottom={textBottom}
    />
  </div>
);

SocialProfileFriendListItem.defaultProps = {
  className: null,
  children: null
};

export default SocialProfileFriendListItem;
