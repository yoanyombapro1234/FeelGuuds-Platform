import React from 'react';

import {
  Widget,
  ContainerVertical,
  ContainerHorizontal,
  ScrollArea
} from '@duik/it';

import { TutorialList, TutorialListItem, IconHeadline } from '@components';

import cls from './tutorials-animations.module.scss';
import tutorials from './assets/tutorials';

const TutorialsHome = () => (
  <ContainerVertical>
    <ContainerHorizontal>
      <ScrollArea>
        <div className={cls['tutorials-animations']}>
          <IconHeadline
            description="Step-by-step instruction to help you develop new design skills."
            icon="🏃🏻"
            title="Animations Tutorials"
          />
          <TutorialList>
            {tutorials.map(item => (
              <TutorialListItem
                key={item.imgUrl}
                Component={Widget}
                {...item}
              />
            ))}
          </TutorialList>
        </div>
      </ScrollArea>
    </ContainerHorizontal>
  </ContainerVertical>
);

export default TutorialsHome;
