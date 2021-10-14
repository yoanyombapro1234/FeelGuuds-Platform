import * as React from "react";
import { Link } from "react-router-dom";
import * as images from "../../../../../@exampleAssets";
import Icon from "@duik/icon";
import { Avatar, Dropdown, DropdownItem } from "@duik/it";

import cls from "./social-post-header.module.scss";

const SocialPostHeader = () => (
  <div className={cls["social-post-header"]}>
    <Avatar
      className={cls["social-post-header-avatar"]}
      imgUrl={images.a06}
      name={
        <span className={cls["social-post-header-nameText"]}>
          <Link to="/social/profile">
            <strong>Roxie Mills</strong>
          </Link>{" "}
          <span className={cls["social-post-header-text"]}>
            {"is feeling excited "}
            <span aria-label="excited" role="img">
              😳
            </span>
            {" with "}
          </span>
          <Link to="/social/profile">@eco-friendly-community</Link>
        </span>
      }
      textBottom="December 28, 2018"
    />
    <Dropdown
      buttonText={<Icon>more</Icon>}
      menuPosition="bottomRight"
      buttonProps={{
        clear: true,
        square: true,
        className: cls["dropdown-btn-dots"]
      }}
    >
      <DropdownItem>Edit</DropdownItem>
      <DropdownItem>Delete</DropdownItem>
    </Dropdown>
  </div>
);

export default SocialPostHeader;
