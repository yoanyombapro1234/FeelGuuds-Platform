/* eslint-disable max-len */
import React from "react";
import classnames from "classnames";
import { withRouter } from "react-router-dom";

import listOfBuildings from "../../../../assets/listOfBuildings";

import * as images from "../../../../../@exampleAssets";
import Icon from "@duik/icon";
import { StarRating } from "../../../../../@components";
import { ContentTitle, Button, TextField, Avatar, ScrollArea } from "@duik/it";

import cls from "./buildings-detail.module.scss";

const properties = [
    {
        icon: "building",
        prop: "Property Type",
        val: "Open Space"
    },
    {
        icon: "ruler",
        prop: "Office Size",
        val: "1400 m2"
    },
    {
        icon: "profile_round",
        prop: "Suitable for",
        val: "15 - 25 people"
    },
    {
        icon: "tap_click_force_touch",
        prop: "Meeting rooms",
        val: "2"
    }
];

const rating = [
    {
        prop: "Accuracy",
        val: 5
    },
    {
        prop: "Location",
        val: 4
    },
    {
        prop: "Activity",
        val: 4
    },
    {
        prop: "Noise",
        val: 3
    },
    {
        prop: "Cleanliness",
        val: 4
    },
    {
        prop: "Value",
        val: 5
    }
];

const BuildingsListingMap = ({ className, match }) => {
    const pid = Number(match.params.property_id);
    const data = listOfBuildings.find(b => b.id === pid);

    return (
        <ScrollArea
            className={classnames(cls["buildings-listing-detail"], className)}
        >
            <div
                className={cls["buildings-listing-detail-cover-image"]}
                style={{
                    backgroundImage: `url(${data.imgUrl}`
                }}
            />
            <div className={cls["buildings-listing-detail-content"]}>
                <div className={cls["buildings-listing-detail-content-main"]}>
                    <ContentTitle>Luxury Offices</ContentTitle>
                    <h1 className={cls["buildings-listing-detail-name"]}>{data.name}</h1>
                    <p>164 S. Carson Court Newport News, VA 23601</p>
                    <p className={cls["buildings-listing-detail-description"]}>
                        Each unit will be constructed to a high standard and will benefit
                        from minimum 10m eaves, a mix of dock and level loading doors and
                        integral office accommodation, as well as generous loading yards.
                    </p>
                    <p className={cls["buildings-listing-detail-description"]}>
                        The site is situated on Coldharbour Lane which is located to the
                        south of the A13 dual carriageway in turn providing swift access
                        proving to Junction 31 of motorway M25.
                    </p>
                    <div className={cls["buildings-listing-detail-search-reviews"]}>
                        <span className={cls["buildings-listing-detail-search-totals"]}>
                            165 Ratings
                        </span>{" "}
                        <TextField
                            rightEl={<Icon>search_left</Icon>}
                            placeholder="Search Ratings"
                        />
                    </div>
                    <div className={cls["buildings-listing-detail-rating-summary"]}>
                        {rating.map(r => (
                            <div
                                key={r.prop}
                                className={cls["buildings-listing-detail-rating-summary-item"]}
                            >
                                <span
                                    className={
                                        cls["buildings-listing-detail-rating-summary-attr"]
                                    }
                                >
                                    {r.prop}
                                </span>
                                <StarRating rating={r.val} />
                            </div>
                        ))}
                    </div>

                    <div className={cls["buildings-listing-detail-review"]}>
                        <div className={cls["buildings-listing-detail-review-header"]}>
                            <Avatar
                                imgUrl={images.a21}
                                name="Natasha Special"
                                textBottom="17th October 2018"
                            />
                            <StarRating rating={4} />
                        </div>
                        <p>
                            You are empowered to make decisions and choose your own
                            goals/tasks. Every day you meet so many amazing entrepreneurs as
                            well as continuously build these relationships. Inspiring and fun
                            meetings, all-hands &amp; trips (Summer Camp &amp; Summit).
                            Support system! Everyone cares for your well-being and become
                            family.
                        </p>
                    </div>
                </div>
                <div className={cls["buildings-listing-detail-content-misc"]}>
                    <ContentTitle>Property Features</ContentTitle>
                    <table className={cls["buildings-listing-detail-amenities"]}>
                        <tbody>
                            {properties.map(item => (
                                <tr key={item.prop}>
                                    <td>
                                        <Icon>{item.icon}</Icon>
                                    </td>
                                    <td>{item.prop}</td>
                                    <td>{item.val}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Button isExpanded transparent>
                        <Icon mr>building_plan</Icon>View a Floor Plan
                    </Button>
                    <div className={cls["buildings-listing-detail-photos"]}>
                        <ContentTitle>All Property Photos</ContentTitle>
                        <div className={cls["buildings-listing-detail-gallery"]}>
                            {[
                                images.b20,
                                images.b21,
                                images.b22,
                                images.b23,
                                images.b24,
                                images.b25
                            ].map(img => (
                                <div
                                    key={img}
                                    className={cls["buildings-listing-detail-gallery-image"]}
                                    style={{
                                        backgroundImage: `url(${img})`
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </ScrollArea>
    );
};

BuildingsListingMap.defaultProps = {
    className: null
};

export default withRouter(BuildingsListingMap);
