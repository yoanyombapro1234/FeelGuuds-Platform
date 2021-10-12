import React from 'react';
import Icon from '@duik/icon';
import { Widget, WidgetHeader, WidgetTable } from '@duik/it';
import { ChartLineOnly } from '@components';

import { lineBlank } from '../../data/chartData';

import cls from './analytics-most-visited.module.scss';

const data = [
  [
    <div className={cls['analytics-card-most-visited-page-name']}>
      /store/
      <Icon className={cls['analytics-card-most-visited-icon-trend']}>
        trending_up
      </Icon>
    </div>,
    '4,890',
    '3,985',
    <div className={cls['analytics-card-most-visited-content-bounce-rate']}>
      85,17%
      <ChartLineOnly
        className={cls['analytics-card-most-visited-minichart']}
        data={lineBlank('#1664D7', 'rgba(22, 100, 215, 0.1)')}
        height={30}
        width={100}
      />
    </div>
  ],
  [
    <div className={cls['analytics-card-most-visited-page-name']}>
      /store/symbol-styleguides
      <Icon className={cls['analytics-card-most-visited-icon-trend']}>
        trending_up
      </Icon>
    </div>,
    '1,824',
    '2,391',
    <div className={cls['analytics-card-most-visited-content-bounce-rate']}>
      38,37%
      <ChartLineOnly
        className={cls['analytics-card-most-visited-minichart']}
        data={lineBlank('#1664D7', 'rgba(22, 100, 215, 0.1)')}
        height={30}
        width={100}
      />
    </div>
  ],
  [
    <div className={cls['analytics-card-most-visited-page-name']}>
      /store/dashboard-ui-kit
      <Icon className={cls['analytics-card-most-visited-icon-trend']}>
        trending_up
      </Icon>
    </div>,
    '8,123',
    '5,293',
    <div className={cls['analytics-card-most-visited-content-bounce-rate']}>
      67,13%
      <ChartLineOnly
        className={cls['analytics-card-most-visited-minichart']}
        data={lineBlank('#1664D7', 'rgba(22, 100, 215, 0.1)')}
        height={30}
        width={100}
      />
    </div>
  ],
  [
    <div className={cls['analytics-card-most-visited-page-name']}>
      /store/webflow-cards.html
      <Icon className={cls['analytics-card-most-visited-icon-trend']}>
        trending_up
      </Icon>
    </div>,
    '2,440',
    '1,789',
    <div className={cls['analytics-card-most-visited-content-bounce-rate']}>
      39,59%
      <ChartLineOnly
        className={cls['analytics-card-most-visited-minichart']}
        data={lineBlank('#1664D7', 'rgba(22, 100, 215, 0.1)')}
        height={30}
        width={100}
      />
    </div>
  ]
];

const AnalyticsWidgetMostVisited = () => (
  <Widget>
    <WidgetHeader>
      <h3>Most Visited Pages</h3>
    </WidgetHeader>
    <div className={cls['analytics-card-most-visited-table-wrapper']}>
      <WidgetTable className={cls['analytics-card-most-visited-table']}>
        <thead>
          <tr>
            <th>Page Name</th>
            <th>Visitors</th>
            <th>Unique Page Visits</th>
            <th>Bounce Rate</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={Math.random() /* pls don't do this in prod */}>
              {row.map(cell => (
                <td key={Math.random()}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </WidgetTable>
    </div>
  </Widget>
);

export default AnalyticsWidgetMostVisited;
