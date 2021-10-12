import React from "react";
import classnames from "classnames";
import Icon from "@duik/icon";

import { Divider, ScrollArea } from "@duik/it";

import data from "../../../../assets/listOfBuildings";
import cls from "./buildings-listing.module.scss";

import ListingGridView from "../../../components/ListingGridView";
import ListingListView from "../../../components/ListingListView";

const BuildingsList = props => {
  const [view, setView] = React.useState("grid");
  const toggleView = () => {
    setView(view === "grid" ? "list" : "grid");
  };

  const { className, ...rest } = props;

  return (
    <ScrollArea
      className={classnames(cls["buildings-list-grid"], className, {
        [cls["buildings-list-grid-list-view"]]: view === "list"
      })}
      {...rest}
    >
      <div className={cls["buildings-list-grid-header"]}>
        <h1 className={cls["buildings-list-grid-headline"]}>45 Buildings</h1>
        <div className={cls["buildings-list-grid-view-switch-wrapper"]}>
          <Icon
            className={classnames(cls["buildings-list-grid-view-switch-icon"], {
              active: view === "list"
            })}
            onClick={toggleView}
          >
            view_list
          </Icon>
          <Divider vertical />
          <Icon
            className={classnames(cls["buildings-list-grid-view-switch-icon"], {
              active: view === "grid"
            })}
            onClick={toggleView}
          >
            view_grid
          </Icon>
        </div>
      </div>
      {view === "grid" ? (
        <ListingGridView data={data} />
      ) : (
        <ListingListView data={data} />
      )}
    </ScrollArea>
  );
};

export default BuildingsList;
