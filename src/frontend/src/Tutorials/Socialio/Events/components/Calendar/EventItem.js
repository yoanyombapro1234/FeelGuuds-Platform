import classnames from 'classnames';
import * as React from 'react';

import { OuterEventsHandler, Avatar } from '@duik/it';

import cls from './events-calendar.module.scss';
import * as images from '@exampleAssets';

class EventItem extends React.Component {
  state = {
    isExpanded: false
  };

  handleHideDetail = () => {
    this.setState({ isExpanded: false });
  };

  handleShowDetail = e => {
    const clickPos = e.target.getBoundingClientRect();
    this.setState({
      isExpanded: true,
      top: clickPos.top - 20,
      left: clickPos.right - 10
    });
  };

  render() {
    const { event } = this.props;
    const { isExpanded, top, left } = this.state;
    return !event ? null : (
      <OuterEventsHandler
        className={cls['social-events-calendar-item-wrapper']}
        triggerOnOuterScroll
        onOuterEvent={isExpanded ? this.handleHideDetail : null}
      >
        <button
          className={classnames(cls['social-events-calendar-item'], {
            [event.color]: event.color
          })}
          onClick={!isExpanded ? this.handleShowDetail : () => {}}
          type="button"
        >
          <div className={cls['social-events-calendar-item-title']}>
            {event.title}
          </div>
          <div className={cls['social-events-calendar-item-time']}>
            {event.from}
          </div>
        </button>
        {isExpanded && (
          <div
            className={cls['social-events-calendar-detail']}
            style={{
              top: `${top}px`,
              left: `${left}px`
            }}
          >
            <div
              className={cls['social-events-calendar-detail-cover']}
              style={{
                backgroundImage: `url("${images.b07}")`
              }}
            />
            <div className={cls['social-events-calendar-detail-content']}>
              <div className={cls['social-events-calendar-detail-meta']}>
                <div className={cls['social-events-calendar-detail-date']}>
                  <div className={cls['social-events-calendar-detail-weekday']}>
                    THU
                  </div>
                  <div className={cls['social-events-calendar-detail-day']}>
                    14
                  </div>
                </div>
                <div className={cls['social-events-calendar-detail-eventInfo']}>
                  <h4>Socialbook Meetup</h4>
                  <p className={cls['social-events-calendar-detail-creator']}>
                    Socialbook Guys
                  </p>
                  <p className={cls['social-events-calendar-detail-time']}>
                    Thu 8:00PM GMT +02:00
                  </p>
                </div>
              </div>
              <div className={cls['social-events-calendar-detail-attendants']}>
                <Avatar imgUrl={images.a01} />
                <Avatar imgUrl={images.a02} />
                <Avatar imgUrl={images.a03} />
                <Avatar imgUrl={images.a04} />
              </div>
            </div>
          </div>
        )}
      </OuterEventsHandler>
    );
  }
}

export default EventItem;
