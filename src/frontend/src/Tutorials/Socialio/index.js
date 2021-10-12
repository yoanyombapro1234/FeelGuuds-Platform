import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import classnames from 'classnames';
import Icon from '@duik/icon';
import {
  TabContainer,
  TabItem,
  ContainerVertical,
  ContainerHorizontal
} from '@duik/it';

// import * as pages from './pages';

import Chat from './components/Chat';
import Navigation from './components/Navigation';
import Header from './components/Header';

import PageHome from './Home';
import PageProfile from './Profile';
import PageEvents from './Events';

import cls from './socialio.module.scss';

const tabItems = [
  {
    className: 'Menu',
    icon: 'gallery_grid_view',
    content: <Icon>gallery_grid_view</Icon>
  },
  {
    id: 'centerIcon',
    className: 'Home',
    icon: 'home',
    content: <Icon>home</Icon>
  },
  {
    className: 'Chat',
    icon: 'message',
    content: <Icon>message</Icon>
  }
];

const icons = {
  profile: 'smile',
  events: 'calendar'
};

const getIcon = page => icons[page] || 'home';

export class Socialio extends React.PureComponent {
  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      pathname: props.location.pathname,
      activeContent:
        props.location.pathname === state.pathname
          ? state.activeContent
          : 'Home'
    };
  }

  state = {
    activeContent: 'Home'
  };

  setActiveContent = content => () => {
    this.setState({
      activeContent: content
    });
  };

  render() {
    const { activeContent } = this.state;
    const {
      location: { pathname }
    } = this.props;
    const page = pathname.split('/')[2];

    return (
      <ContainerVertical>
        <Header />
        <TabContainer className={cls['socialio-mobile-nav']}>
          {tabItems.map(item => (
            <TabItem
              key={classnames(cls['socialio-mobile-nav-item'], item.className)}
              className={classnames(cls['socialio-mobile-nav-item'], {
                active: activeContent === item.className
              })}
              onClick={this.setActiveContent(item.className)}
              size="smaller"
            >
              <Icon>
                {item.id === 'centerIcon' ? getIcon(page) : item.icon}
              </Icon>
            </TabItem>
          ))}
        </TabContainer>
        <ContainerHorizontal
          className={classnames(cls['socialio-container'], {
            [cls[activeContent]]: activeContent
          })}
        >
          <Navigation />
          <div className={cls['socialio-content']}>
            <Switch>
              {/* <Route component={pages.Profile} exact path="/social/profile" /> */}
              <Route component={PageEvents} exact path="/social/events" />
              <Route component={PageProfile} exact path="/social/profile" />
              <Route component={PageHome} exact path="/social" />
              <Redirect to="/social" />
            </Switch>
          </div>
          <Chat />
        </ContainerHorizontal>
      </ContainerVertical>
    );
  }
}

export default Socialio;
