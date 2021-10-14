import * as React from "react";

import Icon from "@duik/icon";
import { Link } from "react-router-dom";

import {
  TopBar,
  TopBarSection,
  TopBarTitle,
  Button,
  FormGroupContainer,
  TopBarLink,
  TopBarLinkContainer,
  TextField,
  Divider
} from "@duik/it";

import cls from "./home-topbar.module.scss";

export const HomeTopBar = () => (
  <TopBar>
    <TopBarSection>
      <TopBarSection>
        <TopBarTitle>
          <TopBarLink href="/home">FeelGuuds</TopBarLink>
        </TopBarTitle>
      </TopBarSection>
      <Divider vertical className={cls["tutorials-top-bar-divider"]} />
      <TopBarSection>
        <TopBarLinkContainer>
          <TopBarLink href="/products">Products</TopBarLink>
          <TopBarLink href="/businesses">Businesses</TopBarLink>
          <TopBarLink href="/causes">Causes</TopBarLink>
        </TopBarLinkContainer>
      </TopBarSection>
    </TopBarSection>

    <TopBarSection>
      <FormGroupContainer horizontal>
        <TextField
          placeholder="Find Products/Businesses Of Interest"
          rightEl={<Icon>search_left</Icon>}
        />
        <TopBarSection>
          <Link to="/sign-up">
            <Button Component="a" href="#" target="_blank" transparent>
              Signup
            </Button>
          </Link>
          <Link to="/cart">
            <Button
              className="mx-3"
              Component="a"
              href="#"
              target="_blank"
              transparent
            >
              Cart
            </Button>
          </Link>
        </TopBarSection>
      </FormGroupContainer>
    </TopBarSection>
  </TopBar>
);

export default HomeTopBar;
