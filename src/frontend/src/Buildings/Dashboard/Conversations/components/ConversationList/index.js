import React from "react";
import moment from "moment";

import { NavLink } from "react-router-dom";

import {
  ContentTitle,
  Avatar,
  TabItem,
  Tabs,
  ContainerVertical,
  ScrollArea
} from "@duik/it";

import { StatusDot } from "../../../../../@components";

// import cls from "../../buildings-conversation.module.scss";
import cls from "./conversation-list.module.scss";
import conversationList from "../../assets/conversationList";

const ConversationList = props => {
  const { onMobileDetail } = props;
  return (
    <ContainerVertical className={cls["conversations"]}>
      <Tabs style={{ justifyContent: "flex-start" }}>
        <TabItem className="active">All Conversations</TabItem>
        <TabItem>Archived</TabItem> <TabItem>Starred</TabItem>
      </Tabs>
      <ScrollArea className={cls["conversation-list"]}>
        {conversationList.map(section => (
          <React.Fragment key={section.title}>
            <ContentTitle className={cls["conversation-section-title"]}>
              {section.title}
            </ContentTitle>
            {section.conversations.map(item => (
              <NavLink
                key={item.name}
                className={cls["conversation-list-item"]}
                to={`/buildings/conversations/${item.id}`}
                onClick={onMobileDetail}
              >
                <div className={cls["conversation-list-item-avatars"]}>
                  {item.users.slice(0, 2).map((u, index) => (
                    <Avatar
                      key={index}
                      // eslint-disable-line
                      {...u}
                    />
                  ))}
                </div>
                <div className={cls["conversation-list-item-content"]}>
                  <div className={cls["conversation-list-item-header"]}>
                    <h3 className={cls["conversation-list-item-title"]}>
                      <span> {item.name}</span>
                      {item.status === "online" ? <StatusDot /> : null}
                    </h3>
                    <span className={cls["conversation-list-item-time"]}>
                      {moment(item.last_message.time).calendar()}
                    </span>
                  </div>
                  <div className={cls["conversation-list-item-body"]}>
                    <p className={cls["conversation-list-item-message"]}>
                      {item.last_message.message}
                    </p>
                    {item.notification ? (
                      <span
                        className={cls["conversation-list-item-notification"]}
                      >
                        {item.notification}
                      </span>
                    ) : null}
                  </div>

                  {item.building ? (
                    <div className={cls["conversation-list-item-footer"]}>
                      <div
                        className={cls["conversation-list-item-building-image"]}
                        style={{
                          // eslint-disable-line
                          backgroundImage: `url(${item.building.imgUrl})` // eslint-disable-line
                        }}

                        // eslint-disable-line
                      />
                      <span
                        className={cls["conversation-list-item-building-name"]}
                      >
                        {item.building.name}
                      </span>
                    </div>
                  ) : null}
                </div>
              </NavLink>
            ))}
          </React.Fragment>
        ))}
      </ScrollArea>
    </ContainerVertical>
  );
};

export default ConversationList;
