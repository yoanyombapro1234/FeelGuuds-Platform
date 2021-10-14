import * as React from "react";
import { Dropdown, Avatar } from "@duik/it";
import cls from "./social-header-user.module.scss";

const TopBarUserDropdown = ({
  className,
  Component,
  children,
  user,
  imgUrl,
  ...rest
}) => (
  <Dropdown
    position="bottomRight"
    buttonText={<Avatar imgUrl={imgUrl} />}
    buttonProps={{
      className: cls["btn-social-top-bar-dropdown"]
    }}
    {...rest}
  >
    {children}
  </Dropdown>
);

TopBarUserDropdown.defaultProps = {
  className: null,
  Component: "div",
  children: null,
  imgUrl: null
};

export default TopBarUserDropdown;
