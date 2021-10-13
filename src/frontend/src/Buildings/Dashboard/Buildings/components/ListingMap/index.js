import React from "react";
import classnames from "classnames";

import * as images from "../../../../../@exampleAssets";
import Icon from "@duik/icon";
import { MapPinCircle } from "../../../../../@components";

import cls from "./buildings-map.module.scss";

const BuildingsListingMap = ({ className }) => (
    <div
        className={classnames(cls["buildings-map-view"], className)}
        style={{
            backgroundImage: `url("${images.map}")`
        }}
    >
        <MapPinCircle className={cls.pin1}>
            <Icon>front_store</Icon>
        </MapPinCircle>
        <MapPinCircle className={cls.pin2} color="green">
            <Icon>buildings</Icon>
        </MapPinCircle>
        <MapPinCircle className={cls.pin3} color="green">
            <Icon>buildings</Icon>
        </MapPinCircle>
        <MapPinCircle className={cls.pin4} color="violet">
            <Icon>profile_card</Icon>
        </MapPinCircle>
        <MapPinCircle className={cls.pin5} color="violet">
            <Icon>profile_card</Icon>
        </MapPinCircle>
    </div>
);

BuildingsListingMap.defaultProps = {
    className: null
};

export default BuildingsListingMap;
