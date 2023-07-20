import React from 'react';
import Task from './Task';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Set the locale to "en-GB"
moment.locale("en-GB");

// Create a localizer using moment
const localizer = momentLocalizer(moment);

// CompletedTasks component
function CompletedTasks({ tasks, selectedDate }) {
  // Filter out the tasks that are completed (have a completedAt property)
  const completedTasks = Array.isArray(tasks) ? tasks.filter((task) => task.completedAt) : [];

  // Convert completedTasks to events for the calendar
  const events = completedTasks.map((task) => ({
    title: task.text,
    start: new Date(task.completedAt),
    end: new Date(task.completedAt)
  }));

  // Render the CompletedTasks component
  return (
    <div id="completedTasks">
      <h2>Completed Tasks</h2>
      <ul>
        {/* Render each completed task using the Task component */}
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
          defaultDate={selectedDate} // Use the selectedDate prop here
        />
      </div>
    </div>
  );
}

export default CompletedTasks;
