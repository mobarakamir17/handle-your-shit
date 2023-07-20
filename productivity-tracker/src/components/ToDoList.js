import React, { useState, useEffect } from 'react';

function ToDoList({ onAddToDo, completedItems=[], onSetCompletedItems }) {
  const [toDo, setToDo] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const text = toDo.trim();
    if (text !== '') {
      onAddToDo && onAddToDo(text);
      setTasks([...tasks, { text: toDo, checked: false }]);
      setToDo('');
    }}
   
  useEffect(() => {
    fetch("http://localhost:8003/users")
      .then((res) => res.json())
      .then((tasks) => setTasks(tasks))
      .catch((error) => console.log(error));
    
    
  }, []);
  function handleCheckboxChange(index) {
    const updatedToDoList = [...tasks];
    const completedItem = updatedToDoList.splice(index, 1)[0];
    completedItem.checked=true;
    completedItem.completedAt = new Date();
    onSetCompletedItems([...completedItems, completedItem]);
    setTasks(updatedToDoList);
    console.log(completedItem.id)
    const id=completedItem.id
    fetch(`http://localhost:8003/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(completedItem),
  }) // Update the tasks state to remove the completed task
  }
  console.log(tasks)
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
