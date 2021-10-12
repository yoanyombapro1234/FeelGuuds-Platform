import React from "react";
import classnames from "classnames";
import Icon from "@duik/icon";
import {
  Button,
  TopBar,
  TopBarSection,
  TopBarLink,
  TopBarLinkContainer,
  TopBarTitle,
  Divider,
  TextField
} from "@duik/it";
import { UiContext } from "@context";

import { NavBurger } from "@components";

import cls from "./tutorials-top-bar.module.scss";

export const TutorialsTopBar = () => {
  const uiContext = React.useContext(UiContext);
  return (
    <TopBar className={cls["tutorials-top-bar"]}>
      <Button
        onClick={uiContext.menu.handleToggle}
        className={cls["tutorials-top-bar-btnMenu"]}
      >
        <NavBurger />
      </Button>
      <TopBarSection>
        <TopBarSection>
          <TopBarTitle>
            <Icon color="blue">desktop</Icon>
            Tutorials
          </TopBarTitle>
        </TopBarSection>
        <Divider vertical className={cls["tutorials-top-bar-divider"]} />
        <TopBarSection>
          <TopBarLinkContainer className={cls["tutorials-top-bar-links"]}>
            {["Explore", "Tutorials", "Courses", "Projects", "Resources"].map(
              link => (
                <TopBarLink
                  key={link}
                  className={link === "Tutorials" ? "active" : null}
                >
                  {link}
                </TopBarLink>
              )
            )}
          </TopBarLinkContainer>
        </TopBarSection>

        <Divider className={cls["tutorials-top-bar-divider"]} vertical />
        <TopBarSection>
          <TextField
            clear
            leftEl={<Icon>search_left</Icon>}
            placeholder="I want to learn..."
          />
        </TopBarSection>
      </TopBarSection>
      <TopBarSection>
        <TopBarSection className={cls["tutorials-top-bar-actions"]}>
          <TopBarLinkContainer>
            {["Sign In", "Register"].map(link => (
              <TopBarLink
                key={link}
                className={link === "Register" ? "active" : null}
              >
                {link}
              </TopBarLink>
            ))}
          </TopBarLinkContainer>
        </TopBarSection>
        <Divider
          className={classnames(
            cls["tutorials-top-bar-divider"],
            cls["tutorials-top-bar-divider2"]
          )}
          vertical
        />
        <TopBarSection className={cls["tutorials-top-bar-actions"]}>
          <Button className={cls["tutorials-top-bar-goPremiumBtn"]} success>
            Go Premium
          </Button>
        </TopBarSection>
      </TopBarSection>
      <Button
        className={cls["tutorials-top-bar-btnFilter"]}
        onClick={uiContext.filter.handleToggle}
      >
        <Icon>view_list</Icon>
      </Button>
    </TopBar>
  );
};

export default TutorialsTopBar;
