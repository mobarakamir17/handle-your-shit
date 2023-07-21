import React from "react";

// Task component to render each task item
function Task({ task }) {
  // Render the Task component with the task details
  return (
    <li>
      {/* Label for the task with a checkbox */}
      <label>
        {/* Checkbox to indicate whether the task is checked (completed) */}
        <input type="checkbox" defaultChecked={task.checked} readOnly />
        {/* Display the task text */}
        {task.text}
      </label>
    </li>
  );
}

export default Task;
