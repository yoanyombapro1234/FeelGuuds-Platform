import React from "react";
import * as images from "../../../@exampleAssets";
import Icon from "@duik/icon";

import data from "../../assets/listOfBuildings";

import ListingGridView from "../components/ListingGridView";

import { Button, ContainerVertical, ScrollArea } from "@duik/it";

import TopBar from "./components/TopBar";

import cls from "./buildings-dashboard.module.scss";

const categories = [
    {
        name: "New York",
        imgUrl: images.b104
    },
    {
        name: "London",
        imgUrl: images.b102
    },
    {
        name: "Bali",
        imgUrl: images.b103
    },
    {
        name: "Paris",
        imgUrl: images.b101
    }
];

class BuildingsDashboard extends React.Component {
    render() {
        return (
            <ContainerVertical className={cls["buildings-dashboard"]}>
                <TopBar />
                <ScrollArea className={cls["buildings-dashboard-content"]}>
                    <div>
                        <h2>Browse by the City</h2>
                        <div className={cls["buildings-dashboard-categories"]}>
                            {categories.map(cat => (
                                <div
                                    key={cat.name}
                                    className={cls["buildings-dashboard-category"]}
                                >
                                    <div
                                        className={cls["buildings-dashboard-category-image"]}
                                        style={{
                                            backgroundImage: `url(${cat.imgUrl})`
                                        }}
                                    />
                                    <span className={cls[["buildings-dashboard-category-title"]]}>
                                        {cat.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2>Upgrade to Buldings Plus</h2>
                        <div
                            className={cls["buildings-dashboard-upgrade-banner"]}
                            style={{
                                backgroundImage: `url(${images.b105})`
                            }}
                        >
                            <span className={cls["buildings-dashboard-upgrade-banner-name"]}>
                                <Icon>building</Icon>
                                <span>Buildings</span>
                                <span className={cls["buildings-dashboard-upgrade-banner-pro"]}>
                                    Pro
                                </span>
                            </span>
                            <h2 className={cls["buildings-dashboard-upgrade-banner-title"]}>
                                A new selection of Buildings verified for quality &amp; comfort.
                            </h2>
                            <Button>Explore Buildings Pro</Button>
                        </div>
                    </div>
                    <div>
                        <h2>Recommended Buildings</h2>
                    </div>
                    <ListingGridView
                        className={cls["buildings-dashboard-content-grid"]}
                        data={data}
                    />
                </ScrollArea>
            </ContainerVertical>
        );
    }
}

export default BuildingsDashboard;
