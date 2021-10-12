import React from 'react';
import classnames from 'classnames';

import { Switch, Route } from 'react-router-dom';

/* eslint-disable max-len */

import {
  TabContainer,
  TabItem,
  ContainerVertical,
  ContainerHorizontal
} from '@duik/it';

import TopBar from './components/TopBar';
import Listing from './components/Listing';
import ListingMap from './components/ListingMap';
import ListingDetail from './components/ListingDetail';

import cls from './buildings.module.scss';

const PageBuildings = props => {
  const [view, setView] = React.useState('list');

  const setViewMap = () => {
    setView('map');
  };

  const setViewList = () => {
    setView('list');
  };

  const { match, location } = props;

  const isDetail = location.pathname.split('/').length > 3;

  return (
    <ContainerVertical>
      <TopBar />
      <Route
        exact
        path={`${match.path}`}
        render={() => (
          <TabContainer xs className={cls['buildings-list-tab-switch']}>
            <TabItem
              className={view === 'list' ? 'active' : null}
              onClick={setViewList}
            >
              List of Properties
            </TabItem>
            <TabItem
              className={view === 'map' ? 'active' : null}
              onClick={setViewMap}
            >
              View on Map
            </TabItem>
          </TabContainer>
        )}
        strict
      />
      <ContainerHorizontal className={classnames(cls['contentContainer'])}>
        <Listing
          className={classnames({
            [cls['mapView']]: view === 'map' || isDetail
          })}
        />
        <Switch>
          <Route
            path={`${match.path}/:property_id`}
            render={() => (
              <ListingDetail
                className={classnames({
                  [cls['mapView']]: isDetail
                })}
              />
            )}
          />
          <Route
            render={() => (
              <ListingMap
                className={classnames({
                  [cls['mapView']]: view === 'map'
                })}
              />
            )}
          />
        </Switch>
      </ContainerHorizontal>
    </ContainerVertical>
  );
};

export default PageBuildings;
