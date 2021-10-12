import React from 'react';
import classnames from 'classnames';

/* eslint-disable max-len */

import {
  WidgetContent,
  TabContainer,
  TabItem,
  ContainerVertical,
  ContainerHorizontal,
  ScrollArea,
  WidgetContainer
} from '@duik/it';

import { CodeHighlightContainer } from '@composed';

import cls from './page-documentation.module.scss';
import code from './assets/code';

// components
import Header from '../components/Header';
import Navigation from './components/Navigation';
import WidgetDoc from './components/WidgetDoc';

import DocTableExample from './DocTableExample';
import DocTableExample2 from './DocTableExample2';

class KnowledgeDocumentationPage extends React.PureComponent {
  state = {
    activeItem: 'doc'
  };

  toggleView = () => {
    const { activeItem } = this.state;
    this.setState({
      activeItem: activeItem === 'doc' ? 'code' : 'doc'
    });
  };

  render() {
    const { activeItem } = this.state;
    return (
      <ContainerVertical className={cls['docs']}>
        <Header />
        <TabContainer sm>
          <TabItem
            className={activeItem === 'doc' ? 'active' : ''}
            onClick={this.toggleView}
          >
            Overview
          </TabItem>
          <TabItem
            className={activeItem === 'code' ? 'active' : ''}
            onClick={this.toggleView}
          >
            Code
          </TabItem>
        </TabContainer>
        <ContainerHorizontal className={cls['docs-content']}>
          <Navigation />
          <ScrollArea
            className={classnames(cls['docs-content-main'], {
              [cls.active]: activeItem === 'doc'
            })}
          >
            <WidgetContainer>
              <WidgetDoc>
                <WidgetContent>
                  <h1>Collections</h1>
                  <p>
                    Collections in Knowledge are groupings of Items and define
                    the schema or structure of the custom data stored in those
                    Items. A Knowledge site can have multiple attached
                    Collections. A Collection’s fields define the structure of
                    the Items within it.
                  </p>
                </WidgetContent>
                <WidgetContent>
                  <h2>Model</h2>
                </WidgetContent>
                <div className={cls['card-table-wrapper']}>
                  <DocTableExample />
                </div>
                <WidgetContent>
                  <h3>Default Fields</h3>
                  <p>
                    Each collection has a number of fields that are always
                    present. Some of these fields are editable and some of them
                    cannot be changed by users.
                  </p>
                </WidgetContent>
                <div className={cls['card-table-wrapper']}>
                  <DocTableExample2 />
                </div>
              </WidgetDoc>
            </WidgetContainer>
          </ScrollArea>
          <CodeHighlightContainer
            className={classnames(cls['docs-content-code'], {
              [cls.active]: activeItem === 'code'
            })}
            data={code}
          />
        </ContainerHorizontal>
      </ContainerVertical>
    );
  }
}

export default KnowledgeDocumentationPage;
