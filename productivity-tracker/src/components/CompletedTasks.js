import React from 'react';
import Task from './Task';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

function CompletedTasks({ tasks, selectedDate }) {
  const completedTasks = Array.isArray(tasks) ? tasks.filter((task) => task.completedAt) : [];

  const events = completedTasks.map((task) => ({
    title: task.text,
    start: new Date(task.completedAt),
    end: new Date(task.completedAt)
  }));

  return (
    <div id="completedTasks">
      <h2>Completed Tasks</h2>
      <ul>
        {completedTasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}
      </ul>
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

export default CompletedTasks;
