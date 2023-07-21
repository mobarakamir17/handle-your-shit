import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Set the locale to "en-GB"
moment.locale("en-GB");

// Create a localizer using moment
const localizer = momentLocalizer(moment);

// ShitList component
function ShitList({ tasks, selectedDate, shitListTasks }) {
    // Filter out the tasks that are not checked (completed) for the "To Do List"
    const toDoListTasks = Array.isArray(tasks) ? tasks.filter((task) => !task.checked) : [];
  
    // Filter out the tasks that are checked (completed) for the "Completed Items"
    const completedTasks = Array.isArray(tasks) ? tasks.filter((task) => task.checked) : [];
  
    // Convert tasks to events for the "To Do List" calendar
    const toDoListEvents = toDoListTasks.map((task) => ({
      title: task.text,
      start: new Date(task.completedAt),
      end: new Date(task.completedAt),
    }));
  
    // Convert completedTasks to events for the "Completed Items" calendar
    const completedEvents = completedTasks.map((task) => ({
      title: task.text,
      start: new Date(task.completedAt),
      end: new Date(task.completedAt),
    }));
  
    // Convert shitListTasks to events for the "Shit List" calendar
    const shitListEvents = shitListTasks.map((task) => ({
      title: task.text,
      start: new Date(task.completedAt),
      end: new Date(task.completedAt),
    }));
  
    const allEvents = [...toDoListEvents, ...completedEvents, ...shitListEvents];
  
    // Render the ShitList component
    return (
      <div id="shitList">
        <h2>Shit List</h2>
        <div id="calendar" style={{ height: 700 }}>
          <Calendar
            localizer={localizer}
            events={allEvents}
            step={60}
            views={["month", "week", "day"]}
            defaultDate={selectedDate}
          />
        </div>
      </div>
    );
  }
  export default ShitList;