import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

function ShitList({ tasks, selectedDate }) {
  const shitListTasks = Array.isArray(tasks) ? tasks.filter((task) => !task.checked) : [];

  const events = shitListTasks.map((task) => ({
    title: task.text,
    start: new Date(task.completedAt),
    end: new Date(task.completedAt)
  }));

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
