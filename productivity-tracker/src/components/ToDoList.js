import React, { useState, useEffect } from 'react';

function ToDoList({ onAddToDo, tasks, handleCheckboxChange }) {
  const [toDo, setToDo] = useState('');

  // Function to handle form submission when adding a new task
  function handleSubmit(e) {
    e.preventDefault();
    const text = toDo.trim();
    if (text !== '') {
      onAddToDo && onAddToDo(text); // Call the onAddToDo function to add the new task
      setToDo(''); // Clear the input box after adding the task
    }
  }

  return (
    <div id="toDoList">
      <h2>To Do List</h2>
      <form onSubmit={handleSubmit}>
        {/* Input field to enter the new task */}
        <input type="text" name="todo" value={toDo} onChange={(e) => setToDo(e.target.value)} />
        {/* Button to submit the new task */}
        <button type="submit">Add</button>
      </form>
      {tasks.length > 0 ? (
        <ul>
          {/* Map through the tasks and render the ones that are not checked */}
          {tasks.map((task, index) => (
            task.checked ? null : (
              <li key={index}>
                {/* Checkbox to mark the task as completed */}
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(index) && task.checked}
                />
                {task.text}
              </li>
            )
          ))}
        </ul>
      ) : (
        <p>no task to display</p>
      )}
    </div>
  );
}

export default ToDoList;
