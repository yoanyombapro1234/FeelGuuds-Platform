import React from "react";
import { ContainerVertical, ContainerHorizontal } from "@duik/it";
import classnames from "classnames";

import TopBar from "./components/TopBar";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";

import cls from "./buildings-users.module.scss";

const BuildingsDashboard = props => {
  const [isMobileDetailVisible, setMobileDetailVisible] = React.useState(false);

  const mobileNavigateToList = () => {
    setMobileDetailVisible(false);
  };
  const mobileNavigateToDetail = () => {
    setMobileDetailVisible(true);
  };

  return (
    <ContainerVertical className={cls["buildings-users"]}>
      <TopBar />
      <ContainerHorizontal
        className={classnames(cls["buildings-users-container"], {
          [cls[
            "buildings-users-container-mobile-detail"
          ]]: isMobileDetailVisible
        })}
      >
        <UserList onMobileDetail={mobileNavigateToDetail} />
        <UserDetail onMobileBack={mobileNavigateToList} />
      </ContainerHorizontal>
    </ContainerVertical>
  );
};

export default BuildingsDashboard;
