import React, { useState } from 'react';
import Task from './Task';

function ToDoList({ tasks, onAddToDo, completedItems, setCompletedItems }) {
  const [toDo, setToDo] = useState('');

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

  function handleButton() {
    // Add the new to-do item to the toDoList state
    onAddToDo(toDo);

    // Clear the input field after adding the to-do item
    setToDo('');
  }

  function handleCheckboxChange(index) {
    const updatedToDoList = [...tasks];
    const completedItem = updatedToDoList.splice(index, 1)[0];
    completedItem.completedAt = new Date();
    setCompletedItems([...completedItems, completedItem]);
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
            <input type="checkbox" checked={task.checked} onChange={() => handleCheckboxChange(index)} />
            <span>{task.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
