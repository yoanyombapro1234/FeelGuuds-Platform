import * as React from "react";
import { Widget, WidgetHeader, WidgetTable, Progress } from "@duik/it";
import cls from "./analytics-social-media.module.scss";

const data = [
  [
    "Instagram",
    <div className={cls["analytics-card-social-traffic-visitors"]}>
      4,890
      <Progress
        className={cls["analytics-card-social-traffic-progress"]}
        fill={0.7}
      />
    </div>
  ],
  [
    "Facebook",
    <div className={cls["analytics-card-social-traffic-visitors"]}>
      1,824
      <Progress
        className={cls["analytics-card-social-traffic-progress"]}
        fill={0.13}
      />
    </div>
  ],
  [
    "Twitter",
    <div className={cls["analytics-card-social-traffic-visitors"]}>
      8,123
      <Progress
        className={cls["analytics-card-social-traffic-progress"]}
        fill={0.37}
      />
    </div>
  ],
  [
    "LinkedIn",
    <div className={cls["analytics-card-social-traffic-visitors"]}>
      63
      <Progress
        className={cls["analytics-card-social-traffic-progress"]}
        fill={0.56}
      />
    </div>
  ]
];

const AnalyticsWidgetSocialMediaTraffic = () => (
  <Widget>
    <WidgetHeader>
      <h3>Social Media Traffic</h3>
    </WidgetHeader>
    <WidgetTable className={cls["analytics-card-social-traffic-table"]}>
      <thead>
        <tr>
          <th>Network</th>
          <th>Visitors</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row}>
            {row.map(cell => (
              <td key={cell}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </WidgetTable>
  </Widget>
);

export default AnalyticsWidgetSocialMediaTraffic;
