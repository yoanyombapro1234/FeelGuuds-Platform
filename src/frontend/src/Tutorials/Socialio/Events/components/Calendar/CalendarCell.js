import classnames from 'classnames';

import * as React from 'react';

import EventItem from './EventItem';

import cls from './events-calendar.module.scss';
const CalendarCell = ({ day, displayMonth }) => (
  <td className={cls['social-events-day-container']}>
    <div
      className={classnames(cls['social-events-day'], {
        [cls.highlighted]: day.isPrimaryMonth
      })}
    >
      <div className={cls['social-events-day-number']}>
        {(day.dayNumber === 1 || displayMonth) && (
          <span className={cls['social-events-day-month-name']}>
            {day.month}
          </span>
        )}
        {day.dayNumber}
      </div>
      {day.events && <EventItem event={day.events[0]} />}
    </div>
  </td>
);

export default CalendarCell;
