import React from "react";

import { ContainerVertical, ContainerHorizontal, ScrollArea } from "@duik/it";

import { HomeTopBar } from "../@components";
import cls from "./home.module.scss";
import { TopProducts } from "./TopProducts";

export class Home extends React.PureComponent {
  render() {
    return (
      <ContainerVertical>
        <HomeTopBar />
        <ContainerHorizontal>
          <ScrollArea className={cls["app-directory-content"]}>
            <div className={cls["app-directory-content-inner"]}>
              <h1>FeelGuuds</h1>
              <p>
                {/* <span className={cls['app-directory-screen-count']}>
                  {totalScreens}
									</span>{' '}*/}
                We provide the most convenient way to connect mindful consumers
                and businesses together. Let’s make every purchase matter!
              </p>
              <br />
              <br />
              <hr />
              <div className="py-3">
                <ContainerHorizontal>
                  <TopProducts />
                </ContainerHorizontal>
              </div>
            </div>
          </ScrollArea>
        </ContainerHorizontal>
      </ContainerVertical>
    );
  }
}

export default Home;
