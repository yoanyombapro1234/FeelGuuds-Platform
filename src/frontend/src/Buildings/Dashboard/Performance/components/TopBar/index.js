import React from 'react'

import {
  TopBarSection,
  TopBarTitle,
} from '@duik/it'

import BuildingsTopBar from '../../../components/TopBar'


const BuildingsListingTopBar = props => (
  <BuildingsTopBar { ...props }>
    <TopBarSection>
      <TopBarTitle>
        Performance
      </TopBarTitle>
    </TopBarSection>
  </BuildingsTopBar>
)


export default BuildingsListingTopBar
