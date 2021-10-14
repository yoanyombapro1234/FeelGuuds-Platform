import * as React from "react";
import classnames from "classnames";

import cls from "./avatar-container.module.scss";

const AvatarMenuContainer = ({ children, className, Component, ...rest }) => (
  <div
    className={classnames(cls["avatar-menu-container"], className)}
    {...rest}
  >
    {children}
  </div>
);

AvatarMenuContainer.defaultProps = {
  className: null,
  children: null
};

export default AvatarMenuContainer;
