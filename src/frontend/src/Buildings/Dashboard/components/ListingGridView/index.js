import React from "react";
import classnames from "classnames";

import Icon from "@duik/icon";

import BuildingsGridItem from "../ListingGridItem";
import cls from "./shopping-card-grid.module.scss";

const BuildingsGridView = ({ data, className }) => (
  <div className={classnames(cls["shopping-grid"], className)}>
    {data.map(item => (
      <BuildingsGridItem
        key={item.name}
        id={item.id}
        imgUrl={item.imgUrl}
        price={`£${item.price_per_sqm}/sqm`}
        status={item.status}
        text={
          <React.Fragment>
            {item.address.street}
            <br />
            {item.address.city}
            {", "}
            {item.address.state} {item.address.zip}
            <div className={cls["shopping-card-extra"]}>
              <div className={cls["shopping-card-extra-item"]}>
                <Icon className={cls["shopping-card-extra-icon"]}>
                  profile_round
                </Icon>
                {item.views}
                {" Users"}
              </div>
              <div className={cls["shopping-card-extra-item"]}>
                <Icon className={cls["shopping-card-extra-icon"]}>
                  shopping_bag
                </Icon>
                {item.offices}
                {" Offices"}
              </div>
            </div>
          </React.Fragment>
        }
        title={item.name}
      />
    ))}
  </div>
);

BuildingsGridView.defaultProps = {
  className: null
};

export default BuildingsGridView;
