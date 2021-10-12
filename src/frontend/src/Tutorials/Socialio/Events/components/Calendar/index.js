import * as React from 'react';

import CalendarCell from './CalendarCell';

import cls from './events-calendar.module.scss';

const days = [];
for (let i = 27; i < 32; i += 1) {
  days.push({
    dayNumber: i,
    month: 'May',
    year: 2018
  });
}
for (let i = 1; i < 31; i += 1) {
  days.push({
    dayNumber: i,
    month: 'June',
    year: 2018,
    isPrimaryMonth: true
  });
}

const events = [
  {
    dayNumber: 27,
    month: 'May',
    year: 2018,
    events: [
      {
        title: 'Endeavor New Product Launch (Climate Change)',
        from: 'at 8:00 PM',
        color: 'blue'
      }
    ]
  },
  {
    dayNumber: 29,
    month: 'May',
    year: 2018,
    events: [
      {
        title: 'Rolond Discounts',
        from: 'at 5:00 PM',
        color: 'green'
      }
    ]
  },
  {
    dayNumber: 1,
    month: 'June',
    year: 2018,
    events: [
      {
        title: 'Health Awareness Commmunity Discount',
        from: 'at 6:00 AM',
        color: 'indigo'
      }
    ]
  },
  {
    dayNumber: 6,
    month: 'June',
    year: 2018,
    events: [
      {
        title: 'Festive Product Review',
        from: 'at 8:46 PM',
        color: 'blue'
      }
    ]
  },
  {
    dayNumber: 1,
    month: 'June',
    year: 2018,
    events: [
      {
        title: 'Party in London, UK',
        from: 'at 8:00 PM',
        color: 'indigo'
      }
    ]
  },
  {
    dayNumber: 11,
    month: 'June',
    year: 2018,
    events: [
      {
        title: 'Socialbook Promotional',
        from: 'at 4:00 PM',
        color: 'green'
      }
    ]
  },
  {
    dayNumber: 14,
    month: 'June',
    year: 2018,
    events: [
      {
        title: 'Under $30 Discount',
        from: 'at 8:00 PM',
        color: 'orange'
      }
    ]
  },
  {
    dayNumber: 26,
    month: 'June',
    year: 2018,
    events: [
      {
        title: '$10 Picnic in Soho',
        from: 'at 5:00 PM',
        color: 'blue'
      }
    ]
  }
];

const weekDayNames = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const toFullDate = day => `${day.year}-${day.month}-${day.dayNumber}`;

const SocialProfile = () => {
  const weeks = days.length / 7;

  const renderedDays = [];

  for (let i = 0; i < weeks; i += 1) {
    const weekDays = [];

    for (let k = 0; k < 7; k += 1) {
      const dayIndex = i * 7 + k;
      const day = days[dayIndex];

      const eventDay = events.find(
        item => toFullDate(item) === toFullDate(day)
      );

      weekDays.push(
        <CalendarCell
          key={`${day.dayNumber}${day.month}`}
          day={{
            ...day,
            ...eventDay
          }}
          displayMonth={dayIndex === 0}
        />
      );
    }
    renderedDays.push(<tr key={i}>{weekDays}</tr>);
  }

  return (
    <div>
      <table cellSpacing="0" className={cls['social-events-calendar']}>
        <thead>
          <tr>
            {weekDayNames.map(weekDay => (
              <th
                key={weekDay}
                className={cls['social-events-calendar-weekday']}
              >
                {weekDay}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{renderedDays}</tbody>
      </table>
    </div>
  );
};

export default SocialProfile;
