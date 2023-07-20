import React from "react";

// Task component
function Task({ task }) {
  // Render the Task component
  return (
    <li>
      {/* Task label with a checkbox */}
      <label>
        <input type="checkbox" checked={task.checked} />
        {task.text}
      </label>
    </li>
  );
}

export default Task;
