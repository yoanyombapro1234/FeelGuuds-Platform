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
import { UiContext } from "../../../@context";
import filterLinks from "../../assets/filterLinks";
import filterChecks from "../../assets/filterChecks";

import cls from "./tutorials-filters.module.scss";

const TutorialsNavigation = () => {
    const uiContext = React.useContext(UiContext);
    return (
        <NavPanel
            className={classnames(cls["tutorials-filter-panel"], {
                [cls["tutorials-filter-panel-open"]]: uiContext.filter.isVisible
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
                        <NavLink
                            key={label}
                            Component="label"
                            className={cls["tutorials-filter-panel-checklink"]}
                        >
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

export default TutorialsNavigation;
