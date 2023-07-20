import React, { useState } from 'react';

function ToDoList({ onAddToDo, completedItems, onSetCompletedItems }) {
  const [toDo, setToDo] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const text = toDo.trim();
    if (text !== '') {
      // Assuming the onAddToDo function adds the task to the database or global state
      onAddToDo && onAddToDo(text);

      // Update the local state to show the newly added task
      setTasks([...tasks, { text: toDo, checked: false }]);
      setToDo('');
    }
  }

  function handleCheckboxChange(index) {
    const updatedToDoList = [...tasks];
    const completedItem = updatedToDoList.splice(index, 1)[0];
    completedItem.completedAt = new Date();
    onSetCompletedItems([...completedItems, completedItem]);
  }

  return (
    <div id="toDoList">
      <h2>To Do List</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" value={toDo} onChange={(e) => setToDo(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={task.checked}
                onChange={() => handleCheckboxChange(index)}
              />
              {task.text}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks to display.</p>
      )}
    </div>
  );
}

export default ToDoList;
