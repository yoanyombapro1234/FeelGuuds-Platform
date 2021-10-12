import React from "react";

import { TopBarSection, TopBarTitle, Button } from "@duik/it";

import BuildingsTopBar from "../../../components/TopBar";

const BuildingsUsersTopBar = props => (
  <BuildingsTopBar {...props} rightEl={<Button success>Add User</Button>}>
    <TopBarSection>
      <TopBarTitle>Users</TopBarTitle>
    </TopBarSection>
  </BuildingsTopBar>
);

export default BuildingsUsersTopBar;
