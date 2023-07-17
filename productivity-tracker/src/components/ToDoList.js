import React, { useState } from "react";

function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);

  function handleButton() {
    // Add the new to-do item to the toDoList state
    setToDoList([...toDoList, { text: toDo, checked: false }]);

    // Clear the input field after adding the to-do item
    setToDo("");
  }

  function handleCheckboxChange(index) {
    const updatedToDoList = [...toDoList];
    const completedItem = updatedToDoList.splice(index, 1)[0];
    // updatedToDoList[index].checked = !updatedToDoList[index].checked;
    completedItem.completedAt = new Date();
    setToDoList(updatedToDoList);
    setCompletedItems([...completedItems, completedItems]);
  }

  return (
    <div id="toDoList">
      <div>To-Do List: </div>
      <form>
        <input
          value={toDo}
          type="text"
          placeholder="To do's here!"
          onChange={(e) => setToDo(e.target.value)}
        />
        <button onClick={(e) => { e.preventDefault(); handleButton(); }}>
          Add
        </button>
      </form>
      {toDoList.map((item, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(index)}
            />
            {item.text}
          </label>
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
