import classnames from "classnames";
import * as React from "react";

import { Widget, WidgetHeader } from "@duik/it";

import cls from "./social-about.module.scss";

import SocialProfileAboutItem from "../SocialProfileAboutItem";

const SocialProfileAboutWidget = ({
  className,
  imgUrl,
  avatar,
  name,
  data,
  ...rest
}) => (
  <Widget
    className={classnames(cls["social-profile-about"], className)}
    {...rest}
  >
    <WidgetHeader>
      <h3>About</h3>
    </WidgetHeader>
    <div className={cls["social-profile-about-list"]}>
      {data.map((item, index) => (
        <SocialProfileAboutItem key={index} data={item} />
      ))}
    </div>
  </Widget>
);

SocialProfileAboutWidget.defaultProps = {
  className: null,
  imgUrl: null,
  data: []
};

export default SocialProfileAboutWidget;
