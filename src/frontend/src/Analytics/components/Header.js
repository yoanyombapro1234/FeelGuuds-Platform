import React from 'react';
import { SelectLanguage } from '@composed';
import { TopBar, TopBarSection, TopBarTitle } from '@duik/it';

const AnalyticsHeader = props => (
  <TopBar {...props}>
    <TopBarSection>
      <TopBarTitle large>Dashboard</TopBarTitle>
    </TopBarSection>
    <TopBarSection>
      <SelectLanguage />
    </TopBarSection>
  </TopBar>
);

export default AnalyticsHeader;
