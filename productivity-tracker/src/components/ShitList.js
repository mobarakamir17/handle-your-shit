import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Set the locale to "en-GB"
moment.locale("en-GB");

// Create a localizer using moment
const localizer = momentLocalizer(moment);

// ShitList component
function ShitList({ tasks, selectedDate }) {
  // Filter out the tasks that are not checked (completed)
  const shitListTasks = Array.isArray(tasks) ? tasks.filter((task) => !task.checked) : [];

  // Convert tasks to events for the calendar
  const events = shitListTasks.map((task) => ({
    title: task.text,
    start: new Date(task.completedAt),
    end: new Date(task.completedAt)
  }));

  // Render the ShitList component
  return (
    <div id="shitList">
      <h2>Shit List</h2>
      <div id="calendar" style={{ height: 700 }}>
        <Calendar
          localizer={localizer}
          events={events}
          step={60}
          views={['month', 'week', 'day']}
          defaultDate={selectedDate}
        />
      </div>
    </div>
  );
}

export default ShitList;
