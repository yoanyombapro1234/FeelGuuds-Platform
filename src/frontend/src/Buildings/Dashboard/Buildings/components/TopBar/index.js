import React from "react";

import { TopBarSection, Select } from "@duik/it";

import BuildingsTopBar from "../../../components/TopBar";

import cls from "./buildings-listing-top-bar.module.scss";

import ImgSelectBuildings from "./assets/buildings_select.png";

const BuildingsListingTopBar = props => (
  <BuildingsTopBar {...props}>
    <TopBarSection>
      <Select
        buttonProps={{
          className: cls["select-buildings-button"]
        }}
        activeOption={{
          value: "czech",
          label: (
            <span className={cls["select-building-option"]}>
              <img alt="english" src={ImgSelectBuildings} />
              All Buildings
            </span>
          )
        }}
        options={[
          {
            value: "czech",
            label: (
              <span className={cls["select-building-option"]}>
                <img alt="english" src={ImgSelectBuildings} />
                All Buildings
              </span>
            )
          },
          {
            value: "tuvalu",
            label: (
              <span className={cls["select-building-option"]}>
                <img alt="tuvalu" src={ImgSelectBuildings} />
                Some Buildings
              </span>
            )
          },
          {
            value: "norway",
            label: (
              <span className={cls["select-building-option"]}>
                <img alt="norway" src={ImgSelectBuildings} />
                Other Buildings
              </span>
            )
          }
        ]}
        placeholder="Action"
        position="bottomLeft"
        className={cls["select-buildings"]}
      />
    </TopBarSection>
  </BuildingsTopBar>
);

export default BuildingsListingTopBar;
