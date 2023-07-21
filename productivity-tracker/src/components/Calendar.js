import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Set the locale to "en-GB"
moment.locale('en-GB');

// Create a localizer using moment
const localizer = momentLocalizer(moment);

// Calendar component
function Calendar({ completedItems }) {
  // Convert completedItems to events for the calendar
  const events = completedItems.map((item, index) => ({
    title: item.text,
    start: new Date(item.completedAt),
    id: index,
  }));

  // Render the Calendar component
  return (
    <div id="calendar" style={{ height: 600 }}>
      {/* Render the calendar using react-big-calendar */}
      <BigCalendar
        localizer={localizer}
        events={events}
        step={60}
        views={['month', 'week', 'day']}
        defaultDate={new Date()} // Use the current date as the default date for the calendar
      />
    </div>
  );
}

export default Calendar;
