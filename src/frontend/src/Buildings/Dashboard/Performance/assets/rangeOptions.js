import React from "react";
import Icon from "@duik/icon";
export default [
  {
    value: 1,
    label: (
      <span>
        <Icon
          style={{
            marginRight: "10px"
          }}
        >
          calendar_2
        </Icon>
        {" Last Year"}
      </span>
    )
  },
  {
    value: 2,
    label: (
      <span>
        <Icon
          style={{
            marginRight: "10px"
          }}
        >
          building
        </Icon>
        {" Last Month"}
      </span>
    )
  },
  {
    value: 3,
    label: (
      <span>
        <Icon
          style={{
            marginRight: "10px"
          }}
        >
          calendar_2
        </Icon>
        {" Last Week"}
      </span>
    )
  }
];
