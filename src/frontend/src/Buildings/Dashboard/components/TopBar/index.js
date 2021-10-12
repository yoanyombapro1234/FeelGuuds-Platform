import React from "react";
import classnames from "classnames";

import Icon from "@duik/icon";
import { Divider, Button, TopBar, TopBarSection, TextField } from "@duik/it";
import { NavBurger } from "@components";

import { UiContext } from "@context";
import { SelectCountry } from "@composed";

import cls from "./buildings-top-bar.module.scss";

const BuildingsTopBar = ({ children, className, isMenuOpen, rightEl }) => {
  const uiContext = React.useContext(UiContext);
  return (
    <TopBar className={classnames(cls["buildings-top-bar"], className)}>
      <Button
        className={cls["nav-burger"]}
        onClick={uiContext.menu.handleToggle}
        transparent
      >
        <NavBurger isOpen={uiContext.menu.isVisible} />
      </Button>
      {children}
      <TopBarSection className={cls["buildings-top-bar-actions"]}>
        {rightEl || (
          <TextField
            leftEl={<Icon>search_left</Icon>}
            placeholder="Type to search..."
          />
        )}
        <Divider
          className={cls["buildings-top-bar-mobile-hidden"]}
          vertical
          margin
        />
        <SelectCountry className={cls["buildings-top-bar-mobile-hidden"]} />
      </TopBarSection>
    </TopBar>
  );
};

BuildingsTopBar.defaultProps = {
  children: null,
  className: null,
  rightEl: null
};

export default BuildingsTopBar;
