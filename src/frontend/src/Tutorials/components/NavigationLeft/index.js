/* hidden when above 1200px */

import * as React from "react";
import classnames from "classnames";
import {
  NavSectionTitle,
  NavSection,
  NavTitle,
  NavLink,
  Checkbox,
  NavPanel
} from "@duik/it";

import filterLinks from "../../assets/filterLinks";
import filterChecks from "../../assets/filterChecks";

import cls from "./tutorials-navigation.module.scss";
import { UiContext } from "../../../@context";

const TutorialsNavigation = () => {
  const uiContext = React.useContext(UiContext);
  return (
    <NavPanel
      className={classnames(cls["tutorials-nav-panel"], {
        [cls["tutorials-nav-panel-open"]]: uiContext.menu.isVisible
      })}
    >
      <NavTitle>Filter Tutorials</NavTitle>
      <NavSection>
        <NavSectionTitle>Topic</NavSectionTitle>
        {filterLinks.map(link => (
          <NavLink
            key={link.text}
            className={link.text === "Animations" ? "active" : null}
            rightEl={link.rightEl}
          >
            {link.text}
          </NavLink>
        ))}
      </NavSection>
      {filterChecks.map(checkData => (
        <NavSection key={checkData.name}>
          <NavSectionTitle>{checkData.name}</NavSectionTitle>
          {checkData.data.map(label => (
            <NavLink key={label}>
              <Checkbox
                color="blue"
                defaultChecked={label === "All"}
                label={label}
              />
            </NavLink>
          ))}
        </NavSection>
      ))}
    </NavPanel>
  );
};

// export default connect(
//   store => ({
//     isMenuOpen: store.tutorials.isMenuOpen,
//   }),
// )(TutorialsNavigation)
export default TutorialsNavigation;
