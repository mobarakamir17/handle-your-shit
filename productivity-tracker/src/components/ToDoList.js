import React, { useState } from 'react';
import Task from './Task'; // Correct import for Task component

function ToDoList({ tasks, onAddToDo }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const input = form.elements.todo;
    const text = input.value.trim();
    if (text !== '') {
      onAddToDo && onAddToDo(text);
      input.value = '';
    }
  };

  function handleCheckboxChange(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].checked = !updatedTasks[index].checked;
    // Call onAddToDo to update the tasks state in the parent component (App.js)
    onAddToDo(updatedTasks);
  }

  return (
    <div id="toDoList">
      <h2>To Do List</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks?.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => handleCheckboxChange(index)}
            />
            <span>{task.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
