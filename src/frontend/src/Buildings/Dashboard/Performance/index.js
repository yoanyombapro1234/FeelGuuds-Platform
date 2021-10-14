import React from "react";
import classnames from "classnames";

import {
  Widget,
  WidgetContent,
  WidgetHeader,
  Select,
  ContentTitle,
  Avatar,
  ContainerVertical,
  ScrollArea,
  WidgetContainer
} from "@duik/it";

import { Badge, Chart } from "../../../@components";
import { numberFormatZeros } from "../../../@lib";

import TopBar from "./components/TopBar";
import cls from "./buildings-performance.module.scss";
import invoices from "./assets/invoices";
import performanceProfit from "./assets/performanceProfit";
import rangeOptions from "./assets/rangeOptions";

class BuildingsDashboard extends React.Component {
  state = {
    gradientFill: null
  };

  componentDidMount() {
    const chart = document.getElementById("performance-chart");
    if (chart) {
      const ctx = chart.getContext("2d");
      if (ctx) {
        const gradientFill = ctx.createLinearGradient(0, 0, 0, 280);
        gradientFill.addColorStop(0, "rgba(25, 145, 235, 0.15)");
        gradientFill.addColorStop(0.9, "rgba(25, 145, 235, 0)");
        this.setState({
          gradientFill
        });
      }
    }
  }

  render() {
    const { gradientFill } = this.state;
    return (
      <ContainerVertical>
        <TopBar />
        <ScrollArea>
          <WidgetContainer>
            <Widget>
              <WidgetHeader>
                <h3>Buildings Overview</h3>
                <Select
                  activeOption={rangeOptions[0]}
                  className={cls["buildings-performace-select-range"]}
                  options={rangeOptions}
                  placeholder="Select Range"
                />
              </WidgetHeader>
              <div className={cls["buildings-performace-boxes"]}>
                <div className={cls["buildings-performace-box"]}>
                  <ContentTitle>Total Revenue</ContentTitle>
                  <div className={cls["buildings-performace-box-content"]}>
                    <span className={cls["buildings-performace-box-value"]}>
                      $485,985
                    </span>
                    <Badge color="green" fill>
                      +5.8%
                    </Badge>
                  </div>
                </div>
                <div className={cls["buildings-performace-box"]}>
                  <ContentTitle>Predicted Monthly Revenue</ContentTitle>
                  <div className={cls["buildings-performace-box-content"]}>
                    <span className={cls["buildings-performace-box-value"]}>
                      $6,576
                    </span>
                    <Badge color="green" fill>
                      +9.1%
                    </Badge>
                  </div>
                </div>
                <div className={cls["buildings-performace-box"]}>
                  <ContentTitle>Active Renters</ContentTitle>
                  <div className={cls["buildings-performace-box-content"]}>
                    <span className={cls["buildings-performace-box-value"]}>
                      152
                    </span>
                    <Badge color="red" fill>
                      -12
                    </Badge>
                  </div>
                </div>
                <div className={cls["buildings-performace-box"]}>
                  <ContentTitle>Pending Rents</ContentTitle>
                  <div className={cls["buildings-performace-box-content"]}>
                    <span
                      className={`${cls["buildings-performace-box-value"]} ${cls["buildings-performace-box-value-pending"]}`}
                    >
                      $930,10
                    </span>
                  </div>
                </div>
              </div>
              <WidgetContent>
                <Chart
                  chartType="Line"
                  data={{
                    labels: [
                      // '',
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec"
                      // '',
                    ],
                    datasets: [
                      {
                        borderColor: "#1665D8",
                        backgroundColor: gradientFill || "transparent",
                        label: "Revenue",
                        lineTension: 0,
                        pointRadius: 5,
                        pointBackgroundColor: "#1665D8",
                        pointBorderColor: "#FFF",
                        pointBorderWidth: 2,
                        data: [
                          // null,
                          4567,
                          6286,
                          5935,
                          6234,
                          5273,
                          4785,
                          6234,
                          5689,
                          7234,
                          6075,
                          7230,
                          6730
                          // null,
                        ]
                      }
                    ]
                  }}
                  height={280}
                  id="performance-chart"
                  options={{
                    scales: {
                      yAxes: [
                        {
                          ticks: {
                            callback: value => `${numberFormatZeros(value)}   `
                          },
                          gridLines: {
                            drawBorder: false,
                            drawTicks: true
                          }
                        }
                      ]
                    }
                  }}
                />
              </WidgetContent>
            </Widget>
            <div className={cls["buildings-performance-tables"]}>
              <Widget>
                <WidgetHeader>
                  <h3>Most Profitable Renters</h3>
                </WidgetHeader>
                <table
                  cellPadding="0"
                  cellSpacing="0"
                  className={cls["buildings-performance-table-profit"]}
                >
                  <tbody>
                    {performanceProfit.map(item => (
                      <tr key={item.value}>
                        <td>
                          <Avatar {...item.avatar} />
                        </td>
                        <td>{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Widget>
              <Widget>
                <WidgetHeader>
                  <h3>Latest Invoices</h3>
                </WidgetHeader>
                <table
                  cellPadding="0"
                  cellSpacing="0"
                  className={cls["buildings-performance-table-invoices"]}
                >
                  <tbody>
                    {invoices.map(item => (
                      <tr key={item.id}>
                        <td
                          className={
                            cls["buildings-performance-table-invoices-name"]
                          }
                        >
                          {item.name}
                        </td>
                        <td>{item.date}</td>
                        <td
                          className={
                            cls[
                              "buildings-performance-table-invoices-invoiceId"
                            ]
                          }
                        >
                          {item.id}
                        </td>
                        <td
                          className={classnames(
                            cls["buildings-performance-table-invoices-value"],
                            {
                              [cls["payed"]]: item.payed,
                              [cls["unpayed"]]: !item.payed
                            }
                          )}
                        >
                          {item.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Widget>
            </div>
          </WidgetContainer>
        </ScrollArea>
      </ContainerVertical>
    );
  }
}

export default BuildingsDashboard;
