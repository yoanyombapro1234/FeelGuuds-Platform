import React from 'react';

import { Widget, WidgetHeader, WidgetContent, ScrollArea } from '@duik/it';

import { Chart, WidgetChartSummary } from '@components';
import { SelectYear, SelectMonth } from '@composed';
import { numberFormatZeros } from '@lib';
import { barData, lineBlank } from './data/chartData';
import cls from './analytics-home.module.scss';

import WidgetMostVisited from './components/WidgetMostVisited';
import WidgetSocialMediaTraffic from './components/WidgetSocialMediaTraffic';

const AnalyticsHome = () => (
  <ScrollArea className={cls['analytics-home']}>
    <div className={cls['analytics-card-section']}>
      <Widget>
        <WidgetHeader>
          <div>
            <h3>Daily Visitors</h3>
          </div>
          <div className={cls['analytics-card-actions']}>
            <SelectMonth />
            <SelectYear />
          </div>
        </WidgetHeader>
        <WidgetContent>
          <Chart
            chartType="Bar"
            data={barData()}
            maxHeight={200}
            options={{
              scales: {
                yAxes: [
                  {
                    ticks: {
                      callback: value => numberFormatZeros(value)
                    },
                    position: 'right',
                    gridLines: {
                      drawBorder: false,
                      drawTicks: false
                    }
                  }
                ],
                xAxes: [
                  {
                    ticks: {
                      callback: value => value.split(' ')[0],
                      padding: 6
                    },
                    position: 'right',
                    gridLines: {
                      drawBorder: false,
                      drawTicks: false
                    }
                  }
                ]
              }
            }}
          />
        </WidgetContent>
      </Widget>
    </div>
    <div className={cls['analytics-home-sumary-boxes']}>
      <WidgetChartSummary
        className={cls['analytics-home-sumary-boxes-chart']}
        data={lineBlank('#1664D7', 'rgba(22, 100, 215, 0.1)')}
        diff={0.1}
        label="Realtime users"
        margin
        value={848}
      />
      <WidgetChartSummary
        className={cls['analytics-home-sumary-boxes-chart']}
        data={lineBlank('#38b249', 'rgba(52, 170, 68, 0.1)')}
        diff={-0.1181}
        label="Total Visits"
        margin
        value="54,598"
      />
      <WidgetChartSummary
        className={cls['analytics-home-sumary-boxes-chart']}
        data={lineBlank('#6758F3', 'rgba(103, 88, 243, 0.1)')}
        diff={0.122}
        label="Bounce Rate"
        margin
        value={73.67}
      />
      <WidgetChartSummary
        className={cls['analytics-home-sumary-boxes-chart']}
        data={lineBlank('#FACF55', 'rgba(250, 207, 85, 0.1)')}
        diff={0.1968}
        label="Visit Duration"
        margin
        value="1m 4s"
      />
    </div>
    <div className={cls['analytics-home-traffic']}>
      <WidgetMostVisited />
      <WidgetSocialMediaTraffic />
    </div>
  </ScrollArea>
);

export default AnalyticsHome;
