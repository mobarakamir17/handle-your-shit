import React from "react";

function Task({ task }) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={task.checked} />
        {task.text}
      </label>
    </li>
  );
}

export default Task;
