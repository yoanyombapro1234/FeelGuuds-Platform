import React from "react";
import { NavLink, withRouter } from "react-router-dom";

import cls from "./buildings-list-item.module.scss";

const BuildingsListItem = ({
  imgUrl,
  title,
  text,
  status,
  price,
  Component,
  match,
  id
}) => (
  <Component className={cls["buildings-list-item"]} to={`${match.path}/${id}`}>
    {/* Img */}
    {imgUrl ? (
      <div
        className={cls["buildings-list-item-image-wrapper"]}
        style={{
          backgroundImage: `url("${imgUrl}")`
        }}
      />
    ) : null}
    <div className={cls["buildings-list-item-content"]}>
      {/* Headline */}
      {title ? (
        <h2 className={cls["buildings-list-item-title"]}>{title}</h2>
      ) : (
        title
      )}

      {/* Text */}
      {text ? (
        <div className={cls["buildings-list-item-text"]}>{text}</div>
      ) : null}
      {status || price ? (
        <div className={cls["buildings-list-item-footer"]}>
          {status ? (
            <div className={cls["buildings-list-item-status"]}>{status}</div>
          ) : null}

          {price ? (
            <div className={cls["buildings-list-item-price"]}>{price}</div>
          ) : null}
        </div>
      ) : null}
    </div>
  </Component>
);

BuildingsListItem.defaultProps = {
  imgUrl: null,
  title: null,
  text: null,
  status: null,
  price: null,
  Component: NavLink
};

export default withRouter(BuildingsListItem);
