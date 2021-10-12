import React from "react";

import BuildingsListItem from "../ListingListItem";
import cls from "./buildings-list-view.module.scss";

const BuildingsListView = ({ data }) => (
  <div className={cls["buildings-list-view"]}>
    {data.map(item => (
      <BuildingsListItem
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
          </React.Fragment>
        }
        title={item.name}
      />
    ))}
  </div>
);

export default BuildingsListView;
