import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

function Calendar({ selectedDate, completedItems }) {
  const events = completedItems.map((item) => ({
    title: item.text,
    start: new Date(item.completedAt),
    end: new Date(item.completedAt)
  }));

  return (
    <div id="calendar" style={{ height: 600 }}>
      <BigCalendar
        localizer={localizer}
        events={events}
        step={60}
        views={['month', 'week', 'day']}
        defaultDate={selectedDate}
      />
    </div>
  );
}

export default Calendar;
