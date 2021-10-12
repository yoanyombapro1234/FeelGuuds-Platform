import React from 'react';
import classnames from 'classnames';
import { UiContext } from '@context';
import {
  WidgetHeader,
  Widget,
  ContainerVertical,
  ContainerHorizontal,
  ScrollArea
} from '@duik/it';

import { WidgetLink, WidgetVideoPreview } from '@components';

import Header from '../components/Header';

import cls from './knowledge-home.module.scss';

import topics from './assets/topics';
import sidebarNavigation from './assets/sidebarNavigation';
import sidebarVideos from './assets/sidebarVideos';
import KnowledgeTopic from './components/KnowledgeTopic';

const KnowledgeHome = ({ isMenuOpen }: { isMenuOpen: Boolean }) => {
  const uiContext = React.useContext(UiContext);
  return (
    <ContainerVertical>
      <Header />
      <ContainerHorizontal>
        <ScrollArea>
          <div className={cls['knowledge-home']}>
            <div>
              <h2 className={cls['knowledge-home-title']}>
                Knowledge Documentation
              </h2>
              <p>Home / All Tutorials</p>
              <div className={cls['knowledge-list']}>
                {topics.map(item => (
                  <div key={item.title}>
                    <KnowledgeTopic key={item.title} {...item} />
                  </div>
                ))}
              </div>
            </div>
            <div
              className={classnames(cls['knowledge-home-menu-container'], {
                [cls['knowledge-home-menu-container-open']]:
                  uiContext.menu.isVisible
              })}
            >
              <Widget>
                <WidgetHeader>
                  <h3>Navigation</h3>
                </WidgetHeader>
                {sidebarNavigation.map(item => (
                  <WidgetLink key={item.title} {...item} />
                ))}
              </Widget>
              <Widget>
                <WidgetHeader>
                  <h3>Popular Video Tutorials</h3>
                </WidgetHeader>
                <div className={cls['knowledge-video-preview-container']}>
                  {sidebarVideos.map(item => (
                    <WidgetVideoPreview key={item.title} {...item} />
                  ))}
                </div>
                {/* <WidgetBottomCta>View All Videos</WidgetBottomCta> */}
              </Widget>
            </div>
          </div>
        </ScrollArea>
      </ContainerHorizontal>
    </ContainerVertical>
  );
};

export default KnowledgeHome;
